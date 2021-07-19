require('abort-controller-es5/dist/abort-controller-es5.production.min.js');

process.send(typeof AbortController);
process.send(true);
process.send(typeof AbortSignal);

const controller = new AbortController();

controller.signal.addEventListener('abort', () => process.send('aborted'));
controller.abort();
