# AGENTS.md — Memoria del proyecto "El Plan Diario"

## Arranque rápido de sesión
Al empezar cualquier nueva sesión en este proyecto, **lee primero `PLAN_DE_FASES.md`** para saber qué fase toca ejecutar, su alcance exacto y qué está ya completado.

## Perfil del usuario y forma de trabajar
- **Nivel técnico:** Primer proyecto web; el usuario no sabe programar.
- **Ritmo:** Práctico, visual y **estrictamente paso a paso**.
  - Ejecuta **solo la fase en curso**; no adelantes funciones de fases futuras.
  - Explica las cosas con lenguaje cercano y sin tecnicismos innecesarios.
  - Comenta el código en **español claro**, indicando dónde puede personalizar textos, colores o reglas.
- **Cierre obligatorio de cada fase:**
  1. Verifica la web funcionando en vivo en `http://127.0.0.1:8080` usando el subagente `browser` (`Model: "flash"`).
  2. Entrega al usuario una **"Mini-Guía de Control"** con enlaces `file:///` a las líneas exactas de los archivos modificados.
  3. Actualiza `PLAN_DE_FASES.md` marcando la fase actual como `✅ COMPLETADA` y la siguiente como `⏳ SIGUIENTE`.
  4. Indica al usuario que abra una **nueva sesión**, recomiéndale el **modelo ideal** (según `PLAN_DE_FASES.md`) para ahorrar tokens y dale la frase corta para pegarla al iniciar.

## Proyecto y estética
- **Nombre:** El Plan Diario
- **Concepto:** Recomendador de películas mediante un **Puente Emocional** (*¿Cómo estoy hoy? ➔ ¿Cómo quiero sentirme?*), conectado en fases posteriores a la API gratuita de **TMDB**.
- **Estilo visual:** **Colorido y acogedor** (fondo crema cálido `#fff8f0`, tarjetas pastel muy redondeadas, transiciones suaves de color según la emoción).
- **Tecnología:** HTML (`index.html`), CSS (`styles.css`) y JavaScript (`app.js`) puros, sin frameworks ni bundlers.

## Entorno técnico (Windows)
- **Node.js LTS (`v26.13.1`):** Instalado en `C:\Program Files\nodejs\`. Si en un comando `npx.cmd` o `node` no se reconoce, antepón: `$env:PATH = "C:\Program Files\nodejs;" + $env:PATH`.
- **Plugin `modern-web-guidance`:** Instalado. Úsalo al inicio de cada fase que toque HTML/CSS/JS ejecutando `npx.cmd -y modern-web-guidance@latest ...` (y recuerda incluir la sección `### Modern Web Guidance` al final de la respuesta cuando corresponda).
- **Servidor local:** Si hace falta levantar el servidor estático para `http://127.0.0.1:8080`, sirve la carpeta `c:\Users\Enlin\Desktop\P1E1` con Node.js (o usa el flujo de `iniciar-servidor.bat`).
