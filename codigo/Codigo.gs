/**
 * ============================================================
 *  MI BOT DE SEDE ELECTRÓNICA
 *  Archival Microlearning Bytes · Cómo crear tu propio chatbot en 60 minutos
 *  Autor: Julio Cerdá Díaz
 * ============================================================
 *
 *  Cómo funciona un bot de información pública, en 4 pasos:
 *
 *   1. FUENTES   → páginas oficiales de la sede de tu ayuntamiento
 *   2. EXTRAER   → la IA lee cada página y la resume en un JSON
 *                  (datos ordenados: trámites, plazos, enlaces…)
 *   3. RESPONDER → la IA contesta SOLO con esos JSON y cita la fuente
 *   4. COMPROBAR → tú compruebas si acierta, si cita y si se inventa algo
 *
 *  Y el TALLER DE INTENCIONES (entrenar al bot):
 *   - una «intención» es lo que quiere el vecino (p. ej. «pedir el padrón»);
 *   - le enseñas a reconocerla con FRASES DE ENTRENAMIENTO;
 *   - si escribes una RESPUESTA REVISADA, el bot la usa tal cual (sin IA);
 *   - el REGISTRO guarda cada pregunta para que veas en qué falla y lo entrenes.
 *
 *  No hace falta tocar este código para hacer la práctica.
 *  Todo lo que puedes cambiar está en la hoja (pestaña «Mi bot»).
 */

// ------------------------------------------------------------
// AJUSTES (puedes cambiarlos, pero no hace falta)
// ------------------------------------------------------------
const MODELO_POR_DEFECTO = 'gemini-flash-lite-latest'; // modelo de Gemini
const MAX_FUENTES = 8;            // páginas que se leen como máximo
const MAX_TEXTO_POR_PAGINA = 15000; // caracteres de cada página que se envían a la IA

// Nombres de las pestañas de la hoja
const H_BOT = 'Mi bot';
const H_FUENTES = 'Fuentes';
const H_PREGUNTAS = 'Preguntas';
const H_MUNICIPIOS = 'Municipios';
const H_INTENCIONES = 'Intenciones';
const H_REGISTRO = 'Registro';
// Tipos de página de cada sede: clave en Municipios.gs y nombre de la columna en la pestaña «Municipios»
const TIPOS_PAGINA = [
  ['tramites',       'Catálogo de trámites'],
  ['instancia',      'Instancia general'],
  ['padron',         'Certificado de empadronamiento'],
  ['padron_alta',    'Alta en el padrón'],
  ['recurso',        'Recursos administrativos'],
  ['calendario',     'Calendario y plazos'],
  ['identificacion', 'Sistemas de identificación'],
  ['oficinas',       'Oficinas y titularidad']
];
const UMBRAL_PARECIDO = 0.5; // a partir de este parecido (0 a 1) se da por reconocida una intención

// ------------------------------------------------------------
// MENÚ: aparece al abrir la hoja
// ------------------------------------------------------------
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🤖 Mi bot')
    .addItem('0 · Poner mi clave de Gemini', 'ponerClave')
    .addItem('1 · Cargar las fuentes de mi ayuntamiento', 'cargarFuentes')
    .addItem('2 · Leer las fuentes (crear los JSON)', 'leerFuentes')
    .addItem('3 · Abrir el chat', 'abrirChat')
    .addItem('4 · Probar las 10 preguntas', 'probarPreguntas')
    .addSeparator()
    .addItem('5 · Taller de intenciones', 'irAIntenciones')
    .addItem('6 · Ver el registro de preguntas', 'irARegistro')
    .addToUi();
}

