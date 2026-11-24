/* ==========================================================================
   EL PLAN DIARIO — EL CEREBRO DE LA PÁGINA (app.js)
   ==========================================================================
   Aquí guardamos la "personalidad" de cada emoción, sus colores ambientales
   y las instrucciones para reaccionar cuando haces clic en las tarjetas.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. CONFIGURACIÓN DE EMOCIONES (AQUÍ PUEDES CAMBIAR TEXTOS Y COLORES)
   -------------------------------------------------------------------------- */
const EMOCIONES_ACTUALES = {
  agotado: {
    nombre: "Agotado",
    emoji: "🛋️",
    inicioFrase: "Hoy llegas con las pilas bajitas y ganas de bajar el ritmo",
    colorFondo1: "#ffe3cc",
    colorFondo2: "#f5e6d3",
    colorAcento: "#d96b38",
    colorSuave: "#fff3ea",
    colorFondo1Noche: "rgba(235, 134, 82, 0.22)",
    colorFondo2Noche: "rgba(214, 169, 128, 0.16)",
    colorAcentoNoche: "#f59e72",
    colorSuaveNoche: "#352721"
  },
  estresado: {
    nombre: "Estresado",
    emoji: "🌪️",
    inicioFrase: "Hoy tuviste un día intenso y tu mente pide un respiro",
    colorFondo1: "#ffd6d6",
    colorFondo2: "#ffe8d6",
    colorAcento: "#d64550",
    colorSuave: "#fff0f0",
    colorFondo1Noche: "rgba(235, 99, 112, 0.2)",
    colorFondo2Noche: "rgba(238, 152, 108, 0.16)",
    colorAcentoNoche: "#f88b96",
    colorSuaveNoche: "#382427"
  },
  melancolico: {
    nombre: "Triste o Melancólico",
    emoji: "🌧️",
    inicioFrase: "Hoy tienes el corazón sensible y buscas una historia que te acompañe",
    colorFondo1: "#d6ecff",
    colorFondo2: "#e8e4ff",
    colorAcento: "#2c7be5",
    colorSuave: "#eef7ff",
    colorFondo1Noche: "rgba(96, 165, 250, 0.2)",
    colorFondo2Noche: "rgba(167, 139, 250, 0.16)",
    colorAcentoNoche: "#7db8ff",
    colorSuaveNoche: "#222d3a"
  },
  aburrido: {
    nombre: "Aburrido",
    emoji: "🥱",
    inicioFrase: "Hoy el día se siente un poco gris y te vendría bien una chispa nueva",
    colorFondo1: "#d5f5e3",
    colorFondo2: "#fff2cc",
    colorAcento: "#218c62",
    colorSuave: "#eefcf4",
    colorFondo1Noche: "rgba(74, 212, 154, 0.18)",
    colorFondo2Noche: "rgba(244, 198, 98, 0.14)",
    colorAcentoNoche: "#63d6a3",
    colorSuaveNoche: "#20312a"
  },
  feliz: {
    nombre: "Feliz y con energía",
    emoji: "☀️",
    inicioFrase: "Hoy vienes con buenísima vibra y ganas de aprovechar esa alegría",
    colorFondo1: "#fff0b3",
    colorFondo2: "#ffd8be",
    colorAcento: "#c97a00",
    colorSuave: "#fff9e6",
    colorFondo1Noche: "rgba(245, 193, 78, 0.2)",
    colorFondo2Noche: "rgba(244, 148, 102, 0.16)",
    colorAcentoNoche: "#f7c259",
    colorSuaveNoche: "#352d1f"
  },
  curioso: {
    nombre: "Pensativo o Curioso",
    emoji: "🔮",
    inicioFrase: "Hoy tienes la mente despierta y con ganas de dejarte sorprender",
    colorFondo1: "#eadcff",
    colorFondo2: "#d6f0ff",
    colorAcento: "#7b4ce2",
    colorSuave: "#f6f1ff",
    colorFondo1Noche: "rgba(168, 130, 252, 0.2)",
    colorFondo2Noche: "rgba(104, 188, 245, 0.16)",
    colorAcentoNoche: "#b794ff",
    colorSuaveNoche: "#2c2439"
  }
};

const DESTINOS_EMOCIONALES = {
  reir: {
    nombre: "Reír y desconectar",
    emoji: "😂",
    metaFrase: "despejar la cabeza entre risas ligeras y cero preocupaciones",
    colorFondo2: "#fff0b3",
    colorAcento: "#c97a00",
    colorSuave: "#fff9e6",
    colorFondo2Noche: "rgba(245, 193, 78, 0.18)",
    colorAcentoNoche: "#f7c259",
    colorSuaveNoche: "#352d1f"
  },
  abrazo: {
    nombre: "Sentir un abrazo cálido",
    emoji: "☕",
    metaFrase: "arropar el día con una película amable, humana y muy reconfortante",
    colorFondo2: "#ffe0c2",
    colorAcento: "#d96b38",
    colorSuave: "#fff4ec",
    colorFondo2Noche: "rgba(235, 134, 82, 0.18)",
    colorAcentoNoche: "#f59e72",
    colorSuaveNoche: "#352721"
  },
  catarsis: {
    nombre: "Soltar una lágrima (Catarsis)",
    emoji: "💧",
    metaFrase: "emocionarte de verdad, liberar tensión y quedarte en paz al terminar",
    colorFondo2: "#d6ecff",
    colorAcento: "#2c7be5",
    colorSuave: "#eef7ff",
    colorFondo2Noche: "rgba(96, 165, 250, 0.18)",
    colorAcentoNoche: "#7db8ff",
    colorSuaveNoche: "#222d3a"
  },
  aventura: {
    nombre: "Vivir una gran aventura",
    emoji: "🚀",
    metaFrase: "cambiar de aires por completo con un viaje vibrante lleno de ritmo",
    colorFondo2: "#ffd6d6",
    colorAcento: "#d64550",
    colorSuave: "#fff0f0",
    colorFondo2Noche: "rgba(235, 99, 112, 0.18)",
    colorAcentoNoche: "#f88b96",
    colorSuaveNoche: "#382427"
  },
  inspiracion: {
    nombre: "Maravillarme e inspirarme",
    emoji: "✨",
    metaFrase: "recargar ilusión y terminar los créditos con una sonrisa luminosa",
    colorFondo2: "#d5f5e3",
    colorAcento: "#218c62",
    colorSuave: "#eefcf4",
    colorFondo2Noche: "rgba(74, 212, 154, 0.18)",
    colorAcentoNoche: "#63d6a3",
    colorSuaveNoche: "#20312a"
  },
  misterio: {
    nombre: "Resolver un buen misterio",
    emoji: "🧩",
    metaFrase: "atrapar tu atención en un enigma ingenioso que te haga olvidar el reloj",
    colorFondo2: "#eadcff",
    colorAcento: "#7b4ce2",
    colorSuave: "#f6f1ff",
    colorFondo2Noche: "rgba(168, 130, 252, 0.18)",
    colorAcentoNoche: "#b794ff",
    colorSuaveNoche: "#2c2439"
  }
};

/* Mensajes especiales para combinaciones muy habituales (el resto se construye automáticamente) */
const MENSAJES_ESPECIALES = {
  "agotado+abrazo":
    "Plan perfecto de manta y bebida caliente: si estás agotado y buscas un abrazo cálido, necesitas una historia dulce, sin sobresaltos y que te cuide.",
  "estresado+reir":
    "¡Botiquín antiestrés activado! Venir acelerado y elegir reír y desconectar es la mejor medicina para soltar los hombros.",
  "estresado+abrazo":
    "Cuando el día fue a mil por hora, una película cálida y tranquila actúa como una charla con tu mejor amigo.",
  "melancolico+catarsis":
    "A veces el mejor plan no es tapar la tristeza, sino acompañarla con una historia honesta que te permita desahogarte a gusto.",
  "aburrido+aventura":
    "¡Adiós aburrimiento! Pasamos del piloto automático a un viaje con ritmo, mundos nuevos y cero espacio para mirar el móvil.",
  "curioso+misterio":
    "La mente curiosa pide pistas, giros inteligentes y esa sensación deliciosa de intentar adivinar qué pasará antes del final."
};

/* --------------------------------------------------------------------------
   2. EL TRADUCTOR DE RECETAS EMOCIONALES (FASE 2 — DICCIONARIOS DE CINE)
   --------------------------------------------------------------------------
   Aquí puedes personalizar los géneros, el ritmo, el tono y la nota mínima
   de cada receta. Los números (28, 35, 16...) son los códigos oficiales que
   usa la base de datos de cine TMDB que conectaremos en la Fase 3.
   -------------------------------------------------------------------------- */
const GENEROS_TMDB = {
  28: { nombre: "Acción", emoji: "💥" },
  12: { nombre: "Aventura", emoji: "🧭" },
  16: { nombre: "Animación", emoji: "🎨" },
  35: { nombre: "Comedia", emoji: "😂" },
  80: { nombre: "Crimen", emoji: "🕵️" },
  99: { nombre: "Documental", emoji: "🌍" },
  18: { nombre: "Drama", emoji: "🎭" },
  10751: { nombre: "Familia", emoji: "🏡" },
  14: { nombre: "Fantasía", emoji: "🪄" },
  36: { nombre: "Historia", emoji: "📜" },
  27: { nombre: "Terror", emoji: "👻" },
  10402: { nombre: "Música", emoji: "🎵" },
  9648: { nombre: "Misterio", emoji: "🧩" },
  10749: { nombre: "Romance", emoji: "💛" },
  878: { nombre: "Ciencia ficción", emoji: "🚀" },
  53: { nombre: "Suspense", emoji: "⚡" },
  10752: { nombre: "Bélica", emoji: "🪖" }
};

/* Géneros oficiales de SERIES (TV) en TMDB (Fase 7) */
const GENEROS_TMDB_TV = {
  10759: { nombre: "Acción y Aventura", emoji: "💥" },
  16: { nombre: "Animación", emoji: "🎨" },
  35: { nombre: "Comedia", emoji: "😂" },
  80: { nombre: "Crimen", emoji: "🕵️" },
  99: { nombre: "Documental", emoji: "🌍" },
  18: { nombre: "Drama", emoji: "🎭" },
  10751: { nombre: "Familia", emoji: "🏡" },
  10762: { nombre: "Infantil", emoji: "🧸" },
  9648: { nombre: "Misterio", emoji: "🧩" },
  10763: { nombre: "Noticias", emoji: "📰" },
  10764: { nombre: "Reality", emoji: "📺" },
  10765: { nombre: "Sci-Fi y Fantasía", emoji: "🚀" },
  10766: { nombre: "Telenovela", emoji: "💔" },
  10767: { nombre: "Talk Show", emoji: "🎙️" },
  10768: { nombre: "Guerra y Política", emoji: "🪖" },
  37: { nombre: "Western", emoji: "🤠" }
};

/* Equivalencias de géneros de Cine ➔ Series en TMDB */
const MAPA_CINE_A_TV_IDEALES = {
  28: [10759],       // Acción -> Acción y Aventura
  12: [10759],       // Aventura -> Acción y Aventura
  16: [16],          // Animación -> Animación
  35: [35],          // Comedia -> Comedia
  80: [80],          // Crimen -> Crimen
  99: [99],          // Documental -> Documental
  18: [18],          // Drama -> Drama
  10751: [10751],    // Familia -> Familia
  14: [10765],       // Fantasía -> Sci-Fi y Fantasía
  36: [18, 99],      // Historia -> Drama / Documental
  10402: [35, 18],   // Música -> Comedia / Drama
  9648: [9648],      // Misterio -> Misterio
  10749: [18, 35],   // Romance -> Drama / Comedia
  878: [10765],      // Ciencia ficción -> Sci-Fi y Fantasía
  53: [9648, 80],    // Suspense -> Misterio / Crimen
  10752: [10768]     // Bélica -> Guerra y Política
};

const MAPA_CINE_A_TV_EVITAR = {
  28: [10759],
  12: [10759],
  16: [16],
  35: [35],
  80: [80],
  99: [99],
  18: [18],
  10751: [10751],
  10752: [10768],
  27: [10768],       // En TV evitamos guerra/política y realities en lugar de excluir Sci-Fi
  53: [80]
};

/**
 * Traduce una lista de IDs de género de cine a sus equivalentes oficiales de TV en TMDB.
 */
function traducirGenerosATv(listaIdsCine, esParaEvitar = false) {
  const mapa = esParaEvitar ? MAPA_CINE_A_TV_EVITAR : MAPA_CINE_A_TV_IDEALES;
  const resultado = [];
  listaIdsCine.forEach((id) => {
    const equivalentes = mapa[id];
    if (Array.isArray(equivalentes)) {
      equivalentes.forEach((tvId) => {
        if (!resultado.includes(tvId)) resultado.push(tvId);
      });
    }
  });
  return resultado;
}

/* Receta base según cómo quieres sentirte al terminar la película (Paso 2) */
const RECETAS_BASE_POR_DESTINO = {
  reir: {
    tituloReceta: "Dosis de risas ligeras",
    generosIdeales: [35, 16, 10751],
    generosEvitar: [27, 10752, 80],
    ritmo: "Ágil y desenfadado",
    tono: "Luminoso, ingenioso y sin dramas pesados",
    notaMinima: 6.8,
    votosMinimos: 300,
    explicacionBase:
      "Buscamos humor amable, personajes con chispa y situaciones divertidas para despejar la cabeza."
  },
  abrazo: {
    tituloReceta: "Cine manta y taza caliente",
    generosIdeales: [10751, 16, 10749, 35],
    generosEvitar: [27, 53, 80, 10752],
    ritmo: "Tranquilo y envolvente",
    tono: "Tierno, humano y con final luminoso",
    notaMinima: 7.0,
    votosMinimos: 250,
    explicacionBase:
      "Priorizamos historias amables, relaciones cercanas y esa sensación acogedora que te cuida."
  },
  catarsis: {
    tituloReceta: "Emoción honesta para desahogarse",
    generosIdeales: [18, 10749, 10402],
    generosEvitar: [27, 28],
    ritmo: "Pausado y profundo",
    tono: "Sensible, sincero y liberador",
    notaMinima: 7.3,
    votosMinimos: 350,
    explicacionBase:
      "Elegimos relatos con alma y sensibilidad para emocionarte de verdad y quedarte en paz al terminar."
  },
  aventura: {
    tituloReceta: "Billete de ida a otro mundo",
    generosIdeales: [12, 14, 878, 28],
    generosEvitar: [99, 10752],
    ritmo: "Vibrante y dinámico",
    tono: "Épico, entretenido y lleno de descubrimientos",
    notaMinima: 6.9,
    votosMinimos: 400,
    explicacionBase:
      "Apostamos por viajes inmersivos, mundos fascinantes y ritmo constante para desconectar del reloj."
  },
  inspiracion: {
    tituloReceta: "Chispa creativa y pura ilusión",
    generosIdeales: [16, 14, 10402, 36],
    generosEvitar: [27, 53, 80],
    ritmo: "Fluido y estimulante",
    tono: "Esperanzador, bello visualmente y motivador",
    notaMinima: 7.2,
    votosMinimos: 250,
    explicacionBase:
      "Combinamos música, imaginación e historias luminosas que te devuelven las ganas de crear y soñar."
  },
  misterio: {
    tituloReceta: "Enigma elegante de principio a fin",
    generosIdeales: [9648, 53, 80],
    generosEvitar: [27, 10751],
    ritmo: "Intrigante y bien medido",
    tono: "Astuto, absorbente y con giros inteligentes",
    notaMinima: 7.1,
    votosMinimos: 350,
    explicacionBase:
      "Te proponemos pistas bien hiladas y suspense inteligente para atrapar tu mente sin recurrir al terror."
  }
};

/* Ajustes finos según cómo llegas hoy (Paso 1) para proteger tu energía */
const AJUSTES_POR_ESTADO_ACTUAL = {
  agotado: {
    etiquetaAjuste: "Filtro sofá y manta",
    emojiAjuste: "🛋️",
    evitarExtra: [53, 10752, 27],
    ritmoExtra: "fácil de seguir y sin tramas enrevesadas",
    ajusteNota: 0,
    consejoExtra:
      "Como hoy llegas agotado, evitamos sustos y giros agotadores para que disfrutes sin esfuerzo."
  },
  estresado: {
    etiquetaAjuste: "Escudo antiestrés",
    emojiAjuste: "🛡️",
    evitarExtra: [27, 53, 10752, 18],
    ritmoExtra: "sin tensión innecesaria ni dramas duros",
    ajusteNota: 0.1,
    consejoExtra:
      "Activamos el escudo antiestrés para mantener a raya la tensión y cuidar tu descanso mental."
  },
  melancolico: {
    etiquetaAjuste: "Cuidado emocional",
    emojiAjuste: "💙",
    evitarExtra: [27, 10752, 80],
    ritmoExtra: "delicado, cálido y respetuoso con tu momento",
    ajusteNota: 0.2,
    consejoExtra:
      "Subimos un punto la exigencia de calidad y apartamos historias crudas que puedan dejarte mal cuerpo."
  },
  aburrido: {
    etiquetaAjuste: "Chispa antirutina",
    emojiAjuste: "⚡",
    evitarExtra: [99],
    ritmoExtra: "con gancho desde los primeros minutos",
    ajusteNota: 0,
    consejoExtra:
      "Priorizamos películas con arranque atractivo para sacudir la monotonía desde el minuto uno."
  },
  feliz: {
    etiquetaAjuste: "Modo celebración",
    emojiAjuste: "🎉",
    evitarExtra: [10752, 27],
    ritmoExtra: "alegre, expansivo y con buena energía",
    ajusteNota: 0,
    consejoExtra:
      "Protegemos tu buen humor dejando fuera temáticas bélicas o sombrías para alargar la buena vibra."
  },
  curioso: {
    etiquetaAjuste: "Toque de autor y descubrimiento",
    emojiAjuste: "🔍",
    evitarExtra: [],
    ritmoExtra: "original, estimulante y con detalles por descubrir",
    ajusteNota: 0.3,
    consejoExtra:
      "Como vienes curioso, subimos el listón de nota mínima para encontrar joyas con personalidad propia."
  }
};

/* --------------------------------------------------------------------------
   3. CONFIGURACIÓN DE TMDB Y ESTADO ACTUAL (FASE 3)
   --------------------------------------------------------------------------
   Aquí están las direcciones oficiales de TMDB y el nombre con el que
   guardamos tu API Key en tu navegador (localStorage) para no pedirla siempre.
   -------------------------------------------------------------------------- */
