# 🤖 Cómo crear tu propio chatbot en 60 minutos

**Archival Microlearning Bytes** · formación en pequeñas dosis, en 60 minutos · Autor: Julio Cerdá Díaz

👉 **Guía completa paso a paso:** https://julcerda.github.io/taller-bot/ (la página de la práctica; su código es [`index.html`](index.html)).

Vas a crear un asistente que responde preguntas sobre los trámites de un ayuntamiento de la Comunidad de Madrid **usando solo la información oficial de su sede electrónica**. No necesitas saber programar.

**Solo necesitas:** una cuenta de Google (Gmail) y un ordenador con Chrome.

---

## Cómo funciona un bot de información pública

![Fuentes → JSON → IA → Respuesta](img/00_mecanica.png)

| Paso | Qué pasa | Dónde lo ves |
|---|---|---|
| 1. **Fuentes** | Eliges páginas oficiales de la sede de tu ayuntamiento | Pestaña «Fuentes», columna A |
| 2. **Extraer** | La IA lee cada página y la ordena en un **JSON** (trámites, requisitos, plazos, enlaces) | Pestaña «Fuentes», columnas E y F, y carpeta «Mi bot · datos JSON» de tu Drive |
| 3. **Responder** | La IA contesta **solo** con esos JSON y te dice de dónde ha sacado el dato | El chat |
| 4. **Comprobar** | Tú compruebas si acierta, si cita la fuente y si se inventa algo | Pestaña «Preguntas» |

---

## Antes de clase (5 minutos)

### Paso A · Consigue tu clave de Gemini (la IA de Google)

1. Entra en **https://aistudio.google.com/apikey** con tu cuenta de Google.
2. Acepta las condiciones si te las pide.
3. Pulsa **«Create API key»** (Crear clave de API).
4. Copia la clave: es un texto largo que empieza por **`AIza…`**. Guárdala en un sitio seguro.

![Crear la clave](img/A_clave.png)

> ⚠️ **No compartas tu clave con nadie.** Y no escribas datos personales en el bot: es una práctica y el nivel gratuito de Gemini puede usar lo que envías para mejorar sus modelos.

---

## En clase

### Paso 1 · Haz tu copia de la hoja del bot

