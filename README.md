# Animali, cibo e scelte

Sito pubblico del progetto editoriale **Animali, cibo e scelte — Capire per scegliere**.

## Stato attuale

- landing page responsive: pronta
- GitHub Pages: attivo
- selettore lingue: 6 principali + elenco esteso ricercabile
- italiano: lingua master
- altre lingue: predisposte e indicate come in arrivo
- sezione download: pronta, PDF non ancora collegato
- sezione fonti: pronta
- sezione “Sostieni il progetto”: pronta, modalità di sostegno non ancora scelta
- uso del PDF: stampa e condivisione integrale gratuite previste; modifica/alterazione/assemblaggio da limitare nella copia ufficiale
- immagini hero: 3 slot predisposti (`assets/hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`), file reali non ancora caricati
- testo PDF master v0.2: presente
- storyboard 20 pagine: presente
- bibliografia sintetica: integrata nel master v0.2, da rifinire prima del freeze finale
- illustrazioni PDF: non ancora generate
- PDF italiano 2026.1: non ancora impaginato

## Scheda Madre

La fonte di verità del progetto è:

- `docs/SCHEDA_MADRE_PROGETTO.md`
- `docs/CHECKPOINT_GLOBALE_2026-09-05.md`
- `docs/PDF_MASTER_V0.2.md`
- `docs/STORYBOARD_20_PAGINE.md`

Questi documenti consolidano target, struttura del PDF, fact-check 2026, diritti, protezione PDF, sito, multilingua, sostegno, testo e storyboard.

## Pubblicazione

Il sito è pubblicato tramite GitHub Pages dalla root del branch `main`.

## Sicurezza del progetto

Questo repository è dedicato esclusivamente al sito pubblico e ai materiali destinati alla pubblicazione. Non contiene file personali e non deve modificare o dipendere dagli altri repository dell'account.

## Struttura

- `index.html` — pagina pubblica
- `styles.css` — layout responsive principale
- `project.css` — stili specifici del progetto, diritti e sostegno
- `script.js` — scelta lingua, ricerca, messaggi e dissolvenza immagini
- `tests/` — controlli di regressione del sito
- `docs/` — Scheda Madre, checkpoint, master PDF e storyboard
- `assets/` — immagini e PDF pubblici quando saranno pronti

## Prossimi passi

1. micro-revisione finale testo e bibliografia
2. specifiche tecniche delle 13 composizioni illustrate
3. generazione illustrazioni originali
4. impaginazione PDF 20 pagine
5. verifica accessibilità/stampa
6. protezione PDF con owner password
7. hash SHA-256 e pubblicazione
8. collegamento download
9. SEO, dominio e traduzioni progressive
