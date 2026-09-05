# Animali, cibo e scelte

Sito pubblico del progetto editoriale **Animali, cibo e scelte — Capire per scegliere**.

## Stato attuale — 5 settembre 2026

- landing page responsive: pronta
- GitHub Pages: attivo
- selettore lingue: 6 principali + elenco esteso ricercabile
- italiano: lingua master
- altre lingue: predisposte e indicate come in arrivo
- progetto ora presentato come **manuale illustrato**, non più come opuscolo/libretto
- manuale italiano: **72 pagine A5, Edizione 2026.1, completato e verificato**
- target: 10+ anni, soprattutto 10–16, leggibile anche da adolescenti più grandi e adulti
- contenuti: animali e sentienza, allevamenti, pesca, terra, acqua, energia, trasporti, refrigerazione, imballaggi, spreco, clima, biodiversità, antibiotico-resistenza, salute, nutrizione vegetale e pensiero critico
- versione pubblica PDF: apertura libera, stampa libera, accessibilità consentita, modifica/assemblaggio limitati con AES-128 compatibile con macOS Big Sur Preview
- master stampa: separato e non cifrato, predisposto per una futura valutazione print-on-demand/KDP
- sezione download: pronta; caricamento del nuovo PDF sul sito ancora da eseguire
- sezione fonti: pronta
- sezione “Sostieni il progetto”: pronta, modalità di sostegno non ancora scelta
- immagini/scene interne del manuale: vettoriali originali e coerenti con l’identità grafica approvata
- immagini hero del sito: 3 slot predisposti (`assets/hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`), file reali non ancora caricati

## Scheda Madre e documentazione

La fonte di verità del progetto comprende:

- `docs/SCHEDA_MADRE_PROGETTO.md`
- `docs/CHECKPOINT_GLOBALE_2026-09-05.md`
- `docs/BIBLIOGRAFIA_MASTER_2026.md`
- `docs/superpowers/specs/2026-09-05-manuale-esteso-72p-design.md`
- `docs/superpowers/plans/2026-09-05-manuale-esteso-72p.md`

I precedenti file da 20 pagine restano come cronologia editoriale, ma la direzione corrente ufficiale è il manuale da 72 pagine.

## Pubblicazione

Il sito è pubblicato tramite GitHub Pages dalla root del branch `main`.

## Sicurezza del progetto

Questo repository è dedicato esclusivamente al sito pubblico e ai materiali destinati alla pubblicazione. Non contiene file personali e non deve modificare o dipendere dagli altri repository dell'account. Password proprietario del PDF e altri segreti non devono mai essere salvati nel repository pubblico.

## Struttura

- `index.html` — pagina pubblica
- `styles.css` — layout responsive principale
- `project.css` — stili specifici del progetto, diritti e sostegno
- `script.js` — scelta lingua, ricerca, messaggi e dissolvenza immagini
- `tests/` — controlli di regressione del sito
- `docs/` — Scheda Madre, fonti, specifiche e piani
- `assets/` — immagini e PDF pubblici quando vengono pubblicati

## Prossimi passi

1. caricare il manuale PDF pubblico nel sito e attivare il download
2. pubblicare hash SHA-256 e bibliografia online estesa
3. scegliere e inserire 2–3 foto hero originali
4. completare SEO, sitemap, canonical e dominio personalizzato
5. valutare una versione cartacea Amazon KDP mantenendo gratuito il PDF digitale
6. avviare le traduzioni progressive
