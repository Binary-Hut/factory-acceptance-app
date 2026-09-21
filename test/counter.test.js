// Deterministic tests using jsdom and node's assert.
const { JSDOM } = require('jsdom');
const assert = require('assert');
const fs = require('fs');
const path = require('path');

function loadApp() {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });
  return new Promise((resolve) => {
    // wait for next tick to allow script to run
    setTimeout(() => resolve(dom), 20);
  });
}

async function run() {
  const dom = await loadApp();
  const { window } = dom;

  const counterEl = window.document.getElementById('counter');
  const incBtn = window.document.getElementById('increment');
  const resetBtn = window.document.getElementById('reset');

  // initial value
  assert.strictEqual(counterEl.textContent.trim(), '0', 'initial counter should be 0');

  // increment once
  incBtn.click();
  assert.strictEqual(counterEl.textContent.trim(), '1', 'counter should be 1 after one increment');

  // increment again
  incBtn.click();
  assert.strictEqual(counterEl.textContent.trim(), '2', 'counter should be 2 after two increments');

  // reset
  resetBtn.click();
  assert.strictEqual(counterEl.textContent.trim(), '0', 'counter should be 0 after reset');

  console.log('All tests passed');
}

if (require.main === module) {
  run().catch((err) => {
    console.error(err && err.stack ? err.stack : err);
    process.exit(1);
  });
}