const CONFIG_TMDB = {
  claveStorage: "el_plan_diario_tmdb_api_key",
  claveVistasStorage: "el_plan_diario_peliculas_vistas",
  claveBotiquinStorage: "el_plan_diario_botiquin_favoritas",
  // En producción usamos el proxy seguro de Netlify (/api/tmdb); aquí no guardamos ninguna clave pública
  llavePorDefecto: "",
  urlProxyServidor: "/api/tmdb",
  urlBaseApi: "https://api.themoviedb.org/3",
  urlDiscover: "https://api.themoviedb.org/3/discover/movie",
  urlBasePoster: "https://image.tmdb.org/t/p/w500",
  urlBaseLogo: "https://image.tmdb.org/t/p/w92",
  // AQUÍ PUEDES CAMBIAR EL PAÍS PARA "¿DÓNDE VERLA?" (Ej: "ES", "MX", "AR", "CO", "US")
  paisStreaming: "ES",
  nombrePaisStreaming: "España",
  maximoPeliculas: 12
};

/* --------------------------------------------------------------------------
   3B. TOQUES MÁGICOS: REGLAS DE LOS FILTROS RÁPIDOS OPCIONALES (FASE 5)
   --------------------------------------------------------------------------
   Aquí puedes personalizar los minutos de cada duración o cómo afecta cada
   filtro opcional a tu receta de cine.
   -------------------------------------------------------------------------- */
const FILTROS_MAGICOS = {
  tiempo: {
    cualquiera: { etiqueta: "" },
    corta: {
      etiqueta: "⏱️ Cortita (≤ 95 min)",
      etiquetaTv: "⏱️ Episodios cortos (≤ 35 min)",
      runtimeLte: 95,
      runtimeLteTv: 35,
      notaTexto: "Buscamos historias cortitas de máximo 95 minutos (o episodios de hasta 35 min)."
    },
    normal: {
      etiqueta: "⏱️ Estándar (95–125 min)",
      etiquetaTv: "⏱️ Episodios estándar (35–55 min)",
      runtimeGte: 95,
      runtimeLte: 125,
      runtimeGteTv: 35,
      runtimeLteTv: 55,
      notaTexto: "Ajustamos la duración a un formato estándar muy cómodo de ver."
    },
    larga: {
      etiqueta: "⏱️ Maratón (> 125 min)",
      etiquetaTv: "⏱️ Episodios largos (> 55 min)",
      runtimeGte: 125,
      runtimeGteTv: 55,
      notaTexto: "Vamos a por una historia larga para sumergirte sin prisas."
    }
  },
  energia: {
    cualquiera: { etiqueta: "" },
    ligera: {
      etiqueta: "☁️ Energía ligera",
      evitarExtra: [18, 99, 36, 10752],
      runtimeLteSugerido: 115,
      notaTexto: "Aligeramos la receta evitando temáticas densas para desconectar sin esfuerzo."
    },
    media: {
      etiqueta: "⚖️ Energía media",
      evitarExtra: [],
      notaTexto: "Mantenemos un equilibrio cómodo entre entretenimiento y trama."
    },
    intensa: {
      etiqueta: "🔥 Energía intensa",
      evitarExtra: [],
      ajusteNota: 0.2,
      notaTexto: "Subimos un poco el listón de nota para historias con más miga y profundidad."
    }
  },
  compania: {
    cualquiera: { etiqueta: "" },
    solo: {
      etiqueta: "🎧 A solas",
      evitarExtra: [],
      notaTexto: "Plan personal a tu ritmo."
    },
    pareja: {
      etiqueta: "💛 En pareja",
      evitarExtra: [27, 10752],
      notaTexto: "Ideal para compartir en pareja evitando temáticas demasiado duras."
    },
    amigos: {
      etiqueta: "🍕 Con amigos",
      evitarExtra: [99],
      notaTexto: "Pensada para comentar y disfrutar en grupo."
    },
    familia: {
      etiqueta: "🏡 En familia",
      incluirExtra: [10751, 16],
      evitarForzado: [27, 80, 10752, 53],
      notaTexto: "Priorizamos cine familiar y animación apto para ver en compañía de todos."
    }
  }
};

const estado = {
  tipoContenido: "movie", // "movie" | "tv" | "all" (Fase 7)
  actual: null,
  destino: null,
  recetaVisible: false,
  recetaActual: null,
  notaMinimaPersonalizada: null,
  filtros: {
    tiempo: "cualquiera",
    energia: "cualquiera",
    compania: "cualquiera"
  },
  buscandoPeliculas: false,
  peliculasCandidatas: [],
  paginaActualTMDB: 1,
  totalPaginasTMDB: 1,
  peliculaModalActual: null,
  cargandoDetalleId: null,
  historialSimilares: []
};

/* --------------------------------------------------------------------------
   4. REFERENCIAS A ELEMENTOS DEL HTML
   -------------------------------------------------------------------------- */
/* Referencias de la Fase 7: Selector Películas / Series / Todo */
const radiosTipoContenido = document.querySelectorAll('input[name="media-type"]');
const leyendaFiltroTiempo = document.getElementById("filter-time-legend");
const labelTiempoCorta = document.getElementById("label-time-short");
const labelTiempoNormal = document.getElementById("label-time-normal");
const labelTiempoLarga = document.getElementById("label-time-long");

const botonesActual = document.querySelectorAll("[data-current]");
const botonesDestino = document.querySelectorAll("[data-target]");

const tituloPuente = document.getElementById("bridge-heading");
const capsulaActual = document.getElementById("capsule-current");
const valorCapsulaActual = document.getElementById("capsule-current-value");
const capsulaDestino = document.getElementById("capsule-target");
const valorCapsulaDestino = document.getElementById("capsule-target-value");
const mensajePuente = document.getElementById("bridge-message");

const botonSiguienteFase = document.getElementById("next-phase-btn");
const botonReiniciar = document.getElementById("reset-btn");

/* Referencias de la Zona 5: Tarjeta de la Receta Emocional */
const pasoActualSeccion = document.getElementById("step-current-heading");
const tarjetaReceta = document.getElementById("recipe-card");
const badgeAjusteReceta = document.getElementById("recipe-adjustment-badge");
const tituloReceta = document.getElementById("recipe-heading");
const subtituloReceta = document.getElementById("recipe-subtitle");
const listaIdeales = document.getElementById("recipe-include-list");
const listaEvitar = document.getElementById("recipe-exclude-list");
const textoRitmo = document.getElementById("recipe-pace");
const textoTono = document.getElementById("recipe-tone");
const textoNota = document.getElementById("recipe-rating");
const inputNotaMinima = document.getElementById("recipe-rating-input");
const pistaNotaMinima = document.getElementById("recipe-rating-hint");
const botonRestaurarNota = document.getElementById("reset-rating-btn");
const explicacionReceta = document.getElementById("recipe-explanation");
const avisoFase3 = document.getElementById("phase3-notice");
const botonBuscarPeliculas = document.getElementById("search-movies-btn");
const botonCambiarEmociones = document.getElementById("change-recipe-btn");

/* Referencias de la Configuración de API Key de TMDB y Zona 6 (Cartelera) */
const cajaLlaveTmdb = document.getElementById("tmdb-key-box");
const estadoLlaveTmdb = document.getElementById("tmdb-key-status");
const formularioLlaveTmdb = document.getElementById("tmdb-key-form");
const inputLlaveTmdb = document.getElementById("tmdb-api-key-input");
const botonAlternarFormularioLlave = document.getElementById("toggle-key-form-btn");
const botonVisibilidadLlave = document.getElementById("toggle-key-visibility-btn");
const botonGuardarLlave = document.getElementById("save-tmdb-key-btn");
const botonBorrarLlave = document.getElementById("clear-tmdb-key-btn");

const seccionPeliculas = document.getElementById("movies-section");
const tituloPeliculas = document.getElementById("movies-heading");
const subtituloPeliculas = document.getElementById("movies-subtitle");
const badgeContadorPeliculas = document.getElementById("movies-count-badge");
const feedbackPeliculas = document.getElementById("movies-feedback");
const cuadriculaPeliculas = document.getElementById("movies-grid");

const cajonPeliculasVistas = document.getElementById("watched-drawer");
const contadorPeliculasVistas = document.getElementById("watched-count");
const listaPeliculasVistas = document.getElementById("watched-list");
const botonLimpiarVistas = document.getElementById("clear-watched-btn");

/* Referencias de la Zona 7: Botón de otro lote y Ventana Modal de Detalles (Fase 4) */
const barraOtroLote = document.getElementById("movies-batch-actions");
const botonOtroLote = document.getElementById("next-batch-btn");
const infoPaginaPeliculas = document.getElementById("movies-page-info");

const dialogDetalle = document.getElementById("movie-detail-dialog");
const eyebrowDialog = document.getElementById("movie-dialog-eyebrow");
const tituloDialog = document.getElementById("movie-dialog-title");
const estadoDialog = document.getElementById("movie-dialog-status");
const cuerpoDialog = document.getElementById("movie-dialog-body");
const contenedorPosterDialog = document.getElementById("movie-dialog-poster-wrap");
const metaDialog = document.getElementById("movie-dialog-meta");
const generosDialog = document.getElementById("movie-dialog-genres");
const fraseDialog = document.getElementById("movie-dialog-tagline");
const sinopsisDialog = document.getElementById("movie-dialog-overview");
const seccionCreditosDialog = document.getElementById("movie-dialog-credits-section");
const creditosDialog = document.getElementById("movie-dialog-credits");
const paisDialog = document.getElementById("movie-dialog-country");
const proveedoresDialog = document.getElementById("movie-dialog-providers");
const enlaceYoutubeDialog = document.getElementById("movie-dialog-youtube-link");
const trailerDialog = document.getElementById("movie-dialog-trailer");
const botonOtraParecida = document.getElementById("dialog-similar-btn");
const botonYaVistaDialog = document.getElementById("dialog-watched-btn");
const botonFavoritoDialog = document.getElementById("dialog-favorite-btn");
const botonCompartirDialog = document.getElementById("dialog-share-btn");

/* Referencias de la Fase 5: Filtros rápidos, Mi Botiquín y Notificaciones Toast */
const botonNavFiltros = document.getElementById("hero-filters-btn");
const contadorNavFiltros = document.getElementById("hero-filters-count");
const dialogFiltros = document.getElementById("magic-filters-dialog");
const botonNavBotiquin = document.getElementById("hero-botiquin-btn");
const contadorNavBotiquin = document.getElementById("hero-botiquin-count");
const radiosFiltroTiempo = document.querySelectorAll('input[name="filter-time"]');
const radiosFiltroEnergia = document.querySelectorAll('input[name="filter-energy"]');
const radiosFiltroCompania = document.querySelectorAll('input[name="filter-company"]');
const badgeFiltrosActivos = document.getElementById("active-filters-badge");
const botonLimpiarFiltros = document.getElementById("reset-filters-btn");

const dialogBotiquin = document.getElementById("botiquin-dialog");
const tituloBotiquin = document.getElementById("botiquin-heading");
const badgeContadorBotiquin = document.getElementById("botiquin-count-badge");
const estadoVacioBotiquin = document.getElementById("botiquin-empty");
const cuadriculaBotiquin = document.getElementById("botiquin-grid");
const botonVaciarBotiquin = document.getElementById("clear-botiquin-btn");

const regionToast = document.getElementById("toast-region");
const respaldoLiveToast = document.getElementById("toast-live-fallback");

/* Cargamos el polyfill de Popover SOLO si el navegador no tiene soporte nativo */
if (!Object.hasOwn(HTMLElement.prototype, "popover")) {
  import("https://unpkg.com/@oddbird/popover-polyfill@latest/dist/popover.min.js").catch(() => {
    // Si falla la red, el aviso igualmente se comunica en la interfaz y región live
  });
}

/* --------------------------------------------------------------------------
   5. FUNCIONES QUE CONSTRUYEN Y ACTUALIZAN LA PÁGINA
   -------------------------------------------------------------------------- */

/**
 * Traduce la pareja de emociones elegidas en una Receta de Cine completa
 * y deja preparados los parámetros oficiales que usaremos en la Fase 3 con TMDB.
 */
function construirReceta(actualId, destinoId) {
  const infoActual = EMOCIONES_ACTUALES[actualId];
  const infoDestino = DESTINOS_EMOCIONALES[destinoId];
  const base = RECETAS_BASE_POR_DESTINO[destinoId];
  const ajuste = AJUSTES_POR_ESTADO_ACTUAL[actualId];

  const filtroTiempo = FILTROS_MAGICOS.tiempo[estado.filtros.tiempo] || FILTROS_MAGICOS.tiempo.cualquiera;
  const filtroEnergia = FILTROS_MAGICOS.energia[estado.filtros.energia] || FILTROS_MAGICOS.energia.cualquiera;
  const filtroCompania = FILTROS_MAGICOS.compania[estado.filtros.compania] || FILTROS_MAGICOS.compania.cualquiera;

  // 1. Géneros ideales (añadimos extras si se eligió "En familia")
  let idealesIds = [...new Set([...base.generosIdeales, ...(filtroCompania.incluirExtra || [])])];

  // Si se eligió "En familia", sacamos géneros duros incluso de los ideales
  if (Array.isArray(filtroCompania.evitarForzado) && filtroCompania.evitarForzado.length > 0) {
    idealesIds = idealesIds.filter((id) => !filtroCompania.evitarForzado.includes(id));
  }

  // 2. Géneros a evitar (sumando estado actual y filtros opcionales sin contradecir los ideales)
  const evitarBruto = [
    ...base.generosEvitar,
    ...ajuste.evitarExtra,
    ...(filtroEnergia.evitarExtra || []),
    ...(filtroCompania.evitarExtra || []),
    ...(filtroCompania.evitarForzado || [])
  ];
  const evitarIds = [...new Set(evitarBruto)].filter((id) => !idealesIds.includes(id));

  const mapearGenero = (id) => ({
    id,
    nombre: GENEROS_TMDB[id]?.nombre || `Género ${id}`,
    emoji: GENEROS_TMDB[id]?.emoji || "🎬"
  });

  const mapearGeneroTv = (id) => ({
    id,
    nombre: GENEROS_TMDB_TV[id]?.nombre || `Género ${id}`,
    emoji: GENEROS_TMDB_TV[id]?.emoji || "📺"
  });

  // 2B. Traducción oficial de géneros a TV para TMDB (/discover/tv)
  const idealesTvIds = traducirGenerosATv(idealesIds, false);
  const evitarTvBruto = [
    ...traducirGenerosATv(evitarIds, true),
    10763, // Noticias
    10767  // Talk Show
  ];
  const evitarTvIds = [...new Set(evitarTvBruto)].filter((id) => !idealesTvIds.includes(id));

  const esSoloTv = estado.tipoContenido === "tv";
  const generosIdealesMostrar = esSoloTv
    ? idealesTvIds.map(mapearGeneroTv)
    : idealesIds.map(mapearGenero);
  const generosEvitarMostrar = esSoloTv
    ? evitarTvIds.map(mapearGeneroTv)
    : evitarIds.map(mapearGenero);

  // 3. Nota mínima sugerida (teniendo en cuenta el filtro de energía intensa)
  const extraNotaEnergia = filtroEnergia.ajusteNota || 0;
  const notaSugerida = Math.min(
    9.0,
    Number((base.notaMinima + ajuste.ajusteNota + extraNotaEnergia).toFixed(1))
  );
  const notaActiva = estado.notaMinimaPersonalizada ?? notaSugerida;

  // 4. Duración en minutos para TMDB según "Tiempo disponible" (cine y episodios de TV)
  let runtimeGte = filtroTiempo.runtimeGte || null;
  let runtimeLte = filtroTiempo.runtimeLte || null;
  if (!runtimeGte && !runtimeLte && filtroEnergia.runtimeLteSugerido) {
    runtimeLte = filtroEnergia.runtimeLteSugerido;
  }

  let runtimeGteTv = filtroTiempo.runtimeGteTv || null;
  let runtimeLteTv = filtroTiempo.runtimeLteTv || null;
  if (!runtimeGteTv && !runtimeLteTv && filtroEnergia.runtimeLteSugerido) {
    runtimeLteTv = 45;
  }

  // 5. Resumen legible de los Toques Mágicos activos
  const etiquetaTiempo = esSoloTv
    ? filtroTiempo.etiquetaTv || filtroTiempo.etiqueta
    : filtroTiempo.etiqueta;
  const etiquetasFiltros = [
    etiquetaTiempo,
    filtroEnergia.etiqueta,
    filtroCompania.etiqueta
  ].filter(Boolean);

  const notasFiltros = [
    filtroTiempo.notaTexto,
    filtroEnergia.notaTexto,
    filtroCompania.notaTexto
  ].filter(Boolean);

  const explicacionCompleta = [
    base.explicacionBase,
    ajuste.consejoExtra,
    ...notasFiltros
  ].join(" ");

  // Las series en TMDB suelen acumular menos votos que el cine; ajustamos el mínimo para no dejar vacía la cartelera
  const votosMinimosTv = Math.max(80, Math.round(base.votosMinimos * 0.45));

  return {
    titulo: base.tituloReceta,
    subtitulo: `De ${infoActual.emoji} ${infoActual.nombre} ➔ a ${infoDestino.emoji} ${infoDestino.nombre}`,
    etiquetaAjuste: `${ajuste.emojiAjuste} ${ajuste.etiquetaAjuste}`,
    generosIdeales: generosIdealesMostrar,
    generosEvitar: generosEvitarMostrar,
    ritmo: `${base.ritmo} · ${ajuste.ritmoExtra}`,
    tono: base.tono,
    notaMinima: notaActiva,
    notaSugerida,
    explicacion: explicacionCompleta,
    etiquetasFiltros,
    // En TMDB, "|" en with_genres significa "cualquiera de estos" y "," en without_genres excluye todos.
    parametrosTMDB: {
      language: "es-ES",
      with_genres: idealesIds.join("|"),
      without_genres: evitarIds.join(","),
      vote_average_gte: notaActiva,
      vote_count_gte: base.votosMinimos,
      with_runtime_gte: runtimeGte,
      with_runtime_lte: runtimeLte
    },
    parametrosTMDBTv: {
      language: "es-ES",
      with_genres: idealesTvIds.join("|"),
      without_genres: evitarTvIds.join(","),
      vote_average_gte: notaActiva,
      vote_count_gte: votosMinimosTv,
      with_runtime_gte: runtimeGteTv,
      with_runtime_lte: runtimeLteTv
    }
  };
}

