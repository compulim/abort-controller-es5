require('abort-controller-es5/dist/abort-controller-es5.production.min.js');

console.log(typeof AbortController);
console.log(true);
console.log(typeof AbortSignal);

const controller = new AbortController();

controller.signal.addEventListener('abort', () => console.log('aborted'));
controller.abort();