// ------------------------------------------------------------
// PASO 0 · La clave de Gemini (se guarda solo para ti, no en la hoja)
// ------------------------------------------------------------
function ponerClave() {
  const ui = SpreadsheetApp.getUi();
  const r = ui.prompt('🔑 Tu clave de Gemini',
    'Pega aquí la clave que has creado en Google AI Studio (empieza por «AIza…»).\n' +
    'Se guarda solo en tu cuenta: no se ve en la hoja.', ui.ButtonSet.OK_CANCEL);
  if (r.getSelectedButton() !== ui.Button.OK) return;
  const clave = r.getResponseText().trim();
  if (!/^AIza[\w-]{20,}$/.test(clave)) {
    ui.alert('Esa clave no parece correcta. Debe empezar por «AIza». Vuelve a copiarla de AI Studio.');
    return;
  }
  PropertiesService.getUserProperties().setProperty('GEMINI_KEY', clave);
  // Pequeña prueba para confirmar que funciona
  try {
    llamarGemini('Responde solo con la palabra: funciona');
    marcar('B3', '✅ Clave guardada y comprobada');
    ui.alert('✅ ¡Perfecto! La clave funciona. Siguiente paso: menú 🤖 Mi bot → 1.');
  } catch (e) {
    marcar('B3', '⚠️ Clave guardada, pero falló la prueba');
    ui.alert('La clave se ha guardado, pero Gemini ha respondido con un error:\n\n' + e.message);
  }
}

// ------------------------------------------------------------
// PASO 1 · Copiar a «Fuentes» las páginas de tu ayuntamiento
// ------------------------------------------------------------
function cargarFuentes() {
  const ss = SpreadsheetApp.getActive();
  const muni = ss.getSheetByName(H_BOT).getRange('B5').getValue();
  if (!muni) return aviso('Primero elige tu ayuntamiento en la pestaña «Mi bot» (celda B5).');

  const filas = ss.getSheetByName(H_MUNICIPIOS).getDataRange().getValues();
  const fila = filas.find(f => f[0] === muni);
  if (!fila) return aviso('No encuentro «' + muni + '» en la lista de municipios.');

  // En la pestaña Municipios: A nombre · B sede · C… una columna por tipo de página (la cabecera dice cuál)
  const cabecera = filas[0];
  const fuentes = [];
  fila.forEach((u, i) => { if (i >= 2 && String(u).startsWith('http')) fuentes.push([u, cabecera[i]]); });
  const hoja = ss.getSheetByName(H_FUENTES);
  hoja.getRange(2, 1, Math.max(hoja.getLastRow() - 1, 1), 6).clearContent();
  // Columna A: la URL · columna C: qué es (al leerla, la IA pone ahí el título real)
  hoja.getRange(2, 1, fuentes.length, 3).setValues(fuentes.map(([u, tipo]) => [u, '', tipo]));
  const urls = fuentes.map(f => f[0]);
  marcar('B7', '✅ ' + urls.length + ' páginas cargadas en «Fuentes»');
  ss.setActiveSheet(hoja);
  aviso('He puesto ' + urls.length + ' páginas de la sede de ' + muni + ' en la pestaña «Fuentes».\n\n' +
        'Puedes añadir más URLs debajo. Cuando quieras, menú 🤖 Mi bot → 2.');
}

// ------------------------------------------------------------
// PASO 2 · Leer cada página y convertirla en JSON con la IA
// ------------------------------------------------------------
function leerFuentes() {
  const ss = SpreadsheetApp.getActive();
  const hoja = ss.getSheetByName(H_FUENTES);
  const n = hoja.getLastRow() - 1;
  if (n < 1) return aviso('La pestaña «Fuentes» está vacía. Usa primero el paso 1.');
  const urls = hoja.getRange(2, 1, Math.min(n, MAX_FUENTES), 1).getValues().map(r => String(r[0]).trim());
  const carpeta = carpetaDatos();

  urls.forEach((url, i) => {
    if (!url.startsWith('http')) return;
    const fila = i + 2;
    hoja.getRange(fila, 2).setValue('⏳ leyendo…');
    SpreadsheetApp.flush();
    try {
      // a) descargar la página y quedarnos solo con el texto
      const texto = textoDeLaPagina(url);
      if (texto.length < 200) throw new Error('la página casi no tiene texto (puede necesitar JavaScript)');
      // b) pedir a la IA que lo ordene en un JSON
      const json = extraerJSON(url, texto);
      // c) guardar el JSON en tu Drive
      const enlace = guardarEnDrive(carpeta, 'fuente_' + (i + 1) + '.json', JSON.stringify(json, null, 2));
      hoja.getRange(fila, 2, 1, 5).setValues([[
        '✅ leída', json.titulo || hoja.getRange(fila, 3).getValue(), texto.length, enlace, JSON.stringify(json).slice(0, 45000)
      ]]);
    } catch (e) {
      hoja.getRange(fila, 2).setValue('❌ ' + e.message.slice(0, 120));  // la columna C conserva el tipo de página
      hoja.getRange(fila, 4, 1, 3).clearContent();
    }
    SpreadsheetApp.flush();
  });
  marcar('B9', '✅ Fuentes leídas: mira la columna «JSON» de «Fuentes»');
  aviso('Listo. En «Fuentes» ves qué ha sacado la IA de cada página (columna F) ' +
        'y el archivo JSON guardado en tu Drive (columna E).\n\nSiguiente: menú 🤖 Mi bot → 3 · Abrir el chat.');
}