/* Comprueba si el navegador soporta transicionar display: none de forma nativa */
let soportaTransicionDisplay;
function canTransitionDisplay() {
  if (soportaTransicionDisplay !== undefined) return soportaTransicionDisplay;
  if (!window.CSS?.supports?.("transition-behavior", "allow-discrete") || !document.body) {
    return false;
  }
  const probe = document.createElement("div");
  probe.style.cssText = "transition: display 1s allow-discrete !important; display: block;";
  document.body.appendChild(probe);
  getComputedStyle(probe).display;
  probe.style.display = "none";
  soportaTransicionDisplay = getComputedStyle(probe).display === "block";
  probe.remove();
  return soportaTransicionDisplay;
}

function showElement(el) {
  el.removeAttribute("data-closing");
  el.hidden = false;
}

async function hideElement(el) {
  if (el.hidden) return;
  if (canTransitionDisplay()) {
    el.hidden = true;
  } else {
    el.setAttribute("data-closing", "");
  }

  const animations = el.getAnimations();
  if (animations.length > 0) {
    await Promise.race([
      Promise.allSettled(animations.map((a) => a.finished)),
      new Promise((resolve) => setTimeout(resolve, 2000))
    ]);
  }

  // Solo ocultamos si no se volvió a abrir durante la animación de cierre
  if (el.hasAttribute("data-closing")) {
    el.removeAttribute("data-closing");
    el.hidden = true;
  }
}

/**
 * Crea una pastilla visual segura para mostrar cada género en la receta.
 */
function crearEtiquetaGenero(genero, tipo) {
  const item = document.createElement("li");
  item.className = `genre-pill genre-pill-${tipo}`;
  item.dataset.tmdbId = String(genero.id);
  item.textContent = `${genero.emoji} ${genero.nombre}`;
  return item;
}

/**
 * Devuelve una frase simpática según la nota mínima elegida por el usuario.
 * AQUÍ PUEDES PERSONALIZAR LOS MENSAJES DEL DESLIZADOR DE NOTA.
 */
function describirNotaMinima(nota) {
  if (nota < 4) {
    return "🍿 Placer culpable: ¡hoy vale todo, incluso cine malísimo!";
  }
  if (nota < 6) {
    return "🎲 Sin prejuicios: abierta a pelis entretenidas sin exigir mucho";
  }
  if (nota < 7.5) {
    return "👍 Buena y fiable: películas disfrutables y bien valoradas";
  }
  if (nota < 8.3) {
    return "🌟 Muy buena: solo películas con muy buena fama";
  }
  return "🏆 Obra maestra: únicamente lo mejor valorado por el público";
}

/**
 * Actualiza el texto, el deslizador y el botón de restaurar la nota sugerida.
 */
function actualizarVistaNota(notaActiva, notaSugerida, votosMinimos) {
  textoNota.textContent = `${notaActiva.toFixed(1)} / 10 (mín. ${votosMinimos} votos)`;
  inputNotaMinima.value = notaActiva.toFixed(1);
  pistaNotaMinima.textContent = describirNotaMinima(notaActiva);

  const esPersonalizada = estado.notaMinimaPersonalizada !== null;
  botonRestaurarNota.hidden = !esPersonalizada;
  if (esPersonalizada) {
    botonRestaurarNota.textContent = `Sugerida (${notaSugerida.toFixed(1)})`;
  }
}

/**
 * Rellena la Zona 5 con los datos de la receta calculada.
 */
function pintarReceta(receta) {
  badgeAjusteReceta.textContent = receta.etiquetaAjuste;
  tituloReceta.textContent = receta.titulo;
  subtituloReceta.textContent = receta.subtitulo;

  listaIdeales.replaceChildren(
    ...receta.generosIdeales.map((genero) => crearEtiquetaGenero(genero, "include"))
  );
  listaEvitar.replaceChildren(
    ...receta.generosEvitar.map((genero) => crearEtiquetaGenero(genero, "exclude"))
  );

  textoRitmo.textContent = receta.ritmo;
  textoTono.textContent = receta.tono;
  const votosMinimosMostrados =
    estado.tipoContenido === "tv"
      ? receta.parametrosTMDBTv.vote_count_gte
      : receta.parametrosTMDB.vote_count_gte;
  actualizarVistaNota(
    receta.notaMinima,
    receta.notaSugerida,
    votosMinimosMostrados
  );
  explicacionReceta.textContent = receta.explicacion;

  avisoFase3.hidden = true;
}

/**
 * Comprueba si el usuario prefiere evitar desplazamientos suaves de pantalla.
 */
function comportamientoScroll() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

/**
 * Cambia los colores del fondo y de los acentos según las emociones elegidas.
 */
function actualizarTemaVisual() {
  const raiz = document.documentElement;
  const infoActual = estado.actual ? EMOCIONES_ACTUALES[estado.actual] : null;
  const infoDestino = estado.destino ? DESTINOS_EMOCIONALES[estado.destino] : null;

  const fondo1 = infoActual ? infoActual.colorFondo1 : "#ffe2cc";
  const fondo2 = infoDestino
    ? infoDestino.colorFondo2
    : infoActual
      ? infoActual.colorFondo2
      : "#d8f3dc";
  const acento = infoDestino
    ? infoDestino.colorAcento
    : infoActual
      ? infoActual.colorAcento
      : "#e76f51";
  const suave = infoDestino
    ? infoDestino.colorSuave
    : infoActual
      ? infoActual.colorSuave
      : "#fff0e6";

  const fondo1Noche = infoActual ? infoActual.colorFondo1Noche : "rgba(231, 111, 81, 0.2)";
  const fondo2Noche = infoDestino
    ? infoDestino.colorFondo2Noche
    : infoActual
      ? infoActual.colorFondo2Noche
      : "rgba(94, 196, 152, 0.16)";
  const acentoNoche = infoDestino
    ? infoDestino.colorAcentoNoche
    : infoActual
      ? infoActual.colorAcentoNoche
      : "#f4977b";
  const suaveNoche = infoDestino
    ? infoDestino.colorSuaveNoche
    : infoActual
      ? infoActual.colorSuaveNoche
      : "#362823";

  raiz.style.setProperty("--mood-bg-1-light", fondo1);
  raiz.style.setProperty("--mood-bg-2-light", fondo2);
  raiz.style.setProperty("--mood-accent-light", acento);
  raiz.style.setProperty("--mood-accent-soft-light", suave);

  raiz.style.setProperty("--mood-bg-1-dark", fondo1Noche);
  raiz.style.setProperty("--mood-bg-2-dark", fondo2Noche);
  raiz.style.setProperty("--mood-accent-dark", acentoNoche);
  raiz.style.setProperty("--mood-accent-soft-dark", suaveNoche);
}

/**
 * Construye una frase acogedora para cualquiera de las 36 combinaciones posibles.
 */
function generarMensajePuente(actualId, destinoId) {
  const clave = `${actualId}+${destinoId}`;
  if (MENSAJES_ESPECIALES[clave]) {
    return MENSAJES_ESPECIALES[clave];
  }

  const infoActual = EMOCIONES_ACTUALES[actualId];
  const infoDestino = DESTINOS_EMOCIONALES[destinoId];
  return `${infoActual.inicioFrase}, y tu plan para hoy es ${infoDestino.metaFrase}. ¡Una combinación con muchísimo sentido!`;
}

/**
 * Marca visualmente el botón elegido en un grupo y actualiza la pantalla.
 */
function actualizarBotones(listaBotones, atributo, valorElegido) {
  listaBotones.forEach((boton) => {
    const estaElegido = boton.dataset[atributo] === valorElegido;
    boton.setAttribute("aria-pressed", estaElegido ? "true" : "false");
  });
}

/**
 * Dibuja el resumen del Puente Emocional en la Zona 4.
 */
function actualizarResumen() {
  const infoActual = estado.actual ? EMOCIONES_ACTUALES[estado.actual] : null;
  const infoDestino = estado.destino ? DESTINOS_EMOCIONALES[estado.destino] : null;

  avisoFase3.hidden = true;

  // Actualizamos cápsula 1 (Cómo llegas hoy)
  if (infoActual) {
    valorCapsulaActual.textContent = `${infoActual.emoji} ${infoActual.nombre}`;
    capsulaActual.classList.remove("is-empty");
  } else {
    valorCapsulaActual.textContent = "Pendiente de elegir";
    capsulaActual.classList.add("is-empty");
  }

  // Actualizamos cápsula 2 (Cómo quieres sentirte)
  if (infoDestino) {
    valorCapsulaDestino.textContent = `${infoDestino.emoji} ${infoDestino.nombre}`;
    capsulaDestino.classList.remove("is-empty");
  } else {
    valorCapsulaDestino.textContent = "Pendiente de elegir";
    capsulaDestino.classList.add("is-empty");
  }

  // Mostramos u ocultamos botones y mensaje según lo que falte por elegir
  const hayAlgunaSeleccion = Boolean(infoActual || infoDestino);
  botonReiniciar.hidden = !hayAlgunaSeleccion;

  if (infoActual && infoDestino) {
    tituloPuente.textContent = `Hoy vienes ${infoActual.nombre.toLowerCase()} ➔ y buscas ${infoDestino.nombre.toLowerCase()}`;
    mensajePuente.textContent = generarMensajePuente(estado.actual, estado.destino);
    botonSiguienteFase.disabled = false;

    // Si la tarjeta de receta ya está abierta, la actualizamos en vivo con la nueva combinación
    if (estado.recetaVisible) {
      estado.recetaActual = construirReceta(estado.actual, estado.destino);
      pintarReceta(estado.recetaActual);
      seccionPeliculas.hidden = true;
    }
  } else {
    if (estado.recetaVisible) {
      hideElement(tarjetaReceta);
      estado.recetaVisible = false;
      estado.recetaActual = null;
      botonSiguienteFase.setAttribute("aria-expanded", "false");
    }
    seccionPeliculas.hidden = true;

    if (infoActual) {
      tituloPuente.textContent = `¡Genial! Empezamos desde: ${infoActual.emoji} ${infoActual.nombre}`;
      mensajePuente.textContent = `${infoActual.inicioFrase}. Ahora elige una tarjeta del Paso 2 para completar tu puente emocional.`;
      botonSiguienteFase.disabled = true;
    } else if (infoDestino) {
      tituloPuente.textContent = `Tu meta de hoy: ${infoDestino.emoji} ${infoDestino.nombre}`;
      mensajePuente.textContent = `Qué buen destino: ${infoDestino.metaFrase}. Elige ahora cómo te sientes hoy en el Paso 1.`;
      botonSiguienteFase.disabled = true;
    } else {
      tituloPuente.textContent = "Elige tus dos sensaciones para trazar tu plan";
      mensajePuente.innerHTML =
        'Pulsa una tarjeta del <strong>Paso 1</strong> y otra del <strong>Paso 2</strong> para ver cómo cambia la atmósfera de tu sala y leer tu plan emocional de hoy.';
      botonSiguienteFase.disabled = true;
    }
  }

  actualizarTemaVisual();
}

/* --------------------------------------------------------------------------
   6. GESTIÓN DE LA API KEY DE TMDB Y CONSULTA EN TIEMPO REAL (FASE 3)
   -------------------------------------------------------------------------- */

/**
 * Indica si estamos en un entorno con servidor Netlify (/api/tmdb) o en el servidor estático local (:8080).
 */
function usarProxyServidor() {
  const host = window.location.hostname;
  const esLocalEstatico =
    (host === "127.0.0.1" || host === "localhost") && window.location.port === "8080";
  return !esLocalEstatico && (window.location.protocol === "https:" || window.location.protocol === "http:");
}

/**
 * Lee la API Key guardada en este navegador (o usa la llave configurada por defecto si existe).
 */
function obtenerLlaveTmdb() {
  try {
    const guardada = (localStorage.getItem(CONFIG_TMDB.claveStorage) || "").trim();
    if (guardada) return guardada;
  } catch {
    // Si localStorage no está disponible, usamos la llave por defecto
  }
  return (CONFIG_TMDB.llavePorDefecto || "").trim();
}

/**
 * Muestra solo los últimos 4 caracteres de la llave para confirmar que está guardada.
 */
function enmascararLlave(llave) {
  if (llave.length <= 6) return "••••";
  return `••••${llave.slice(-4)}`;
}

/**
 * Actualiza el aspecto de la cajita de la API Key según esté configurada o pendiente.
 */
function actualizarEstadoVisualLlave(mostrarFormularioForzado = false) {
  if (usarProxyServidor()) {
    // En producción (Netlify) las llamadas pasan por /api/tmdb, así que el usuario no necesita clave
    cajaLlaveTmdb.hidden = true;
    return;
  }

  cajaLlaveTmdb.hidden = false;
  const llaveGuardada = obtenerLlaveTmdb();
  const tieneLlave = Boolean(llaveGuardada);

  cajaLlaveTmdb.classList.toggle("is-configured", tieneLlave);
  botonBorrarLlave.hidden = !tieneLlave;
  botonAlternarFormularioLlave.hidden = !tieneLlave;

  if (tieneLlave) {
    estadoLlaveTmdb.textContent = `✅ Llave lista en tu navegador (${enmascararLlave(llaveGuardada)}). Ya puedes buscar películas reales.`;
    if (!inputLlaveTmdb.value) {
      inputLlaveTmdb.value = llaveGuardada;
    }
    formularioLlaveTmdb.hidden = !mostrarFormularioForzado;
    botonAlternarFormularioLlave.textContent = formularioLlaveTmdb.hidden
      ? "Cambiar llave"
      : "Ocultar";
  } else {
    estadoLlaveTmdb.textContent =
      "Introduce tu API Key gratuita de TMDB para conectar la cartelera en español.";
    formularioLlaveTmdb.hidden = false;
  }
}

/**
 * Guarda la llave escrita por el usuario en localStorage.
 */
function guardarLlaveDesdeInput() {
  const valor = inputLlaveTmdb.value.trim();
  if (!valor) {
    avisoFase3.textContent =
      "🔑 Escribe o pega primero tu API Key de TMDB en la cajita para poder guardarla.";
    avisoFase3.hidden = false;
    inputLlaveTmdb.focus();
    return false;
  }

  try {
    localStorage.setItem(CONFIG_TMDB.claveStorage, valor);
  } catch {
    // Si el navegador bloquea localStorage, la mantenemos en el input igualmente
  }

  avisoFase3.textContent =
    "✅ ¡API Key guardada en tu navegador! Pulsa «Buscar películas reales con esta receta» para ver tu cartelera.";
  avisoFase3.hidden = false;
  actualizarEstadoVisualLlave(false);
  return true;
}

/**
 * Devuelve "tv" si el elemento es una serie o "movie" si es una película.
 */
function obtenerTipoContenido(item) {
  if (!item) return "movie";
  if (item.media_type === "tv" || item.media_type === "movie") return item.media_type;
  if (item.first_air_date || item.name || typeof item.number_of_seasons === "number") return "tv";
  return "movie";
}

/**
 * Clave única para distinguir películas y series en localStorage (evita colisiones de ID en TMDB).
 */
function obtenerClaveItem(itemOId, tipoPorDefecto = "movie") {
  if (itemOId && typeof itemOId === "object") {
    const tipo = obtenerTipoContenido(itemOId);
    return `${tipo}:${Number(itemOId.id)}`;
  }
  return `${tipoPorDefecto}:${Number(itemOId)}`;
}

/**
 * Normaliza un objeto de TMDB (película o serie) para usar campos consistentes en toda la web.
 */
function normalizarItemTMDB(item, tipoForzado = null) {
  const mediaType = tipoForzado || obtenerTipoContenido(item);
  const titulo =
    item.title ||
    item.name ||
    item.original_title ||
    item.original_name ||
    (mediaType === "tv" ? "Serie sin título" : "Película sin título");
  const tituloOriginal = item.original_title || item.original_name || titulo;
  const fecha = item.release_date || item.first_air_date || "";

  return {
    ...item,
    id: Number(item.id),
    media_type: mediaType,
    title: titulo,
    original_title: tituloOriginal,
    release_date: fecha,
    number_of_seasons:
      typeof item.number_of_seasons === "number" ? item.number_of_seasons : null,
    number_of_episodes:
      typeof item.number_of_episodes === "number" ? item.number_of_episodes : null
  };
}

/**
 * Formatea temporadas y episodios de una serie (ej. "3 temp. · 24 ep.").
 */
function formatearResumenTemporadas(temporadas, episodios, corto = true) {
  const partes = [];
  if (typeof temporadas === "number" && temporadas > 0) {
    partes.push(
      corto
        ? `${temporadas} temp.`
        : temporadas === 1
          ? "1 temporada"
          : `${temporadas} temporadas`
    );
  }
  if (typeof episodios === "number" && episodios > 0) {
    partes.push(
      corto
        ? `${episodios} ep.`
        : episodios === 1
          ? "1 episodio"
          : `${episodios} episodios`
    );
  }
  return partes.join(" · ");
}

/**
 * Crea una insignia visual de formato (🎬 Película o 📺 Serie).
 */
function crearInsigniaFormato(mediaType) {
  const badge = document.createElement("span");
  badge.className = `media-type-badge ${mediaType === "tv" ? "media-type-tv" : "media-type-movie"}`;
  badge.textContent = mediaType === "tv" ? "📺 Serie" : "🎬 Película";
  return badge;
}

/**
 * Actualiza los textos de botones y filtros según el formato elegido (Películas / Series / Todo).
 */
