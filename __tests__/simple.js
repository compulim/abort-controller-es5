import { fork } from 'child_process';

import DefaultAbortController, { AbortController, AbortSignal } from '../lib/index';

test('Default AbortController should be a class', () => {
  expect(new DefaultAbortController()).toBeTruthy();
});

test('Non-default AbortController should be a class', () => {
  expect(new AbortController()).toBeTruthy();
});

test('AbortController should work in simple case', () => {
  return new Promise(resolve => {
    const controller = new AbortController();

    controller.signal.addEventListener('abort', resolve);
    controller.abort();
  });
});

test('AbortSignal should not be constructed', () => {
  expect(() => new AbortSignal()).toThrow();
});

test('AbortController should work when imported from .mjs', async () => {
  // Until Jest support .mjs, we need to use fork().
  const process = fork('./__tests__/simple.mjs');
  const promise = new Promise((resolve, reject) => process.once('message', resolve).once('exit', reject));

  await expect(promise).resolves.toBe('aborted');
});