/** Descarga una URL y devuelve solo su texto legible. */
function textoDeLaPagina(url) {
  const r = UrlFetchApp.fetch(url, { muteHttpExceptions: true, followRedirects: true, validateHttpsCertificates: false });
  if (r.getResponseCode() >= 400) throw new Error('la web respondió ' + r.getResponseCode());
  const html = r.getContentText();
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<(nav|footer|header)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<a\b[^>]*href=["'](https?:[^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, ' $2 [enlace: $1] ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, MAX_TEXTO_POR_PAGINA);
}

/** Le pide a Gemini que convierta el texto de una página en datos ordenados (JSON). */
function extraerJSON(url, texto) {
  const prompt =
    'Eres un documentalista. Lee el texto de esta página de una sede electrónica municipal ' +
    'y devuelve SOLO un JSON con esta forma (si un dato no aparece, déjalo vacío; no inventes nada):\n' +
    '{ "titulo": "", "resumen": "dos frases", ' +
    '"tramites": [ { "nombre": "", "para_que_sirve": "", "requisitos": [], "plazo": "", "como_se_hace": "", "enlace": "" } ], ' +
    '"contacto": { "telefono": "", "email": "", "horario": "", "direccion": "" } }\n\n' +
    'URL de la página: ' + url + '\n\nTEXTO DE LA PÁGINA:\n' + texto;
  const json = JSON.parse(llamarGemini(prompt, true));
  json.fuente = url;
  return json;
}

// ------------------------------------------------------------
// PASO 3 · Responder: primero las intenciones, después la IA
// ------------------------------------------------------------
/** Lo que usa el chat: devuelve la respuesta y cómo se ha obtenido. */
function responderConDetalle(pregunta) {
  const m = mejorIntencion(pregunta);
  const reconocida = m && m.parecido >= UMBRAL_PARECIDO;
  let texto, tipo;

  if (reconocida && m.respuesta) {
    // A) Hay una respuesta revisada por ti: se usa tal cual, sin IA
    texto = m.respuesta + (m.enlace ? '\nFuente: ' + m.enlace : '');
    tipo = 'revisada';
  } else {
    // B) La IA responde con los JSON de las fuentes
    texto = respuestaIA(pregunta, reconocida ? m.nombre : '');
    tipo = 'ia';
  }
  const detalle = { texto: texto, tipo: tipo,
    intencion: reconocida ? m.nombre : '', parecido: m ? Math.round(m.parecido * 100) : 0 };
  registrar(pregunta, detalle);
  return detalle;
}

/** Versión corta (solo el texto). */
function responder(pregunta) { return responderConDetalle(pregunta).texto; }

/** La IA contesta usando SOLO los JSON de la pestaña «Fuentes». */
function respuestaIA(pregunta, intencion) {
  const ss = SpreadsheetApp.getActive();
  const hoja = ss.getSheetByName(H_FUENTES);
  const n = hoja.getLastRow() - 1;
  const datos = n > 0 ? hoja.getRange(2, 6, n, 1).getValues().map(r => r[0]).filter(String) : [];
  if (!datos.length) return 'Todavía no tengo información: haz primero el paso 2 (Leer las fuentes).';

  const bot = ss.getSheetByName(H_BOT);
  const prompt =
    bot.getRange('B11').getValue() + '\n\n' +
    'Ayuntamiento: ' + bot.getRange('B5').getValue() + '\n' +
    (intencion ? 'El vecino pregunta por este tema: ' + intencion + '\n' : '') +
    'REGLAS FIJAS: responde SOLO con la información de los DATOS. ' +
    'Si la respuesta no está en los DATOS, di que no lo sabes y recomienda consultar la sede electrónica. ' +
    'Termina SIEMPRE con una línea «Fuente: <enlace>» con la URL de donde sacaste el dato. ' +
    'Respuesta breve (máximo 120 palabras) y en lenguaje sencillo.\n\n' +
    'DATOS:\n' + datos.join('\n') + '\n\nPREGUNTA DEL VECINO: ' + pregunta;
  return llamarGemini(prompt);
}

// ------------------------------------------------------------
// TALLER DE INTENCIONES · cómo reconoce el bot lo que le piden
// ------------------------------------------------------------
/**
 * Compara la pregunta con las frases de entrenamiento de cada intención
 * y devuelve la más parecida. El parecido va de 0 (nada) a 1 (iguales):
 * se cuentan las palabras importantes que tienen en común.
 */
function mejorIntencion(pregunta) {
  const hoja = SpreadsheetApp.getActive().getSheetByName(H_INTENCIONES);
  if (!hoja || hoja.getLastRow() < 2) return null;
  const filas = hoja.getRange(2, 1, hoja.getLastRow() - 1, 4).getValues();
  const p = palabras(pregunta);
  let mejor = null;
  filas.forEach(f => {
    if (!f[0]) return;
    const frases = String(f[1]).split('\n').concat([String(f[0]).replace(/_/g, ' ')]);
    frases.forEach(frase => {
      const parecido = parecidoEntre(p, palabras(frase));
      if (!mejor || parecido > mejor.parecido) {
        mejor = { nombre: f[0], respuesta: String(f[2]).trim(), enlace: String(f[3]).trim(), parecido: parecido };
      }
    });
  });
  return mejor;
}

/** Palabras importantes de una frase: sin tildes, sin palabras vacías y recortadas a su raíz. */
function palabras(texto) {
  const VACIAS = ['el','la','los','las','un','una','unos','unas','de','del','al','a','en','y','o','que','por','para',
    'con','sin','mi','me','se','lo','le','su','es','como','donde','cual','cuanto','cuanta','puedo','quiero','hacer',
    'necesito','tengo','hay','esta','este','esto','ayuntamiento','sede','electronica'];
  return String(texto).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9ñ ]/g, ' ').split(/\s+/)
    .filter(w => w.length > 2 && VACIAS.indexOf(w) < 0)
    .map(w => w.slice(0, 6)); // «empadronarme» y «empadronamiento» → «empadr»
}

