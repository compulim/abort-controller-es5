import AbortController from '../lib/esm/index.mjs';

(async function () {
  const controller = new AbortController();

  controller.signal.addEventListener('abort', () => process.send('aborted'));

  setTimeout(() => controller.abort(), 0);
})();
