import DefaultAbortController, { AbortController, AbortSignal } from 'abort-controller-es5';

console.log(typeof DefaultAbortController);
console.log(AbortController === DefaultAbortController);
console.log(typeof AbortSignal);

void new AbortController();
