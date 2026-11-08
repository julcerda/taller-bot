/**
 * Sedes electrónicas comprobadas (2026-11-06).
 * Para cada ayuntamiento: su sede y las páginas que lee el bot
 * (catálogo de trámites, instancia general, padrón, recursos, calendario de plazos,
 *  sistemas de identificación y oficinas).
 */
const MUNICIPIOS = [
 {
  "n": "Alameda del Valle",
  "sede": "https://alamedadelvalle.sedelectronica.es/",
  "paginas": [
   "https://alamedadelvalle.sedelectronica.es/dossier",
   "https://alamedadelvalle.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://alamedadelvalle.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://alamedadelvalle.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://alamedadelvalle.sedelectronica.es/calendar",
   "https://alamedadelvalle.sedelectronica.es/id-systems",
   "https://alamedadelvalle.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Ambite",
  "sede": "https://ambite.sedelectronica.es/",
  "paginas": [
   "https://ambite.sedelectronica.es/dossier",
   "https://ambite.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://ambite.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://ambite.sedelectronica.es/calendar",
   "https://ambite.sedelectronica.es/id-systems",
   "https://ambite.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Anchuelo",
  "sede": "https://anchuelo.sedelectronica.es/",
  "paginas": [
   "https://anchuelo.sedelectronica.es/dossier",
   "https://anchuelo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://anchuelo.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://anchuelo.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://anchuelo.sedelectronica.es/calendar",
   "https://anchuelo.sedelectronica.es/id-systems",
   "https://anchuelo.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Batres",
  "sede": "https://batres.sedelectronica.es/",
  "paginas": [
   "https://batres.sedelectronica.es/dossier",
   "https://batres.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://batres.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://batres.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://batres.sedelectronica.es/calendar",
   "https://batres.sedelectronica.es/id-systems",
   "https://batres.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Becerril de la Sierra",
  "sede": "https://becerrildelasierra.sedelectronica.es/",
  "paginas": [
   "https://becerrildelasierra.sedelectronica.es/dossier",
   "https://becerrildelasierra.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://becerrildelasierra.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "https://becerrildelasierra.sedelectronica.es/catalog/t/d120f65c-c936-4a95-bd50-e7ae970ca149",
   "https://becerrildelasierra.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://becerrildelasierra.sedelectronica.es/calendar",
   "https://becerrildelasierra.sedelectronica.es/id-systems",
   "https://becerrildelasierra.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Belmonte de Tajo",
  "sede": "https://belmontedetajo.sedelectronica.es/",
  "paginas": [
   "https://belmontedetajo.sedelectronica.es/dossier",
   "https://belmontedetajo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://belmontedetajo.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://belmontedetajo.sedelectronica.es/catalog/t/ffe7e592-8358-4889-9df5-cd79f1927866",
   "https://belmontedetajo.sedelectronica.es/calendar",
   "https://belmontedetajo.sedelectronica.es/id-systems",
   "https://belmontedetajo.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Braojos de la Sierra",
  "sede": "https://braojos.sedelectronica.es/",
  "paginas": [
   "https://braojos.sedelectronica.es/dossier",
   "https://braojos.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://braojos.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://braojos.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://braojos.sedelectronica.es/calendar",
   "https://braojos.sedelectronica.es/id-systems",
   "https://braojos.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Brunete",
  "sede": "https://brunete.sedelectronica.es/",
  "paginas": [
   "https://brunete.sedelectronica.es/dossier",
   "https://brunete.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://brunete.sedelectronica.es/catalog/t/d0e91178-65e2-4b9e-919f-91705beb3b88",
   "https://brunete.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://brunete.sedelectronica.es/calendar",
   "https://brunete.sedelectronica.es/id-systems",
   "https://brunete.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Buitrago del Lozoya",
  "sede": "https://buitragodellozoya.sedelectronica.es/",
  "paginas": [
   "https://buitragodellozoya.sedelectronica.es/dossier",
   "https://buitragodellozoya.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://buitragodellozoya.sedelectronica.es/catalog/t/6b9feb19-2cde-42f2-bdc2-3f77032872d8",
   "https://buitragodellozoya.sedelectronica.es/catalog/t/d120f65c-c936-4a95-bd50-e7ae970ca149",
   "https://buitragodellozoya.sedelectronica.es/calendar",
   "https://buitragodellozoya.sedelectronica.es/id-systems",
   "https://buitragodellozoya.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Cabanillas de la Sierra",
  "sede": "https://cabanillasdelasierra.sedelectronica.es/",
  "paginas": [
   "https://cabanillasdelasierra.sedelectronica.es/dossier",
   "https://cabanillasdelasierra.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://cabanillasdelasierra.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "https://cabanillasdelasierra.sedelectronica.es/catalog/t/e487bf24-1af2-4e8d-8cc0-3c605b57b372",
   "https://cabanillasdelasierra.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://cabanillasdelasierra.sedelectronica.es/calendar",
   "https://cabanillasdelasierra.sedelectronica.es/id-systems",
   "https://cabanillasdelasierra.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Camarma de Esteruelas",
  "sede": "https://camarmadeesteruelas.sedelectronica.es/",
  "paginas": [
   "https://camarmadeesteruelas.sedelectronica.es/dossier",
   "https://camarmadeesteruelas.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://camarmadeesteruelas.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "https://camarmadeesteruelas.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://camarmadeesteruelas.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://camarmadeesteruelas.sedelectronica.es/calendar",
   "https://camarmadeesteruelas.sedelectronica.es/id-systems",
   "https://camarmadeesteruelas.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Campo Real",
  "sede": "https://camporeal.sedelectronica.es/",
  "paginas": [
   "https://camporeal.sedelectronica.es/dossier",
   "https://camporeal.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://camporeal.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "https://camporeal.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://camporeal.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://camporeal.sedelectronica.es/calendar",
   "https://camporeal.sedelectronica.es/id-systems",
   "https://camporeal.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Canencia",
  "sede": "https://canencia.sedelectronica.es/",
  "paginas": [
   "https://canencia.sedelectronica.es/dossier",
   "https://canencia.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://canencia.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://canencia.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://canencia.sedelectronica.es/calendar",
   "https://canencia.sedelectronica.es/id-systems",
   "https://canencia.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Casarrubuelos",
  "sede": "https://casarrubuelos.sedelectronica.es/",
  "paginas": [
   "https://casarrubuelos.sedelectronica.es/dossier",
   "https://casarrubuelos.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://casarrubuelos.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "https://casarrubuelos.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://casarrubuelos.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://casarrubuelos.sedelectronica.es/calendar",
   "https://casarrubuelos.sedelectronica.es/id-systems",
   "https://casarrubuelos.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Cervera de Buitrago",
  "sede": "https://cerveradebuitrago.sedelectronica.es/",
  "paginas": [
   "https://cerveradebuitrago.sedelectronica.es/dossier",
   "https://cerveradebuitrago.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://cerveradebuitrago.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "https://cerveradebuitrago.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://cerveradebuitrago.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://cerveradebuitrago.sedelectronica.es/calendar",
   "https://cerveradebuitrago.sedelectronica.es/id-systems",
   "https://cerveradebuitrago.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Chapinería",
  "sede": "https://chapineria.sedelectronica.es/",
  "paginas": [
   "https://chapineria.sedelectronica.es/dossier",
   "https://chapineria.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://chapineria.sedelectronica.es/catalog/t/08b9d2ea-6c81-44fe-9156-db73d0679685",
   "https://chapineria.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://chapineria.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://chapineria.sedelectronica.es/calendar",
   "https://chapineria.sedelectronica.es/id-systems",
   "https://chapineria.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Collado Mediano",
  "sede": "https://aytocolladomediano.sedelectronica.es/",
  "paginas": [
   "https://aytocolladomediano.sedelectronica.es/dossier",
   "https://aytocolladomediano.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://aytocolladomediano.sedelectronica.es/catalog/t/9a212fe7-f65c-42bf-b7a5-58c1749eafc1",
   "https://aytocolladomediano.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://aytocolladomediano.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://aytocolladomediano.sedelectronica.es/calendar",
   "https://aytocolladomediano.sedelectronica.es/id-systems",
   "https://aytocolladomediano.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Colmenar de Oreja",
  "sede": "https://colmenardeoreja.sedelectronica.es/",
  "paginas": [
   "https://colmenardeoreja.sedelectronica.es/dossier",
   "https://colmenardeoreja.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://colmenardeoreja.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://colmenardeoreja.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://colmenardeoreja.sedelectronica.es/calendar",
   "https://colmenardeoreja.sedelectronica.es/id-systems",
   "https://colmenardeoreja.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Colmenar del Arroyo",
  "sede": "https://colmenardelarroyo.sedelectronica.es/",
  "paginas": [
   "https://colmenardelarroyo.sedelectronica.es/dossier",
   "https://colmenardelarroyo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://colmenardelarroyo.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://colmenardelarroyo.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://colmenardelarroyo.sedelectronica.es/calendar",
   "https://colmenardelarroyo.sedelectronica.es/id-systems",
   "https://colmenardelarroyo.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Corpa",
  "sede": "https://corpa.sedelectronica.es/",
  "paginas": [
   "https://corpa.sedelectronica.es/dossier",
   "https://corpa.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://corpa.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://corpa.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://corpa.sedelectronica.es/calendar",
   "https://corpa.sedelectronica.es/id-systems",
   "https://corpa.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Cubas de la Sagra",
  "sede": "https://cubasdelasagra.sedelectronica.es/",
  "paginas": [
   "https://cubasdelasagra.sedelectronica.es/dossier",
   "https://cubasdelasagra.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://cubasdelasagra.sedelectronica.es/catalog/t/52d4052c-abd2-4ae3-8a9d-30357f0951eb",
   "https://cubasdelasagra.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://cubasdelasagra.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://cubasdelasagra.sedelectronica.es/calendar",
   "https://cubasdelasagra.sedelectronica.es/id-systems",
   "https://cubasdelasagra.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Daganzo de Arriba",
  "sede": "https://daganzo.sedelectronica.es/",
  "paginas": [
   "https://daganzo.sedelectronica.es/dossier",
   "https://daganzo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://daganzo.sedelectronica.es/catalog/t/b788a3b9-6c34-4df1-bff0-2a6382672310",
   "https://daganzo.sedelectronica.es/catalog/t/837f3027-9ae8-4d83-ad5f-7c3028a2bea0",
   "https://daganzo.sedelectronica.es/calendar",
   "https://daganzo.sedelectronica.es/id-systems",
   "https://daganzo.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "El Atazar",
  "sede": "https://elatazar.sedelectronica.es/",
  "paginas": [
   "https://elatazar.sedelectronica.es/dossier",
   "https://elatazar.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://elatazar.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://elatazar.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://elatazar.sedelectronica.es/calendar",
   "https://elatazar.sedelectronica.es/id-systems",
   "https://elatazar.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "El Boalo",
  "sede": "https://elboalo.sedelectronica.es/",
  "paginas": [
   "https://elboalo.sedelectronica.es/dossier",
   "https://elboalo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://elboalo.sedelectronica.es/catalog/t/338ca69c-0c76-48cd-9754-a62d3b71a9f3",
   "https://elboalo.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://elboalo.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://elboalo.sedelectronica.es/calendar",
   "https://elboalo.sedelectronica.es/id-systems",
   "https://elboalo.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "El Escorial",
  "sede": "https://elescorial.sedelectronica.es/",
  "paginas": [
   "https://elescorial.sedelectronica.es/dossier",
   "https://elescorial.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://elescorial.sedelectronica.es/catalog/t/caccaaec-dbf6-4f8e-89c2-d40268d3afcc",
   "https://elescorial.sedelectronica.es/catalog/t/4254e443-38ef-4c8d-89d4-1c3da059b708",
   "https://elescorial.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://elescorial.sedelectronica.es/calendar",
   "https://elescorial.sedelectronica.es/id-systems",
   "https://elescorial.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "El Molar",
  "sede": "https://elmolar.sedelectronica.es/",
  "paginas": [
   "https://elmolar.sedelectronica.es/dossier",
   "https://elmolar.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://elmolar.sedelectronica.es/catalog/t/c21852d7-2f88-4c92-a7a1-3cf915b5e6ae",
   "https://elmolar.sedelectronica.es/catalog/t/921256e5-a2de-45e7-ac3f-dcdd3abe0229",
   "https://elmolar.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://elmolar.sedelectronica.es/calendar",
   "https://elmolar.sedelectronica.es/id-systems",
   "https://elmolar.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Fuentidueña de Tajo",
  "sede": "https://fuentiduenadetajo.sedelectronica.es/",
  "paginas": [
   "https://fuentiduenadetajo.sedelectronica.es/dossier",
   "https://fuentiduenadetajo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://fuentiduenadetajo.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://fuentiduenadetajo.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://fuentiduenadetajo.sedelectronica.es/calendar",
   "https://fuentiduenadetajo.sedelectronica.es/id-systems",
   "https://fuentiduenadetajo.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Gascones",
  "sede": "https://gascones.sedelectronica.es/",
  "paginas": [
   "https://gascones.sedelectronica.es/dossier",
   "https://gascones.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://gascones.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://gascones.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://gascones.sedelectronica.es/calendar",
   "https://gascones.sedelectronica.es/id-systems",
   "https://gascones.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Griñón",
  "sede": "https://grinon.sedelectronica.es/",
  "paginas": [
   "https://grinon.sedelectronica.es/dossier",
   "https://grinon.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://grinon.sedelectronica.es/catalog/t/b9304a91-041c-4013-9c21-52c3a9653dde",
   "https://grinon.sedelectronica.es/catalog/t/2a33e3c9-578f-45b3-aa08-f92ad307ce61",
   "https://grinon.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://grinon.sedelectronica.es/calendar",
   "https://grinon.sedelectronica.es/id-systems",
   "https://grinon.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Guadarrama",
  "sede": "https://ayuntamientodeguadarrama.sedelectronica.es/",
  "paginas": [
   "https://ayuntamientodeguadarrama.sedelectronica.es/dossier",
   "https://ayuntamientodeguadarrama.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://ayuntamientodeguadarrama.sedelectronica.es/catalog/t/5788f64d-0466-4fd7-9fa1-002cfbb0bf29",
   "https://ayuntamientodeguadarrama.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://ayuntamientodeguadarrama.sedelectronica.es/calendar",
   "https://ayuntamientodeguadarrama.sedelectronica.es/id-systems",
   "https://ayuntamientodeguadarrama.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Horcajo de la Sierra-Aoslos",
  "sede": "https://horcajodelasierra-aoslos.sedelectronica.es/",
  "paginas": [
   "https://horcajodelasierra-aoslos.sedelectronica.es/dossier",
   "https://horcajodelasierra-aoslos.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://horcajodelasierra-aoslos.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://horcajodelasierra-aoslos.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://horcajodelasierra-aoslos.sedelectronica.es/calendar",
   "https://horcajodelasierra-aoslos.sedelectronica.es/id-systems",
   "https://horcajodelasierra-aoslos.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Horcajuelo de la Sierra",
  "sede": "https://horcajuelodelasierra.sedelectronica.es/",
  "paginas": [
   "https://horcajuelodelasierra.sedelectronica.es/dossier",
   "https://horcajuelodelasierra.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://horcajuelodelasierra.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://horcajuelodelasierra.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://horcajuelodelasierra.sedelectronica.es/calendar",
   "https://horcajuelodelasierra.sedelectronica.es/id-systems",
   "https://horcajuelodelasierra.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "La Acebeda",
  "sede": "https://laacebeda.sedelectronica.es/",
  "paginas": [
   "https://laacebeda.sedelectronica.es/dossier",
   "https://laacebeda.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://laacebeda.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "https://laacebeda.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://laacebeda.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://laacebeda.sedelectronica.es/calendar",
   "https://laacebeda.sedelectronica.es/id-systems",
   "https://laacebeda.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "La Hiruela",
  "sede": "https://lahiruela.sedelectronica.es/",
  "paginas": [
   "https://lahiruela.sedelectronica.es/dossier",
   "https://lahiruela.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://lahiruela.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://lahiruela.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://lahiruela.sedelectronica.es/calendar",
   "https://lahiruela.sedelectronica.es/id-systems",
   "https://lahiruela.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "La Serna del Monte",
  "sede": "https://lasernadelmonte.sedelectronica.es/",
  "paginas": [
   "https://lasernadelmonte.sedelectronica.es/dossier",
   "https://lasernadelmonte.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://lasernadelmonte.sedelectronica.es/catalog/t/d120f65c-c936-4a95-bd50-e7ae970ca149",
   "https://lasernadelmonte.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://lasernadelmonte.sedelectronica.es/calendar",
   "https://lasernadelmonte.sedelectronica.es/id-systems",
   "https://lasernadelmonte.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Las Rozas de Madrid",
  "sede": "https://sede.lasrozas.es/",
  "paginas": [
   "https://sede.lasrozas.es/dossier",
   "https://sede.lasrozas.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://sede.lasrozas.es/catalog/t/65b14e87-fb55-45ee-9cfb-f782b4465e05",
   "https://sede.lasrozas.es/catalog/t/76663c2a-8dfa-41f3-ac38-0c49b434e623",
   "https://sede.lasrozas.es/catalog/t/ff9dfaae-a87a-43a4-830f-6ba7fe7c432f",
   "https://sede.lasrozas.es/calendar",
   "https://sede.lasrozas.es/id-systems",
   "https://sede.lasrozas.es/ownership"
  ]
 },
 {
  "n": "Loeches",
  "sede": "https://loeches.sedelectronica.es/",
  "paginas": [
   "https://loeches.sedelectronica.es/dossier",
   "https://loeches.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://loeches.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://loeches.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://loeches.sedelectronica.es/calendar",
   "https://loeches.sedelectronica.es/id-systems",
   "https://loeches.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Los Santos de la Humosa",
  "sede": "https://lossantosdelahumosa.sedelectronica.es/",
  "paginas": [
   "https://lossantosdelahumosa.sedelectronica.es/dossier",
   "https://lossantosdelahumosa.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://lossantosdelahumosa.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "https://lossantosdelahumosa.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://lossantosdelahumosa.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://lossantosdelahumosa.sedelectronica.es/calendar",
   "https://lossantosdelahumosa.sedelectronica.es/id-systems",
   "https://lossantosdelahumosa.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Lozoya",
  "sede": "https://lozoya.sedelectronica.es/",
  "paginas": [
   "https://lozoya.sedelectronica.es/dossier",
   "https://lozoya.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://lozoya.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "https://lozoya.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://lozoya.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://lozoya.sedelectronica.es/calendar",
   "https://lozoya.sedelectronica.es/id-systems",
   "https://lozoya.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Lozoyuela-Navas-Sieteiglesias",
  "sede": "https://lozoyuela.sedelectronica.es/",
  "paginas": [
   "https://lozoyuela.sedelectronica.es/dossier",
   "https://lozoyuela.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://lozoyuela.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://lozoyuela.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://lozoyuela.sedelectronica.es/calendar",
   "https://lozoyuela.sedelectronica.es/id-systems",
   "https://lozoyuela.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Manzanares el Real",
  "sede": "https://manzanareselreal.sedelectronica.es/",
  "paginas": [
   "https://manzanareselreal.sedelectronica.es/dossier",
   "https://manzanareselreal.sedelectronica.es/catalog/t/ad3a4c8a-2982-4e11-858f-64f3108ad6df",
   "https://manzanareselreal.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://manzanareselreal.sedelectronica.es/catalog/t/b388f2f9-840d-4152-908f-84f17b1d1813",
   "https://manzanareselreal.sedelectronica.es/calendar",
   "https://manzanareselreal.sedelectronica.es/id-systems",
   "https://manzanareselreal.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Mejorada del Campo",
  "sede": "https://mejoradadelcampo.sedelectronica.es/",
  "paginas": [
   "https://mejoradadelcampo.sedelectronica.es/dossier",
   "https://mejoradadelcampo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://mejoradadelcampo.sedelectronica.es/catalog/t/7918aa95-7645-4b68-9d20-63bf84e2759d",
   "https://mejoradadelcampo.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://mejoradadelcampo.sedelectronica.es/calendar",
   "https://mejoradadelcampo.sedelectronica.es/id-systems",
   "https://mejoradadelcampo.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Montejo de la Sierra",
  "sede": "https://montejodelasierra.sedelectronica.es/",
  "paginas": [
   "https://montejodelasierra.sedelectronica.es/dossier",
   "https://montejodelasierra.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://montejodelasierra.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://montejodelasierra.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://montejodelasierra.sedelectronica.es/calendar",
   "https://montejodelasierra.sedelectronica.es/id-systems",
   "https://montejodelasierra.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Moraleja de Enmedio",
  "sede": "https://ayto-moraleja.sedelectronica.es/",
  "paginas": [
   "https://ayto-moraleja.sedelectronica.es/dossier",
   "https://ayto-moraleja.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://ayto-moraleja.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "https://ayto-moraleja.sedelectronica.es/catalog/t/8d9a6fd5-c270-43ba-aabd-e9dfd254fab1",
   "https://ayto-moraleja.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://ayto-moraleja.sedelectronica.es/calendar",
   "https://ayto-moraleja.sedelectronica.es/id-systems",
   "https://ayto-moraleja.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Morata de Tajuña",
  "sede": "https://ayuntamientodemorata.sedelectronica.es/",
  "paginas": [
   "https://ayuntamientodemorata.sedelectronica.es/dossier",
   "https://ayuntamientodemorata.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://ayuntamientodemorata.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://ayuntamientodemorata.sedelectronica.es/calendar",
   "https://ayuntamientodemorata.sedelectronica.es/id-systems",
   "https://ayuntamientodemorata.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Navalagamella",
  "sede": "https://aytonavalagamella.sedelectronica.es/",
  "paginas": [
   "https://aytonavalagamella.sedelectronica.es/dossier",
   "https://aytonavalagamella.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://aytonavalagamella.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://aytonavalagamella.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://aytonavalagamella.sedelectronica.es/calendar",
   "https://aytonavalagamella.sedelectronica.es/id-systems",
   "https://aytonavalagamella.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Navas del Rey",
  "sede": "https://navasdelrey.sedelectronica.es/",
  "paginas": [
   "https://navasdelrey.sedelectronica.es/dossier",
   "https://navasdelrey.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://navasdelrey.sedelectronica.es/catalog/t/1dd10ad1-42e1-4c76-951d-7e8c413a87a4",
   "https://navasdelrey.sedelectronica.es/catalog/t/517cc83b-3951-4439-ba61-f3161d4688db",
   "https://navasdelrey.sedelectronica.es/calendar",
   "https://navasdelrey.sedelectronica.es/id-systems",
   "https://navasdelrey.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Nuevo Baztán",
  "sede": "https://nuevobaztan.sedelectronica.es/",
  "paginas": [
   "https://nuevobaztan.sedelectronica.es/dossier",
   "https://nuevobaztan.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://nuevobaztan.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "https://nuevobaztan.sedelectronica.es/catalog/t/f41b8137-6aca-4113-a52d-d7862e7cbb90",
   "https://nuevobaztan.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://nuevobaztan.sedelectronica.es/calendar",
   "https://nuevobaztan.sedelectronica.es/id-systems",
   "https://nuevobaztan.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Olmeda de las Fuentes",
  "sede": "https://olmedadelasfuentes.sedelectronica.es/",
  "paginas": [
   "https://olmedadelasfuentes.sedelectronica.es/dossier",
   "https://olmedadelasfuentes.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://olmedadelasfuentes.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://olmedadelasfuentes.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://olmedadelasfuentes.sedelectronica.es/calendar",
   "https://olmedadelasfuentes.sedelectronica.es/id-systems",
   "https://olmedadelasfuentes.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Orusco de Tajuña",
  "sede": "https://aytoorusco.sedelectronica.es/",
  "paginas": [
   "https://aytoorusco.sedelectronica.es/dossier",
   "https://aytoorusco.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://aytoorusco.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://aytoorusco.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://aytoorusco.sedelectronica.es/calendar",
   "https://aytoorusco.sedelectronica.es/id-systems",
   "https://aytoorusco.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Pedrezuela",
  "sede": "https://pedrezuela.sedelectronica.es/",
  "paginas": [
   "https://pedrezuela.sedelectronica.es/dossier",
   "https://pedrezuela.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://pedrezuela.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://pedrezuela.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://pedrezuela.sedelectronica.es/calendar",
   "https://pedrezuela.sedelectronica.es/id-systems",
   "https://pedrezuela.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Pelayos de la Presa",
  "sede": "https://pelayospresa.sedelectronica.es/",
  "paginas": [
   "https://pelayospresa.sedelectronica.es/dossier",
   "https://pelayospresa.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://pelayospresa.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "https://pelayospresa.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://pelayospresa.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://pelayospresa.sedelectronica.es/calendar",
   "https://pelayospresa.sedelectronica.es/id-systems",
   "https://pelayospresa.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Pezuela de las Torres",
  "sede": "https://pezueladelastorres.sedelectronica.es/",
  "paginas": [
   "https://pezueladelastorres.sedelectronica.es/dossier",
   "https://pezueladelastorres.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://pezueladelastorres.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://pezueladelastorres.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://pezueladelastorres.sedelectronica.es/calendar",
   "https://pezueladelastorres.sedelectronica.es/id-systems",
   "https://pezueladelastorres.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Puentes Viejas",
  "sede": "https://puentesviejas.sedelectronica.es/",
  "paginas": [
   "https://puentesviejas.sedelectronica.es/dossier",
   "https://puentesviejas.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://puentesviejas.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://puentesviejas.sedelectronica.es/calendar",
   "https://puentesviejas.sedelectronica.es/id-systems",
   "https://puentesviejas.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Quijorna",
  "sede": "https://aytoquijorna.sedelectronica.es/",
  "paginas": [
   "https://aytoquijorna.sedelectronica.es/dossier",
   "https://aytoquijorna.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://aytoquijorna.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://aytoquijorna.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://aytoquijorna.sedelectronica.es/calendar",
   "https://aytoquijorna.sedelectronica.es/id-systems",
   "https://aytoquijorna.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Ribatejada",
  "sede": "https://ribatejada.sedelectronica.es/",
  "paginas": [
   "https://ribatejada.sedelectronica.es/dossier",
   "https://ribatejada.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://ribatejada.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://ribatejada.sedelectronica.es/calendar",
   "https://ribatejada.sedelectronica.es/id-systems",
   "https://ribatejada.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "San Agustín del Guadalix",
  "sede": "https://sanagustindelguadalix.sedelectronica.es/",
  "paginas": [
   "https://sanagustindelguadalix.sedelectronica.es/dossier",
   "https://sanagustindelguadalix.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://sanagustindelguadalix.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://sanagustindelguadalix.sedelectronica.es/calendar",
   "https://sanagustindelguadalix.sedelectronica.es/id-systems",
   "https://sanagustindelguadalix.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "San Martín de la Vega",
  "sede": "https://sanmartindelavega.sedelectronica.es/",
  "paginas": [
   "https://sanmartindelavega.sedelectronica.es/dossier",
   "https://sanmartindelavega.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://sanmartindelavega.sedelectronica.es/catalog/t/05ae3a0f-45f4-4533-aa61-376d6ed243be",
   "https://sanmartindelavega.sedelectronica.es/catalog/t/a5de03f4-de00-4f34-8a76-73a9397e190d",
   "https://sanmartindelavega.sedelectronica.es/calendar",
   "https://sanmartindelavega.sedelectronica.es/id-systems",
   "https://sanmartindelavega.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "San Martín de Valdeiglesias",
  "sede": "https://sanmartindevaldeiglesias.sedelectronica.es/",
  "paginas": [
   "https://sanmartindevaldeiglesias.sedelectronica.es/dossier",
   "https://sanmartindevaldeiglesias.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://sanmartindevaldeiglesias.sedelectronica.es/catalog/t/970c4083-727e-4e30-8f9d-757542fcdbc6",
   "https://sanmartindevaldeiglesias.sedelectronica.es/catalog/t/a0ef28ba-fb41-4289-921e-61b4a31b7de2",
   "https://sanmartindevaldeiglesias.sedelectronica.es/calendar",
   "https://sanmartindevaldeiglesias.sedelectronica.es/id-systems",
   "https://sanmartindevaldeiglesias.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Santa María de la Alameda",
  "sede": "https://santamariadelaalameda.sedelectronica.es/",
  "paginas": [
   "https://santamariadelaalameda.sedelectronica.es/dossier",
   "https://santamariadelaalameda.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://santamariadelaalameda.sedelectronica.es/calendar",
   "https://santamariadelaalameda.sedelectronica.es/id-systems",
   "https://santamariadelaalameda.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Santorcaz",
  "sede": "https://santorcaz.sedelectronica.es/",
  "paginas": [
   "https://santorcaz.sedelectronica.es/dossier",
   "https://santorcaz.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://santorcaz.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://santorcaz.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://santorcaz.sedelectronica.es/calendar",
   "https://santorcaz.sedelectronica.es/id-systems",
   "https://santorcaz.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Sevilla la Nueva",
  "sede": "https://sevillalanueva.sedelectronica.es/",
  "paginas": [
   "https://sevillalanueva.sedelectronica.es/dossier",
   "https://sevillalanueva.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://sevillalanueva.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://sevillalanueva.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://sevillalanueva.sedelectronica.es/calendar",
   "https://sevillalanueva.sedelectronica.es/id-systems",
   "https://sevillalanueva.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Somosierra",
  "sede": "https://somosierra.sedelectronica.es/",
  "paginas": [
   "https://somosierra.sedelectronica.es/dossier",
   "https://somosierra.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://somosierra.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://somosierra.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://somosierra.sedelectronica.es/calendar",
   "https://somosierra.sedelectronica.es/id-systems",
   "https://somosierra.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Talamanca de Jarama",
  "sede": "https://talamancadejrama.sedelectronica.es/",
  "paginas": [
   "https://talamancadejrama.sedelectronica.es/dossier",
   "https://talamancadejrama.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://talamancadejrama.sedelectronica.es/catalog/t/e487bf24-1af2-4e8d-8cc0-3c605b57b372",
   "https://talamancadejrama.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://talamancadejrama.sedelectronica.es/calendar",
   "https://talamancadejrama.sedelectronica.es/id-systems",
   "https://talamancadejrama.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Titulcia",
  "sede": "https://titulcia.sedelectronica.es/",
  "paginas": [
   "https://titulcia.sedelectronica.es/dossier",
   "https://titulcia.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://titulcia.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://titulcia.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://titulcia.sedelectronica.es/calendar",
   "https://titulcia.sedelectronica.es/id-systems",
   "https://titulcia.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Torrejón de la Calzada",
  "sede": "https://aytotorrejoncalzada.sedelectronica.es/",
  "paginas": [
   "https://aytotorrejoncalzada.sedelectronica.es/dossier",
   "https://aytotorrejoncalzada.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://aytotorrejoncalzada.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "https://aytotorrejoncalzada.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://aytotorrejoncalzada.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://aytotorrejoncalzada.sedelectronica.es/calendar",
   "https://aytotorrejoncalzada.sedelectronica.es/id-systems",
   "https://aytotorrejoncalzada.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Torrejón de Velasco",
  "sede": "https://torrejondevelasco.sedelectronica.es/",
  "paginas": [
   "https://torrejondevelasco.sedelectronica.es/dossier",
   "https://torrejondevelasco.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://torrejondevelasco.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://torrejondevelasco.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://torrejondevelasco.sedelectronica.es/calendar",
   "https://torrejondevelasco.sedelectronica.es/id-systems",
   "https://torrejondevelasco.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Torrelaguna",
  "sede": "https://torrelaguna.sedelectronica.es/",
  "paginas": [
   "https://torrelaguna.sedelectronica.es/dossier",
   "https://torrelaguna.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://torrelaguna.sedelectronica.es/catalog/t/f28f437e-45ad-4dc3-8822-47f3fdde8626",
   "https://torrelaguna.sedelectronica.es/catalog/t/0ec93900-24b0-4166-9fef-13aaf8b4a7e3",
   "https://torrelaguna.sedelectronica.es/catalog/t/ff243f40-bd9d-481f-90ad-edb6c8f7870b",
   "https://torrelaguna.sedelectronica.es/calendar",
   "https://torrelaguna.sedelectronica.es/id-systems",
   "https://torrelaguna.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Torrelodones",
  "sede": "https://sede.torrelodones.es/",
  "paginas": [
   "https://sede.torrelodones.es/dossier",
   "https://sede.torrelodones.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://sede.torrelodones.es/catalog/t/9b208a98-2355-44ec-9295-7a962f810de0",
   "https://sede.torrelodones.es/catalog/t/660e56bf-2a11-4f00-87e7-263f48692847",
   "https://sede.torrelodones.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://sede.torrelodones.es/calendar",
   "https://sede.torrelodones.es/id-systems",
   "https://sede.torrelodones.es/ownership"
  ]
 },
 {
  "n": "Torremocha de Jarama",
  "sede": "https://torremochadejarama.sedelectronica.es/",
  "paginas": [
   "https://torremochadejarama.sedelectronica.es/dossier",
   "https://torremochadejarama.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://torremochadejarama.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://torremochadejarama.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://torremochadejarama.sedelectronica.es/calendar",
   "https://torremochadejarama.sedelectronica.es/id-systems",
   "https://torremochadejarama.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Torres de la Alameda",
  "sede": "https://torresdelaalameda.sedelectronica.es/",
  "paginas": [
   "https://torresdelaalameda.sedelectronica.es/dossier",
   "https://torresdelaalameda.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://torresdelaalameda.sedelectronica.es/catalog/t/1463ba9c-91c1-47b9-9c86-5786dcb74613",
   "https://torresdelaalameda.sedelectronica.es/catalog/t/7d5491ef-4697-41d7-bf0b-e08091d47fe8",
   "https://torresdelaalameda.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://torresdelaalameda.sedelectronica.es/calendar",
   "https://torresdelaalameda.sedelectronica.es/id-systems",
   "https://torresdelaalameda.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Valdeavero",
  "sede": "https://valdeavero.sedelectronica.es/",
  "paginas": [
   "https://valdeavero.sedelectronica.es/dossier",
   "https://valdeavero.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://valdeavero.sedelectronica.es/catalog/t/d9bc97c6-0c07-4f78-96fe-d6335ff91dc1",
   "https://valdeavero.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://valdeavero.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://valdeavero.sedelectronica.es/calendar",
   "https://valdeavero.sedelectronica.es/id-systems",
   "https://valdeavero.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Valdemanco",
  "sede": "https://valdemanco.sedelectronica.es/",
  "paginas": [
   "https://valdemanco.sedelectronica.es/dossier",
   "https://valdemanco.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://valdemanco.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://valdemanco.sedelectronica.es/calendar",
   "https://valdemanco.sedelectronica.es/id-systems",
   "https://valdemanco.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Valdemaqueda",
  "sede": "https://aytovaldemaqueda.sedelectronica.es/",
  "paginas": [
   "https://aytovaldemaqueda.sedelectronica.es/dossier",
   "https://aytovaldemaqueda.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://aytovaldemaqueda.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://aytovaldemaqueda.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://aytovaldemaqueda.sedelectronica.es/calendar",
   "https://aytovaldemaqueda.sedelectronica.es/id-systems",
   "https://aytovaldemaqueda.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Valdemorillo",
  "sede": "https://aytovaldemorillo.sedelectronica.es/",
  "paginas": [
   "https://aytovaldemorillo.sedelectronica.es/dossier",
   "https://aytovaldemorillo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://aytovaldemorillo.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "https://aytovaldemorillo.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://aytovaldemorillo.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://aytovaldemorillo.sedelectronica.es/calendar",
   "https://aytovaldemorillo.sedelectronica.es/id-systems",
   "https://aytovaldemorillo.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Valdeolmos-Alalpardo",
  "sede": "https://valdeolmos-alalpardo.sedelectronica.es/",
  "paginas": [
   "https://valdeolmos-alalpardo.sedelectronica.es/dossier",
   "https://valdeolmos-alalpardo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://valdeolmos-alalpardo.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://valdeolmos-alalpardo.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://valdeolmos-alalpardo.sedelectronica.es/calendar",
   "https://valdeolmos-alalpardo.sedelectronica.es/id-systems",
   "https://valdeolmos-alalpardo.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Valdetorres de Jarama",
  "sede": "https://valdetorresdejarama.sedelectronica.es/",
  "paginas": [
   "https://valdetorresdejarama.sedelectronica.es/dossier",
   "https://valdetorresdejarama.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://valdetorresdejarama.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://valdetorresdejarama.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://valdetorresdejarama.sedelectronica.es/calendar",
   "https://valdetorresdejarama.sedelectronica.es/id-systems",
   "https://valdetorresdejarama.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Valverde de Alcalá",
  "sede": "https://valverdedealcala.sedelectronica.es/",
  "paginas": [
   "https://valverdedealcala.sedelectronica.es/dossier",
   "https://valverdedealcala.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://valverdedealcala.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://valverdedealcala.sedelectronica.es/calendar",
   "https://valverdedealcala.sedelectronica.es/id-systems",
   "https://valverdedealcala.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Venturada",
  "sede": "https://venturada.sedelectronica.es/",
  "paginas": [
   "https://venturada.sedelectronica.es/dossier",
   "https://venturada.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://venturada.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "https://venturada.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://venturada.sedelectronica.es/calendar",
   "https://venturada.sedelectronica.es/id-systems",
   "https://venturada.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Villaconejos",
  "sede": "https://villaconejos.sedelectronica.es/",
  "paginas": [
   "https://villaconejos.sedelectronica.es/dossier",
   "https://villaconejos.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://villaconejos.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://villaconejos.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://villaconejos.sedelectronica.es/calendar",
   "https://villaconejos.sedelectronica.es/id-systems",
   "https://villaconejos.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Villalbilla",
  "sede": "https://aytovillalbilla.sedelectronica.es/",
  "paginas": [
   "https://aytovillalbilla.sedelectronica.es/dossier",
   "https://aytovillalbilla.sedelectronica.es/catalog/t/1a89a702-bb0c-4875-a945-9f0c642f81b9",
   "https://aytovillalbilla.sedelectronica.es/catalog/t/d0e6b56a-d18d-4f97-b59a-b5aa6b604959",
   "https://aytovillalbilla.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://aytovillalbilla.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://aytovillalbilla.sedelectronica.es/calendar",
   "https://aytovillalbilla.sedelectronica.es/id-systems",
   "https://aytovillalbilla.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Villamanrique de Tajo",
  "sede": "https://villamanriquedetajo.sedelectronica.es/",
  "paginas": [
   "https://villamanriquedetajo.sedelectronica.es/dossier",
   "https://villamanriquedetajo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://villamanriquedetajo.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://villamanriquedetajo.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://villamanriquedetajo.sedelectronica.es/calendar",
   "https://villamanriquedetajo.sedelectronica.es/id-systems",
   "https://villamanriquedetajo.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Villanueva de Perales",
  "sede": "https://villanuevadeperales.sedelectronica.es/",
  "paginas": [
   "https://villanuevadeperales.sedelectronica.es/dossier",
   "https://villanuevadeperales.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://villanuevadeperales.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://villanuevadeperales.sedelectronica.es/catalog/t/a0ef28ba-fb41-4289-921e-61b4a31b7de2",
   "https://villanuevadeperales.sedelectronica.es/calendar",
   "https://villanuevadeperales.sedelectronica.es/id-systems",
   "https://villanuevadeperales.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Villanueva del Pardillo",
  "sede": "https://sede.vvapardillo.org/",
  "paginas": [
   "https://sede.vvapardillo.org/dossier",
   "https://sede.vvapardillo.org/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://sede.vvapardillo.org/catalog/t/2ef0b93d-f3e9-40db-ab55-6711a869648d",
   "https://sede.vvapardillo.org/catalog/t/af3bba79-43f0-4301-8495-b746b201ba62",
   "https://sede.vvapardillo.org/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://sede.vvapardillo.org/calendar",
   "https://sede.vvapardillo.org/id-systems",
   "https://sede.vvapardillo.org/ownership"
  ]
 },
 {
  "n": "Villar del Olmo",
  "sede": "https://villardelolmo.sedelectronica.es/",
  "paginas": [
   "https://villardelolmo.sedelectronica.es/dossier",
   "https://villardelolmo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://villardelolmo.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://villardelolmo.sedelectronica.es/calendar",
   "https://villardelolmo.sedelectronica.es/id-systems",
   "https://villardelolmo.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Villarejo de Salvanés",
  "sede": "https://villarejodesalvanes.sedelectronica.es/",
  "paginas": [
   "https://villarejodesalvanes.sedelectronica.es/dossier",
   "https://villarejodesalvanes.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://villarejodesalvanes.sedelectronica.es/catalog/t/01ff12a8-fccc-4050-ae2a-60a8ac7b3b57",
   "https://villarejodesalvanes.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://villarejodesalvanes.sedelectronica.es/calendar",
   "https://villarejodesalvanes.sedelectronica.es/id-systems",
   "https://villarejodesalvanes.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Villavieja del Lozoya",
  "sede": "https://villaviejadellozoya.sedelectronica.es/",
  "paginas": [
   "https://villaviejadellozoya.sedelectronica.es/dossier",
   "https://villaviejadellozoya.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://villaviejadellozoya.sedelectronica.es/catalog/t/6e27b72a-5ea8-45cb-b343-31f9dda5cbc2",
   "https://villaviejadellozoya.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://villaviejadellozoya.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://villaviejadellozoya.sedelectronica.es/calendar",
   "https://villaviejadellozoya.sedelectronica.es/id-systems",
   "https://villaviejadellozoya.sedelectronica.es/ownership"
  ]
 },
 {
  "n": "Zarzalejo",
  "sede": "https://zarzalejo.sedelectronica.es/",
  "paginas": [
   "https://zarzalejo.sedelectronica.es/dossier",
   "https://zarzalejo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "https://zarzalejo.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "https://zarzalejo.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "https://zarzalejo.sedelectronica.es/calendar",
   "https://zarzalejo.sedelectronica.es/id-systems",
   "https://zarzalejo.sedelectronica.es/ownership"
  ]
 }
];
