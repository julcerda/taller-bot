# Monta tu bot desde cero (para casa)

En clase has usado una copia de la hoja ya preparada. Aquí la construyes tú, pegando el código. Tardas unos 15 minutos.

## 1 · Crea una hoja nueva
1. Entra en **https://sheets.new** con tu cuenta de Google.
2. Ponle nombre arriba a la izquierda, por ejemplo «Mi bot».

## 2 · Abre el editor de código
Menú **Extensiones → Apps Script**. Se abre una pestaña nueva con un archivo `Código.gs`.

## 3 · Pega los archivos
En el GitHub, carpeta [`codigo/`](codigo/), hay cinco archivos. Para cada uno:

| Archivo del GitHub | Qué haces en Apps Script |
|---|---|
| `Codigo.gs` | Borra lo que hay en `Código.gs` y pega el contenido |
| `Preparar.gs` | Pulsa **＋ → Secuencia de comandos**, llámalo `Preparar` y pega |
| `Municipios.gs` | **＋ → Secuencia de comandos**, llámalo `Municipios` y pega |
| `Chat.html` | **＋ → HTML**, llámalo exactamente `Chat` y pega |
| `appsscript.json` | ⚙️ **Configuración del proyecto** → marca «Mostrar el archivo de manifiesto "appsscript.json"» → vuelve al editor (`< >`), abre `appsscript.json`, borra y pega |

Pulsa 💾 **Guardar**.

## 4 · Prepara la hoja
1. Arriba, en la lista de funciones, elige **`prepararHoja`** y pulsa **▶ Ejecutar**.
2. Acepta los permisos (igual que en clase: Configuración avanzada → Ir a… → Permitir).
3. Vuelve a la hoja y recárgala: aparecen las pestañas y el menú **🤖 Mi bot**.

Desde aquí, sigue el README desde el **Paso 2**.

## 5 · Entiende el código
Abre `Codigo.gs` y busca estas cuatro funciones, que son los cuatro pasos del bot:

| Función | Qué hace |
|---|---|
| `textoDeLaPagina(url)` | Descarga la página y se queda solo con el texto |
| `extraerJSON(url, texto)` | Pide a Gemini que ordene ese texto en un JSON |
| `mejorIntencion(pregunta)` | Compara la pregunta con las frases de entrenamiento y busca la intención más parecida |
| `responderConDetalle(pregunta)` | Si hay respuesta revisada la usa; si no, pide a Gemini que conteste solo con los JSON |
| `llamarGemini(prompt)` | La llamada a la IA: envía un texto y recibe la respuesta |

**Reto:** en `respuestaIA`, cambia las «REGLAS FIJAS» para que el bot responda siempre en forma de lista de pasos. Guarda, vuelve al chat y compara.
