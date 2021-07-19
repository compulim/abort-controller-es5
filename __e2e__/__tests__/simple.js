const { fork } = require('child_process');
const { join } = require('path');

test.each([
  ['esbuild to bundle CommonJS', '../dist/main.esbuild-commonjs.js'],
  ['esbuild to bundle ES Module', '../dist/main.esbuild-esm.js'],
  ['global object', '../global.js'],
  ['Node.js to run CommonJS', '../runNode.js'],
  ['Node.js to run ES Module', '../runNode.mjs'],
  ['Webpack to bundle CommonJS', '../dist/main.webpack-commonjs.js'],
  ['Webpack to bundle ES Module', '../dist/main.webpack-esm.js']
])('Code using %s should work', async (_, filename) => {
  const childProcess = fork(join(__dirname, filename));
  const messageFn = jest.fn();

  const promise = new Promise((resolve, reject) => {
    childProcess.on('message', arg0 => messageFn(arg0));
    childProcess.once('exit', resolve);
    childProcess.once('error', reject);
  });

  await expect(promise).resolves.toBe(0);

  expect(messageFn).toHaveBeenCalledTimes(4);
  expect(messageFn).toHaveBeenNthCalledWith(1, 'function');
  expect(messageFn).toHaveBeenNthCalledWith(2, true);
  expect(messageFn).toHaveBeenNthCalledWith(3, 'function');
  expect(messageFn).toHaveBeenNthCalledWith(4, 'aborted');
});
