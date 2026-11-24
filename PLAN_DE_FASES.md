# Plan de Fases — El Plan Diario

> **Cómo usar este archivo para ahorrar tokens:**
> Cada vez que termines una fase, abre una **nueva conversación (nueva sesión)** en Antigravity, elige el **modelo recomendado** de la tabla de abajo y escribe únicamente la **Frase de Arranque** de la fase que te toca.

---

## Estado Actual del Proyecto

| Fase | Nombre | Estado | Modelo recomendado (ahorro de tokens) | Por qué ese modelo |
| :--- | :--- | :--- | :--- | :--- |
| **Fase 1** | El Escenario y el Puente Emocional | ✅ **COMPLETADA** | *(Ya realizada)* | — |
| **Fase 2** | La Receta Emocional (El Traductor) | ✅ **COMPLETADA** | *(Ya realizada)* | — |
| **Fase 3** | Conexión en Tiempo Real con TMDB | ✅ **COMPLETADA** | *(Ya realizada)* | — |
| **Fase 4** | Detalles de Cine, Tráilers y "¿Dónde verla?" | ✅ **COMPLETADA** | *(Ya realizada)* | — |
| **Fase 5** | **Toques Mágicos y Publicación** | ✅ **COMPLETADA** | *(Ya realizada)* | — |
| **Fase 6** | **Modo Cine Nocturno** 🌙 | ✅ **COMPLETADA** | *(Ya realizada)* | — |
| **Fase 7** | **Películas y Series** 📺 | ✅ **COMPLETADA** | *(Ya realizada)* | — |
| **Fase 8** | **Versión Móvil y Publicación en Netlify** 📱 | ✅ **COMPLETADA** | *(Ya realizada)* | — |
| **Fase 9** | **Botón superior de «Filtros opcionales»** 🪄 | ✅ **COMPLETADA** | *(Ya realizada)* | — |
| **Fase 10** | **Corrección de errores críticos (Contraste Modo Noche y Proxy seguro TMDB)** 🛡️ | ✅ **COMPLETADA** | *(Ya realizada)* | — |
| **Fase 11** | **Botón «📤 Compartir plan» (WhatsApp / Copiar)** 📤 | ✅ **COMPLETADA** | *(Ya realizada)* | — |
| **Fase 12** | **Pulido de calidad, accesibilidad, SEO y móvil** ✨ | ✅ **COMPLETADA** | *(Ya realizada)* | — |
| **Fase 13** | **Experiencia Cine Premium (Esqueletos animados + Reparto y dirección)** 🎭 | ✅ **COMPLETADA** | *(Ya realizada)* | — |
| **Fase 14** | **«Deshacer» al vaciar Botiquín/Vistos y control de caja API Key** ↩️ | ✅ **COMPLETADA** | **Gemini 3 Flash** *(o Gemini 4 Neon Low)* | Cambio pequeño y acotado en `app.js`, `styles.css` e `index.html`. |
| **Fase 15** | **Botón «🎲 Sorpréndeme hoy» (1 clic)** 🎲 | ✅ **COMPLETADA** | **Gemini 3 Flash** *(o Gemini 4 Neon Low)* | Botón en cabecera que elige un puente acogedor al azar, carga TMDB y abre 1 recomendación aleatoria lista para ver. |
| **Fase 16** | **Panel modal «💊 Mi Botiquín»** 💊 | ✅ **COMPLETADA** | **Gemini 3 Flash** *(o Gemini 4 Neon Low)* | Convierte Mi Botiquín en un panel modal `<dialog>` que se abre directamente desde la cabecera en lugar de estar al final de la página. |

---

## Frases de Arranque Rápido

- **Para empezar la Fase 8:** `Ejecuta la Fase 8 de PLAN_DE_FASES.md`
- **Para empezar la Fase 9:** `Ejecuta la Fase 9 de PLAN_DE_FASES.md`
- **Para empezar la Fase 11:** `Ejecuta la Fase 11 de PLAN_DE_FASES.md`

---

## Especificación Detallada por Fase (Para el Agente)

