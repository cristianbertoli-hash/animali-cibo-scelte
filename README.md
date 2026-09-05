# Animali, cibo e scelte

Sito pubblico del progetto editoriale **Animali, cibo e scelte — Capire per scegliere**.

## Stato attuale — 5 settembre 2026

- landing page responsive: pronta
- GitHub Pages: attivo
- selettore lingue: 6 principali + elenco esteso ricercabile
- italiano: lingua master
- altre lingue: predisposte e indicate come in arrivo
- progetto presentato come **manuale illustrato**, non opuscolo/libretto
- manuale italiano: **111 pagine A5, Edizione 2026.1**
- target: 10+ fino all'adulto
- tono: divulgativo + narrativo + pratico + schemi/infografiche
- contenuti: animali e sentienza, allevamenti, pesca, suolo, acqua, energia, trasporti, refrigerazione, imballaggi, spreco, clima, biodiversità, salute, nutrizione vegetariana/vegana, sport, cucina pratica, mense scolastiche e pensiero critico
- sezione mense: procedura pratica + pagina fotocopiabile
- copia pubblica PDF: apertura libera, stampa libera, accessibilità consentita, modifica/assemblaggio limitati con AES-128
- master stampa: separato e non cifrato, da mantenere privato
- QA corrente: 111 pagine, 6 test strutturali passati, rendering completo, confronto master/protetto con 0 pagine graficamente differenti
- SHA-256 copia pubblica: `6126c5254df948b73a628b75341f3617504ec23e2aa26e238d450e122dadc91e`
- sezione download del sito: predisposta; PDF binario non ancora caricato nel repository
- sezione fonti: pronta
- sezione “Sostieni il progetto”: pronta, modalità di sostegno non ancora scelta
- immagini hero del sito: 3 slot predisposti (`assets/hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`), file reali non ancora caricati

## Scheda Madre e documentazione

La fonte di verità corrente comprende:

- `docs/SCHEDA_MADRE_PROGETTO.md`
- `docs/BIBLIOGRAFIA_MASTER_2026.md`
- `docs/superpowers/specs/2026-09-05-manuale-111-design.md`
- `docs/superpowers/plans/2026-09-05-manuale-111-plan.md`

I precedenti file da 20 e 72 pagine restano come cronologia editoriale; la direzione ufficiale è il manuale da 111 pagine.

## Pubblicazione

Il sito è pubblicato tramite GitHub Pages dalla root del branch `main`.

## Sicurezza del progetto

Questo repository è dedicato esclusivamente al sito pubblico e ai materiali destinati alla pubblicazione. Password proprietario del PDF e altri segreti non devono mai essere salvati nel repository pubblico.

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
5. fare preflight Amazon KDP / tipografia e valutare prezzo della copia cartacea
6. avviare le traduzioni progressive
