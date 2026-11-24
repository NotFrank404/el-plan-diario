// Función serverless de Netlify que actúa como puente seguro hacia la API de TMDB.
// Lee la clave secreta desde la variable de entorno TMDB_API_KEY sin exponerla al navegador.

const TMDB_API_BASE = "https://api.themoviedb.org/3";
const RUTAS_PERMITIDAS =
  /^\/(discover\/(movie|tv)|(movie|tv)\/\d+(\/(videos|recommendations|similar|credits))?)$/;

export default async (req) => {
  const apiKey = Netlify.env.get("TMDB_API_KEY")?.trim();
  if (!apiKey) {
    return Response.json(
      { error: "Falta configurar TMDB_API_KEY en Netlify" },
      { status: 500 }
    );
  }

  const urlEntrante = new URL(req.url);
  const rutaTmdb = (urlEntrante.searchParams.get("path") || "").trim();

  if (!RUTAS_PERMITIDAS.test(rutaTmdb)) {
    return Response.json(
      { error: "Ruta TMDB no permitida" },
      { status: 400 }
    );
  }

  // Reenviamos los filtros de búsqueda al endpoint oficial sin permitir que el cliente inyecte api_key
  const paramsTmdb = new URLSearchParams();
  for (const [clave, valor] of urlEntrante.searchParams.entries()) {
    if (clave !== "path" && clave !== "api_key") {
      paramsTmdb.append(clave, valor);
    }
  }

  const esTokenBearer = apiKey.startsWith("eyJ") && apiKey.length > 60;
  const headers = { Accept: "application/json" };

  if (esTokenBearer) {
    headers.Authorization = `Bearer ${apiKey}`;
  } else {
    paramsTmdb.set("api_key", apiKey);
  }

  const queryString = paramsTmdb.toString();
  const urlDestino = queryString
    ? `${TMDB_API_BASE}${rutaTmdb}?${queryString}`
    : `${TMDB_API_BASE}${rutaTmdb}`;

  try {
    const respuestaTmdb = await fetch(urlDestino, { method: "GET", headers });
    const texto = await respuestaTmdb.text();

    const cabecerasRespuesta = {
      "Content-Type": "application/json; charset=utf-8"
    };
    if (respuestaTmdb.ok) {
      cabecerasRespuesta["Cache-Control"] = "public, max-age=300";
    }

    return new Response(texto, {
      status: respuestaTmdb.status,
      headers: cabecerasRespuesta
    });
  } catch {
    return Response.json(
      { error: "No se pudo conectar con TMDB desde el proxy" },
      { status: 502 }
    );
  }
};

export const config = {
  path: "/api/tmdb",
  method: ["GET"]
};