1. Abre el enlace que te dará el profesor: **[Hacer una copia de «Mi bot de sede electrónica»](https://docs.google.com/spreadsheets/d/1QnI9ZlM8_w3Wts7cEsLKG5BV2HEHl_NUp6ng3shXNTo/copy)**.
2. Pulsa **«Hacer una copia»**.

![Hacer una copia](img/01_copia.png)

Se abre tu propia hoja. Arriba verás un menú nuevo: **🤖 Mi bot** (si no aparece, recarga la página y espera unos segundos).

### Paso 2 · Pon tu clave

1. Menú **🤖 Mi bot → 0 · Poner mi clave de Gemini**.
2. La primera vez Google te pide permiso. **Es normal:** el código es tuyo (está en tu copia).
   - Pulsa **Continuar** y elige tu cuenta.
   - Si sale **«Google no ha verificado esta aplicación»**: pulsa **Configuración avanzada** y después **Ir a Mi bot (no seguro)**.
   - Pulsa **Permitir**.
3. Vuelve a pulsar **🤖 Mi bot → 0**, pega tu clave y pulsa **Aceptar**.
4. Debe aparecer **✅ ¡Perfecto! La clave funciona.**

![Permisos](img/02_permisos.png)

### Paso 3 · Elige tu ayuntamiento y carga sus fuentes

1. En la pestaña **Mi bot**, celda amarilla **B5**: elige **el ayuntamiento que te ha tocado** en la lista.
2. Menú **🤖 Mi bot → 1 · Cargar las fuentes de mi ayuntamiento**.
3. En la pestaña **Fuentes** aparecen las páginas oficiales que va a leer tu bot. La columna **C** dice qué es cada una (instancia general, padrón, calendario…).

### Paso 4 · Lee las fuentes (la IA crea los JSON)

1. Menú **🤖 Mi bot → 2 · Leer las fuentes**. Tarda 1 o 2 minutos.
2. Mira la pestaña **Fuentes**:
   - **Columna B**: ✅ si se ha leído bien.
   - **Columna E**: el archivo JSON guardado en tu Drive.
   - **Columna F**: lo que ha entendido la IA. **Esto es lo único que sabrá tu bot.**

![JSON](img/04_json.png)

### Paso 5 · Habla con tu bot

1. Menú **🤖 Mi bot → 3 · Abrir el chat**.
2. Pregunta, por ejemplo: *¿Dónde puedo descargar la instancia general?*
3. Fíjate en la última línea: **Fuente:** con el enlace de donde ha sacado la respuesta.

![Chat](img/05_chat.png)

### Paso 6 · Comprueba si tu bot acierta

1. Menú **🤖 Mi bot → 4 · Probar las 10 preguntas**.
2. En la pestaña **Preguntas**, columna **C**, marca cada respuesta. Para saberlo, abre el enlace de la fuente y compruébalo en la sede:
   - ✅ correcta
   - ❌ incorrecta
   - 🤥 se inventa algo
   - 🤷 dice que no lo sabe
3. La pregunta 10 (el pasaporte) **no es un trámite municipal**: un buen bot debe decir que no lo sabe.

### Paso 7 · Taller de intenciones: entrena a tu bot

1. Menú **🤖 Mi bot → 5 · Taller de intenciones**. Cada fila es una **intención** (algo que quiere el vecino).
2. **Entrena:** en la columna **B**, añade frases nuevas (una por línea) con otras formas de pedir lo mismo. Empieza por la pregunta 5, que no reconoce.
3. **Revisa:** en la columna **C**, escribe tú la respuesta de una intención con la información oficial, y su enlace en la **D**. El bot la usará tal cual, sin IA.
4. Vuelve al chat y repite la pregunta: la línea gris dice qué intención reconoce.
5. Mira la pestaña **Registro** (menú → 6): cada pregunta, la intención reconocida y cómo respondió.

### Paso 8 · Ajusta las instrucciones

Edita la celda amarilla **B11** (Instrucciones del bot) de la pestaña **Mi bot**: por ejemplo, «explica como si hablaras con una persona mayor» o «responde siempre con una lista de pasos». Cambia el saludo en **B13**. Vuelve a probar y anota en la columna **D** de **Preguntas** qué ha cambiado.

---

## Para pensar (debate final)

- Si el bot se equivoca en un plazo, ¿quién es responsable?
- ¿Por qué es importante que el bot **cite la fuente**?
- ¿Debe avisar siempre de que es una inteligencia artificial?
- ¿Qué pasa si la sede cambia y nadie actualiza los JSON?

---

## Para casa: móntalo desde cero

Si quieres entender el código, en la carpeta [`codigo/`](codigo/) están los archivos comentados. Sigue la [guía «Desde cero»](DESDE_CERO.md): hoja nueva, pegar el código y ejecutar `prepararHoja`.

---

## Mira este repositorio de otras formas

Cambia unas letras de la dirección de GitHub:

| Herramienta | Cambio | Qué te enseña |
|---|---|---|
| [GitReverse](https://gitreverse.com/julcerda/taller-bot) | `github` → `gitreverse` | El *prompt* que habría que dar a una IA para crear este proyecto |
| [GitDiagram](https://gitdiagram.com/julcerda/taller-bot) | `hub` → `diagram` | Un diagrama de cómo encajan las piezas |
| [Gitingest](https://gitingest.com/julcerda/taller-bot) | `hub` → `ingest` | Todo el proyecto en un solo texto para pegarlo en una IA |
| [GitMCP](https://gitmcp.io/julcerda/taller-bot) | `github.com` → `gitmcp.io` | El proyecto como fuente que asistentes como Claude pueden consultar |

---

## Si algo falla

| Mensaje | Qué hacer |
|---|---|
| No aparece el menú 🤖 Mi bot | Recarga la página y espera 10 segundos |
| «Falta tu clave de Gemini» | Haz el Paso 2 |
| «Gemini está ocupado» | Espera un minuto y vuelve a intentarlo |
| ❌ «la web respondió 503» | La sede está saturada: espera un poco y repite el paso 4 |
| ❌ «la página casi no tiene texto» | Esa página necesita JavaScript: bórrala o cámbiala por otra |
| «API key not valid» | Vuelve a copiar la clave desde AI Studio (Paso A) |