### ✅ Fase 1: El Escenario y el Puente Emocional — COMPLETADA
- **Archivos creados:** `index.html`, `styles.css`, `app.js`
- **Qué hace:** Selector de 6 emociones actuales (*Paso 1*) y 6 destinos emocionales (*Paso 2*), cambio dinámico de color ambiental acogedor y resumen del **Puente Emocional**.

---

### ✅ Fase 2: La Receta Emocional (El Traductor) — COMPLETADA
- **Archivos actualizados:** `index.html`, `styles.css`, `app.js`
- **Qué hace:** Traduce las 36 combinaciones posibles del Puente Emocional en una tarjeta visual (**"Tu Receta de Cine para Hoy"**) con géneros ideales y géneros a evitar (con nombres legibles e IDs oficiales de TMDB), ajuste fino según cómo llegas hoy (resolviendo conflictos sin contradicciones), ritmo/tono sugerido, nota mínima y botón preparado para conectar TMDB en la siguiente fase.

---

### ✅ Fase 3: Conexión en Tiempo Real con TMDB — COMPLETADA
- **Archivos actualizados:** `index.html`, `styles.css`, `app.js`
- **Qué hace:** Incluye la caja interactiva para pegar, mostrar/ocultar, guardar o borrar la API Key gratuita de TMDB en `localStorage` (con guía desplegable de 4 pasos en 2 minutos), se conecta en tiempo real a `/3/discover/movie` en español (`language=es-ES`) filtrando por géneros ideales (`with_genres`), géneros evitados (`without_genres`), nota mínima (`vote_average.gte`) y votos mínimos (`vote_count.gte`), y dibuja la cartelera acogedora con pósters reales, año, puntuación y sinopsis corta.

---

### ✅ Fase 4: Detalles de Cine, Tráilers y "¿Dónde verla?" — COMPLETADA
- **Archivos actualizados:** `index.html`, `styles.css`, `app.js`
- **Qué hace:** Al pulsar en cualquier película (póster o botón *"🎬 Ver detalles y tráiler"*), abre un `<dialog>` nativo moderno y acogedor (`showModal()` + `closedby="any"` con respaldo para Safari y bloqueo de scroll por CSS) que muestra sinopsis completa, duración, géneros, plataformas de streaming en España (`/movie/{id}/watch/providers`), tráiler embebido de YouTube (`/movie/{id}/videos` con respaldo en inglés) y botones para **"✨ Dame otra parecida"** y **"👁️ Ya la vi"**. Además, añade el botón **"🔄 Ver otro lote de películas"** para navegar por más páginas de TMDB.

---

### ✅ Fase 5: Toques Mágicos y Publicación — COMPLETADA
- **Archivos actualizados:** `index.html`, `styles.css`, `app.js`
- **Qué hace:** Añade la caja opcional de **Toques Mágicos** dentro de la receta (*⏱️ Tiempo disponible*, *🧠 Nivel de energía mental* y *👥 ¿Con quién la ves?*) conectados en vivo a TMDB (`with_runtime.gte` / `with_runtime.lte` y ajuste inteligente de géneros), crea **"💊 Mi Botiquín de Películas"** con persistencia en `localStorage` (botón rápido en la cabecera, guardado desde la cartelera o desde el modal de detalles, etiqueta del puente emocional y notificaciones toast accesibles con `popover="manual"`), y deja la web lista para publicarse gratis en internet (ej. Netlify Drop o GitHub Pages).

---

### ✅ Fase 6: Modo Cine Nocturno — COMPLETADA
- **Archivos actualizados:** `index.html`, `styles.css`, `app.js`
- **Qué hace:** Añade un botón compacto (`🌙 Modo noche` / `☀️ Modo día`) en la barra superior junto a *Mi Botiquín*, aplica una paleta oscura cálida ("sofá y manta", sin negro puro agresivo) con colores emocionales en modo luz tenue usando `color-scheme` y `light-dark()`, respeta la preferencia del sistema la primera vez, evita parpadeos al cargar y guarda la elección del usuario en `localStorage` (sincronizada entre pestañas).

---

