// Deterministic counter tests using jsdom and Node's assert.
const { JSDOM } = require('jsdom');
const assert = require('assert');
const fs = require('fs');
const path = require('path');

function loadApp() {
  const root = path.join(__dirname, '..');
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const app = fs.readFileSync(path.join(root, 'static', 'app.js'), 'utf8');

  // Do not ask jsdom to fetch external resources. Evaluate the project's local
  // script directly so the test is deterministic and does not depend on URL
  // resolution, a web server, or network access.
  const dom = new JSDOM(html, { runScripts: 'outside-only' });
  dom.window.eval(app);
  return dom;
}

function run() {
  const dom = loadApp();
  const { window } = dom;

  const counterEl = window.document.getElementById('counter');
  const incBtn = window.document.getElementById('increment');
  const resetBtn = window.document.getElementById('reset');

  assert.strictEqual(counterEl.textContent.trim(), '0', 'initial counter should be 0');

  incBtn.click();
  assert.strictEqual(counterEl.textContent.trim(), '1', 'counter should be 1 after one increment');

  incBtn.click();
  assert.strictEqual(counterEl.textContent.trim(), '2', 'counter should be 2 after two increments');

  resetBtn.click();
  assert.strictEqual(counterEl.textContent.trim(), '0', 'counter should be 0 after reset');

  console.log('All tests passed');
}

if (require.main === module) {
  try {
    run();
  } catch (err) {
    console.error(err && err.stack ? err.stack : err);
    process.exit(1);
  }
}
