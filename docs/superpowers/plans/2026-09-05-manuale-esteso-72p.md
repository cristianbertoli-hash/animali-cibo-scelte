# Manuale esteso 72 pagine Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produrre e pubblicare il manuale illustrato A5 da 72 pagine `Animali, cibo e scelte - Capire per scegliere`, aggiornando in parallelo il sito pubblico da 'opuscolo/libretto' a 'manuale'.

**Architecture:** Il contenuto scientifico viene mantenuto in una sorgente strutturata separata dal renderer. Un generatore ReportLab crea due PDF dalla stessa sorgente: master stampa non cifrato e versione pubblica protetta AES-128 compatibile con macOS Big Sur Preview. Le scene ambientali sono vettoriali originali e il sito GitHub Pages viene aggiornato solo dopo che il PDF supera il render QA.

**Tech Stack:** Python 3, ReportLab, pypdf/qpdf, PDFium/Poppler QA scripts, GitHub Pages HTML/CSS/JS.

**Spec:** `docs/superpowers/specs/2026-09-05-manuale-esteso-72p-design.md`

## Global Constraints

- 72 pagine totali A5, copertine comprese.
- Target 10+, soprattutto 10-16 anni; tono maturo, chiaro e non infantile.
- Stessa identita grafica del PDF 20 pagine approvato.
- 16.000-22.000 parole circa, nessuna pagina riempitiva.
- Fonti 2026 autorevoli; distinzione tra scienza, etica, associazione e causalita.
- PDF pubblico: apertura libera, stampa libera, accessibilita consentita, modifica/assemblaggio limitati con AES-128.
- PDF master stampa: non cifrato e predisposto per futura tipografia/KDP.
- Nessun segreto/password nel repository pubblico.
- Ogni revisione significativa termina con render di tutte le pagine e controllo visuale.

---

### Task 1: Consolidare la base scientifica e i materiali sorgente

**Files:**
- Create: `docs/MANUALE_72_FONTI_E_NOTE.md`
- Modify: `docs/BIBLIOGRAFIA_MASTER_2026.md`

**Interfaces:**
- Consumes: materiali caricati dall'utente e fonti web istituzionali/peer-reviewed.
- Produces: elenco di claim ammessi con fonte, data e formulazione divulgativa sicura.

- [ ] **Step 1:** Estrarre dai materiali utente solo temi/spunti e segnalare le affermazioni datate da non riutilizzare.
- [ ] **Step 2:** Verificare acqua, deforestazione, cereali/mangimi, emissioni, food miles, catena del freddo, spreco, pesca, antibiotici, salute, carne lavorata, diabete, ultraprocessati, ESPGHAN.
- [ ] **Step 3:** Salvare una matrice `claim -> fonte -> formulazione -> caveat`.
- [ ] **Step 4:** Controllare che nessun claim forte resti senza fonte.
- [ ] **Step 5:** Commit.

### Task 2: Scrivere il master editoriale da 72 pagine

**Files:**
- Create: `docs/MANUALE_72_MASTER.md`

**Interfaces:**
- Consumes: `docs/MANUALE_72_FONTI_E_NOTE.md`.
- Produces: 72 sezioni di pagina numerate con titolo, testo, box, dati, visuale prevista e fonti.

- [ ] **Step 1:** Scrivere front matter pp.1-6.
- [ ] **Step 2:** Scrivere Parte I pp.7-24.
- [ ] **Step 3:** Scrivere Parte II pp.25-46.
- [ ] **Step 4:** Scrivere Parte III pp.47-60.
- [ ] **Step 5:** Scrivere Parte IV pp.61-68.
- [ ] **Step 6:** Scrivere Parte V pp.69-72.
- [ ] **Step 7:** Contare parole e riequilibrare densita per pagina.
- [ ] **Step 8:** Verificare che ogni doppia pagina abbia un messaggio centrale e nessuna duplicazione.
- [ ] **Step 9:** Commit.

### Task 3: Costruire il renderer del manuale

**Files:**
- Create: `manual72/build_manual.py`
- Create: `manual72/content.py`
- Create: `manual72/theme.py`
- Create: `manual72/scenes.py`
- Create: `manual72/tests/test_structure.py`

**Interfaces:**
- Consumes: contenuti strutturati da `content.py`.
- Produces: `build/master/Animali_Cibo_e_Scelte_2026.1_MANUALE_PRINT.pdf`.

- [ ] **Step 1: Write the failing test**

```python
from manual72.content import PAGES

def test_manual_has_exactly_72_pages():
    assert len(PAGES) == 72

def test_all_pages_have_titles():
    assert all(page.get('title') for page in PAGES)
```

- [ ] **Step 2: Run test to verify it fails**

Run: `python -m pytest manual72/tests/test_structure.py -v`
Expected: FAIL because `manual72.content` does not exist.