/** Parecido entre dos listas de palabras (coeficiente de Dice). */
function parecidoEntre(a, b) {
  if (!a.length || !b.length) return 0;
  const enB = b.slice();
  let comunes = 0;
  a.forEach(w => { const k = enB.indexOf(w); if (k >= 0) { comunes++; enB.splice(k, 1); } });
  return 2 * comunes / (a.length + b.length);
}

/** Guarda cada pregunta en la pestaña «Registro» (para aprender de los fallos). */
function registrar(pregunta, d) {
  const hoja = SpreadsheetApp.getActive().getSheetByName(H_REGISTRO);
  if (!hoja) return;
  hoja.getRange(hoja.getLastRow() + 1, 1, 1, 6).setValues([[
    new Date(), pregunta, d.intencion || '— ninguna —', d.parecido + ' %',
    d.tipo === 'revisada' ? '✅ respuesta revisada' : '🤖 IA con las fuentes', d.texto
  ]]);
}

function irAIntenciones() { irA_(H_INTENCIONES); }
function irARegistro() { irA_(H_REGISTRO); }
function irA_(n) { const ss = SpreadsheetApp.getActive(); const h = ss.getSheetByName(n); if (h) ss.setActiveSheet(h); }

function abrirChat() {
  const html = HtmlService.createHtmlOutputFromFile('Chat').setTitle('🤖 Mi bot');
  SpreadsheetApp.getUi().showSidebar(html);
}

/** Datos para la cabecera del chat. */
function datosChat() {
  const bot = SpreadsheetApp.getActive().getSheetByName(H_BOT);
  return { muni: bot.getRange('B5').getValue(), bienvenida: bot.getRange('B13').getValue() };
}