function actualizarTextosPorFormato() {
  const modo = estado.tipoContenido;

  if (modo === "tv") {
    botonBuscarPeliculas.textContent = "📺 Buscar series reales con esta receta";
    tituloPeliculas.textContent = "Series recomendadas para tu plan de hoy";
    botonOtroLote.textContent = "🔄 Ver otro lote de series";
    if (leyendaFiltroTiempo) leyendaFiltroTiempo.textContent = "⏱️ Duración por episodio";
    if (labelTiempoCorta) labelTiempoCorta.textContent = "Cortito (≤ 35 min)";
    if (labelTiempoNormal) labelTiempoNormal.textContent = "Estándar (35–55 min)";
    if (labelTiempoLarga) labelTiempoLarga.textContent = "Largo (> 55 min)";
  } else if (modo === "all") {
    botonBuscarPeliculas.textContent = "✨ Buscar películas y series con esta receta";
    tituloPeliculas.textContent = "Películas y series recomendadas para hoy";
    botonOtroLote.textContent = "🔄 Ver otro lote de películas y series";
    if (leyendaFiltroTiempo) leyendaFiltroTiempo.textContent = "⏱️ Tiempo disponible";
    if (labelTiempoCorta) labelTiempoCorta.textContent = "Cortita (≤ 95 min / ep. ≤ 35)";
    if (labelTiempoNormal) labelTiempoNormal.textContent = "Estándar (95–125 min)";
    if (labelTiempoLarga) labelTiempoLarga.textContent = "Maratón (> 125 min)";
  } else {
    botonBuscarPeliculas.textContent = "🎬 Buscar películas reales con esta receta";
    tituloPeliculas.textContent = "Películas recomendadas para tu plan de hoy";
    botonOtroLote.textContent = "🔄 Ver otro lote de películas";
    if (leyendaFiltroTiempo) leyendaFiltroTiempo.textContent = "⏱️ Tiempo disponible";
    if (labelTiempoCorta) labelTiempoCorta.textContent = "Cortita (≤ 95 min)";
    if (labelTiempoNormal) labelTiempoNormal.textContent = "Estándar (95–125 min)";
    if (labelTiempoLarga) labelTiempoLarga.textContent = "Maratón (> 125 min)";
  }
}

/**
 * Función compartida que construye la estructura base de una tarjeta <article class="movie-card">
 * (póster envuelto en <button> accesible, cabecera con metadatos, sinopsis y pie con botón de detalles).
 * Se reutiliza tanto en la cartelera principal como en "Mi Botiquín" para evitar código duplicado.
 */
function crearTarjetaBase(itemBruto, opciones = {}) {
  const pelicula = normalizarItemTMDB(itemBruto);
  const esSerie = pelicula.media_type === "tv";
  const tarjeta = document.createElement("article");
  tarjeta.className = "movie-card";

  const titulo = pelicula.title;
  const anio = pelicula.release_date ? pelicula.release_date.slice(0, 4) : "Año s/d";
  const puntuacion =
    typeof pelicula.vote_average === "number" && pelicula.vote_average > 0
      ? `⭐ ${pelicula.vote_average.toFixed(1)}`
      : "⭐ Sin nota";
  const sinopsisPorDefecto =
    opciones.sinopsisVacia ||
    (esSerie
      ? "TMDB aún no tiene una descripción en español para esta serie, pero encaja con los géneros y la nota de tu receta de hoy."
      : "TMDB aún no tiene una descripción en español para esta película, pero encaja de maravilla con los géneros y la nota de tu receta de hoy.");
  const sinopsis =
    pelicula.overview && pelicula.overview.trim().length > 0
      ? pelicula.overview.trim()
      : sinopsisPorDefecto;

  // 1. Región Media: Botón accesible con el póster o su respaldo visual
  const botonPoster = document.createElement("button");
  botonPoster.type = "button";
  botonPoster.className = "movie-poster-btn";
  botonPoster.setAttribute("aria-label", `Ver detalles, tráiler y dónde ver ${titulo}`);
  botonPoster.addEventListener("click", () => {
    abrirDetallesPelicula(pelicula);
  });

  if (pelicula.poster_path) {
    const imagen = document.createElement("img");
    imagen.className = "movie-poster";
    imagen.src = `${CONFIG_TMDB.urlBasePoster}${pelicula.poster_path}`;
    imagen.alt = "";
    imagen.loading = "lazy";
    imagen.width = 500;
    imagen.height = 750;
    botonPoster.appendChild(imagen);
  } else {
    const respaldo = document.createElement("div");
    respaldo.className = "media";
    const emoji = document.createElement("span");
    emoji.className = "poster-fallback-emoji";
    emoji.setAttribute("aria-hidden", "true");
    emoji.textContent = esSerie ? "📺" : (opciones.emojiRespaldo || "🎬");
    const textoRespaldo = document.createElement("span");
    textoRespaldo.className = "poster-fallback-text";
    textoRespaldo.textContent = opciones.textoRespaldo || "Póster no disponible";
    respaldo.append(emoji, textoRespaldo);
    botonPoster.appendChild(respaldo);
  }
  tarjeta.appendChild(botonPoster);

  // 2. Región Header: Formato, año, nota, título y etiquetas opcionales
  const cabecera = document.createElement("header");
  cabecera.className = "movie-card-header";

  const filaMeta = document.createElement("div");
  filaMeta.className = "movie-meta-row";

  const etiquetaFormato = crearInsigniaFormato(pelicula.media_type);

  const etiquetaAnio = document.createElement("span");
  etiquetaAnio.className = "movie-year-badge";
  etiquetaAnio.textContent = anio;

  const etiquetaNota = document.createElement("span");
  etiquetaNota.className = "movie-score-badge";
  etiquetaNota.textContent = puntuacion;

  filaMeta.append(etiquetaFormato, etiquetaAnio, etiquetaNota);

  const heading = document.createElement("h3");
  heading.className = "movie-title";
  heading.textContent = titulo;

  cabecera.append(filaMeta, heading);

  // Si es serie y ya conocemos temporadas/episodios, lo mostramos en la tarjeta
  const resumenTemp = esSerie
    ? formatearResumenTemporadas(pelicula.number_of_seasons, pelicula.number_of_episodes, true)
    : "";
  if (resumenTemp) {
    const tagTemp = document.createElement("span");
    tagTemp.className = "tv-seasons-badge";
    tagTemp.textContent = `📺 ${resumenTemp}`;
    cabecera.appendChild(tagTemp);
  }

  // En Mi Botiquín mostramos el Puente Emocional con el que guardaste el título
  if (opciones.mostrarPuente && pelicula.puenteLabel) {
    const puenteTag = document.createElement("span");
    puenteTag.className = "botiquin-bridge-tag";
    puenteTag.textContent = pelicula.puenteLabel;
    cabecera.appendChild(puenteTag);
  }

  // 3. Región Content: Párrafo directo con la sinopsis corta
  const parrafoSinopsis = document.createElement("p");
  parrafoSinopsis.className = "movie-synopsis";
  parrafoSinopsis.textContent = sinopsis;

  // 4. Región Footer: Botón principal de detalles + botones específicos de cada sección
  const pieTarjeta = document.createElement("footer");
  pieTarjeta.className = "movie-card-footer";

  const botonDetalles = document.createElement("button");
  botonDetalles.type = "button";
  botonDetalles.className = "btn-movie-details";
  botonDetalles.textContent = esSerie ? "📺 Ver temporadas y tráiler" : "🎬 Ver detalles y tráiler";
  botonDetalles.setAttribute("aria-label", `Ver detalles, tráiler y dónde ver ${titulo}`);
  botonDetalles.addEventListener("click", () => {
    abrirDetallesPelicula(pelicula);
  });

  pieTarjeta.appendChild(botonDetalles);
  tarjeta.append(cabecera, parrafoSinopsis, pieTarjeta);

  return { tarjeta, pieTarjeta, pelicula, titulo, anio };
}

/**
 * Construye una tarjeta <article class="movie-card"> por cada película o serie de TMDB.
 */
function crearTarjetaPelicula(itemBruto) {
  const { tarjeta, pieTarjeta, pelicula, titulo, anio } = crearTarjetaBase(itemBruto);
  const claveUnica = obtenerClaveItem(pelicula);

  const esFavorita = estaEnBotiquin(pelicula);
  const botonFavorito = document.createElement("button");
  botonFavorito.type = "button";
  botonFavorito.className = "btn-favorite";
  botonFavorito.dataset.favKey = claveUnica;
  botonFavorito.setAttribute("aria-pressed", esFavorita ? "true" : "false");
  botonFavorito.textContent = esFavorita ? "💖 En mi Botiquín" : "🤍 Guardar en mi Botiquín";
  botonFavorito.setAttribute(
    "aria-label",
    esFavorita ? `Quitar ${titulo} de Mi Botiquín` : `Guardar ${titulo} en Mi Botiquín`
  );
  botonFavorito.addEventListener("click", () => {
    alternarFavoritaEnBotiquin(pelicula, false);
  });

  const botonYaVista = document.createElement("button");
  botonYaVista.type = "button";
  botonYaVista.className = "btn-watched";
  botonYaVista.textContent = "👁️ Ya la vi (no mostrar más)";
  botonYaVista.setAttribute("aria-label", `Marcar ${titulo} como ya vista para no mostrarla más`);
  botonYaVista.addEventListener("click", () => {
    marcarPeliculaComoVista({
      id: pelicula.id,
      media_type: pelicula.media_type,
      titulo,
      anio
    });
  });

  pieTarjeta.append(botonFavorito, botonYaVista);
  return tarjeta;
}

/**
 * Lee del navegador la lista de películas que el usuario ya ha visto.
 */