### ✅ Fase 7: Películas y Series — COMPLETADA
- **Archivos actualizados:** `index.html`, `styles.css`, `app.js`
- **Qué hace:** Añade un selector rápido (**🎬 Películas** | **📺 Series** | **✨ Todo**) en la cabecera, adapta el Traductor Emocional y los *Toques Mágicos* a los géneros y endpoints de TV de TMDB (`/3/discover/tv`, `/3/tv/{id}`), combina e intercala películas y series en modo *Todo*, muestra temporadas y episodios en tarjetas y modal de detalles, y etiqueta los elementos guardados en *Mi Botiquín* y en *Títulos vistos* como película o serie sin colisiones de ID.

---

### ✅ Fase 8: Versión Móvil y Publicación en Netlify — COMPLETADA
- **Archivos actualizados / creados:** `index.html`, `styles.css`, `manifest.webmanifest`, `icon.svg`, `.gitignore`
- **Qué hace:** Adapta toda la web a pantallas móviles (`360px–430px`) con cabecera ordenada, selector de formato en 3 columnas iguales, cuadrícula emocional de 2 columnas, tamaños táctiles cómodos (`44px`), ventana modal respetando `dvh` y `safe-area-inset`, añade manifiesto PWA (`manifest.webmanifest`) e icono (`icon.svg`) para *"Añadir a pantalla de inicio"*, y publica la web en Netlify (`https://el-plan-diario.netlify.app`).

---

### ✅ Fase 9: Botón superior de «Filtros opcionales» — COMPLETADA
- **Archivos actualizados:** `index.html`, `styles.css`, `app.js`
- **Qué hace:** Añade el botón compacto **«🪄 Filtros opcionales»** en la barra superior (junto a *Mi Botiquín* y *Modo noche*) con contador dinámico de filtros activos, retira la caja fija de *Toques Mágicos* de dentro de la tarjeta de receta para liberar espacio vertical y la muestra dentro de una ventana modal `<dialog>` accesible (`commandfor`/`command` con polyfill condicional y `closedby="any"` con respaldo para Safari), conservando intacta la conexión con TMDB, el botón de limpiar filtros, el *Modo noche* y el diseño móvil (`390×844`), y republica la actualización en **Netlify** (`https://el-plan-diario.netlify.app`).

---

### ✅ Fase 10: Corrección de errores críticos (Contraste Modo Noche y Proxy seguro TMDB) — COMPLETADA
- **Archivos actualizados / creados:** `styles.css`, `app.js`, `netlify/functions/tmdb.mjs`, `netlify.toml`
- **Qué hace:** Define los tokens de contraste `--on-accent-light` (`#ffffff`) y `--on-accent-dark` (`#191622`) con `light-dark()` y respaldos para que todos los botones principales, selector de formato y chips activos tengan texto oscuro legible sobre los acentos luminosos en Modo Noche; oculta `.tmdb-key-box[hidden]` correctamente; retira la API Key pública de `app.js` y crea la Netlify Function `netlify/functions/tmdb.mjs` (`/api/tmdb`) leyendo `TMDB_API_KEY` desde el entorno de Netlify; bloquea el acceso estático a `/netlify/*` en `netlify.toml` y republica la web en **Netlify** (`https://el-plan-diario.netlify.app`).

---

### ✅ Fase 11: Botón «📤 Compartir plan» (WhatsApp / Copiar) — COMPLETADA
- **Archivos actualizados:** `index.html`, `styles.css`, `app.js`
- **Qué hace:** Añade el botón **«📤 Compartir plan»** (`#dialog-share-btn`) en `.movie-dialog-footer` dentro de la ficha modal de detalles; construye un mensaje acogedor con título y año, nota de TMDB, plataformas disponibles en España, puente emocional activo y enlace a `https://el-plan-diario.netlify.app`; usa `navigator.share` en móviles (ignorando `AbortError` al cancelar) y respaldo automático al portapapeles (`navigator.clipboard.writeText` + `execCommand` seguro preservando foco) en escritorio con confirmación visual en el propio botón (`✅ ¡Plan copiado!`) y anuncio accesible, republicado en **Netlify** (`https://el-plan-diario.netlify.app`).

---

