// Minimal deterministic counter logic suitable for testing.
(function () {
  const counterEl = document.getElementById('counter');
  const incBtn = document.getElementById('increment');
  const resetBtn = document.getElementById('reset');

  let count = 0;

  function render() {
    counterEl.textContent = String(count);
  }

  function increment() {
    count += 1;
    render();
  }

  function reset() {
    count = 0;
    render();
  }

  // expose for tests in global namespace in a minimal, explicit way
  window.__factoryCounter = { get count() { return count }, increment, reset, render };

  incBtn.addEventListener('click', increment);
  resetBtn.addEventListener('click', reset);

  // initial render
  render();
})();