function obtenerPeliculasVistas() {
  try {
    const raw = localStorage.getItem(CONFIG_TMDB.claveVistasStorage);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Guarda en el navegador la lista actualizada de películas ya vistas.
 */
function guardarPeliculasVistas(lista) {
  try {
    localStorage.setItem(CONFIG_TMDB.claveVistasStorage, JSON.stringify(lista));
  } catch {
    // Si localStorage no está disponible, se mantiene durante la sesión
  }
}

/**
 * Dibuja el cajón inferior con las películas marcadas como vistas y permite restaurarlas.
 */
function actualizarCajonPeliculasVistas() {
  const vistas = obtenerPeliculasVistas();
  contadorPeliculasVistas.textContent = String(vistas.length);

  if (vistas.length === 0) {
    cajonPeliculasVistas.hidden = true;
    listaPeliculasVistas.replaceChildren();
    return;
  }

  cajonPeliculasVistas.hidden = false;
  const elementos = vistas.map((peli) => {
    const tipo = obtenerTipoContenido(peli);
    const icono = tipo === "tv" ? "📺" : "🎬";
    const item = document.createElement("li");
    item.className = "watched-pill";

    const texto = document.createElement("span");
    texto.textContent = peli.anio && peli.anio !== "Año s/d"
      ? `${icono} ${peli.titulo} (${peli.anio})`
      : `${icono} ${peli.titulo}`;

    const botonQuitar = document.createElement("button");
    botonQuitar.type = "button";
    botonQuitar.className = "watched-remove-btn";
    botonQuitar.textContent = "Quitar";
    botonQuitar.setAttribute("aria-label", `Volver a permitir ${peli.titulo} en las recomendaciones`);
    botonQuitar.addEventListener("click", () => {
      quitarPeliculaDeVistas(peli);
    });

    item.append(texto, botonQuitar);
    return item;
  });

  listaPeliculasVistas.replaceChildren(...elementos);
}

/**
 * Filtra los títulos candidatos excluyendo los ya vistos y pinta hasta 12 en la cuadrícula.
 */
function renderizarCarteleraFiltrada() {
  const vistasClaves = new Set(obtenerPeliculasVistas().map((p) => obtenerClaveItem(p)));
  const peliculasNoVistas = estado.peliculasCandidatas
    .filter((peli) => !vistasClaves.has(obtenerClaveItem(peli)))
    .slice(0, CONFIG_TMDB.maximoPeliculas);

  actualizarCajonPeliculasVistas();

  const sustantivo =
    estado.tipoContenido === "tv"
      ? "series"
      : estado.tipoContenido === "all"
        ? "títulos"
        : "películas";

  if (peliculasNoVistas.length === 0) {
    cuadriculaPeliculas.replaceChildren();
    badgeContadorPeliculas.textContent = `0 ${sustantivo} nuevos`;
    feedbackPeliculas.classList.remove("is-error");
    feedbackPeliculas.textContent =
      estado.peliculasCandidatas.length > 0
        ? `🎉 ¡Ya has visto todos los resultados de este lote! Puedes restaurar alguno desde el cajón de abajo o bajar un poquito la «Nota mínima» para descubrir más ${sustantivo}.`
        : `🔎 No hemos encontrado ${sustantivo} con una nota tan exigente para esta combinación. Prueba a bajar un poquito el deslizador de «Nota mínima» en tu receta y vuelve a buscar.`;
    feedbackPeliculas.hidden = false;
  } else {
    badgeContadorPeliculas.textContent = `${peliculasNoVistas.length} ${sustantivo} para ti`;
    feedbackPeliculas.hidden = true;
    cuadriculaPeliculas.replaceChildren(...peliculasNoVistas.map(crearTarjetaPelicula));
  }
}

/**
 * Añade una película o serie a la lista de "Ya vistas" y actualiza la cartelera al instante.
 */
function marcarPeliculaComoVista(peliculaInfo) {
  const vistas = obtenerPeliculasVistas();
  const claveNueva = obtenerClaveItem(peliculaInfo);
  const yaExiste = vistas.some((p) => obtenerClaveItem(p) === claveNueva);
  if (!yaExiste) {
    vistas.unshift({
      ...peliculaInfo,
      media_type: obtenerTipoContenido(peliculaInfo)
    });
    guardarPeliculasVistas(vistas);
  }
  renderizarCarteleraFiltrada();
}

/**
 * Quita una película o serie de la lista de "Ya vistas" para que vuelva a aparecer en el buscador.
 */
function quitarPeliculaDeVistas(itemOId) {
  const claveObjetivo = obtenerClaveItem(itemOId);
  const vistas = obtenerPeliculasVistas().filter((p) => obtenerClaveItem(p) !== claveObjetivo);
  guardarPeliculasVistas(vistas);
  renderizarCarteleraFiltrada();
}

/**
 * Prepara la URL y las cabeceras de autenticación para cualquier llamada a TMDB
 * (usa /api/tmdb en Netlify o API Key v3 / Token v4 en servidor estático local).
 */
function prepararPeticionTMDB(ruta, apiKey, parametros = {}) {
  const query = new URLSearchParams(parametros);
  const opcionesFetch = {
    method: "GET",
    headers: { Accept: "application/json" }
  };

  if (usarProxyServidor() && !apiKey) {
    const proxyParams = new URLSearchParams({ path: ruta });
    for (const [clave, valor] of query.entries()) {
      proxyParams.append(clave, valor);
    }
    return {
      url: `${CONFIG_TMDB.urlProxyServidor}?${proxyParams.toString()}`,
      opcionesFetch
    };
  }

  const esTokenBearer = apiKey.startsWith("eyJ") && apiKey.length > 60;

  if (esTokenBearer) {
    opcionesFetch.headers.Authorization = `Bearer ${apiKey}`;
  } else {
    query.set("api_key", apiKey);
  }

  return {
    url: `${CONFIG_TMDB.urlBaseApi}${ruta}?${query.toString()}`,
    opcionesFetch
  };
}

/**
 * Actualiza el botón "Ver otro lote de películas" y el indicador de lote actual.
 */
function actualizarBarraOtroLote() {
  const hayMasPaginas = estado.totalPaginasTMDB > 1;
  barraOtroLote.hidden = !hayMasPaginas;
  if (hayMasPaginas) {
    const totalMostrar = Math.min(estado.totalPaginasTMDB, 20);
    infoPaginaPeliculas.textContent = `Lote ${estado.paginaActualTMDB} de ${totalMostrar}`;
  }
}

/**
 * Consulta `/discover/movie` o `/discover/tv` en TMDB y devuelve resultados normalizados.
 */
async function consultarDiscoverPorTipo(
  tipo,
  params,
  apiKey,
  paginaSolicitada,
  vistasClaves,
  limiteObjetivo
) {
  const ruta = tipo === "tv" ? "/discover/tv" : "/discover/movie";
  const parametrosDiscover = {
    language: params.language,
    sort_by: "popularity.desc",
    include_adult: "false",
    with_genres: params.with_genres,
    without_genres: params.without_genres,
    "vote_average.gte": String(params.vote_average_gte),
    "vote_count.gte": String(params.vote_count_gte),
    page: String(paginaSolicitada)
  };
  if (params.with_runtime_gte) {
    parametrosDiscover["with_runtime.gte"] = String(params.with_runtime_gte);
  }
  if (params.with_runtime_lte) {
    parametrosDiscover["with_runtime.lte"] = String(params.with_runtime_lte);
  }

  const { url, opcionesFetch } = prepararPeticionTMDB(ruta, apiKey, parametrosDiscover);
  const respuesta = await fetch(url, opcionesFetch);

  if (!respuesta.ok) {
    if (respuesta.status === 401 || respuesta.status === 403) {
      throw new Error("CLAVE_INVALIDA");
    }
    throw new Error(`HTTP_${respuesta.status}`);
  }

  const datos = await respuesta.json();
  const resultadosTotales = Array.isArray(datos.results)
    ? datos.results.map((item) => normalizarItemTMDB(item, tipo))
    : [];
  const totalPaginas = Math.max(1, Number(datos.total_pages) || 1);

  const clavesPresentes = new Set(resultadosTotales.map((p) => obtenerClaveItem(p)));
  let disponibles = resultadosTotales.filter((p) => !vistasClaves.has(obtenerClaveItem(p)));

  // Si quedan menos títulos nuevos que el objetivo, traemos la página siguiente
  if (disponibles.length < limiteObjetivo && paginaSolicitada < totalPaginas) {
    const { url: urlSiguiente, opcionesFetch: opcionesSig } = prepararPeticionTMDB(
      ruta,
      apiKey,
      { ...parametrosDiscover, page: String(paginaSolicitada + 1) }
    );
    const respPag2 = await fetch(urlSiguiente, opcionesSig);
    if (respPag2.ok) {
      const datosPag2 = await respPag2.json();
      if (Array.isArray(datosPag2.results)) {
        datosPag2.results.forEach((raw) => {
          const item = normalizarItemTMDB(raw, tipo);
          const clave = obtenerClaveItem(item);
          if (!clavesPresentes.has(clave)) {
            clavesPresentes.add(clave);
            resultadosTotales.push(item);
          }
        });
      }
    }
    disponibles = resultadosTotales.filter((p) => !vistasClaves.has(obtenerClaveItem(p)));
  }

  // Respaldo con los mejor valorados si la nota mínima era muy exigente
  let completadoConMejores = false;
  if (disponibles.length < limiteObjetivo) {
    const { url: urlRespaldo, opcionesFetch: opcionesRespaldo } = prepararPeticionTMDB(
      ruta,
      apiKey,
      {
        language: params.language,
        sort_by: "vote_average.desc",
        include_adult: "false",
        with_genres: params.with_genres,
        without_genres: params.without_genres,
        "vote_count.gte": tipo === "tv" ? "50" : "100",
        page: String(paginaSolicitada)
      }
    );
    const respRespaldo = await fetch(urlRespaldo, opcionesRespaldo);
    if (respRespaldo.ok) {
      const datosRespaldo = await respRespaldo.json();
      if (Array.isArray(datosRespaldo.results)) {
        datosRespaldo.results.forEach((raw) => {
          const item = normalizarItemTMDB(raw, tipo);
          const clave = obtenerClaveItem(item);
          if (!clavesPresentes.has(clave)) {
            clavesPresentes.add(clave);
            resultadosTotales.push(item);
            completadoConMejores = true;
          }
        });
      }
    }
  }

  return {
    resultados: resultadosTotales,
    totalPaginas,
    completadoConMejores
  };
}

/**
 * Intercala películas y series en modo "Todo" para una cartelera equilibrada.
 */
function intercalarResultados(listaPeliculas, listaSeries) {
  const combinados = [];
  const maxLen = Math.max(listaPeliculas.length, listaSeries.length);
  for (let i = 0; i < maxLen; i += 1) {
    if (i < listaPeliculas.length) combinados.push(listaPeliculas[i]);
    if (i < listaSeries.length) combinados.push(listaSeries[i]);
  }
  return combinados;
}

/**
 * Consulta en vivo TMDB (`/3/discover/movie` y/o `/3/discover/tv`) usando la Receta Emocional.
 */
async function buscarPeliculasEnTMDB(paginaSolicitada = 1) {
  if (!estado.recetaActual || estado.buscandoPeliculas) return;

  const conProxy = usarProxyServidor();
  // Si escribió la llave en la caja en modo local pero no pulsó "Guardar llave", la guardamos automáticamente
  let apiKey = obtenerLlaveTmdb();
  if (!conProxy && !apiKey && inputLlaveTmdb.value.trim()) {
    guardarLlaveDesdeInput();
    apiKey = obtenerLlaveTmdb() || inputLlaveTmdb.value.trim();
  }

  if (!apiKey && !conProxy) {
    avisoFase3.textContent =
      "🔑 Para buscar títulos reales necesitamos tu API Key gratuita de TMDB. Pégala en la cajita de arriba (o abre la guía de 2 minutos si aún no tienes una).";
    avisoFase3.hidden = false;
    formularioLlaveTmdb.hidden = false;
    inputLlaveTmdb.focus();
    return;
  }

  avisoFase3.hidden = true;
  estado.buscandoPeliculas = true;
  const textoOriginalBoton = botonBuscarPeliculas.textContent;
  botonBuscarPeliculas.disabled = true;
  botonOtroLote.disabled = true;
  botonBuscarPeliculas.textContent = "⏳ Consultando cartelera en TMDB...";

  const receta = estado.recetaActual;
  const modo = estado.tipoContenido;
  const etiquetaModo =
    modo === "tv" ? "📺 Solo series" : modo === "all" ? "✨ Películas y series" : "🎬 Solo películas";

  seccionPeliculas.hidden = false;
  barraOtroLote.hidden = true;
  const textoFiltros =
    receta.etiquetasFiltros && receta.etiquetasFiltros.length > 0
      ? ` · ${receta.etiquetasFiltros.join(" · ")}`
      : "";
  subtituloPeliculas.textContent = `${etiquetaModo} · ${receta.titulo} (${receta.subtitulo}) · Nota mínima ${receta.notaMinima.toFixed(1)}${textoFiltros}`;
  badgeContadorPeliculas.textContent = "Conectando con TMDB...";
  mostrarEsqueletosCartelera(6);
  feedbackPeliculas.classList.remove("is-error");
  feedbackPeliculas.textContent =
    paginaSolicitada > 1
      ? `🔄 Trayendo el lote ${paginaSolicitada} desde TMDB...`
      : modo === "tv"
        ? "📺 Buscando en TMDB series en español que encajen con tu puente emocional..."
        : modo === "all"
          ? "✨ Buscando en TMDB películas y series en español para tu plan de hoy..."
          : "🍿 Buscando en TMDB películas en español que encajen con tu puente emocional...";
  feedbackPeliculas.hidden = false;

  seccionPeliculas.scrollIntoView({ behavior: comportamientoScroll(), block: "start" });

  try {
    const vistasClaves = new Set(obtenerPeliculasVistas().map((p) => obtenerClaveItem(p)));
    let resultadosTotales = [];
    let totalPaginas = 1;
    let completadoConMejores = false;

    if (modo === "tv") {
      const respTv = await consultarDiscoverPorTipo(
        "tv",
        receta.parametrosTMDBTv,
        apiKey,
        paginaSolicitada,
        vistasClaves,
        CONFIG_TMDB.maximoPeliculas
      );
      resultadosTotales = respTv.resultados;
      totalPaginas = respTv.totalPaginas;
      completadoConMejores = respTv.completadoConMejores;
    } else if (modo === "all") {
      const mitad = Math.ceil(CONFIG_TMDB.maximoPeliculas / 2);
      const [respCine, respTv] = await Promise.all([
        consultarDiscoverPorTipo(
          "movie",
          receta.parametrosTMDB,
          apiKey,
          paginaSolicitada,
          vistasClaves,
          mitad
        ),
        consultarDiscoverPorTipo(
          "tv",
          receta.parametrosTMDBTv,
          apiKey,
          paginaSolicitada,
          vistasClaves,
          mitad
        )
      ]);
      resultadosTotales = intercalarResultados(respCine.resultados, respTv.resultados);
      totalPaginas = Math.max(respCine.totalPaginas, respTv.totalPaginas);
      completadoConMejores = respCine.completadoConMejores || respTv.completadoConMejores;
    } else {
      const respCine = await consultarDiscoverPorTipo(
        "movie",
        receta.parametrosTMDB,
        apiKey,
        paginaSolicitada,
        vistasClaves,
        CONFIG_TMDB.maximoPeliculas
      );
      resultadosTotales = respCine.resultados;
      totalPaginas = respCine.totalPaginas;
      completadoConMejores = respCine.completadoConMejores;
    }

    estado.paginaActualTMDB = paginaSolicitada;
    estado.totalPaginasTMDB = totalPaginas;

    if (completadoConMejores) {
      subtituloPeliculas.textContent = `${etiquetaModo} · ${receta.titulo} (${receta.subtitulo}) · Nota mínima ${receta.notaMinima.toFixed(1)}${textoFiltros} (completado con los mejor valorados)`;
    }

    estado.peliculasCandidatas = resultadosTotales;
    renderizarCarteleraFiltrada();
    actualizarBarraOtroLote();
    if (cuadriculaPeliculas.children.length > 0) {
      tituloPeliculas.focus({ preventScroll: true });
    }
  } catch (error) {
    cuadriculaPeliculas.replaceChildren();
    badgeContadorPeliculas.textContent = "Aviso de conexión";
    feedbackPeliculas.classList.add("is-error");

    if (error instanceof Error && error.message === "CLAVE_INVALIDA") {
      if (conProxy && !apiKey) {
        feedbackPeliculas.textContent =
          "⚠️ La conexión segura del servidor con TMDB ha rechazado la clave (error 401). Revisa la variable TMDB_API_KEY en Netlify.";
      } else {
        feedbackPeliculas.textContent =
          "⚠️ TMDB ha rechazado la API Key (error 401). Revisa que hayas copiado entera tu «Clave de la API (v3)» o el «Token de acceso de lectura» en la cajita de arriba sin espacios extra.";
        actualizarEstadoVisualLlave(true);
      }
    } else if (error instanceof Error && error.message === "HTTP_500" && conProxy) {
      feedbackPeliculas.textContent =
        "⚠️ El proxy seguro de Netlify devolvió un error (500). Verifica que la variable de entorno TMDB_API_KEY esté configurada.";
    } else {
      feedbackPeliculas.textContent =
        "⚠️ No pudimos conectar con TMDB en este momento. Comprueba tu conexión a internet o tu API Key e inténtalo de nuevo.";
    }
    feedbackPeliculas.hidden = false;
  } finally {
    cuadriculaPeliculas.setAttribute("aria-busy", "false");
    estado.buscandoPeliculas = false;
    botonBuscarPeliculas.disabled = false;
    botonOtroLote.disabled = false;
    botonBuscarPeliculas.textContent = textoOriginalBoton;
  }
}

/**
 * Dibuja tarjetas esqueleto animadas en la cartelera mientras TMDB responde (Fase 13).
 * Cada tarjeta es decorativa (aria-hidden="true") y la cuadrícula anuncia aria-busy="true".
 */
function mostrarEsqueletosCartelera(cantidad = 6) {
  cuadriculaPeliculas.setAttribute("aria-busy", "true");
  const fragmento = document.createDocumentFragment();

  for (let i = 0; i < cantidad; i += 1) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "movie-card-skeleton";
    tarjeta.setAttribute("aria-hidden", "true");

    const poster = document.createElement("div");
    poster.className = "skeleton-block skeleton-poster";

    const cuerpo = document.createElement("div");
    cuerpo.className = "skeleton-card-body";

    const titulo = document.createElement("div");
    titulo.className = "skeleton-block skeleton-title";

    const meta = document.createElement("div");
    meta.className = "skeleton-meta-row";
    const pill1 = document.createElement("div");
    pill1.className = "skeleton-block skeleton-pill";
    const pill2 = document.createElement("div");
    pill2.className = "skeleton-block skeleton-pill skeleton-pill-wide";
    meta.append(pill1, pill2);

    const linea1 = document.createElement("div");
    linea1.className = "skeleton-block skeleton-line";
    const linea2 = document.createElement("div");
    linea2.className = "skeleton-block skeleton-line skeleton-line-short";

    const boton = document.createElement("div");
    boton.className = "skeleton-block skeleton-btn";

    cuerpo.append(titulo, meta, linea1, linea2, boton);
    tarjeta.append(poster, cuerpo);
    fragmento.appendChild(tarjeta);
  }

  cuadriculaPeliculas.replaceChildren(fragmento);
}

/* --------------------------------------------------------------------------
   6B. VENTANA MODAL DE DETALLES, TRÁILER Y "¿DÓNDE VERLA?" (FASE 4)
   -------------------------------------------------------------------------- */

/**
 * Convierte minutos (ej. 114) en un texto cómodo de leer (ej. "1 h 54 min").
 */
function formatearDuracion(minutos) {
  if (!minutos || Number(minutos) <= 0) return "Duración s/d";
  const horas = Math.floor(minutos / 60);
  const resto = minutos % 60;
  if (horas === 0) return `${resto} min`;
  if (resto === 0) return `${horas} h`;
  return `${horas} h ${resto} min`;
}

/**
 * Busca el mejor tráiler de YouTube dentro de la lista de vídeos de TMDB.
 */
function elegirMejorTrailer(listaVideos) {
  if (!Array.isArray(listaVideos) || listaVideos.length === 0) return null;
  const deYoutube = listaVideos.filter((v) => v.site === "YouTube" && v.key);
  if (deYoutube.length === 0) return null;

  return (
    deYoutube.find((v) => v.type === "Trailer" && v.official) ||
    deYoutube.find((v) => v.type === "Trailer") ||
    deYoutube.find((v) => v.type === "Teaser") ||
    deYoutube[0]
  );
}

/**
 * Construye un enlace directo a la película en la plataforma correspondiente
 * (o a la ficha oficial de TMDB/JustWatch de esa película si no tenemos buscador directo).
 */
function construirEnlacePlataforma(nombrePlataforma, tituloPelicula, enlaceRespaldo) {
  const nombre = (nombrePlataforma || "").toLowerCase();
  const q = encodeURIComponent(tituloPelicula || "");

  if (nombre.includes("netflix")) return `https://www.netflix.com/search?q=${q}`;
  if (nombre.includes("amazon") || nombre.includes("prime video")) {
    return `https://www.primevideo.com/search?phrase=${q}`;
  }
  if (nombre.includes("disney")) return `https://www.disneyplus.com/es-es/search?q=${q}`;
  if (nombre.includes("max") || nombre.includes("hbo")) {
    return `https://www.max.com/es/es/search?q=${q}`;
  }
  if (nombre.includes("filmin")) return `https://www.filmin.es/buscar?q=${q}`;
  if (nombre.includes("movistar")) return `https://ver.movistarplus.es/busqueda?q=${q}`;
  if (nombre.includes("apple tv")) return `https://tv.apple.com/es/search?term=${q}`;
  if (nombre.includes("google play")) {
    return `https://play.google.com/store/search?q=${q}&c=movies`;
  }
  if (nombre.includes("rakuten")) return `https://www.rakuten.tv/es/search?q=${q}`;
  if (nombre.includes("skyshowtime")) return `https://www.skyshowtime.com/es/search?q=${q}`;
  if (nombre.includes("youtube")) {
    return `https://www.youtube.com/results?search_query=${q}+pelicula`;
  }

  return enlaceRespaldo || `https://www.themoviedb.org/search?query=${q}`;
}

/**
 * Dibuja las plataformas de streaming (suscripción, gratis y compra) para el país elegido.
 * Nota: Omitimos "Alquiler" para mantener la ficha más limpia.
 */
function pintarProveedoresStreaming(proveedoresPais, tituloPelicula) {
  proveedoresDialog.replaceChildren();
  paisDialog.textContent = `(${CONFIG_TMDB.nombrePaisStreaming})`;

  if (!proveedoresPais) {
    const aviso = document.createElement("p");
    aviso.className = "providers-empty";
    aviso.textContent = `TMDB no tiene registradas plataformas de streaming activas en ${CONFIG_TMDB.nombrePaisStreaming} para esta película en este momento.`;
    proveedoresDialog.appendChild(aviso);
    return;
  }

  // AQUÍ PUEDES ACTIVAR O QUITAR CATEGORÍAS (flatrate = suscripción, free = gratis, buy = compra)
  const categorias = [
    { clave: "flatrate", titulo: "Incluida con suscripción" },
    { clave: "free", titulo: "Gratis" },
    { clave: "buy", titulo: "Compra" }
  ];

  let hayAlguno = false;

  categorias.forEach(({ clave, titulo }) => {
    const lista = proveedoresPais[clave];
    if (!Array.isArray(lista) || lista.length === 0) return;
    hayAlguno = true;

    const grupo = document.createElement("div");
    grupo.className = "provider-group";

    const etiqueta = document.createElement("span");
    etiqueta.className = "provider-group-label";
    etiqueta.textContent = titulo;

    const ul = document.createElement("ul");
    ul.className = "provider-list";
    ul.setAttribute("role", "list");

    lista.forEach((prov) => {
      const li = document.createElement("li");

      const enlace = document.createElement("a");
      enlace.className = "provider-pill provider-pill-link";
      enlace.href = construirEnlacePlataforma(
        prov.provider_name,
        tituloPelicula,
        proveedoresPais.link
      );
      enlace.target = "_blank";
      enlace.rel = "noopener noreferrer";
      enlace.setAttribute("aria-label", `Ver ${tituloPelicula} en ${prov.provider_name}`);

      if (prov.logo_path) {
        const logo = document.createElement("img");
        logo.className = "provider-logo";
        logo.src = `${CONFIG_TMDB.urlBaseLogo}${prov.logo_path}`;
        logo.alt = prov.provider_name;
        logo.width = 26;
        logo.height = 26;
        enlace.appendChild(logo);
      }

      const nombre = document.createElement("span");
      nombre.textContent = `${prov.provider_name} ↗`;
      enlace.appendChild(nombre);

      li.appendChild(enlace);
      ul.appendChild(li);
    });

    grupo.append(etiqueta, ul);
    proveedoresDialog.appendChild(grupo);
  });

  if (!hayAlguno) {
    const aviso = document.createElement("p");
    aviso.className = "providers-empty";
    aviso.textContent = `No aparece disponible en suscripción ni compra en ${CONFIG_TMDB.nombrePaisStreaming} ahora mismo.`;
    proveedoresDialog.appendChild(aviso);
  }

  if (proveedoresPais.link) {
    const enlace = document.createElement("a");
    enlace.className = "providers-justwatch-link";
    enlace.href = proveedoresPais.link;
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";
    enlace.textContent = "Ver ficha de disponibilidad completa en TMDB / JustWatch ↗";
    proveedoresDialog.appendChild(enlace);
  }
}

/**
 * Dibuja el reproductor de YouTube del tráiler o un enlace directo si no hay tráiler oficial.
 */
function pintarTrailer(videoYoutube, tituloPelicula) {
  trailerDialog.replaceChildren();

  if (videoYoutube && videoYoutube.key) {
    const urlWatch = `https://www.youtube.com/watch?v=${encodeURIComponent(videoYoutube.key)}`;
    enlaceYoutubeDialog.href = urlWatch;
    enlaceYoutubeDialog.hidden = false;

    const marco = document.createElement("div");
    marco.className = "trailer-frame-wrap";

    const iframe = document.createElement("iframe");
    iframe.className = "trailer-frame";
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoYoutube.key)}?rel=0`;
    iframe.title = `Tráiler de ${tituloPelicula}`;
    iframe.loading = "lazy";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    marco.appendChild(iframe);
    trailerDialog.appendChild(marco);
  } else {
    enlaceYoutubeDialog.hidden = true;

    const aviso = document.createElement("p");
    aviso.className = "trailer-empty";
    aviso.textContent =
      "TMDB no tiene un tráiler enlazado para esta película, pero puedes buscarlo directamente en YouTube:";

    const buscarLink = document.createElement("a");
    buscarLink.className = "providers-justwatch-link";
    buscarLink.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${tituloPelicula} trailer español`)}`;
    buscarLink.target = "_blank";
    buscarLink.rel = "noopener noreferrer";
    buscarLink.textContent = `🔎 Buscar tráiler de «${tituloPelicula}» en YouTube ↗`;

    trailerDialog.append(aviso, buscarLink);
  }
}

/**
 * Dibuja la información básica de la película o serie en el modal mientras llegan los detalles completos.
 */
function pintarCabeceraBaseDialog(itemBruto) {
  const pelicula = normalizarItemTMDB(itemBruto);
  const esSerie = pelicula.media_type === "tv";
  const titulo = pelicula.title;
  const anio = pelicula.release_date ? pelicula.release_date.slice(0, 4) : "Año s/d";
  const nota =
    typeof pelicula.vote_average === "number" && pelicula.vote_average > 0
      ? `⭐ ${pelicula.vote_average.toFixed(1)}`
      : "⭐ Sin nota";

  eyebrowDialog.textContent = esSerie ? "Ficha de serie · TMDB" : "Ficha de cine · TMDB";
  tituloDialog.textContent = titulo;

  // Póster
  contenedorPosterDialog.replaceChildren();
  if (pelicula.poster_path) {
    const img = document.createElement("img");
    img.src = `${CONFIG_TMDB.urlBasePoster}${pelicula.poster_path}`;
    img.alt = `Póster de ${titulo}`;
    img.width = 500;
    img.height = 750;
    contenedorPosterDialog.appendChild(img);
  } else {
    const fallback = document.createElement("div");
    fallback.className = "movie-dialog-poster-fallback";
    const emoji = document.createElement("span");
    emoji.className = "poster-fallback-emoji";
    emoji.setAttribute("aria-hidden", "true");
    emoji.textContent = esSerie ? "📺" : "🎬";
    const txt = document.createElement("span");
    txt.className = "poster-fallback-text";
    txt.textContent = "Sin póster";
    fallback.append(emoji, txt);
    contenedorPosterDialog.appendChild(fallback);
  }

  // Metadatos iniciales
  metaDialog.replaceChildren();
  const badgeFormato = crearInsigniaFormato(pelicula.media_type);
  const badgeAnio = document.createElement("span");
  badgeAnio.className = "movie-year-badge";
  badgeAnio.textContent = anio;
  const badgeNota = document.createElement("span");
  badgeNota.className = "movie-score-badge";
  badgeNota.textContent = nota;
  metaDialog.append(badgeFormato, badgeAnio, badgeNota);

  generosDialog.replaceChildren();
  fraseDialog.hidden = true;
  sinopsisDialog.textContent =
    pelicula.overview && pelicula.overview.trim().length > 0
      ? pelicula.overview.trim()
      : "Cargando sinopsis completa...";

  proveedoresDialog.replaceChildren();
  trailerDialog.replaceChildren();
  enlaceYoutubeDialog.hidden = true;
}

/**
 * Dibuja esqueletos animados dentro de la ficha modal mientras llegan los detalles
 * (géneros, reparto/dirección, plataformas de streaming y tráiler) (Fase 13).
 */
function mostrarEsqueletosModal() {
  cuerpoDialog.setAttribute("aria-busy", "true");

  // Esqueletos de géneros
  const fragGeneros = document.createDocumentFragment();
  for (let i = 0; i < 3; i += 1) {
    const li = document.createElement("li");
    li.className = "skeleton-block skeleton-pill";
    li.setAttribute("aria-hidden", "true");
    fragGeneros.appendChild(li);
  }
  generosDialog.replaceChildren(fragGeneros);

  // Esqueletos de reparto y dirección
  if (seccionCreditosDialog && creditosDialog) {
    seccionCreditosDialog.hidden = false;
    const rejilla = document.createElement("div");
    rejilla.className = "skeleton-cast-grid";
    rejilla.setAttribute("aria-hidden", "true");
    for (let i = 0; i < 4; i += 1) {
      const chip = document.createElement("div");
      chip.className = "skeleton-cast-chip";
      const avatar = document.createElement("div");
      avatar.className = "skeleton-block skeleton-avatar";
      const lineas = document.createElement("div");
      lineas.className = "skeleton-cast-lines";
      const l1 = document.createElement("div");
      l1.className = "skeleton-block skeleton-line";
      const l2 = document.createElement("div");
      l2.className = "skeleton-block skeleton-line skeleton-line-short";
      lineas.append(l1, l2);
      chip.append(avatar, lineas);
      rejilla.appendChild(chip);
    }
    creditosDialog.replaceChildren(rejilla);
  }

  // Esqueletos de plataformas de streaming
  const filaProv = document.createElement("div");
  filaProv.className = "skeleton-providers-row";
  filaProv.setAttribute("aria-hidden", "true");
  for (let i = 0; i < 3; i += 1) {
    const p = document.createElement("div");
    p.className = "skeleton-block skeleton-pill skeleton-pill-wide";
    filaProv.appendChild(p);
  }
  proveedoresDialog.replaceChildren(filaProv);

  // Esqueleto 16:9 del tráiler
  const cajaTrailer = document.createElement("div");
  cajaTrailer.className = "skeleton-block skeleton-trailer-box";
  cajaTrailer.setAttribute("aria-hidden", "true");
  trailerDialog.replaceChildren(cajaTrailer);
}

/**
 * Dibuja la dirección (o creación en series) y el reparto principal usando `credits` de TMDB (Fase 13).
 * AQUÍ PUEDES CAMBIAR EL MÁXIMO DE ACTORES QUE SE MUESTRAN (por defecto 6).
 */
function pintarCreditos(detalle, esSerie) {
  if (!seccionCreditosDialog || !creditosDialog) return;

  const creditos = detalle.credits || {};
  const crew = Array.isArray(creditos.crew) ? creditos.crew : [];
  const cast = Array.isArray(creditos.cast) ? creditos.cast : [];

  // Dirección en películas; en series priorizamos "created_by" y si no hay, buscamos dirección en crew
  let etiquetaEquipo = "🎬 Dirección:";
  let nombresEquipo = [];

  if (esSerie && Array.isArray(detalle.created_by) && detalle.created_by.length > 0) {
    etiquetaEquipo = "🎬 Creación:";
    nombresEquipo = detalle.created_by.map((p) => p.name).filter(Boolean).slice(0, 3);
  } else {
    const directores = crew
      .filter((p) => p.job === "Director" && p.name)
      .map((p) => p.name);
    nombresEquipo = [...new Set(directores)].slice(0, 3);
    if (nombresEquipo.length === 0 && esSerie) {
      etiquetaEquipo = "🎬 Producción ejecutiva:";
      const prod = crew
        .filter((p) => p.job === "Executive Producer" && p.name)
        .map((p) => p.name);
      nombresEquipo = [...new Set(prod)].slice(0, 3);
    }
  }

  const repartoPrincipal = cast.filter((a) => a && a.name).slice(0, 6);

  if (nombresEquipo.length === 0 && repartoPrincipal.length === 0) {
    seccionCreditosDialog.hidden = true;
    creditosDialog.replaceChildren();
    return;
  }

  seccionCreditosDialog.hidden = false;
  const fragmento = document.createDocumentFragment();

  if (nombresEquipo.length > 0) {
    const filaDir = document.createElement("div");
    filaDir.className = "credits-director-row";

    const spanLabel = document.createElement("span");
    spanLabel.className = "credits-director-label";
    spanLabel.textContent = etiquetaEquipo;

    const spanNombres = document.createElement("span");
    spanNombres.className = "credits-director-names";
    spanNombres.textContent = nombresEquipo.join(", ");

    filaDir.append(spanLabel, spanNombres);
    fragmento.appendChild(filaDir);
  }

  if (repartoPrincipal.length > 0) {
    const listaCast = document.createElement("ul");
    listaCast.className = "credits-cast-grid";
    listaCast.setAttribute("role", "list");

    for (const actor of repartoPrincipal) {
      const li = document.createElement("li");
      li.className = "cast-card";

      if (actor.profile_path) {
        const img = document.createElement("img");
        img.className = "cast-avatar";
        img.src = `https://image.tmdb.org/t/p/w185${actor.profile_path}`;
        img.alt = actor.name;
        img.width = 44;
        img.height = 44;
        img.loading = "lazy";
        li.appendChild(img);
      } else {
        const inicial = document.createElement("span");
        inicial.className = "cast-avatar cast-avatar-fallback";
        inicial.setAttribute("aria-hidden", "true");
        inicial.textContent = actor.name.trim().charAt(0).toUpperCase() || "🎭";
        li.appendChild(inicial);
      }

      const info = document.createElement("div");
      info.className = "cast-info";

      const nombre = document.createElement("span");
      nombre.className = "cast-name";
      nombre.textContent = actor.name;
      nombre.title = actor.name;
      info.appendChild(nombre);

      if (actor.character && actor.character.trim()) {
        const personaje = document.createElement("span");
        personaje.className = "cast-character";
        personaje.textContent = actor.character.trim();
        personaje.title = actor.character.trim();
        info.appendChild(personaje);
      }

      li.appendChild(info);
      listaCast.appendChild(li);
    }

    fragmento.appendChild(listaCast);
  }

  creditosDialog.replaceChildren(fragmento);
}