### ✅ Fase 12: Pulido de calidad, accesibilidad, SEO y móvil — COMPLETADA
- **Archivos actualizados:** `index.html`, `styles.css`, `app.js`
- **Qué hace:** Corrige el mínimo de votos mostrado en la receta cuando está activo el modo **Series** (`parametrosTMDBTv.vote_count_gte`), unifica las tarjetas de la cartelera y de *Mi Botiquín* en una función compartida `crearTarjetaBase()` eliminando código duplicado, envuelve los pósters clicables en un `<button type="button" class="movie-poster-btn">` accesible por teclado, añade metaetiquetas básicas de SEO y Open Graph (`description`, `og:*`, `twitter:*`), fija el pie del modal de *Filtros opcionales* (`position: sticky; bottom: 0`) para que el botón *«✓ Listo, aplicar filtros»* sea visible sin hacer scroll en móvil (`390×844`) y sustituye los textos internos de desarrollo ("Fase 9...") por textos de producto final.

---

### ✅ Fase 13: Experiencia Cine Premium (Esqueletos animados + Reparto y dirección) — COMPLETADA
- **Archivos actualizados:** `index.html`, `styles.css`, `app.js`, `netlify/functions/tmdb.mjs`
- **Qué hace:** Añade esqueletos de carga animados con brillo suave (`mostrarEsqueletosCartelera` en la cartelera principal y `mostrarEsqueletosModal` en la ficha modal, respetando `prefers-reduced-motion` y `aria-busy`), solicita `credits` junto a vídeos y plataformas en `append_to_response`, y muestra el nuevo bloque **«🎭 Reparto y dirección»** en la ficha modal con la dirección (o creación en series) y hasta 6 intérpretes principales con foto circular o inicial de respaldo, adaptado a Modo Día, Modo Cine Nocturno y móvil.

---

### ✅ Fase 14: «Deshacer» al vaciar Botiquín/Vistos y control de caja API Key — COMPLETADA
- **Archivos actualizados:** `index.html`, `styles.css`, `app.js`
- **Qué hace:** Amplía `mostrarToast()` para admitir un botón de acción opcional (`.toast-action-btn`) con pausa automática al pasar el cursor o enfocar el toast; añade **«↩️ Deshacer»** al vaciar *Mi Botiquín* y al restaurar *Títulos vistos* para recuperar la lista con un clic; y marca `#tmdb-key-box` como `hidden` por defecto en `index.html` para evitar cualquier destello inicial en producción (Netlify).

---

### ✅ Fase 15: Botón «🎲 Sorpréndeme hoy» (1 clic) — COMPLETADA
- **Archivos actualizados:** `index.html`, `styles.css`, `app.js`
- **Qué hace:** Añade el botón **«🎲 Sorpréndeme hoy»** (`#surprise-today-btn`) en la cabecera bajo el selector de formato (*Películas / Series / Todo*). Con 1 solo clic elige al azar un puente emocional acogedor de `PUENTES_SORPRESA_ACOGEDORES` (sin repetir el activo), marca las tarjetas del Paso 1 y Paso 2, despliega automáticamente la Receta Emocional, muestra un aviso *toast* con el puente elegido, consulta la cartelera en TMDB y abre directamente la ficha modal de 1 recomendación aleatoria lista para darle al play (dejando el resto de la cartelera detrás). Adaptado a Modo Cine Nocturno, móvil (`390×844`) y `prefers-reduced-motion`.

---

### ✅ Fase 16: Panel modal «💊 Mi Botiquín» — COMPLETADA
- **Archivos actualizados:** `index.html`, `styles.css`, `app.js`
- **Qué hace:** Retira la sección fija `#botiquin-section` del final de la página y la convierte en un panel modal nativo `<dialog id="botiquin-dialog">` (`closedby="any"` con respaldo Safari y `commandfor`/`command`) que se abre directamente al pulsar **«💊 Mi Botiquín»** en la cabecera, mostrando todas las películas y series guardadas con cabecera, contador, botón de vaciar con *Deshacer* y pie fijo (`sticky`), adaptado a escritorio, Modo Cine Nocturno y móvil (`390×844`).
