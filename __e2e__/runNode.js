const { default: DefaultAbortController, AbortController, AbortSignal } = require('abort-controller-es5');

process.send(typeof DefaultAbortController);
process.send(AbortController === DefaultAbortController);
process.send(typeof AbortSignal);

const controller = new AbortController();

controller.signal.addEventListener('abort', () => process.send('aborted'));
controller.abort();