/**
 * Abre el <dialog> nativo con la ficha completa de la película o serie:
 * sinopsis completa, duración o temporadas/episodios, géneros, plataformas de streaming y tráiler.
 */
async function abrirDetallesPelicula(itemBaseBruto, esDesdeParecida = false) {
  if (!itemBaseBruto || !itemBaseBruto.id) return;

  const apiKey = obtenerLlaveTmdb();
  if (!apiKey && !usarProxyServidor()) return;

  const peliculaBase = normalizarItemTMDB(itemBaseBruto);
  const esSerie = peliculaBase.media_type === "tv";
  const endpointBase = esSerie ? `/tv/${peliculaBase.id}` : `/movie/${peliculaBase.id}`;
  const claveUnica = obtenerClaveItem(peliculaBase);

  estado.peliculaModalActual = peliculaBase;
  estado.cargandoDetalleId = claveUnica;

  if (!esDesdeParecida) {
    estado.historialSimilares = [claveUnica];
  } else if (!estado.historialSimilares.includes(claveUnica)) {
    estado.historialSimilares.push(claveUnica);
  }

  pintarCabeceraBaseDialog(peliculaBase);
  mostrarEsqueletosModal();
  actualizarBotonFavoritoDialog(peliculaBase);
  restablecerBotonCompartir();

  estadoDialog.classList.remove("is-error");
  estadoDialog.textContent = esSerie
    ? "⏳ Cargando reparto, temporadas, tráiler y plataformas de streaming..."
    : "⏳ Cargando reparto, duración, tráiler y plataformas de streaming...";
  estadoDialog.hidden = false;
  cuerpoDialog.hidden = false;

  if (!dialogDetalle.open) {
    dialogDetalle.showModal();
  }
  dialogDetalle.scrollTop = 0;

  try {
    const { url, opcionesFetch } = prepararPeticionTMDB(endpointBase, apiKey, {
      language: "es-ES",
      append_to_response: "videos,watch/providers,credits"
    });

    const resp = await fetch(url, opcionesFetch);
    if (!resp.ok) throw new Error(`HTTP_${resp.status}`);
    const detalleRaw = await resp.json();
    const detalle = normalizarItemTMDB(detalleRaw, peliculaBase.media_type);

    // Si el usuario ya cambió a otro título mientras cargaba, ignoramos esta respuesta antigua
    if (estado.cargandoDetalleId !== claveUnica) return;

    estado.peliculaModalActual = detalle;
    actualizarBotonFavoritoDialog(detalle);
    const titulo = detalle.title;
    const anio = detalle.release_date ? detalle.release_date.slice(0, 4) : "Año s/d";
    const nota =
      typeof detalle.vote_average === "number" && detalle.vote_average > 0
        ? `⭐ ${detalle.vote_average.toFixed(1)}`
        : "⭐ Sin nota";

    tituloDialog.textContent = titulo;
    const prefijoFicha = esSerie ? "Ficha de serie" : "Ficha de cine";
    eyebrowDialog.textContent =
      detalle.original_title && detalle.original_title !== titulo
        ? `${prefijoFicha} · Título original: ${detalle.original_title}`
        : `${prefijoFicha} · TMDB`;

    // Metadatos completos (formato, año, duración o temporadas/episodios, y nota)
    metaDialog.replaceChildren();
    const bFormato = crearInsigniaFormato(detalle.media_type);

    const bAnio = document.createElement("span");
    bAnio.className = "movie-year-badge";
    bAnio.textContent = anio;

    metaDialog.append(bFormato, bAnio);

    if (esSerie) {
      const textoTemp = formatearResumenTemporadas(
        detalle.number_of_seasons,
        detalle.number_of_episodes,
        false
      );
      if (textoTemp) {
        const bTemporadas = document.createElement("span");
        bTemporadas.className = "tv-seasons-badge";
        bTemporadas.textContent = `📺 ${textoTemp}`;
        metaDialog.appendChild(bTemporadas);
      }
      const duracionEp =
        Array.isArray(detalle.episode_run_time) && detalle.episode_run_time.length > 0
          ? detalle.episode_run_time[0]
          : null;
      if (duracionEp) {
        const bDuracionEp = document.createElement("span");
        bDuracionEp.className = "movie-year-badge";
        bDuracionEp.textContent = `⏱️ ~${duracionEp} min/ep.`;
        metaDialog.appendChild(bDuracionEp);
      }
    } else {
      const bDuracion = document.createElement("span");
      bDuracion.className = "movie-year-badge";
      bDuracion.textContent = `⏱️ ${formatearDuracion(detalle.runtime)}`;
      metaDialog.appendChild(bDuracion);
    }

    const bNota = document.createElement("span");
    bNota.className = "movie-score-badge";
    bNota.textContent = nota;
    metaDialog.appendChild(bNota);

    // Géneros del título (cine o TV)
    const diccionarioGeneros = esSerie ? GENEROS_TMDB_TV : GENEROS_TMDB;
    if (Array.isArray(detalle.genres) && detalle.genres.length > 0) {
      generosDialog.replaceChildren(
        ...detalle.genres.map((g) =>
          crearEtiquetaGenero(
            {
              id: g.id,
              nombre: diccionarioGeneros[g.id]?.nombre || g.name,
              emoji: diccionarioGeneros[g.id]?.emoji || (esSerie ? "📺" : "🎬")
            },
            "include"
          )
        )
      );
    }

    // Frase promocional (tagline) si existe
    if (detalle.tagline && detalle.tagline.trim()) {
      fraseDialog.textContent = `«${detalle.tagline.trim()}»`;
      fraseDialog.hidden = false;
    } else {
      fraseDialog.hidden = true;
    }

    // Sinopsis completa
    sinopsisDialog.textContent =
      detalle.overview && detalle.overview.trim().length > 0
        ? detalle.overview.trim()
        : esSerie
          ? "TMDB aún no tiene una sinopsis completa en español para esta serie."
          : "TMDB aún no tiene una sinopsis completa en español para esta película.";

    // Reparto principal y dirección/creación (Fase 13 · credits de TMDB)
    pintarCreditos(detalle, esSerie);

    // Plataformas de streaming en el país configurado (ej. ES)
    const mapaProveedores = detalle["watch/providers"]?.results || {};
    pintarProveedoresStreaming(mapaProveedores[CONFIG_TMDB.paisStreaming] || null, titulo);

    // Tráiler en español (y si no hay, buscamos en inglés como respaldo)
    let mejorTrailer = elegirMejorTrailer(detalle.videos?.results);
    if (!mejorTrailer) {
      const { url: urlVideosEn, opcionesFetch: opcEn } = prepararPeticionTMDB(
        `${endpointBase}/videos`,
        apiKey,
        { language: "en-US" }
      );
      const respVideosEn = await fetch(urlVideosEn, opcEn);
      if (respVideosEn.ok) {
        const datosVideosEn = await respVideosEn.json();
        mejorTrailer = elegirMejorTrailer(datosVideosEn.results);
      }
    }

    if (estado.cargandoDetalleId !== claveUnica) return;
    pintarTrailer(mejorTrailer, titulo);

    cuerpoDialog.setAttribute("aria-busy", "false");
    estadoDialog.hidden = true;
  } catch {
    if (estado.cargandoDetalleId !== claveUnica) return;
    cuerpoDialog.setAttribute("aria-busy", "false");
    if (seccionCreditosDialog && creditosDialog) {
      seccionCreditosDialog.hidden = true;
      creditosDialog.replaceChildren();
    }
    proveedoresDialog.replaceChildren();
    trailerDialog.replaceChildren();
    estadoDialog.classList.add("is-error");
    estadoDialog.textContent =
      "⚠️ No pudimos cargar todos los detalles extra (reparto, tráiler y streaming) desde TMDB. Puedes intentarlo de nuevo en unos segundos.";
    estadoDialog.hidden = false;
  }
}

/**
 * Busca en TMDB una película o serie parecida a la que está abierta en el modal
 * (evitando repetir títulos ya vistos o ya abiertos en este recorrido).
 */
async function abrirPeliculaParecida() {
  const actual = estado.peliculaModalActual;
  const apiKey = obtenerLlaveTmdb();
  if (!actual || !actual.id || (!apiKey && !usarProxyServidor())) return;

  const tipoActual = obtenerTipoContenido(actual);
  const endpointBase = tipoActual === "tv" ? `/tv/${actual.id}` : `/movie/${actual.id}`;

  const textoOriginal = botonOtraParecida.textContent;
  botonOtraParecida.disabled = true;
  botonOtraParecida.textContent = "⏳ Buscando parecida...";

  try {
    const vistasClaves = new Set(obtenerPeliculasVistas().map((p) => obtenerClaveItem(p)));
    const descartarClaves = new Set([...vistasClaves, ...estado.historialSimilares]);

    const { url, opcionesFetch } = prepararPeticionTMDB(
      `${endpointBase}/recommendations`,
      apiKey,
      { language: "es-ES", page: "1" }
    );
    const resp = await fetch(url, opcionesFetch);
    let candidatas = [];

    if (resp.ok) {
      const datos = await resp.json();
      if (Array.isArray(datos.results)) {
        candidatas = datos.results.map((item) => normalizarItemTMDB(item, tipoActual));
      }
    }

    let elegida = candidatas.find((p) => !descartarClaves.has(obtenerClaveItem(p)));

    // Si /recommendations no devuelve ninguna nueva, probamos con /similar
    if (!elegida) {
      const { url: urlSim, opcionesFetch: opcSim } = prepararPeticionTMDB(
        `${endpointBase}/similar`,
        apiKey,
        { language: "es-ES", page: "1" }
      );
      const respSim = await fetch(urlSim, opcSim);
      if (respSim.ok) {
        const datosSim = await respSim.json();
        if (Array.isArray(datosSim.results)) {
          elegida = datosSim.results
            .map((item) => normalizarItemTMDB(item, tipoActual))
            .find((p) => !descartarClaves.has(obtenerClaveItem(p)));
        }
      }
    }

    if (elegida) {
      await abrirDetallesPelicula(elegida, true);
    } else {
      estadoDialog.classList.remove("is-error");
      estadoDialog.textContent =
        tipoActual === "tv"
          ? "📺 No encontramos más series parecidas nuevas para esta ficha. Prueba a cerrar y ver otro lote."
          : "🎬 No encontramos más películas parecidas nuevas para esta ficha. Prueba a cerrar y pulsar «Ver otro lote».";
      estadoDialog.hidden = false;
    }
  } catch {
    estadoDialog.classList.add("is-error");
    estadoDialog.textContent =
      "⚠️ No pudimos buscar una recomendación parecida en este momento.";
    estadoDialog.hidden = false;
  } finally {
    botonOtraParecida.disabled = false;
    botonOtraParecida.textContent = textoOriginal;
  }
}

