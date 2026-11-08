# Guía del profesor

## Preparar la plantilla (una vez, unos 10 minutos)
1. Con tu cuenta de Google, crea la hoja siguiendo [DESDE_CERO.md](DESDE_CERO.md) hasta el paso 4 (`prepararHoja`).
2. Comprueba que funciona con un ayuntamiento: menú 🤖 Mi bot, pasos 0 a 4.
3. Antes de compartirla, deja la hoja limpia: ejecuta `prepararHoja` otra vez. Tu clave de Gemini **no** se copia, porque se guarda en tus propiedades de usuario, no en la hoja.
4. **Compartir → Cualquier persona con el enlace → Lector.**
5. Copia el enlace y cambia el final `/edit…` por **`/copy`**. Ese es el enlace «Hacer una copia» que va en el README y en la diapositiva.

**Plantilla ya preparada** (cuenta masquearchivos, compartida como lector): [Hacer una copia](https://docs.google.com/spreadsheets/d/1QnI9ZlM8_w3Wts7cEsLKG5BV2HEHl_NUp6ng3shXNTo/copy). Para cambiar el código, edítalo en esa hoja (Extensiones → Apps Script, con la cuenta masquearchivos activa): las copias que se hagan después llevan el cambio.

## Asignar ayuntamientos
La pestaña «Municipios» tiene las sedes comprobadas. Reparte un municipio por estudiante (por orden de lista, por ejemplo) para que no repitan, y proyecta la tabla de asignación al empezar.

## Durante la clase
- **Minuto 0:** comprueba que todos tienen la clave de Gemini (paso A del README, para hacer antes de clase). Quien no la tenga, que la cree ya: 2 minutos.
- **El aviso «Google no ha verificado esta aplicación»** es el punto donde más gente se atasca: enséñalo proyectado.
- Si una sede da 503 a varios a la vez, que esperen un minuto y repitan el paso 2; los que ya han leído sus fuentes no se ven afectados.
- El nivel gratuito de Gemini limita las peticiones por minuto de cada clave. Como cada estudiante usa la suya, los límites no se suman entre la clase; el bot espera y reintenta solo si se pasa.

## Qué hay en el repositorio
| Archivo | Para qué |
|---|---|
| `README.md` | Los pasos para el estudiante, con capturas |
| `DESDE_CERO.md` | Montarlo pegando el código (para casa) |
| `codigo/` | Los 5 archivos del bot, comentados |
| `material/` | Chuleta A4, infografía y diapositivas |
| `datos/municipios_comprobados.csv` | Sedes comprobadas y fecha de la comprobación |
