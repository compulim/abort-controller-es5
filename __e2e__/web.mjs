// When bundling with esbuild:
// - If we "import", it load ESM from "abort-controller-attrs-es5/module". The default imported object is () => any.
// - If we "require", it load CJS from "abort-controller-attrs-es5/main". The default imported object is () => any.

// When bundling with Webpack:
// - Nomatter we "import" or "require", it always load ESM from "abort-controller-attrs-es5/module", based on the "webpack.config.json/mainFields".
// - If we "import", the default imported object is () => any.
// - If we "require", the default imported object is { default: () => any }.
// - If we "require" and "mainFields" is "main", the default imported object is () => any.

import DefaultAbortController, { AbortController, AbortSignal } from 'abort-controller-es5';

process.send(typeof DefaultAbortController);
process.send(AbortController === DefaultAbortController);
process.send(typeof AbortSignal);

const controller = new AbortController();

controller.signal.addEventListener('abort', () => process.send('aborted'));
controller.abort();