/* --------------------------------------------------------------------------
   6C. MI BOTIQUÍN DE PELÍCULAS, FILTROS MÁGICOS Y TOASTS (FASE 5)
   -------------------------------------------------------------------------- */

/**
 * Lee tus películas favoritas guardadas en localStorage ("Mi Botiquín").
 */
function obtenerBotiquin() {
  try {
    const raw = localStorage.getItem(CONFIG_TMDB.claveBotiquinStorage);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Guarda la lista actualizada de "Mi Botiquín" en localStorage.
 */
function guardarBotiquin(lista) {
  try {
    localStorage.setItem(CONFIG_TMDB.claveBotiquinStorage, JSON.stringify(lista));
  } catch {
    // Si localStorage está restringido, seguimos funcionando en memoria
  }
}

/**
 * Comprueba si una película o serie ya está guardada en "Mi Botiquín".
 */
function estaEnBotiquin(itemOId, tipoPorDefecto = "movie") {
  const claveObjetivo = obtenerClaveItem(itemOId, tipoPorDefecto);
  return obtenerBotiquin().some((p) => obtenerClaveItem(p) === claveObjetivo);
}

/**
 * Anuncia mensajes a lectores de pantalla usando ariaNotify() con respaldo aria-live.
 */
function anunciarAccesible(mensaje) {
  if (typeof document.ariaNotify === "function") {
    document.ariaNotify(mensaje);
  } else if (respaldoLiveToast) {
    respaldoLiveToast.textContent = "";
    requestAnimationFrame(() => {
      respaldoLiveToast.textContent = mensaje;
    });
  }
}

let contadorToastId = 0;

/**
 * Muestra una notificación toast accesible (popover="manual") con botón de cierre explícito
 * y soporte opcional para un botón de acción (por ejemplo, «↩️ Deshacer»).
 * Nunca se muestra mientras un diálogo modal esté abierto.
 */
function mostrarToast(mensaje, opciones = {}) {
  if (!regionToast || dialogDetalle.open) {
    anunciarAccesible(mensaje);
    return;
  }

  const {
    accionTexto = "",
    alPulsarAccion = null,
    duracionMs = accionTexto ? 6000 : 4000,
  } = opciones;

  // Retiramos toasts anteriores para evitar solapamientos
  regionToast.querySelectorAll(".toast-item").forEach((el) => {
    try {
      el.hidePopover?.();
    } catch {
      // Ignorar si ya estaba oculto
    }
    el.remove();
  });

  contadorToastId += 1;
  const toastId = `plan-diario-toast-${contadorToastId}`;
  const focoPrevio = document.activeElement;

  const toast = document.createElement("div");
  toast.id = toastId;
  toast.className = "toast-item";
  toast.setAttribute("popover", "manual");

  const texto = document.createElement("span");
  texto.className = "toast-text";
  texto.textContent = mensaje;

  const acciones = document.createElement("div");
  acciones.className = "toast-actions";

  let temporizador = null;
  let ratonEncima = false;

  const cerrarToast = (devolverFoco = false) => {
    if (temporizador) clearTimeout(temporizador);
    try {
      toast.hidePopover?.();
    } catch {
      // Respaldo si el navegador aún está cargando el polyfill
    }
    toast.remove();
    if (devolverFoco && focoPrevio instanceof HTMLElement && document.contains(focoPrevio)) {
      focoPrevio.focus();
    }
  };

  if (accionTexto && typeof alPulsarAccion === "function") {
    const btnAccion = document.createElement("button");
    btnAccion.type = "button";
    btnAccion.className = "toast-action-btn";
    btnAccion.textContent = accionTexto;
    let ejecutada = false;
    btnAccion.addEventListener("click", () => {
      if (ejecutada) return;
      ejecutada = true;
      cerrarToast(true);
      alPulsarAccion();
    });
    acciones.appendChild(btnAccion);
  }

  const btnCerrar = document.createElement("button");
  btnCerrar.type = "button";
  btnCerrar.className = "toast-close-btn";
  btnCerrar.setAttribute("popovertarget", toastId);
  btnCerrar.setAttribute("popovertargetaction", "hide");
  btnCerrar.setAttribute("aria-label", "Cerrar notificación");
  btnCerrar.textContent = "✕";

  btnCerrar.addEventListener("click", () => {
    cerrarToast(true);
  });

  acciones.appendChild(btnCerrar);
  toast.append(texto, acciones);
  regionToast.appendChild(toast);

  toast.addEventListener("pointerenter", () => {
    ratonEncima = true;
  });
  toast.addEventListener("pointerleave", () => {
    ratonEncima = false;
  });

  try {
    toast.showPopover?.();
  } catch {
    toast.classList.add(":popover-open");
  }

  anunciarAccesible(mensaje);

  // Cierre automático suave (se pausa si el usuario tiene el foco o el cursor dentro del toast)
  const programarCierre = () => {
    temporizador = setTimeout(() => {
      if (ratonEncima || toast.contains(document.activeElement)) {
        programarCierre();
      } else {
        cerrarToast(false);
      }
    }, duracionMs);
  };
  programarCierre();
}

/**
 * Actualiza el botón de favorito dentro del modal de detalles.
 */
function actualizarBotonFavoritoDialog(pelicula) {
  if (!botonFavoritoDialog || !pelicula || !pelicula.id) return;
  const guardada = estaEnBotiquin(pelicula);
  botonFavoritoDialog.setAttribute("aria-pressed", guardada ? "true" : "false");
  botonFavoritoDialog.textContent = guardada
    ? "💖 En mi Botiquín"
    : "🤍 Guardar en mi Botiquín";
}

/**
 * Sincroniza todos los botones de favorito visibles en la cartelera y en el modal.
 */
function sincronizarBotonesFavorito(itemOClave) {
  const clave =
    typeof itemOClave === "string" && itemOClave.includes(":")
      ? itemOClave
      : obtenerClaveItem(itemOClave);
  const guardada = obtenerBotiquin().some((p) => obtenerClaveItem(p) === clave);
  document.querySelectorAll(`.btn-favorite[data-fav-key="${clave}"]`).forEach((btn) => {
    btn.setAttribute("aria-pressed", guardada ? "true" : "false");
    btn.textContent = guardada ? "💖 En mi Botiquín" : "🤍 Guardar en mi Botiquín";
  });
  if (estado.peliculaModalActual && obtenerClaveItem(estado.peliculaModalActual) === clave) {
    actualizarBotonFavoritoDialog(estado.peliculaModalActual);
  }
}

/**
 * Añade o quita una película o serie de "Mi Botiquín" en localStorage.
 */
function alternarFavoritaEnBotiquin(itemBruto, origenEsModal = false) {
  if (!itemBruto || !itemBruto.id) return;
  const pelicula = normalizarItemTMDB(itemBruto);
  const claveUnica = obtenerClaveItem(pelicula);
  const lista = obtenerBotiquin();
  const indice = lista.findIndex((p) => obtenerClaveItem(p) === claveUnica);
  const titulo = pelicula.title;

  if (indice >= 0) {
    lista.splice(indice, 1);
    guardarBotiquin(lista);
    sincronizarBotonesFavorito(claveUnica);
    renderizarBotiquin();
    if (!origenEsModal) {
      mostrarToast(`💔 Has quitado «${titulo}» de Mi Botiquín.`);
    } else {
      anunciarAccesible(`Quitado ${titulo} de Mi Botiquín.`);
    }
    return;
  }

  const etiquetaPuente =
    estado.actual && estado.destino
      ? `${EMOCIONES_ACTUALES[estado.actual].emoji} ${EMOCIONES_ACTUALES[estado.actual].nombre} ➔ ${DESTINOS_EMOCIONALES[estado.destino].emoji} ${DESTINOS_EMOCIONALES[estado.destino].nombre}`
      : "";

  lista.unshift({
    id: pelicula.id,
    media_type: pelicula.media_type,
    title: titulo,
    original_title: pelicula.original_title,
    release_date: pelicula.release_date,
    vote_average: typeof pelicula.vote_average === "number" ? pelicula.vote_average : 0,
    poster_path: pelicula.poster_path || "",
    overview: pelicula.overview || "",
    number_of_seasons: pelicula.number_of_seasons,
    number_of_episodes: pelicula.number_of_episodes,
    puenteLabel: etiquetaPuente
  });

  guardarBotiquin(lista);
  sincronizarBotonesFavorito(claveUnica);
  renderizarBotiquin();
  if (!origenEsModal) {
    const tipoTexto = pelicula.media_type === "tv" ? "Serie" : "Película";
    mostrarToast(`💖 ${tipoTexto} «${titulo}» guardada en Mi Botiquín.`);
  } else {
    anunciarAccesible(`${titulo} guardado en Mi Botiquín.`);
  }
}

/**
 * Crea una tarjeta de película o serie para la sección "Mi Botiquín".
 */
function crearTarjetaBotiquin(itemBruto) {
  const { tarjeta, pieTarjeta, pelicula, titulo } = crearTarjetaBase(itemBruto, {
    sinopsisVacia:
      "Guardado en tu Botiquín personal. Pulsa «Ver detalles y tráiler» para ver dónde verlo hoy.",
    emojiRespaldo: "💊",
    textoRespaldo: "Sin póster",
    mostrarPuente: true
  });

  const botonQuitar = document.createElement("button");
  botonQuitar.type = "button";
  botonQuitar.className = "btn-watched";
  botonQuitar.textContent = "💔 Quitar del Botiquín";
  botonQuitar.setAttribute("aria-label", `Quitar ${titulo} de Mi Botiquín`);
  botonQuitar.addEventListener("click", () => {
    alternarFavoritaEnBotiquin(pelicula, false);
  });

  pieTarjeta.appendChild(botonQuitar);
  return tarjeta;
}

/**
 * Dibuja la sección "Mi Botiquín" y actualiza los contadores.
 */
function renderizarBotiquin() {
  const favoritas = obtenerBotiquin();
  const total = favoritas.length;

  contadorNavBotiquin.textContent = String(total);
  badgeContadorBotiquin.textContent =
    total === 1 ? "1 título guardado" : `${total} títulos guardados`;
  botonVaciarBotiquin.hidden = total === 0;

  if (total === 0) {
    estadoVacioBotiquin.hidden = false;
    cuadriculaBotiquin.hidden = true;
    cuadriculaBotiquin.replaceChildren();
    return;
  }

  estadoVacioBotiquin.hidden = true;
  cuadriculaBotiquin.hidden = false;
  cuadriculaBotiquin.replaceChildren(...favoritas.map(crearTarjetaBotiquin));
}

/**
 * Actualiza la etiqueta de cuántos filtros rápidos opcionales están activos.
 */
function actualizarIndicadorFiltros() {
  const activos = [
    estado.filtros.tiempo !== "cualquiera",
    estado.filtros.energia !== "cualquiera",
    estado.filtros.compania !== "cualquiera"
  ].filter(Boolean).length;

  badgeFiltrosActivos.hidden = activos === 0;
  botonLimpiarFiltros.hidden = activos === 0;
  if (activos > 0) {
    badgeFiltrosActivos.textContent = activos === 1 ? "1 filtro activo" : `${activos} filtros activos`;
  }

  /* Actualizamos también el contador del botón superior "🪄 Filtros opcionales" (Fase 9) */
  if (contadorNavFiltros) {
    contadorNavFiltros.hidden = activos === 0;
    contadorNavFiltros.textContent = String(activos);
  }
  if (botonNavFiltros) {
    botonNavFiltros.classList.toggle("has-active-filters", activos > 0);
  }
}

/**
 * Recalcula y repinta la receta cuando el usuario toca algún filtro rápido opcional.
 */
function aplicarCambioFiltroMagico() {
  actualizarIndicadorFiltros();
  if (estado.actual && estado.destino && estado.recetaVisible) {
    estado.recetaActual = construirReceta(estado.actual, estado.destino);
    pintarReceta(estado.recetaActual);
  }
}

/**
 * Restaura todos los filtros rápidos opcionales a "Cualquiera".
 */
function limpiarFiltrosMagicos() {
  estado.filtros.tiempo = "cualquiera";
  estado.filtros.energia = "cualquiera";
  estado.filtros.compania = "cualquiera";

  document.getElementById("time-any").checked = true;
  document.getElementById("energy-any").checked = true;
  document.getElementById("company-any").checked = true;

  aplicarCambioFiltroMagico();
}

/* --------------------------------------------------------------------------
   7. ESCUCHAMOS LOS CLICS DEL USUARIO
   -------------------------------------------------------------------------- */
botonesActual.forEach((boton) => {
  boton.addEventListener("click", () => {
    const elegida = boton.dataset.current;
    // Si vuelves a pulsar la misma tarjeta, se desmarca; si no, se selecciona
    estado.actual = estado.actual === elegida ? null : elegida;
    actualizarBotones(botonesActual, "current", estado.actual);
    actualizarResumen();
  });
});

botonesDestino.forEach((boton) => {
  boton.addEventListener("click", () => {
    const elegida = boton.dataset.target;
    estado.destino = estado.destino === elegida ? null : elegida;
    actualizarBotones(botonesDestino, "target", estado.destino);
    actualizarResumen();
  });
});

botonSiguienteFase.addEventListener("click", () => {
  if (!estado.actual || !estado.destino) return;

  estado.recetaActual = construirReceta(estado.actual, estado.destino);
  pintarReceta(estado.recetaActual);
  estado.recetaVisible = true;
  botonSiguienteFase.setAttribute("aria-expanded", "true");
  showElement(tarjetaReceta);

  tarjetaReceta.scrollIntoView({ behavior: comportamientoScroll(), block: "nearest" });
  tituloReceta.focus({ preventScroll: true });
});

botonBuscarPeliculas.addEventListener("click", () => {
  buscarPeliculasEnTMDB(1);
});

botonOtroLote.addEventListener("click", () => {
  const maxLotes = Math.min(estado.totalPaginasTMDB, 20);
  const siguientePagina = estado.paginaActualTMDB >= maxLotes ? 1 : estado.paginaActualTMDB + 1;
  buscarPeliculasEnTMDB(siguientePagina);
});

botonOtraParecida.addEventListener("click", () => {
  abrirPeliculaParecida();
});

botonYaVistaDialog.addEventListener("click", () => {
  const actual = estado.peliculaModalActual;
  if (!actual || !actual.id) return;
  const normalizado = normalizarItemTMDB(actual);
  const anio = normalizado.release_date ? normalizado.release_date.slice(0, 4) : "Año s/d";
  marcarPeliculaComoVista({
    id: normalizado.id,
    media_type: normalizado.media_type,
    titulo: normalizado.title,
    anio
  });
  dialogDetalle.close("watched");
});

botonFavoritoDialog.addEventListener("click", () => {
  const actual = estado.peliculaModalActual;
  if (!actual || !actual.id) return;
  alternarFavoritaEnBotiquin(actual, true);
});

/* ==========================================================================
   FASE 11: BOTÓN "📤 COMPARTIR PLAN" (WHATSAPP / HOJA NATIVA / PORTAPAPELES)
   ==========================================================================
   Aquí puedes cambiar el enlace público o el formato del mensaje compartido. */
const URL_PUBLICA_PLAN_DIARIO = "https://el-plan-diario.netlify.app";
let temporizadorCompartir = null;
let ultimoMensajeCompartir = "";

/**
 * Extrae hasta 4 nombres de plataformas disponibles en España (priorizando suscripción y gratis).
 */
function obtenerNombresPlataformasParaCompartir(pelicula) {
  const proveedoresPais = pelicula?.["watch/providers"]?.results?.[CONFIG_TMDB.paisStreaming];
  if (!proveedoresPais) return [];

  const gruposPrioritarios = [
    ...(proveedoresPais.flatrate || []),
    ...(proveedoresPais.free || []),
    ...(proveedoresPais.ads || [])
  ];
  const gruposAlquilerCompra = [
    ...(proveedoresPais.rent || []),
    ...(proveedoresPais.buy || [])
  ];
  const listaFuente = gruposPrioritarios.length > 0 ? gruposPrioritarios : gruposAlquilerCompra;

  const nombresUnicos = [];
  for (const prov of listaFuente) {
    if (prov?.provider_name && !nombresUnicos.includes(prov.provider_name)) {
      nombresUnicos.push(prov.provider_name);
      if (nombresUnicos.length >= 4) break;
    }
  }
  return nombresUnicos;
}

/**
 * Construye un mensaje acogedor listo para WhatsApp, Telegram o portapapeles.
 */
function construirTextoCompartirPlan(pelicula) {
  const normalizada = normalizarItemTMDB(pelicula);
  const esSerie = normalizada.media_type === "tv";
  const iconoTipo = esSerie ? "📺" : "🎬";
  const anio = normalizada.release_date ? normalizada.release_date.slice(0, 4) : "";
  const lineaTitulo = anio
    ? `${iconoTipo} Plan para hoy: ${normalizada.title} (${anio})`
    : `${iconoTipo} Plan para hoy: ${normalizada.title}`;

  const lineas = [lineaTitulo];

  if (typeof normalizada.vote_average === "number" && normalizada.vote_average > 0) {
    lineas.push(`⭐ ${normalizada.vote_average.toFixed(1)} / 10`);
  }

  const plataformas = obtenerNombresPlataformasParaCompartir(pelicula);
  if (plataformas.length > 0) {
    lineas.push(`📺 Disponible en: ${plataformas.join(", ")}`);
  }

  if (estado.actual && estado.destino && EMOCIONES_ACTUALES[estado.actual] && DESTINOS_EMOCIONALES[estado.destino]) {
    const origen = EMOCIONES_ACTUALES[estado.actual].nombre;
    const destino = DESTINOS_EMOCIONALES[estado.destino].nombre;
    lineas.push(`💛 Plan: ${origen} ➔ ${destino}`);
  }

  lineas.push("");
  lineas.push(`✨ Descubre el tuyo en El Plan Diario: ${URL_PUBLICA_PLAN_DIARIO}`);

  return {
    titulo: `${normalizada.title} — El Plan Diario`,
    texto: lineas.join("\n")
  };
}

/**
 * Respaldo clásico de copiado cuando navigator.clipboard no está disponible o bloqueado.
 * Restaura siempre el foco previo para no interrumpir la navegación por teclado.
 */
function copiarConRespaldoLegacy(texto) {
  const focoPrevio = document.activeElement;
  const campo = Object.assign(document.createElement("textarea"), { value: texto });
  campo.setAttribute("readonly", "");
  campo.style.cssText = "position:fixed;inset-block-start:0;opacity:0";
  document.body.append(campo);
  campo.select();
  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    campo.remove();
    focoPrevio?.focus({ preventScroll: true });
  }
}

/**
 * Restablece el botón de compartir a su estado inicial (sin deshabilitarlo nunca).
 */
function restablecerBotonCompartir() {
  if (!botonCompartirDialog) return;
  clearTimeout(temporizadorCompartir);
  temporizadorCompartir = null;
  botonCompartirDialog.removeAttribute("data-copied");
  botonCompartirDialog.removeAttribute("data-failed");
  botonCompartirDialog.textContent = "📤 Compartir plan";
}

/**
 * Muestra confirmación visual en el propio botón y la anuncia a lectores de pantalla.
 * No deshabilita el botón para conservar el foco del teclado y permitir reintentos.
 */
function mostrarFeedbackBotonCompartir(exito, etiquetaVisible, mensajeAccesible) {
  if (!botonCompartirDialog) return;
  clearTimeout(temporizadorCompartir);
  botonCompartirDialog.removeAttribute("data-copied");
  botonCompartirDialog.removeAttribute("data-failed");

  botonCompartirDialog.setAttribute(exito ? "data-copied" : "data-failed", "");
  botonCompartirDialog.textContent = etiquetaVisible;

  // Evitamos que VoiceOver ignore anuncios idénticos consecutivos
  let aviso = mensajeAccesible;
  if (aviso === ultimoMensajeCompartir) {
    aviso += "\u00A0";
  }
  ultimoMensajeCompartir = aviso;
  anunciarAccesible(aviso);

  temporizadorCompartir = setTimeout(() => {
    restablecerBotonCompartir();
  }, 2500);
}

/**
 * Comparte la película o serie abierta usando Web Share API en móvil o portapapeles en escritorio.
 */
async function compartirPlanActual() {
  const actual = estado.peliculaModalActual;
  if (!actual || !actual.id) return;

  const { titulo, texto } = construirTextoCompartirPlan(actual);

  // 1. Si el dispositivo soporta compartir nativo (móviles Android/iOS, Safari, etc.)
  if (typeof navigator.share === "function") {
    try {
      await navigator.share({ title: titulo, text: texto });
      mostrarFeedbackBotonCompartir(true, "✅ ¡Plan compartido!", "Plan compartido.");
      return;
    } catch (error) {
      // Si el usuario cerró la hoja de compartir voluntariamente, no hacemos nada
      if (error && error.name === "AbortError") {
        return;
      }
      // Si falló por otro motivo, caemos al copiado al portapapeles
    }
  }

  // 2. Respaldo en escritorio: copiar al portapapeles
  let copiado = false;
  try {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      await navigator.clipboard.writeText(texto);
      copiado = true;
    } else {
      copiado = copiarConRespaldoLegacy(texto);
    }
  } catch {
    copiado = copiarConRespaldoLegacy(texto);
  }

  if (copiado) {
    mostrarFeedbackBotonCompartir(
      true,
      "✅ ¡Plan copiado!",
      "Plan copiado al portapapeles. Ya puedes pegarlo en WhatsApp o donde quieras."
    );
  } else {
    mostrarFeedbackBotonCompartir(
      false,
      "⚠️ No se pudo copiar",
      "No se pudo copiar el plan al portapapeles."
    );
  }
}

