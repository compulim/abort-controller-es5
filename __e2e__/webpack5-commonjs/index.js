// When bundling with esbuild:
// - If we "import", it load ESM from "markdown-it-attrs-es5/module". The default imported object is () => any.
// - If we "require", it load CJS from "markdown-it-attrs-es5/main". The default imported object is () => any.

// When bundling with Webpack:
// - Nomatter we "import" or "require", it always load ESM from "markdown-it-attrs-es5/module", based on the "webpack.config.json/mainFields".
// - If we "import", the default imported object is () => any.
// - If we "require", the default imported object is { default: () => any }.
// - If we "require" and "mainFields" is "main", the default imported object is () => any.

const { default: DefaultAbortController, AbortController, AbortSignal } = require('abort-controller-es5');

console.log(typeof DefaultAbortController);
console.log(AbortController === DefaultAbortController);
console.log(typeof AbortSignal);

const controller = new AbortController();

controller.signal.addEventListener('abort', () => console.log('aborted'));
controller.abort();
