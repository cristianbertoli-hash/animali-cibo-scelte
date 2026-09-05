import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('home presents the project as a 111-page illustrated manual', () => {
  assert.match(html, /manuale illustrato/i);
  assert.match(html, /111 pagine/i);
  assert.doesNotMatch(html, /opuscolo|libretto/i);
});

test('home includes the practical school-canteen scope', () => {
  assert.match(html, /mensa scolastica/i);
  assert.match(html, /pagina fotocopiabile/i);
});

test('home includes a support section that keeps the digital manual free', () => {
  assert.match(html, /id="support"/);
  assert.match(html, /manuale digitale è e resterà scaricabile gratuitamente/i);
  assert.match(html, /Sostieni il progetto/i);
});

test('home explains official version and allowed use of the PDF', () => {
  assert.match(html, /Versione ufficiale 2026\.1/i);
  assert.match(html, /stampata e condivisa gratuitamente/i);
  assert.match(html, /senza modifiche/i);
});