if (botonCompartirDialog) {
  botonCompartirDialog.addEventListener("click", compartirPlanActual);
}

/* Escuchamos el selector rápido Películas | Series | Todo (Fase 7) */
radiosTipoContenido.forEach((radio) => {
  radio.addEventListener("change", () => {
    estado.tipoContenido = radio.value;
    actualizarTextosPorFormato();
    if (estado.actual && estado.destino && estado.recetaVisible) {
      estado.recetaActual = construirReceta(estado.actual, estado.destino);
      pintarReceta(estado.recetaActual);
    }
    const etiquetaToast =
      radio.value === "tv"
        ? "📺 Modo Series activado"
        : radio.value === "all"
          ? "✨ Modo Películas y Series activado"
          : "🎬 Modo Películas activado";
    mostrarToast(etiquetaToast);
  });
});

/* Escuchamos los filtros rápidos opcionales (sin auto-enviar la búsqueda) */
radiosFiltroTiempo.forEach((radio) => {
  radio.addEventListener("change", () => {
    estado.filtros.tiempo = radio.value;
    aplicarCambioFiltroMagico();
  });
});

radiosFiltroEnergia.forEach((radio) => {
  radio.addEventListener("change", () => {
    estado.filtros.energia = radio.value;
    aplicarCambioFiltroMagico();
  });
});

radiosFiltroCompania.forEach((radio) => {
  radio.addEventListener("change", () => {
    estado.filtros.compania = radio.value;
    aplicarCambioFiltroMagico();
  });
});

botonLimpiarFiltros.addEventListener("click", () => {
  limpiarFiltrosMagicos();
});

/* Respaldo para abrir Mi Botiquín si el navegador aún no soporta commandfor/command */
botonNavBotiquin.addEventListener("click", () => {
  if (dialogBotiquin && !dialogBotiquin.open) {
    dialogBotiquin.showModal();
  }
});

botonVaciarBotiquin.addEventListener("click", () => {
  const anteriores = obtenerBotiquin();
  if (anteriores.length === 0) return;

  guardarBotiquin([]);
  anteriores.forEach((p) => sincronizarBotonesFavorito(obtenerClaveItem(p)));
  renderizarBotiquin();

  // Toast con botón «Deshacer» para recuperar Mi Botiquín si se pulsó sin querer
  mostrarToast("🧹 Se ha vaciado Mi Botiquín.", {
    accionTexto: "↩️ Deshacer",
    alPulsarAccion: () => {
      guardarBotiquin(anteriores);
      anteriores.forEach((p) => sincronizarBotonesFavorito(obtenerClaveItem(p)));
      renderizarBotiquin();
      mostrarToast("💖 ¡Botiquín restaurado!");
    },
  });
});

/* Al cerrar el <dialog>, detenemos el vídeo de YouTube y reiniciamos returnValue */
dialogDetalle.addEventListener("close", () => {
  trailerDialog.replaceChildren();
  estado.cargandoDetalleId = null;
  restablecerBotonCompartir();
  dialogDetalle.returnValue = "";
});

/* Respaldo de cierre al hacer clic fuera para navegadores que aún no soporten closedby="any" (ej. Safari) */
if (!("closedBy" in HTMLDialogElement.prototype)) {
  const fueraDelDialogo = (evento, dialogo) => {
    const rect = dialogo.getBoundingClientRect();
    return (
      evento.clientX < rect.left ||
      evento.clientX > rect.right ||
      evento.clientY < rect.top ||
      evento.clientY > rect.bottom
    );
  };

  [dialogDetalle, dialogFiltros, dialogBotiquin].forEach((dialogo) => {
    if (!dialogo) return;
    let pulsoFuera = false;
    dialogo.addEventListener("pointerdown", (evento) => {
      pulsoFuera = fueraDelDialogo(evento, dialogo);
    });
    dialogo.addEventListener("pointerup", (evento) => {
      if (pulsoFuera && fueraDelDialogo(evento, dialogo)) {
        dialogo.close();
      }
    });
  });
}

botonGuardarLlave.addEventListener("click", () => {
  guardarLlaveDesdeInput();
});

inputLlaveTmdb.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    evento.preventDefault();
    guardarLlaveDesdeInput();
  }
});

botonVisibilidadLlave.addEventListener("click", () => {
  const esOculta = inputLlaveTmdb.type === "password";
  inputLlaveTmdb.type = esOculta ? "text" : "password";
  botonVisibilidadLlave.textContent = esOculta ? "Ocultar" : "Mostrar";
});

botonAlternarFormularioLlave.addEventListener("click", () => {
  const estabaOculto = formularioLlaveTmdb.hidden;
  formularioLlaveTmdb.hidden = !estabaOculto;
  botonAlternarFormularioLlave.textContent = estabaOculto ? "Ocultar" : "Cambiar llave";
  if (estabaOculto) {
    inputLlaveTmdb.focus();
  }
});

botonBorrarLlave.addEventListener("click", () => {
  try {
    localStorage.removeItem(CONFIG_TMDB.claveStorage);
  } catch {
    // Ignorar error si localStorage está restringido
  }
  CONFIG_TMDB.llavePorDefecto = "";
  inputLlaveTmdb.value = "";
  avisoFase3.textContent = "🗑️ Se ha borrado la API Key activa en esta sesión.";
  avisoFase3.hidden = false;
  seccionPeliculas.hidden = true;
  actualizarEstadoVisualLlave(true);
});

inputNotaMinima.addEventListener("input", () => {
  if (!estado.recetaActual) return;

  const nuevaNota = Number(inputNotaMinima.value);
  estado.notaMinimaPersonalizada = nuevaNota;
  estado.recetaActual.notaMinima = nuevaNota;
  estado.recetaActual.parametrosTMDB.vote_average_gte = nuevaNota;
  if (estado.recetaActual.parametrosTMDBTv) {
    estado.recetaActual.parametrosTMDBTv.vote_average_gte = nuevaNota;
  }

  actualizarVistaNota(
    nuevaNota,
    estado.recetaActual.notaSugerida,
    estado.tipoContenido === "tv"
      ? estado.recetaActual.parametrosTMDBTv.vote_count_gte
      : estado.recetaActual.parametrosTMDB.vote_count_gte
  );
  avisoFase3.hidden = true;
});

botonRestaurarNota.addEventListener("click", () => {
  if (!estado.recetaActual) return;

  estado.notaMinimaPersonalizada = null;
  const sugerida = estado.recetaActual.notaSugerida;
  estado.recetaActual.notaMinima = sugerida;
  estado.recetaActual.parametrosTMDB.vote_average_gte = sugerida;
  if (estado.recetaActual.parametrosTMDBTv) {
    estado.recetaActual.parametrosTMDBTv.vote_average_gte = sugerida;
  }

  actualizarVistaNota(
    sugerida,
    sugerida,
    estado.tipoContenido === "tv"
      ? estado.recetaActual.parametrosTMDBTv.vote_count_gte
      : estado.recetaActual.parametrosTMDB.vote_count_gte
  );
  avisoFase3.hidden = true;
});

botonCambiarEmociones.addEventListener("click", () => {
  pasoActualSeccion.scrollIntoView({ behavior: comportamientoScroll(), block: "start" });
});

botonReiniciar.addEventListener("click", () => {
  estado.actual = null;
  estado.destino = null;
  estado.notaMinimaPersonalizada = null;
  limpiarFiltrosMagicos();
  actualizarBotones(botonesActual, "current", null);
  actualizarBotones(botonesDestino, "target", null);
  actualizarResumen();
});

botonLimpiarVistas.addEventListener("click", () => {
  const anteriores = obtenerPeliculasVistas();
  if (anteriores.length === 0) return;

  guardarPeliculasVistas([]);
  renderizarCarteleraFiltrada();

  // Toast con botón «Deshacer» para recuperar los títulos vistos si se pulsó sin querer
  mostrarToast("👁️ Se han restaurado todos los títulos vistos.", {
    accionTexto: "↩️ Deshacer",
    alPulsarAccion: () => {
      guardarPeliculasVistas(anteriores);
      renderizarCarteleraFiltrada();
      mostrarToast("👁️ Lista de títulos vistos recuperada.");
    },
  });
});

/* ==========================================================================
   MODO CINE NOCTURNO (FASE 6 — RESPETA EL SISTEMA Y GUARDA EN localStorage)
   ========================================================================== */
const CLAVE_COLOR_SCHEME = "color-scheme";
const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
const metaThemeColor = document.getElementById("meta-theme-color");
const botonTemaNocturno = document.getElementById("theme-toggle-btn");

function obtenerEsquemaSistema() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function obtenerEsquemaGuardado() {
  try {
    const valor = localStorage.getItem(CLAVE_COLOR_SCHEME);
    return valor === "dark" || valor === "light" ? valor : null;
  } catch {
    return null;
  }
}

function aplicarEsquemaColor(valorGuardado) {
  const esquemaEfectivo = valorGuardado ?? obtenerEsquemaSistema();
  if (metaColorScheme) {
    metaColorScheme.content = valorGuardado ?? "light dark";
  }
  if (valorGuardado === "dark" || valorGuardado === "light") {
    document.documentElement.dataset.theme = valorGuardado;
  } else {
    delete document.documentElement.dataset.theme;
  }
  if (metaThemeColor) {
    metaThemeColor.content = esquemaEfectivo === "dark" ? "#0f0d15" : "#fff8f0";
  }
}

if (botonTemaNocturno) {
  botonTemaNocturno.addEventListener("click", () => {
    const sistema = obtenerEsquemaSistema();
    const actual = obtenerEsquemaGuardado() ?? sistema;
    const objetivo = actual === "dark" ? "light" : "dark";

    if (objetivo !== sistema) {
      try {
        localStorage.setItem(CLAVE_COLOR_SCHEME, objetivo);
      } catch {
        // Aunque localStorage esté bloqueado, aplicamos el tema en la sesión actual
      }
      aplicarEsquemaColor(objetivo);
    } else {
      try {
        localStorage.removeItem(CLAVE_COLOR_SCHEME);
      } catch {
        // Ignorar si localStorage no está disponible
      }
      aplicarEsquemaColor(null);
    }

    mostrarToast(
      objetivo === "dark"
        ? "🌙 Modo Cine Nocturno activado"
        : "☀️ Modo día activado"
    );
  });
}

/* Mantiene sincronizado el modo día/noche si lo cambias en otra pestaña */
window.addEventListener("storage", (evento) => {
  if (evento.key === CLAVE_COLOR_SCHEME) {
    aplicarEsquemaColor(obtenerEsquemaGuardado());
  }
});

/* ==========================================================================
   BOTÓN «🎲 SORPRÉNDEME HOY» EN 1 CLIC (FASE 15)
   ==========================================================================
   AQUÍ PUEDES AÑADIR O QUITAR PUENTES EMOCIONALES PARA EL BOTÓN SORPRESA.
   Cada pareja combina una emoción actual (Paso 1) con un destino (Paso 2).
   ========================================================================== */
const PUENTES_SORPRESA_ACOGEDORES = [
  { actual: "agotado", destino: "abrazo" },
  { actual: "agotado", destino: "reir" },
  { actual: "estresado", destino: "reir" },
  { actual: "estresado", destino: "abrazo" },
  { actual: "melancolico", destino: "abrazo" },
  { actual: "aburrido", destino: "aventura" },
  { actual: "feliz", destino: "reir" },
  { actual: "curioso", destino: "inspiracion" },
  { actual: "curioso", destino: "misterio" },
  { actual: "agotado", destino: "inspiracion" }
];

const botonSorprendemeHoy = document.getElementById("surprise-today-btn");

async function activarPlanSorpresaHoy() {
  if (estado.buscandoPeliculas) return;

  // Evitamos repetir exactamente el mismo puente si ya había uno seleccionado
  const opcionesDisponibles = PUENTES_SORPRESA_ACOGEDORES.filter(
    (p) => p.actual !== estado.actual || p.destino !== estado.destino
  );
  const pool = opcionesDisponibles.length > 0 ? opcionesDisponibles : PUENTES_SORPRESA_ACOGEDORES;
  const elegido = pool[Math.floor(Math.random() * pool.length)];

  estado.actual = elegido.actual;
  estado.destino = elegido.destino;
  estado.notaMinimaPersonalizada = null;

  actualizarBotones(botonesActual, "current", estado.actual);
  actualizarBotones(botonesDestino, "target", estado.destino);
  actualizarResumen();

  // Desplegamos también la Receta Emocional automáticamente para que funcione en 1 solo clic
  estado.recetaActual = construirReceta(estado.actual, estado.destino);
  pintarReceta(estado.recetaActual);
  estado.recetaVisible = true;
  botonSiguienteFase.setAttribute("aria-expanded", "true");
  showElement(tarjetaReceta);

  const actualInfo = EMOCIONES_ACTUALES[estado.actual];
  const destinoInfo = DESTINOS_EMOCIONALES[estado.destino];
  if (actualInfo && destinoInfo) {
    mostrarToast(
      `🎲 Plan sorpresa: ${actualInfo.emoji} ${actualInfo.nombre} ➔ ${destinoInfo.emoji} ${destinoInfo.nombre}`
    );
  }

  const etiquetaBoton = botonSorprendemeHoy
    ? botonSorprendemeHoy.querySelector(".surprise-label")
    : null;
  const textoOriginal = etiquetaBoton ? etiquetaBoton.textContent : "Sorpréndeme hoy";

  if (botonSorprendemeHoy) {
    botonSorprendemeHoy.disabled = true;
    if (etiquetaBoton) {
      etiquetaBoton.textContent = "Preparando tu sorpresa...";
    }
  }

  try {
    await buscarPeliculasEnTMDB(1);

    // Opción B: si cargaron títulos en la cartelera, abrimos directamente 1 al azar listo para ver
    const vistasClaves = new Set(obtenerPeliculasVistas().map((p) => obtenerClaveItem(p)));
    const candidatas = (estado.peliculasCandidatas || []).filter(
      (item) => !vistasClaves.has(obtenerClaveItem(item))
    );

    if (candidatas.length > 0) {
      const recomendacionAzar = candidatas[Math.floor(Math.random() * candidatas.length)];
      abrirDetallesPelicula(recomendacionAzar);
    }
  } finally {
    if (botonSorprendemeHoy) {
      botonSorprendemeHoy.disabled = false;
      if (etiquetaBoton) {
        etiquetaBoton.textContent = textoOriginal;
      }
    }
  }
}

if (botonSorprendemeHoy) {
  botonSorprendemeHoy.addEventListener("click", activarPlanSorpresaHoy);
}

// Inicializamos la vista al cargar la página por primera vez
aplicarEsquemaColor(obtenerEsquemaGuardado());
actualizarTextosPorFormato();
actualizarEstadoVisualLlave();
actualizarCajonPeliculasVistas();
actualizarIndicadorFiltros();
renderizarBotiquin();
actualizarResumen();