- [ ] **Step 3:** Implementare struttura contenuti, theme A5, header/footer, componenti box, numeri pagina e indice.
- [ ] **Step 4:** Implementare scene vettoriali coerenti in `scenes.py` (campagna, stalla, acqua, strada/cold-chain, porto/pesca, supermercato, cucina/spreco, tavola vegetale).
- [ ] **Step 5:** Generare il PDF master non cifrato.
- [ ] **Step 6: Run tests**

Run: `python -m pytest manual72/tests/test_structure.py -v`
Expected: PASS.

- [ ] **Step 7:** Commit.

### Task 4: QA tipografico e visuale del master

**Files:**
- Modify: `manual72/build_manual.py`
- Modify: `manual72/theme.py`
- Modify: `manual72/content.py`

**Interfaces:**
- Consumes: PDF master.
- Produces: master con 72 pagine senza clipping/overlap.

- [ ] **Step 1:** Renderizzare tutte le pagine con `render_pdf.py` a 160-200 dpi.
- [ ] **Step 2:** Creare contact sheet per controllo rapido.
- [ ] **Step 3:** Controllare tutte le 72 pagine singolarmente per testo tagliato, orfani, spazi bianchi eccessivi, grafica incoerente.
- [ ] **Step 4:** Correggere e rigenerare.
- [ ] **Step 5:** Eseguire `pdf_inspect.py` e verificare pagina/formato/font.
- [ ] **Step 6:** Commit correzioni.

### Task 5: Creare la versione pubblica protetta compatibile Mac

**Files:**
- Create: `manual72/protect_public.sh`
- Create: `manual72/tests/test_pdf_security.py`

**Interfaces:**
- Consumes: master print non cifrato.
- Produces: `Animali_Cibo_e_Scelte_2026.1_MANUALE_IT.pdf` protetto AES-128.

- [ ] **Step 1:** Scrivere test che controlla numero pagine, apertura senza password e restrizioni desiderate.
- [ ] **Step 2:** Verificare che fallisca prima della protezione.
- [ ] **Step 3:** Applicare owner password privata fuori repository, AES-128, stampa/accessibilita abilitate, modifica/assemblaggio disabilitati.
- [ ] **Step 4:** Renderizzare il PDF protetto e confrontarlo pixel-per-pixel con il master.
- [ ] **Step 5:** Verificare con due renderer se disponibili.
- [ ] **Step 6:** Calcolare SHA-256.

### Task 6: Aggiornare il sito da opuscolo/libretto a manuale

**Files:**
- Modify: `index.html`
- Modify: `README.md`
- Modify: `tests/site-content.test.mjs`

**Interfaces:**
- Consumes: titolo definitivo e metadati del manuale.
- Produces: sito che presenta un manuale illustrato da 72 pagine e prepara il download.

- [ ] **Step 1: Write failing tests**

```js
assert.match(html, /manuale illustrato/i);
assert.match(html, /72 pagine/i);
assert.doesNotMatch(html, /opuscolo|libretto/i);
```

- [ ] **Step 2:** Eseguire test e confermare FAIL.
- [ ] **Step 3:** Aggiornare copy del sito, download card, sezione progetto e footer.
- [ ] **Step 4:** Eseguire test e confermare PASS.
- [ ] **Step 5:** Commit.

### Task 7: Preparare metadati per futura stampa/KDP

**Files:**
- Create: `docs/KDP_PRINT_NOTES.md`

**Interfaces:**
- Consumes: formato A5 e master stampa.
- Produces: checklist successiva per ISBN opzionale, trim size, bleed, copertina, prezzo e costi stampa.

- [ ] **Step 1:** Registrare formato, bleed, pagine e requisiti del master non cifrato.
- [ ] **Step 2:** Separare chiaramente PDF gratuito digitale da futura copia cartacea a pagamento.
- [ ] **Step 3:** Non fissare ancora prezzo: lasciarlo a una futura verifica dei costi KDP per mercato/formato.
- [ ] **Step 4:** Commit.

### Task 8: Verifica finale e rilascio

**Files:**
- Modify: `README.md`
- Modify: `docs/SCHEDA_MADRE_PROGETTO.md`
- Modify: `docs/CHECKPOINT_GLOBALE_2026-09-05.md`

**Interfaces:**
- Consumes: PDF pubblico, SHA-256, esito QA.
- Produces: checkpoint riproducibile e link finale scaricabile.

- [ ] **Step 1:** Verificare 72/72 pagine renderizzate.
- [ ] **Step 2:** Verificare testo estraibile/accessibilita di base.
- [ ] **Step 3:** Verificare che il PDF protetto e il master abbiano render identico.
- [ ] **Step 4:** Aggiornare Scheda Madre con stato e hash.
- [ ] **Step 5:** Consegnare PDF pubblico e, separatamente, master stampa se richiesto.
