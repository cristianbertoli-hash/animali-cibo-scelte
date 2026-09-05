# CHECKPOINT V2 248 — PDF + DOCX — 2026-09-05

## Stato editoriale

La V1 da 111 pagine A5 resta preservata e non deve essere cancellata.

La V2 corrente è una versione estesa A4 da **248 pagine**, Edizione 2026.2, con corpo testo principale circa 11,2 pt, infografiche vettoriali e prime illustrazioni editoriali in stile adulto/pastello inserite in pagine selezionate.

## Deliverable obbligatori da mantenere da ora in avanti

Ogni release importante del manuale deve produrre almeno **due file distinti**:

1. **PDF pubblico finale** — riferimento ufficiale di impaginazione, con immagini, infografiche, apertura libera, stampa libera, accessibilità/estrazione testo consentite e modifica/assemblaggio limitati.
2. **DOCX editabile** — sorgente modificabile dall'autore per piccole correzioni future a testo, titoli, didascalie e contenuti. Il DOCX non è il riferimento pixel-perfect della versione pubblicata: l'impaginazione ufficiale resta il PDF e può variare leggermente a seconda di Word/LibreOffice/macOS.

## File correnti

- PDF pubblico illustrato: `Animali_Cibo_e_Scelte_2026.2_MANUALE_ESTESO_248_A4_ILLUSTRATO_IT.pdf`
- Master stampa illustrato: `Animali_Cibo_e_Scelte_2026.2_MANUALE_ESTESO_248_A4_ILLUSTRATO_PRINT.pdf`
- DOCX editabile: `Animali_Cibo_e_Scelte_2026.2_MANUALE_ESTESO_248_A4_EDITABILE.docx`

## Immagini

Direzione grafica confermata:
- stile graphic-novel/editoriale adulto;
- colori pastello delicati;
- niente estetica da libro per bambini piccoli;
- immagini originali, usate come accompagnamento visivo e non come fonte scientifica;
- evitare testo importante incorporato nelle immagini;
- mantenere coerenza di atmosfera, palette e personaggi ricorrenti nelle future tavole.

Le immagini di riferimento caricate dall'utente servono solo come ispirazione stilistica; non devono essere copiate.

## QA corrente

PDF illustrato:
- 248 pagine A4;
- immagini e infografiche inserite senza cambiare la struttura base;
- categorie tecniche interne rimosse dai motivi decorativi per evitare etichette incoerenti;
- rendering verificato su pagine campione inclusi cover, animali, nutrizione, mensa e chiusura;
- SHA-256 PDF pubblico: `1fdcb95d7dc7626f126d0e7b648725aefa987180ada740d32a20caadffba4c51`.

DOCX editabile:
- formato A4;
- corpo principale 11,2 pt;
- testo ricostruito in paragrafi modificabili;
- infografiche mantenute visivamente come immagini quando necessario;
- illustrazioni inserite come immagini modificabili/sostituibili;
- conversione LibreOffice verificata: 248 pagine circa, con possibile variazione minima di paginazione dovuta al motore Word/LibreOffice;
- SHA-256 DOCX: `72656094deb6fe25aefc809c56ddcbad338503cf07174e1656ca5ba1fa7b5572`.

## Regola per le prossime revisioni

Quando l'autore modifica il DOCX o chiede correzioni:
- aggiornare il DOCX sorgente;
- rigenerare il PDF ufficiale;
- fare QA visivo;
- aggiornare numero di versione e hash;
- non sovrascrivere le versioni storiche importanti.

## Roadmap già approvata e da non perdere

- manuale 10+ fino all'adulto;
- tono divulgativo + narrativo + pratico + infografico;
- approfondimento forte di micronutrienti, salute, ambiente, acqua, risorse, sport, crescita, mense e transizione vegetariana/vegana;
- almeno 35 lingue previste dal sito;
- audio per capitolo e accessibilità come roadmap futura;
- PDF digitale gratuito;
- possibile edizione cartacea Amazon/KDP in futuro;
- sito, SEO, dominio e sezione sostegno da sviluppare senza perdere la gratuità del PDF digitale.
