import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('home includes a support section that keeps the PDF free', () => {
  assert.match(html, /id="support"/);
  assert.match(html, /Il PDF è e resterà scaricabile gratuitamente/i);
  assert.match(html, /Sostieni il progetto/i);
});

test('home explains official version and allowed use of the PDF', () => {
  assert.match(html, /Versione ufficiale 2026\.1/i);
  assert.match(html, /stampato e condiviso gratuitamente/i);
  assert.match(html, /senza modifiche/i);
});
