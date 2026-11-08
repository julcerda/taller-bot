/**
 * ============================================================
 *  PREPARAR LA HOJA (solo se ejecuta una vez)
 * ============================================================
 *  Crea las pestañas «Mi bot», «Fuentes», «Preguntas» y «Municipios»
 *  con su formato. Si has copiado la hoja plantilla del profesor,
 *  NO hace falta ejecutarlo: ya está preparada.
 *
 *  Si montas el bot desde cero (hoja nueva + pegar el código):
 *  elige «prepararHoja» arriba y pulsa ▶ Ejecutar.
 */
function prepararHoja() {
  const ss = SpreadsheetApp.getActive();
  const AZUL = '#1a56db', CLARO = '#eef3fe', GRIS = '#5b6474';

  // ---------- Municipios (lista de sedes comprobadas) ----------
  const hm = hoja_(ss, H_MUNICIPIOS);
  hm.clear();
  const cab = ['Municipio', 'Sede electrónica', 'Página 1', 'Página 2', 'Página 3', 'Página 4', 'Página 5', 'Página 6', 'Página 7', 'Página 8'];
  const filas = MUNICIPIOS.map(m => { const f = [m.n, m.sede].concat(m.paginas); while (f.length < cab.length) f.push(''); return f.slice(0, cab.length); });
  hm.getRange(1, 1, 1, cab.length).setValues([cab]).setFontWeight('bold').setBackground(CLARO);
  hm.getRange(2, 1, filas.length, cab.length).setValues(filas);
  hm.setFrozenRows(1);
  hm.setColumnWidth(1, 200);
  hm.setTabColor('#9aa3b2');

  // ---------- Mi bot (panel de control) ----------
  const hb = hoja_(ss, H_BOT);
  hb.clear();
  hb.getRange('A1').setValue('🤖 MI BOT DE SEDE ELECTRÓNICA').setFontSize(18).setFontWeight('bold').setFontColor(AZUL);
  const filasBot = [
    [3, 'PASO 0 · Mi clave de Gemini', 'Menú 🤖 Mi bot → 0'],
    [5, 'PASO 1 · Elige tu ayuntamiento ▼', ''],
    [7, 'PASO 1 · Fuentes', 'Menú 🤖 Mi bot → 1'],
    [9, 'PASO 2 · Leer las fuentes', 'Menú 🤖 Mi bot → 2'],
    [11, '✏️ Instrucciones del bot (puedes cambiarlas)', 'Eres el asistente virtual de la sede electrónica del ayuntamiento. Hablas con vecinos que no saben de trámites: usa frases cortas, tutea con educación y explica los pasos en orden.'],
    [13, '✏️ Saludo del chat', 'Hola, soy el asistente de la sede electrónica. Pregúntame por trámites, la instancia general, el registro electrónico, el padrón o los plazos.'],
    [15, 'Modelo de IA (no hace falta tocar)', MODELO_POR_DEFECTO]
  ];
  filasBot.forEach(([f, a, b]) => {
    hb.getRange(f, 1).setValue(a).setFontWeight('bold').setVerticalAlignment('middle');
    hb.getRange(f, 2).setValue(b).setVerticalAlignment('middle').setWrap(true);
    hb.setRowHeight(f, 34);
  });
  hb.getRange('B5').setBackground('#fff7d6').setFontWeight('bold')
    .setDataValidation(SpreadsheetApp.newDataValidation().requireValueInRange(hm.getRange(2, 1, filas.length, 1), true).setAllowInvalid(false).build());
  hb.getRange('B11').setBackground('#fff7d6'); hb.setRowHeight(11, 70);
  hb.getRange('B13').setBackground('#fff7d6'); hb.setRowHeight(13, 50);
  hb.getRange('B15').setFontColor(GRIS);
  hb.getRange('A17').setValue('Siguiente: menú 🤖 Mi bot → 3 · Abrir el chat, y → 4 · Probar las 10 preguntas').setFontColor(GRIS);
  hb.setColumnWidth(1, 330); hb.setColumnWidth(2, 560);
  hb.setTabColor(AZUL);

  // ---------- Fuentes ----------
  const hf = hoja_(ss, H_FUENTES);
  hf.clear();
  hf.getRange(1, 1, 1, 6).setValues([['URL de la página', 'Estado', 'Título', 'Caracteres leídos', 'Archivo JSON (en tu Drive)', 'JSON: lo que ha entendido la IA']])
    .setFontWeight('bold').setBackground(CLARO);
  hf.setFrozenRows(1);
  hf.setColumnWidth(1, 330); hf.setColumnWidth(2, 120); hf.setColumnWidth(3, 220); hf.setColumnWidth(4, 90); hf.setColumnWidth(5, 160); hf.setColumnWidth(6, 520);
  hf.getRange('F2:F50').setWrap(false);
  hf.setTabColor('#0f9d58');

  // ---------- Preguntas ----------
  const hp = hoja_(ss, H_PREGUNTAS);
  hp.clear();
  hp.getRange(1, 1, 1, 5).setValues([['Pregunta', 'Respuesta del bot', '¿Correcta?', 'Comentario (¿qué ha fallado?)', 'Intención reconocida']])
    .setFontWeight('bold').setBackground(CLARO);
  hp.getRange(2, 1, PREGUNTAS_BASE.length, 1).setValues(PREGUNTAS_BASE.map(p => [p]));
  hp.getRange(2, 3, PREGUNTAS_BASE.length, 1).setDataValidation(
    SpreadsheetApp.newDataValidation().requireValueInList(['✅ correcta', '❌ incorrecta', '🤥 se inventa algo', '🤷 dice que no lo sabe'], true).build());
  hp.setFrozenRows(1);
  hp.setColumnWidth(1, 320); hp.setColumnWidth(2, 520); hp.setColumnWidth(3, 150); hp.setColumnWidth(4, 260); hp.setColumnWidth(5, 240);
  hp.getRange(2, 1, PREGUNTAS_BASE.length, 4).setWrap(true).setVerticalAlignment('top');
  hp.setTabColor('#f4b400');

  // ---------- Intenciones (taller de entrenamiento) ----------
  const hi = hoja_(ss, H_INTENCIONES);
  hi.clear();
  hi.getRange(1, 1, 1, 4).setValues([['Intención', 'Frases de entrenamiento (una por línea)', 'Respuesta revisada (opcional: si la escribes, el bot la usa tal cual)', 'Enlace oficial (opcional)']])
    .setFontWeight('bold').setBackground(CLARO);
  hi.getRange(2, 1, INTENCIONES_BASE.length, 4).setValues(INTENCIONES_BASE);
  hi.getRange(2, 1, INTENCIONES_BASE.length, 4).setWrap(true).setVerticalAlignment('top');
  hi.getRange(2, 2, INTENCIONES_BASE.length, 2).setBackground('#fff7d6');
  hi.setFrozenRows(1);
  hi.setColumnWidth(1, 200); hi.setColumnWidth(2, 380); hi.setColumnWidth(3, 420); hi.setColumnWidth(4, 260);
  hi.setTabColor('#a142f4');

  // ---------- Registro (lo que pregunta la gente) ----------
  const hr = hoja_(ss, H_REGISTRO);
  hr.clear();
  hr.getRange(1, 1, 1, 6).setValues([['Fecha', 'Pregunta', 'Intención reconocida', 'Parecido', 'Cómo respondió', 'Respuesta']])
    .setFontWeight('bold').setBackground(CLARO);
  hr.setFrozenRows(1);
  hr.setColumnWidth(1, 140); hr.setColumnWidth(2, 320); hr.setColumnWidth(3, 200); hr.setColumnWidth(4, 80); hr.setColumnWidth(5, 170); hr.setColumnWidth(6, 480);
  hr.setTabColor('#9aa3b2');

  // Orden de pestañas y limpieza
  const ORDEN = [H_BOT, H_FUENTES, H_PREGUNTAS, H_INTENCIONES, H_REGISTRO, H_MUNICIPIOS];
  ORDEN.forEach((n, i) => { ss.setActiveSheet(ss.getSheetByName(n)); ss.moveActiveSheet(i + 1); });
  ss.getSheets().forEach(s => { if (ORDEN.indexOf(s.getName()) < 0 && s.getLastRow() === 0) ss.deleteSheet(s); });
  ss.setActiveSheet(hb);
  const aviso = '✅ Hoja preparada. Recarga la página para ver el menú 🤖 Mi bot.';
  // Desde el editor de Apps Script no se pueden mostrar avisos: entonces sale en el registro.
  try { SpreadsheetApp.getUi().alert(aviso); } catch (e) { console.log(aviso); }
}

