/**
 * Sedes electrónicas comprobadas (2026-11-06).
 * Para cada ayuntamiento: su sede y las páginas que lee el bot, por tipo de contenido.
 * Los tipos (y el nombre de cada columna en la pestaña «Municipios») están en TIPOS_PAGINA:
 *   tramites · instancia · padron · padron_alta · recurso · calendario · identificacion · oficinas
 * Si un ayuntamiento no tiene una de esas páginas, simplemente no aparece.
 */
const MUNICIPIOS = [
 {
  "n": "Alameda del Valle",
  "sede": "https://alamedadelvalle.sedelectronica.es/",
  "paginas": {
   "tramites": "https://alamedadelvalle.sedelectronica.es/dossier",
   "instancia": "https://alamedadelvalle.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://alamedadelvalle.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://alamedadelvalle.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://alamedadelvalle.sedelectronica.es/calendar",
   "identificacion": "https://alamedadelvalle.sedelectronica.es/id-systems",
   "oficinas": "https://alamedadelvalle.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Ambite",
  "sede": "https://ambite.sedelectronica.es/",
  "paginas": {
   "tramites": "https://ambite.sedelectronica.es/dossier",
   "instancia": "https://ambite.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://ambite.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "calendario": "https://ambite.sedelectronica.es/calendar",
   "identificacion": "https://ambite.sedelectronica.es/id-systems",
   "oficinas": "https://ambite.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Anchuelo",
  "sede": "https://anchuelo.sedelectronica.es/",
  "paginas": {
   "tramites": "https://anchuelo.sedelectronica.es/dossier",
   "instancia": "https://anchuelo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://anchuelo.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://anchuelo.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://anchuelo.sedelectronica.es/calendar",
   "identificacion": "https://anchuelo.sedelectronica.es/id-systems",
   "oficinas": "https://anchuelo.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Batres",
  "sede": "https://batres.sedelectronica.es/",
  "paginas": {
   "tramites": "https://batres.sedelectronica.es/dossier",
   "instancia": "https://batres.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://batres.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://batres.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://batres.sedelectronica.es/calendar",
   "identificacion": "https://batres.sedelectronica.es/id-systems",
   "oficinas": "https://batres.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Becerril de la Sierra",
  "sede": "https://becerrildelasierra.sedelectronica.es/",
  "paginas": {
   "tramites": "https://becerrildelasierra.sedelectronica.es/dossier",
   "instancia": "https://becerrildelasierra.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://becerrildelasierra.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "padron_alta": "https://becerrildelasierra.sedelectronica.es/catalog/t/d120f65c-c936-4a95-bd50-e7ae970ca149",
   "recurso": "https://becerrildelasierra.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://becerrildelasierra.sedelectronica.es/calendar",
   "identificacion": "https://becerrildelasierra.sedelectronica.es/id-systems",
   "oficinas": "https://becerrildelasierra.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Belmonte de Tajo",
  "sede": "https://belmontedetajo.sedelectronica.es/",
  "paginas": {
   "tramites": "https://belmontedetajo.sedelectronica.es/dossier",
   "instancia": "https://belmontedetajo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://belmontedetajo.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://belmontedetajo.sedelectronica.es/catalog/t/ffe7e592-8358-4889-9df5-cd79f1927866",
   "calendario": "https://belmontedetajo.sedelectronica.es/calendar",
   "identificacion": "https://belmontedetajo.sedelectronica.es/id-systems",
   "oficinas": "https://belmontedetajo.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Braojos de la Sierra",
  "sede": "https://braojos.sedelectronica.es/",
  "paginas": {
   "tramites": "https://braojos.sedelectronica.es/dossier",
   "instancia": "https://braojos.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://braojos.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://braojos.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://braojos.sedelectronica.es/calendar",
   "identificacion": "https://braojos.sedelectronica.es/id-systems",
   "oficinas": "https://braojos.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Brunete",
  "sede": "https://brunete.sedelectronica.es/",
  "paginas": {
   "tramites": "https://brunete.sedelectronica.es/dossier",
   "instancia": "https://brunete.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://brunete.sedelectronica.es/catalog/t/d0e91178-65e2-4b9e-919f-91705beb3b88",
   "recurso": "https://brunete.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://brunete.sedelectronica.es/calendar",
   "identificacion": "https://brunete.sedelectronica.es/id-systems",
   "oficinas": "https://brunete.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Buitrago del Lozoya",
  "sede": "https://buitragodellozoya.sedelectronica.es/",
  "paginas": {
   "tramites": "https://buitragodellozoya.sedelectronica.es/dossier",
   "instancia": "https://buitragodellozoya.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://buitragodellozoya.sedelectronica.es/catalog/t/6b9feb19-2cde-42f2-bdc2-3f77032872d8",
   "padron_alta": "https://buitragodellozoya.sedelectronica.es/catalog/t/d120f65c-c936-4a95-bd50-e7ae970ca149",
   "calendario": "https://buitragodellozoya.sedelectronica.es/calendar",
   "identificacion": "https://buitragodellozoya.sedelectronica.es/id-systems",
   "oficinas": "https://buitragodellozoya.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Cabanillas de la Sierra",
  "sede": "https://cabanillasdelasierra.sedelectronica.es/",
  "paginas": {
   "tramites": "https://cabanillasdelasierra.sedelectronica.es/dossier",
   "instancia": "https://cabanillasdelasierra.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://cabanillasdelasierra.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "padron_alta": "https://cabanillasdelasierra.sedelectronica.es/catalog/t/e487bf24-1af2-4e8d-8cc0-3c605b57b372",
   "recurso": "https://cabanillasdelasierra.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://cabanillasdelasierra.sedelectronica.es/calendar",
   "identificacion": "https://cabanillasdelasierra.sedelectronica.es/id-systems",
   "oficinas": "https://cabanillasdelasierra.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Camarma de Esteruelas",
  "sede": "https://camarmadeesteruelas.sedelectronica.es/",
  "paginas": {
   "tramites": "https://camarmadeesteruelas.sedelectronica.es/dossier",
   "instancia": "https://camarmadeesteruelas.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://camarmadeesteruelas.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "padron_alta": "https://camarmadeesteruelas.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://camarmadeesteruelas.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://camarmadeesteruelas.sedelectronica.es/calendar",
   "identificacion": "https://camarmadeesteruelas.sedelectronica.es/id-systems",
   "oficinas": "https://camarmadeesteruelas.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Campo Real",
  "sede": "https://camporeal.sedelectronica.es/",
  "paginas": {
   "tramites": "https://camporeal.sedelectronica.es/dossier",
   "instancia": "https://camporeal.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://camporeal.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "padron_alta": "https://camporeal.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://camporeal.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://camporeal.sedelectronica.es/calendar",
   "identificacion": "https://camporeal.sedelectronica.es/id-systems",
   "oficinas": "https://camporeal.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Canencia",
  "sede": "https://canencia.sedelectronica.es/",
  "paginas": {
   "tramites": "https://canencia.sedelectronica.es/dossier",
   "instancia": "https://canencia.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://canencia.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://canencia.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://canencia.sedelectronica.es/calendar",
   "identificacion": "https://canencia.sedelectronica.es/id-systems",
   "oficinas": "https://canencia.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Casarrubuelos",
  "sede": "https://casarrubuelos.sedelectronica.es/",
  "paginas": {
   "tramites": "https://casarrubuelos.sedelectronica.es/dossier",
   "instancia": "https://casarrubuelos.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://casarrubuelos.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "padron_alta": "https://casarrubuelos.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://casarrubuelos.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://casarrubuelos.sedelectronica.es/calendar",
   "identificacion": "https://casarrubuelos.sedelectronica.es/id-systems",
   "oficinas": "https://casarrubuelos.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Cervera de Buitrago",
  "sede": "https://cerveradebuitrago.sedelectronica.es/",
  "paginas": {
   "tramites": "https://cerveradebuitrago.sedelectronica.es/dossier",
   "instancia": "https://cerveradebuitrago.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://cerveradebuitrago.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "padron_alta": "https://cerveradebuitrago.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://cerveradebuitrago.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://cerveradebuitrago.sedelectronica.es/calendar",
   "identificacion": "https://cerveradebuitrago.sedelectronica.es/id-systems",
   "oficinas": "https://cerveradebuitrago.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Chapinería",
  "sede": "https://chapineria.sedelectronica.es/",
  "paginas": {
   "tramites": "https://chapineria.sedelectronica.es/dossier",
   "instancia": "https://chapineria.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://chapineria.sedelectronica.es/catalog/t/08b9d2ea-6c81-44fe-9156-db73d0679685",
   "padron_alta": "https://chapineria.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://chapineria.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://chapineria.sedelectronica.es/calendar",
   "identificacion": "https://chapineria.sedelectronica.es/id-systems",
   "oficinas": "https://chapineria.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Collado Mediano",
  "sede": "https://aytocolladomediano.sedelectronica.es/",
  "paginas": {
   "tramites": "https://aytocolladomediano.sedelectronica.es/dossier",
   "instancia": "https://aytocolladomediano.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://aytocolladomediano.sedelectronica.es/catalog/t/9a212fe7-f65c-42bf-b7a5-58c1749eafc1",
   "padron_alta": "https://aytocolladomediano.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://aytocolladomediano.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://aytocolladomediano.sedelectronica.es/calendar",
   "identificacion": "https://aytocolladomediano.sedelectronica.es/id-systems",
   "oficinas": "https://aytocolladomediano.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Colmenar de Oreja",
  "sede": "https://colmenardeoreja.sedelectronica.es/",
  "paginas": {
   "tramites": "https://colmenardeoreja.sedelectronica.es/dossier",
   "instancia": "https://colmenardeoreja.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://colmenardeoreja.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://colmenardeoreja.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://colmenardeoreja.sedelectronica.es/calendar",
   "identificacion": "https://colmenardeoreja.sedelectronica.es/id-systems",
   "oficinas": "https://colmenardeoreja.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Colmenar del Arroyo",
  "sede": "https://colmenardelarroyo.sedelectronica.es/",
  "paginas": {
   "tramites": "https://colmenardelarroyo.sedelectronica.es/dossier",
   "instancia": "https://colmenardelarroyo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://colmenardelarroyo.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://colmenardelarroyo.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://colmenardelarroyo.sedelectronica.es/calendar",
   "identificacion": "https://colmenardelarroyo.sedelectronica.es/id-systems",
   "oficinas": "https://colmenardelarroyo.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Corpa",
  "sede": "https://corpa.sedelectronica.es/",
  "paginas": {
   "tramites": "https://corpa.sedelectronica.es/dossier",
   "instancia": "https://corpa.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://corpa.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://corpa.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://corpa.sedelectronica.es/calendar",
   "identificacion": "https://corpa.sedelectronica.es/id-systems",
   "oficinas": "https://corpa.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Cubas de la Sagra",
  "sede": "https://cubasdelasagra.sedelectronica.es/",
  "paginas": {
   "tramites": "https://cubasdelasagra.sedelectronica.es/dossier",
   "instancia": "https://cubasdelasagra.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://cubasdelasagra.sedelectronica.es/catalog/t/52d4052c-abd2-4ae3-8a9d-30357f0951eb",
   "padron_alta": "https://cubasdelasagra.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://cubasdelasagra.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://cubasdelasagra.sedelectronica.es/calendar",
   "identificacion": "https://cubasdelasagra.sedelectronica.es/id-systems",
   "oficinas": "https://cubasdelasagra.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Daganzo de Arriba",
  "sede": "https://daganzo.sedelectronica.es/",
  "paginas": {
   "tramites": "https://daganzo.sedelectronica.es/dossier",
   "instancia": "https://daganzo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://daganzo.sedelectronica.es/catalog/t/b788a3b9-6c34-4df1-bff0-2a6382672310",
   "recurso": "https://daganzo.sedelectronica.es/catalog/t/837f3027-9ae8-4d83-ad5f-7c3028a2bea0",
   "calendario": "https://daganzo.sedelectronica.es/calendar",
   "identificacion": "https://daganzo.sedelectronica.es/id-systems",
   "oficinas": "https://daganzo.sedelectronica.es/ownership"
  }
 },
 {
  "n": "El Atazar",
  "sede": "https://elatazar.sedelectronica.es/",
  "paginas": {
   "tramites": "https://elatazar.sedelectronica.es/dossier",
   "instancia": "https://elatazar.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://elatazar.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://elatazar.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://elatazar.sedelectronica.es/calendar",
   "identificacion": "https://elatazar.sedelectronica.es/id-systems",
   "oficinas": "https://elatazar.sedelectronica.es/ownership"
  }
 },
 {
  "n": "El Boalo",
  "sede": "https://elboalo.sedelectronica.es/",
  "paginas": {
   "tramites": "https://elboalo.sedelectronica.es/dossier",
   "instancia": "https://elboalo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://elboalo.sedelectronica.es/catalog/t/338ca69c-0c76-48cd-9754-a62d3b71a9f3",
   "padron_alta": "https://elboalo.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://elboalo.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://elboalo.sedelectronica.es/calendar",
   "identificacion": "https://elboalo.sedelectronica.es/id-systems",
   "oficinas": "https://elboalo.sedelectronica.es/ownership"
  }
 },
 {
  "n": "El Escorial",
  "sede": "https://elescorial.sedelectronica.es/",
  "paginas": {
   "tramites": "https://elescorial.sedelectronica.es/dossier",
   "instancia": "https://elescorial.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://elescorial.sedelectronica.es/catalog/t/caccaaec-dbf6-4f8e-89c2-d40268d3afcc",
   "padron_alta": "https://elescorial.sedelectronica.es/catalog/t/4254e443-38ef-4c8d-89d4-1c3da059b708",
   "recurso": "https://elescorial.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://elescorial.sedelectronica.es/calendar",
   "identificacion": "https://elescorial.sedelectronica.es/id-systems",
   "oficinas": "https://elescorial.sedelectronica.es/ownership"
  }
 },
 {
  "n": "El Molar",
  "sede": "https://elmolar.sedelectronica.es/",
  "paginas": {
   "tramites": "https://elmolar.sedelectronica.es/dossier",
   "instancia": "https://elmolar.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://elmolar.sedelectronica.es/catalog/t/c21852d7-2f88-4c92-a7a1-3cf915b5e6ae",
   "padron_alta": "https://elmolar.sedelectronica.es/catalog/t/921256e5-a2de-45e7-ac3f-dcdd3abe0229",
   "recurso": "https://elmolar.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://elmolar.sedelectronica.es/calendar",
   "identificacion": "https://elmolar.sedelectronica.es/id-systems",
   "oficinas": "https://elmolar.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Fuentidueña de Tajo",
  "sede": "https://fuentiduenadetajo.sedelectronica.es/",
  "paginas": {
   "tramites": "https://fuentiduenadetajo.sedelectronica.es/dossier",
   "instancia": "https://fuentiduenadetajo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://fuentiduenadetajo.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://fuentiduenadetajo.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://fuentiduenadetajo.sedelectronica.es/calendar",
   "identificacion": "https://fuentiduenadetajo.sedelectronica.es/id-systems",
   "oficinas": "https://fuentiduenadetajo.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Gascones",
  "sede": "https://gascones.sedelectronica.es/",
  "paginas": {
   "tramites": "https://gascones.sedelectronica.es/dossier",
   "instancia": "https://gascones.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://gascones.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://gascones.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://gascones.sedelectronica.es/calendar",
   "identificacion": "https://gascones.sedelectronica.es/id-systems",
   "oficinas": "https://gascones.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Griñón",
  "sede": "https://grinon.sedelectronica.es/",
  "paginas": {
   "tramites": "https://grinon.sedelectronica.es/dossier",
   "instancia": "https://grinon.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://grinon.sedelectronica.es/catalog/t/b9304a91-041c-4013-9c21-52c3a9653dde",
   "padron_alta": "https://grinon.sedelectronica.es/catalog/t/2a33e3c9-578f-45b3-aa08-f92ad307ce61",
   "recurso": "https://grinon.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://grinon.sedelectronica.es/calendar",
   "identificacion": "https://grinon.sedelectronica.es/id-systems",
   "oficinas": "https://grinon.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Guadarrama",
  "sede": "https://ayuntamientodeguadarrama.sedelectronica.es/",
  "paginas": {
   "tramites": "https://ayuntamientodeguadarrama.sedelectronica.es/dossier",
   "instancia": "https://ayuntamientodeguadarrama.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://ayuntamientodeguadarrama.sedelectronica.es/catalog/t/5788f64d-0466-4fd7-9fa1-002cfbb0bf29",
   "recurso": "https://ayuntamientodeguadarrama.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://ayuntamientodeguadarrama.sedelectronica.es/calendar",
   "identificacion": "https://ayuntamientodeguadarrama.sedelectronica.es/id-systems",
   "oficinas": "https://ayuntamientodeguadarrama.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Horcajo de la Sierra-Aoslos",
  "sede": "https://horcajodelasierra-aoslos.sedelectronica.es/",
  "paginas": {
   "tramites": "https://horcajodelasierra-aoslos.sedelectronica.es/dossier",
   "instancia": "https://horcajodelasierra-aoslos.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://horcajodelasierra-aoslos.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://horcajodelasierra-aoslos.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://horcajodelasierra-aoslos.sedelectronica.es/calendar",
   "identificacion": "https://horcajodelasierra-aoslos.sedelectronica.es/id-systems",
   "oficinas": "https://horcajodelasierra-aoslos.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Horcajuelo de la Sierra",
  "sede": "https://horcajuelodelasierra.sedelectronica.es/",
  "paginas": {
   "tramites": "https://horcajuelodelasierra.sedelectronica.es/dossier",
   "instancia": "https://horcajuelodelasierra.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://horcajuelodelasierra.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://horcajuelodelasierra.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://horcajuelodelasierra.sedelectronica.es/calendar",
   "identificacion": "https://horcajuelodelasierra.sedelectronica.es/id-systems",
   "oficinas": "https://horcajuelodelasierra.sedelectronica.es/ownership"
  }
 },
 {
  "n": "La Acebeda",
  "sede": "https://laacebeda.sedelectronica.es/",
  "paginas": {
   "tramites": "https://laacebeda.sedelectronica.es/dossier",
   "instancia": "https://laacebeda.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://laacebeda.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "padron_alta": "https://laacebeda.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://laacebeda.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://laacebeda.sedelectronica.es/calendar",
   "identificacion": "https://laacebeda.sedelectronica.es/id-systems",
   "oficinas": "https://laacebeda.sedelectronica.es/ownership"
  }
 },
 {
  "n": "La Hiruela",
  "sede": "https://lahiruela.sedelectronica.es/",
  "paginas": {
   "tramites": "https://lahiruela.sedelectronica.es/dossier",
   "instancia": "https://lahiruela.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://lahiruela.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://lahiruela.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://lahiruela.sedelectronica.es/calendar",
   "identificacion": "https://lahiruela.sedelectronica.es/id-systems",
   "oficinas": "https://lahiruela.sedelectronica.es/ownership"
  }
 },
 {
  "n": "La Serna del Monte",
  "sede": "https://lasernadelmonte.sedelectronica.es/",
  "paginas": {
   "tramites": "https://lasernadelmonte.sedelectronica.es/dossier",
   "instancia": "https://lasernadelmonte.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://lasernadelmonte.sedelectronica.es/catalog/t/d120f65c-c936-4a95-bd50-e7ae970ca149",
   "recurso": "https://lasernadelmonte.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://lasernadelmonte.sedelectronica.es/calendar",
   "identificacion": "https://lasernadelmonte.sedelectronica.es/id-systems",
   "oficinas": "https://lasernadelmonte.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Las Rozas de Madrid",
  "sede": "https://sede.lasrozas.es/",
  "paginas": {
   "tramites": "https://sede.lasrozas.es/dossier",
   "instancia": "https://sede.lasrozas.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://sede.lasrozas.es/catalog/t/65b14e87-fb55-45ee-9cfb-f782b4465e05",
   "padron_alta": "https://sede.lasrozas.es/catalog/t/76663c2a-8dfa-41f3-ac38-0c49b434e623",
   "recurso": "https://sede.lasrozas.es/catalog/t/ff9dfaae-a87a-43a4-830f-6ba7fe7c432f",
   "calendario": "https://sede.lasrozas.es/calendar",
   "identificacion": "https://sede.lasrozas.es/id-systems",
   "oficinas": "https://sede.lasrozas.es/ownership"
  }
 },
 {
  "n": "Loeches",
  "sede": "https://loeches.sedelectronica.es/",
  "paginas": {
   "tramites": "https://loeches.sedelectronica.es/dossier",
   "instancia": "https://loeches.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://loeches.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://loeches.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://loeches.sedelectronica.es/calendar",
   "identificacion": "https://loeches.sedelectronica.es/id-systems",
   "oficinas": "https://loeches.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Los Santos de la Humosa",
  "sede": "https://lossantosdelahumosa.sedelectronica.es/",
  "paginas": {
   "tramites": "https://lossantosdelahumosa.sedelectronica.es/dossier",
   "instancia": "https://lossantosdelahumosa.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://lossantosdelahumosa.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "padron_alta": "https://lossantosdelahumosa.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://lossantosdelahumosa.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://lossantosdelahumosa.sedelectronica.es/calendar",
   "identificacion": "https://lossantosdelahumosa.sedelectronica.es/id-systems",
   "oficinas": "https://lossantosdelahumosa.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Lozoya",
  "sede": "https://lozoya.sedelectronica.es/",
  "paginas": {
   "tramites": "https://lozoya.sedelectronica.es/dossier",
   "instancia": "https://lozoya.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://lozoya.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "padron_alta": "https://lozoya.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://lozoya.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://lozoya.sedelectronica.es/calendar",
   "identificacion": "https://lozoya.sedelectronica.es/id-systems",
   "oficinas": "https://lozoya.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Lozoyuela-Navas-Sieteiglesias",
  "sede": "https://lozoyuela.sedelectronica.es/",
  "paginas": {
   "tramites": "https://lozoyuela.sedelectronica.es/dossier",
   "instancia": "https://lozoyuela.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://lozoyuela.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://lozoyuela.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://lozoyuela.sedelectronica.es/calendar",
   "identificacion": "https://lozoyuela.sedelectronica.es/id-systems",
   "oficinas": "https://lozoyuela.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Manzanares el Real",
  "sede": "https://manzanareselreal.sedelectronica.es/",
  "paginas": {
   "tramites": "https://manzanareselreal.sedelectronica.es/dossier",
   "instancia": "https://manzanareselreal.sedelectronica.es/catalog/t/ad3a4c8a-2982-4e11-858f-64f3108ad6df",
   "padron_alta": "https://manzanareselreal.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://manzanareselreal.sedelectronica.es/catalog/t/b388f2f9-840d-4152-908f-84f17b1d1813",
   "calendario": "https://manzanareselreal.sedelectronica.es/calendar",
   "identificacion": "https://manzanareselreal.sedelectronica.es/id-systems",
   "oficinas": "https://manzanareselreal.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Mejorada del Campo",
  "sede": "https://mejoradadelcampo.sedelectronica.es/",
  "paginas": {
   "tramites": "https://mejoradadelcampo.sedelectronica.es/dossier",
   "instancia": "https://mejoradadelcampo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://mejoradadelcampo.sedelectronica.es/catalog/t/7918aa95-7645-4b68-9d20-63bf84e2759d",
   "recurso": "https://mejoradadelcampo.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://mejoradadelcampo.sedelectronica.es/calendar",
   "identificacion": "https://mejoradadelcampo.sedelectronica.es/id-systems",
   "oficinas": "https://mejoradadelcampo.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Montejo de la Sierra",
  "sede": "https://montejodelasierra.sedelectronica.es/",
  "paginas": {
   "tramites": "https://montejodelasierra.sedelectronica.es/dossier",
   "instancia": "https://montejodelasierra.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://montejodelasierra.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://montejodelasierra.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://montejodelasierra.sedelectronica.es/calendar",
   "identificacion": "https://montejodelasierra.sedelectronica.es/id-systems",
   "oficinas": "https://montejodelasierra.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Moraleja de Enmedio",
  "sede": "https://ayto-moraleja.sedelectronica.es/",
  "paginas": {
   "tramites": "https://ayto-moraleja.sedelectronica.es/dossier",
   "instancia": "https://ayto-moraleja.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://ayto-moraleja.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "padron_alta": "https://ayto-moraleja.sedelectronica.es/catalog/t/8d9a6fd5-c270-43ba-aabd-e9dfd254fab1",
   "recurso": "https://ayto-moraleja.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://ayto-moraleja.sedelectronica.es/calendar",
   "identificacion": "https://ayto-moraleja.sedelectronica.es/id-systems",
   "oficinas": "https://ayto-moraleja.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Morata de Tajuña",
  "sede": "https://ayuntamientodemorata.sedelectronica.es/",
  "paginas": {
   "tramites": "https://ayuntamientodemorata.sedelectronica.es/dossier",
   "instancia": "https://ayuntamientodemorata.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://ayuntamientodemorata.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "calendario": "https://ayuntamientodemorata.sedelectronica.es/calendar",
   "identificacion": "https://ayuntamientodemorata.sedelectronica.es/id-systems",
   "oficinas": "https://ayuntamientodemorata.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Navalagamella",
  "sede": "https://aytonavalagamella.sedelectronica.es/",
  "paginas": {
   "tramites": "https://aytonavalagamella.sedelectronica.es/dossier",
   "instancia": "https://aytonavalagamella.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://aytonavalagamella.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://aytonavalagamella.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://aytonavalagamella.sedelectronica.es/calendar",
   "identificacion": "https://aytonavalagamella.sedelectronica.es/id-systems",
   "oficinas": "https://aytonavalagamella.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Navas del Rey",
  "sede": "https://navasdelrey.sedelectronica.es/",
  "paginas": {
   "tramites": "https://navasdelrey.sedelectronica.es/dossier",
   "instancia": "https://navasdelrey.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://navasdelrey.sedelectronica.es/catalog/t/1dd10ad1-42e1-4c76-951d-7e8c413a87a4",
   "padron_alta": "https://navasdelrey.sedelectronica.es/catalog/t/517cc83b-3951-4439-ba61-f3161d4688db",
   "calendario": "https://navasdelrey.sedelectronica.es/calendar",
   "identificacion": "https://navasdelrey.sedelectronica.es/id-systems",
   "oficinas": "https://navasdelrey.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Nuevo Baztán",
  "sede": "https://nuevobaztan.sedelectronica.es/",
  "paginas": {
   "tramites": "https://nuevobaztan.sedelectronica.es/dossier",
   "instancia": "https://nuevobaztan.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://nuevobaztan.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "padron_alta": "https://nuevobaztan.sedelectronica.es/catalog/t/f41b8137-6aca-4113-a52d-d7862e7cbb90",
   "recurso": "https://nuevobaztan.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://nuevobaztan.sedelectronica.es/calendar",
   "identificacion": "https://nuevobaztan.sedelectronica.es/id-systems",
   "oficinas": "https://nuevobaztan.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Olmeda de las Fuentes",
  "sede": "https://olmedadelasfuentes.sedelectronica.es/",
  "paginas": {
   "tramites": "https://olmedadelasfuentes.sedelectronica.es/dossier",
   "instancia": "https://olmedadelasfuentes.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://olmedadelasfuentes.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://olmedadelasfuentes.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://olmedadelasfuentes.sedelectronica.es/calendar",
   "identificacion": "https://olmedadelasfuentes.sedelectronica.es/id-systems",
   "oficinas": "https://olmedadelasfuentes.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Orusco de Tajuña",
  "sede": "https://aytoorusco.sedelectronica.es/",
  "paginas": {
   "tramites": "https://aytoorusco.sedelectronica.es/dossier",
   "instancia": "https://aytoorusco.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://aytoorusco.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://aytoorusco.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://aytoorusco.sedelectronica.es/calendar",
   "identificacion": "https://aytoorusco.sedelectronica.es/id-systems",
   "oficinas": "https://aytoorusco.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Pedrezuela",
  "sede": "https://pedrezuela.sedelectronica.es/",
  "paginas": {
   "tramites": "https://pedrezuela.sedelectronica.es/dossier",
   "instancia": "https://pedrezuela.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://pedrezuela.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://pedrezuela.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://pedrezuela.sedelectronica.es/calendar",
   "identificacion": "https://pedrezuela.sedelectronica.es/id-systems",
   "oficinas": "https://pedrezuela.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Pelayos de la Presa",
  "sede": "https://pelayospresa.sedelectronica.es/",
  "paginas": {
   "tramites": "https://pelayospresa.sedelectronica.es/dossier",
   "instancia": "https://pelayospresa.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://pelayospresa.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "padron_alta": "https://pelayospresa.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://pelayospresa.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://pelayospresa.sedelectronica.es/calendar",
   "identificacion": "https://pelayospresa.sedelectronica.es/id-systems",
   "oficinas": "https://pelayospresa.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Pezuela de las Torres",
  "sede": "https://pezueladelastorres.sedelectronica.es/",
  "paginas": {
   "tramites": "https://pezueladelastorres.sedelectronica.es/dossier",
   "instancia": "https://pezueladelastorres.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://pezueladelastorres.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://pezueladelastorres.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://pezueladelastorres.sedelectronica.es/calendar",
   "identificacion": "https://pezueladelastorres.sedelectronica.es/id-systems",
   "oficinas": "https://pezueladelastorres.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Puentes Viejas",
  "sede": "https://puentesviejas.sedelectronica.es/",
  "paginas": {
   "tramites": "https://puentesviejas.sedelectronica.es/dossier",
   "instancia": "https://puentesviejas.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://puentesviejas.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "calendario": "https://puentesviejas.sedelectronica.es/calendar",
   "identificacion": "https://puentesviejas.sedelectronica.es/id-systems",
   "oficinas": "https://puentesviejas.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Quijorna",
  "sede": "https://aytoquijorna.sedelectronica.es/",
  "paginas": {
   "tramites": "https://aytoquijorna.sedelectronica.es/dossier",
   "instancia": "https://aytoquijorna.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://aytoquijorna.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://aytoquijorna.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://aytoquijorna.sedelectronica.es/calendar",
   "identificacion": "https://aytoquijorna.sedelectronica.es/id-systems",
   "oficinas": "https://aytoquijorna.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Ribatejada",
  "sede": "https://ribatejada.sedelectronica.es/",
  "paginas": {
   "tramites": "https://ribatejada.sedelectronica.es/dossier",
   "instancia": "https://ribatejada.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://ribatejada.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "calendario": "https://ribatejada.sedelectronica.es/calendar",
   "identificacion": "https://ribatejada.sedelectronica.es/id-systems",
   "oficinas": "https://ribatejada.sedelectronica.es/ownership"
  }
 },
 {
  "n": "San Agustín del Guadalix",
  "sede": "https://sanagustindelguadalix.sedelectronica.es/",
  "paginas": {
   "tramites": "https://sanagustindelguadalix.sedelectronica.es/dossier",
   "instancia": "https://sanagustindelguadalix.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "recurso": "https://sanagustindelguadalix.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://sanagustindelguadalix.sedelectronica.es/calendar",
   "identificacion": "https://sanagustindelguadalix.sedelectronica.es/id-systems",
   "oficinas": "https://sanagustindelguadalix.sedelectronica.es/ownership"
  }
 },
 {
  "n": "San Martín de la Vega",
  "sede": "https://sanmartindelavega.sedelectronica.es/",
  "paginas": {
   "tramites": "https://sanmartindelavega.sedelectronica.es/dossier",
   "instancia": "https://sanmartindelavega.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://sanmartindelavega.sedelectronica.es/catalog/t/05ae3a0f-45f4-4533-aa61-376d6ed243be",
   "padron_alta": "https://sanmartindelavega.sedelectronica.es/catalog/t/a5de03f4-de00-4f34-8a76-73a9397e190d",
   "calendario": "https://sanmartindelavega.sedelectronica.es/calendar",
   "identificacion": "https://sanmartindelavega.sedelectronica.es/id-systems",
   "oficinas": "https://sanmartindelavega.sedelectronica.es/ownership"
  }
 },
 {
  "n": "San Martín de Valdeiglesias",
  "sede": "https://sanmartindevaldeiglesias.sedelectronica.es/",
  "paginas": {
   "tramites": "https://sanmartindevaldeiglesias.sedelectronica.es/dossier",
   "instancia": "https://sanmartindevaldeiglesias.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://sanmartindevaldeiglesias.sedelectronica.es/catalog/t/970c4083-727e-4e30-8f9d-757542fcdbc6",
   "recurso": "https://sanmartindevaldeiglesias.sedelectronica.es/catalog/t/a0ef28ba-fb41-4289-921e-61b4a31b7de2",
   "calendario": "https://sanmartindevaldeiglesias.sedelectronica.es/calendar",
   "identificacion": "https://sanmartindevaldeiglesias.sedelectronica.es/id-systems",
   "oficinas": "https://sanmartindevaldeiglesias.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Santa María de la Alameda",
  "sede": "https://santamariadelaalameda.sedelectronica.es/",
  "paginas": {
   "tramites": "https://santamariadelaalameda.sedelectronica.es/dossier",
   "padron_alta": "https://santamariadelaalameda.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "calendario": "https://santamariadelaalameda.sedelectronica.es/calendar",
   "identificacion": "https://santamariadelaalameda.sedelectronica.es/id-systems",
   "oficinas": "https://santamariadelaalameda.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Santorcaz",
  "sede": "https://santorcaz.sedelectronica.es/",
  "paginas": {
   "tramites": "https://santorcaz.sedelectronica.es/dossier",
   "instancia": "https://santorcaz.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://santorcaz.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://santorcaz.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://santorcaz.sedelectronica.es/calendar",
   "identificacion": "https://santorcaz.sedelectronica.es/id-systems",
   "oficinas": "https://santorcaz.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Sevilla la Nueva",
  "sede": "https://sevillalanueva.sedelectronica.es/",
  "paginas": {
   "tramites": "https://sevillalanueva.sedelectronica.es/dossier",
   "instancia": "https://sevillalanueva.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://sevillalanueva.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://sevillalanueva.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://sevillalanueva.sedelectronica.es/calendar",
   "identificacion": "https://sevillalanueva.sedelectronica.es/id-systems",
   "oficinas": "https://sevillalanueva.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Somosierra",
  "sede": "https://somosierra.sedelectronica.es/",
  "paginas": {
   "tramites": "https://somosierra.sedelectronica.es/dossier",
   "instancia": "https://somosierra.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://somosierra.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://somosierra.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://somosierra.sedelectronica.es/calendar",
   "identificacion": "https://somosierra.sedelectronica.es/id-systems",
   "oficinas": "https://somosierra.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Talamanca de Jarama",
  "sede": "https://talamancadejrama.sedelectronica.es/",
  "paginas": {
   "tramites": "https://talamancadejrama.sedelectronica.es/dossier",
   "instancia": "https://talamancadejrama.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://talamancadejrama.sedelectronica.es/catalog/t/e487bf24-1af2-4e8d-8cc0-3c605b57b372",
   "recurso": "https://talamancadejrama.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://talamancadejrama.sedelectronica.es/calendar",
   "identificacion": "https://talamancadejrama.sedelectronica.es/id-systems",
   "oficinas": "https://talamancadejrama.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Titulcia",
  "sede": "https://titulcia.sedelectronica.es/",
  "paginas": {
   "tramites": "https://titulcia.sedelectronica.es/dossier",
   "instancia": "https://titulcia.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://titulcia.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://titulcia.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://titulcia.sedelectronica.es/calendar",
   "identificacion": "https://titulcia.sedelectronica.es/id-systems",
   "oficinas": "https://titulcia.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Torrejón de la Calzada",
  "sede": "https://aytotorrejoncalzada.sedelectronica.es/",
  "paginas": {
   "tramites": "https://aytotorrejoncalzada.sedelectronica.es/dossier",
   "instancia": "https://aytotorrejoncalzada.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://aytotorrejoncalzada.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "padron_alta": "https://aytotorrejoncalzada.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://aytotorrejoncalzada.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://aytotorrejoncalzada.sedelectronica.es/calendar",
   "identificacion": "https://aytotorrejoncalzada.sedelectronica.es/id-systems",
   "oficinas": "https://aytotorrejoncalzada.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Torrejón de Velasco",
  "sede": "https://torrejondevelasco.sedelectronica.es/",
  "paginas": {
   "tramites": "https://torrejondevelasco.sedelectronica.es/dossier",
   "instancia": "https://torrejondevelasco.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://torrejondevelasco.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://torrejondevelasco.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://torrejondevelasco.sedelectronica.es/calendar",
   "identificacion": "https://torrejondevelasco.sedelectronica.es/id-systems",
   "oficinas": "https://torrejondevelasco.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Torrelaguna",
  "sede": "https://torrelaguna.sedelectronica.es/",
  "paginas": {
   "tramites": "https://torrelaguna.sedelectronica.es/dossier",
   "instancia": "https://torrelaguna.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://torrelaguna.sedelectronica.es/catalog/t/f28f437e-45ad-4dc3-8822-47f3fdde8626",
   "padron_alta": "https://torrelaguna.sedelectronica.es/catalog/t/0ec93900-24b0-4166-9fef-13aaf8b4a7e3",
   "recurso": "https://torrelaguna.sedelectronica.es/catalog/t/ff243f40-bd9d-481f-90ad-edb6c8f7870b",
   "calendario": "https://torrelaguna.sedelectronica.es/calendar",
   "identificacion": "https://torrelaguna.sedelectronica.es/id-systems",
   "oficinas": "https://torrelaguna.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Torrelodones",
  "sede": "https://sede.torrelodones.es/",
  "paginas": {
   "tramites": "https://sede.torrelodones.es/dossier",
   "instancia": "https://sede.torrelodones.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://sede.torrelodones.es/catalog/t/9b208a98-2355-44ec-9295-7a962f810de0",
   "padron_alta": "https://sede.torrelodones.es/catalog/t/660e56bf-2a11-4f00-87e7-263f48692847",
   "recurso": "https://sede.torrelodones.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://sede.torrelodones.es/calendar",
   "identificacion": "https://sede.torrelodones.es/id-systems",
   "oficinas": "https://sede.torrelodones.es/ownership"
  }
 },
 {
  "n": "Torremocha de Jarama",
  "sede": "https://torremochadejarama.sedelectronica.es/",
  "paginas": {
   "tramites": "https://torremochadejarama.sedelectronica.es/dossier",
   "instancia": "https://torremochadejarama.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://torremochadejarama.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://torremochadejarama.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://torremochadejarama.sedelectronica.es/calendar",
   "identificacion": "https://torremochadejarama.sedelectronica.es/id-systems",
   "oficinas": "https://torremochadejarama.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Torres de la Alameda",
  "sede": "https://torresdelaalameda.sedelectronica.es/",
  "paginas": {
   "tramites": "https://torresdelaalameda.sedelectronica.es/dossier",
   "instancia": "https://torresdelaalameda.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://torresdelaalameda.sedelectronica.es/catalog/t/1463ba9c-91c1-47b9-9c86-5786dcb74613",
   "padron_alta": "https://torresdelaalameda.sedelectronica.es/catalog/t/7d5491ef-4697-41d7-bf0b-e08091d47fe8",
   "recurso": "https://torresdelaalameda.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://torresdelaalameda.sedelectronica.es/calendar",
   "identificacion": "https://torresdelaalameda.sedelectronica.es/id-systems",
   "oficinas": "https://torresdelaalameda.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Valdeavero",
  "sede": "https://valdeavero.sedelectronica.es/",
  "paginas": {
   "tramites": "https://valdeavero.sedelectronica.es/dossier",
   "instancia": "https://valdeavero.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://valdeavero.sedelectronica.es/catalog/t/d9bc97c6-0c07-4f78-96fe-d6335ff91dc1",
   "padron_alta": "https://valdeavero.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://valdeavero.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://valdeavero.sedelectronica.es/calendar",
   "identificacion": "https://valdeavero.sedelectronica.es/id-systems",
   "oficinas": "https://valdeavero.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Valdemanco",
  "sede": "https://valdemanco.sedelectronica.es/",
  "paginas": {
   "tramites": "https://valdemanco.sedelectronica.es/dossier",
   "instancia": "https://valdemanco.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://valdemanco.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "calendario": "https://valdemanco.sedelectronica.es/calendar",
   "identificacion": "https://valdemanco.sedelectronica.es/id-systems",
   "oficinas": "https://valdemanco.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Valdemaqueda",
  "sede": "https://aytovaldemaqueda.sedelectronica.es/",
  "paginas": {
   "tramites": "https://aytovaldemaqueda.sedelectronica.es/dossier",
   "instancia": "https://aytovaldemaqueda.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://aytovaldemaqueda.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://aytovaldemaqueda.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://aytovaldemaqueda.sedelectronica.es/calendar",
   "identificacion": "https://aytovaldemaqueda.sedelectronica.es/id-systems",
   "oficinas": "https://aytovaldemaqueda.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Valdemorillo",
  "sede": "https://aytovaldemorillo.sedelectronica.es/",
  "paginas": {
   "tramites": "https://aytovaldemorillo.sedelectronica.es/dossier",
   "instancia": "https://aytovaldemorillo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://aytovaldemorillo.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "padron_alta": "https://aytovaldemorillo.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://aytovaldemorillo.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://aytovaldemorillo.sedelectronica.es/calendar",
   "identificacion": "https://aytovaldemorillo.sedelectronica.es/id-systems",
   "oficinas": "https://aytovaldemorillo.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Valdeolmos-Alalpardo",
  "sede": "https://valdeolmos-alalpardo.sedelectronica.es/",
  "paginas": {
   "tramites": "https://valdeolmos-alalpardo.sedelectronica.es/dossier",
   "instancia": "https://valdeolmos-alalpardo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://valdeolmos-alalpardo.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://valdeolmos-alalpardo.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://valdeolmos-alalpardo.sedelectronica.es/calendar",
   "identificacion": "https://valdeolmos-alalpardo.sedelectronica.es/id-systems",
   "oficinas": "https://valdeolmos-alalpardo.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Valdetorres de Jarama",
  "sede": "https://valdetorresdejarama.sedelectronica.es/",
  "paginas": {
   "tramites": "https://valdetorresdejarama.sedelectronica.es/dossier",
   "instancia": "https://valdetorresdejarama.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://valdetorresdejarama.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://valdetorresdejarama.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://valdetorresdejarama.sedelectronica.es/calendar",
   "identificacion": "https://valdetorresdejarama.sedelectronica.es/id-systems",
   "oficinas": "https://valdetorresdejarama.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Valverde de Alcalá",
  "sede": "https://valverdedealcala.sedelectronica.es/",
  "paginas": {
   "tramites": "https://valverdedealcala.sedelectronica.es/dossier",
   "instancia": "https://valverdedealcala.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://valverdedealcala.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "calendario": "https://valverdedealcala.sedelectronica.es/calendar",
   "identificacion": "https://valverdedealcala.sedelectronica.es/id-systems",
   "oficinas": "https://valverdedealcala.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Venturada",
  "sede": "https://venturada.sedelectronica.es/",
  "paginas": {
   "tramites": "https://venturada.sedelectronica.es/dossier",
   "instancia": "https://venturada.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://venturada.sedelectronica.es/catalog/t/1c74bc66-8b69-4f3c-8183-d3591f0504ed",
   "padron_alta": "https://venturada.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "calendario": "https://venturada.sedelectronica.es/calendar",
   "identificacion": "https://venturada.sedelectronica.es/id-systems",
   "oficinas": "https://venturada.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Villaconejos",
  "sede": "https://villaconejos.sedelectronica.es/",
  "paginas": {
   "tramites": "https://villaconejos.sedelectronica.es/dossier",
   "instancia": "https://villaconejos.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://villaconejos.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://villaconejos.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://villaconejos.sedelectronica.es/calendar",
   "identificacion": "https://villaconejos.sedelectronica.es/id-systems",
   "oficinas": "https://villaconejos.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Villalbilla",
  "sede": "https://aytovillalbilla.sedelectronica.es/",
  "paginas": {
   "tramites": "https://aytovillalbilla.sedelectronica.es/dossier",
   "instancia": "https://aytovillalbilla.sedelectronica.es/catalog/t/1a89a702-bb0c-4875-a945-9f0c642f81b9",
   "padron": "https://aytovillalbilla.sedelectronica.es/catalog/t/d0e6b56a-d18d-4f97-b59a-b5aa6b604959",
   "padron_alta": "https://aytovillalbilla.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://aytovillalbilla.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://aytovillalbilla.sedelectronica.es/calendar",
   "identificacion": "https://aytovillalbilla.sedelectronica.es/id-systems",
   "oficinas": "https://aytovillalbilla.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Villamanrique de Tajo",
  "sede": "https://villamanriquedetajo.sedelectronica.es/",
  "paginas": {
   "tramites": "https://villamanriquedetajo.sedelectronica.es/dossier",
   "instancia": "https://villamanriquedetajo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://villamanriquedetajo.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://villamanriquedetajo.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://villamanriquedetajo.sedelectronica.es/calendar",
   "identificacion": "https://villamanriquedetajo.sedelectronica.es/id-systems",
   "oficinas": "https://villamanriquedetajo.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Villanueva de Perales",
  "sede": "https://villanuevadeperales.sedelectronica.es/",
  "paginas": {
   "tramites": "https://villanuevadeperales.sedelectronica.es/dossier",
   "instancia": "https://villanuevadeperales.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://villanuevadeperales.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://villanuevadeperales.sedelectronica.es/catalog/t/a0ef28ba-fb41-4289-921e-61b4a31b7de2",
   "calendario": "https://villanuevadeperales.sedelectronica.es/calendar",
   "identificacion": "https://villanuevadeperales.sedelectronica.es/id-systems",
   "oficinas": "https://villanuevadeperales.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Villanueva del Pardillo",
  "sede": "https://sede.vvapardillo.org/",
  "paginas": {
   "tramites": "https://sede.vvapardillo.org/dossier",
   "instancia": "https://sede.vvapardillo.org/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://sede.vvapardillo.org/catalog/t/2ef0b93d-f3e9-40db-ab55-6711a869648d",
   "padron_alta": "https://sede.vvapardillo.org/catalog/t/af3bba79-43f0-4301-8495-b746b201ba62",
   "recurso": "https://sede.vvapardillo.org/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://sede.vvapardillo.org/calendar",
   "identificacion": "https://sede.vvapardillo.org/id-systems",
   "oficinas": "https://sede.vvapardillo.org/ownership"
  }
 },
 {
  "n": "Villar del Olmo",
  "sede": "https://villardelolmo.sedelectronica.es/",
  "paginas": {
   "tramites": "https://villardelolmo.sedelectronica.es/dossier",
   "instancia": "https://villardelolmo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://villardelolmo.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "calendario": "https://villardelolmo.sedelectronica.es/calendar",
   "identificacion": "https://villardelolmo.sedelectronica.es/id-systems",
   "oficinas": "https://villardelolmo.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Villarejo de Salvanés",
  "sede": "https://villarejodesalvanes.sedelectronica.es/",
  "paginas": {
   "tramites": "https://villarejodesalvanes.sedelectronica.es/dossier",
   "instancia": "https://villarejodesalvanes.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://villarejodesalvanes.sedelectronica.es/catalog/t/01ff12a8-fccc-4050-ae2a-60a8ac7b3b57",
   "recurso": "https://villarejodesalvanes.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://villarejodesalvanes.sedelectronica.es/calendar",
   "identificacion": "https://villarejodesalvanes.sedelectronica.es/id-systems",
   "oficinas": "https://villarejodesalvanes.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Villavieja del Lozoya",
  "sede": "https://villaviejadellozoya.sedelectronica.es/",
  "paginas": {
   "tramites": "https://villaviejadellozoya.sedelectronica.es/dossier",
   "instancia": "https://villaviejadellozoya.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron": "https://villaviejadellozoya.sedelectronica.es/catalog/t/6e27b72a-5ea8-45cb-b343-31f9dda5cbc2",
   "padron_alta": "https://villaviejadellozoya.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://villaviejadellozoya.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://villaviejadellozoya.sedelectronica.es/calendar",
   "identificacion": "https://villaviejadellozoya.sedelectronica.es/id-systems",
   "oficinas": "https://villaviejadellozoya.sedelectronica.es/ownership"
  }
 },
 {
  "n": "Zarzalejo",
  "sede": "https://zarzalejo.sedelectronica.es/",
  "paginas": {
   "tramites": "https://zarzalejo.sedelectronica.es/dossier",
   "instancia": "https://zarzalejo.sedelectronica.es/catalog/t/5161fa8d-970e-4b48-a506-b2ac34ceafe5",
   "padron_alta": "https://zarzalejo.sedelectronica.es/catalog/t/073b778e-bb91-4ef4-b7cb-31a39be0e95f",
   "recurso": "https://zarzalejo.sedelectronica.es/catalog/t/b001292e-cdf4-4e48-89db-6eae243fd878",
   "calendario": "https://zarzalejo.sedelectronica.es/calendar",
   "identificacion": "https://zarzalejo.sedelectronica.es/id-systems",
   "oficinas": "https://zarzalejo.sedelectronica.es/ownership"
  }
 }
];
