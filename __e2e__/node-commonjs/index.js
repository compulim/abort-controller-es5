const { default: DefaultAbortController, AbortController, AbortSignal } = require('abort-controller-es5');

console.log(typeof DefaultAbortController);
console.log(AbortController === DefaultAbortController);
console.log(typeof AbortSignal);

const controller = new AbortController();

controller.signal.addEventListener('abort', () => console.log('aborted'));
controller.abort();