function hoja_(ss, nombre) { return ss.getSheetByName(nombre) || ss.insertSheet(nombre); }

// Las 10 preguntas de prueba (comunes a todas las sedes)
const PREGUNTAS_BASE = [
  '¿Dónde puedo descargar o presentar la instancia general?',
  '¿Cómo presento un escrito por el registro electrónico?',
  '¿Qué necesito para identificarme en la sede electrónica?',
  '¿Cómo pido un certificado o volante de empadronamiento?',
  '¿Qué documentos necesito para empadronarme o cambiar de domicilio?',
  '¿Qué plazo tengo para presentar un recurso?',
  '¿Qué días son inhábiles para presentar documentos?',
  '¿Dónde está la oficina de registro presencial y qué horario tiene?',
  '¿Qué trámites puedo hacer en la sede electrónica?',
  '¿Cuánto cuesta renovar el pasaporte?'
];

// Intenciones de partida: nombre · frases de entrenamiento · respuesta revisada · enlace.
// Solo la última trae respuesta revisada, como ejemplo. Las demás las completas tú en el taller.
const INTENCIONES_BASE = [
  ['instancia_general', 'descargar la instancia general\nsolicitud general para el ayuntamiento', '', ''],
  ['registro_electronico', 'presentar un escrito por registro\nmandar documentos al ayuntamiento por internet', '', ''],
  ['identificacion', 'cómo me identifico en la sede\nnecesito certificado digital o cl@ve', '', ''],
  ['certificado_padron', 'certificado de empadronamiento\nvolante de empadronamiento', '', ''],
  ['alta_padron', 'empadronarme en el municipio\ncambio de domicilio en el padrón', '', ''],
  ['recursos_plazos', 'plazo para recurrir\npresentar un recurso de reposición', '', ''],
  ['dias_inhabiles', 'días inhábiles\ncalendario de días festivos para los plazos', '', ''],
  ['oficina_registro', 'dirección de la oficina de registro\nhorario de atención presencial', '', ''],
  ['catalogo_tramites', 'lista de trámites\ncatálogo de procedimientos', '', ''],
  ['pasaporte_dni', 'renovar el pasaporte\nrenovar el dni', 'El DNI y el pasaporte no los expide el ayuntamiento, sino la Policía Nacional. Pide cita previa en su web oficial.', 'https://www.citapreviadnie.es']
];
