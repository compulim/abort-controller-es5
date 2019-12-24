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