// ------------------------------------------------------------
// PASO 4 · Probar las preguntas de la pestaña «Preguntas»
// ------------------------------------------------------------
function probarPreguntas() {
  const hoja = SpreadsheetApp.getActive().getSheetByName(H_PREGUNTAS);
  const n = hoja.getLastRow() - 1;
  if (n < 1) return aviso('No hay preguntas en la pestaña «Preguntas».');
  const preguntas = hoja.getRange(2, 1, n, 1).getValues();
  preguntas.forEach((p, i) => {
    if (!p[0]) return;
    hoja.getRange(i + 2, 2).setValue('⏳ pensando…');
    SpreadsheetApp.flush();
    let d;
    try { d = responderConDetalle(p[0]); } catch (e) { d = { texto: '❌ ' + e.message, intencion: '', parecido: 0, tipo: '' }; }
    hoja.getRange(i + 2, 2).setValue(d.texto);
    hoja.getRange(i + 2, 5).setValue((d.intencion || '— ninguna —') + ' (' + d.parecido + ' %)' +
      (d.tipo === 'revisada' ? ' · respuesta revisada' : ''));
    SpreadsheetApp.flush();
    Utilities.sleep(1500); // pausa para no superar el límite gratuito de Gemini
  });
  SpreadsheetApp.getActive().setActiveSheet(hoja);
  aviso('Hecho. Ahora te toca a ti: en la columna C marca ✅ si la respuesta es correcta ' +
        '(compruébalo en la sede), ❌ si es incorrecta o 🤥 si se ha inventado algo.');
}

// ------------------------------------------------------------
// LA LLAMADA A LA IA (Gemini)
// ------------------------------------------------------------
function llamarGemini(prompt, comoJSON) {
  const clave = PropertiesService.getUserProperties().getProperty('GEMINI_KEY');
  if (!clave) throw new Error('Falta tu clave de Gemini: menú 🤖 Mi bot → 0.');
  const modelo = SpreadsheetApp.getActive().getSheetByName(H_BOT).getRange('B15').getValue() || MODELO_POR_DEFECTO;
  const cuerpo = { contents: [{ parts: [{ text: prompt }] }], generationConfig: { temperature: 0.2 } };
  if (comoJSON) cuerpo.generationConfig.responseMimeType = 'application/json';

  for (let intento = 1; intento <= 3; intento++) {
    const r = UrlFetchApp.fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/' + modelo + ':generateContent',
      { method: 'post', contentType: 'application/json', payload: JSON.stringify(cuerpo),
        headers: { 'x-goog-api-key': clave }, muteHttpExceptions: true });
    const code = r.getResponseCode();
    if (code === 429 || code === 503) { Utilities.sleep(5000 * intento); continue; } // demasiadas peticiones: esperar
    const j = JSON.parse(r.getContentText());
    if (code !== 200) throw new Error('Gemini: ' + ((j.error && j.error.message) || code));
    const partes = (j.candidates && j.candidates[0].content && j.candidates[0].content.parts) || [];
    return partes.map(p => p.text || '').join('').trim();
  }
  throw new Error('Gemini está ocupado. Espera un minuto y vuelve a intentarlo.');
}

// ------------------------------------------------------------
// Utilidades
// ------------------------------------------------------------
/** Carpeta «Mi bot · datos JSON» en tu Drive (se crea la primera vez). */
function carpetaDatos() {
  const props = PropertiesService.getDocumentProperties();
  const id = props.getProperty('CARPETA_JSON');
  if (id) { try { if (!Drive.Files.get(id, { fields: 'trashed' }).trashed) return id; } catch (e) {} }
  const nueva = Drive.Files.create({ name: 'Mi bot · datos JSON', mimeType: 'application/vnd.google-apps.folder' });
  props.setProperty('CARPETA_JSON', nueva.id);
  return nueva.id;
}
/** Guarda un JSON en la carpeta y devuelve su enlace. */
function guardarEnDrive(carpetaId, nombre, contenido) {
  const f = Drive.Files.create({ name: nombre, parents: [carpetaId], mimeType: 'application/json' },
    Utilities.newBlob(contenido, 'application/json', nombre));
  return 'https://drive.google.com/file/d/' + f.id + '/view';
}
function marcar(celda, texto) { SpreadsheetApp.getActive().getSheetByName(H_BOT).getRange(celda).setValue(texto); }
function aviso(t) { SpreadsheetApp.getUi().alert(t); }
