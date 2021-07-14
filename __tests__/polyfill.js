/**
 * @jest-environment jsdom
 */

 describe('Using bundle', () => {
  describe('in a browser with native AbortController', () => {
    class NativeAbortController {}
    class NativeAbortSignal {}

    beforeEach(() => {
      window.AbortController = NativeAbortController;
      window.AbortSignal = NativeAbortSignal;
    });

    test('should not override native implementation', () => {
      jest.resetModules();

      require('../dist/abort-controller-es5.production.min');

      expect(window.AbortController).toBe(NativeAbortController);
      expect(window.AbortSignal).toBe(NativeAbortSignal);
    });
  });

  describe('in a browser without AbortController', () => {
    beforeEach(() => {
      window.AbortController = null;
      window.AbortSignal = null;
    });

    test('should polyfill', () => {
      jest.resetModules();

      require('../dist/abort-controller-es5.production.min');

      expect(typeof window.AbortController.prototype.constructor).toBe('function');
      expect(typeof window.AbortSignal.prototype.constructor).toBe('function');

      expect(() => new window.AbortController()).not.toThrow();
      expect(() => new window.AbortSignal()).toThrow('AbortSignal cannot be constructed directly');
    });
  });
});

describe('Using package', () => {
  describe('in a browser with native AbortController', () => {
    class NativeAbortController {}
    class NativeAbortSignal {}

    beforeEach(() => {
      window.AbortController = NativeAbortController;
      window.AbortSignal = NativeAbortSignal;
    });

    test('should return native implementation', () => {
      jest.resetModules();

      const { AbortController, AbortSignal, default: DefaultAbortController } = require('../lib/index');

      expect(AbortController).toBe(NativeAbortController);
      expect(AbortSignal).toBe(NativeAbortSignal);
      expect(DefaultAbortController).toBe(AbortController);
    });
  });

  describe('in a browser without AbortController', () => {
    beforeEach(() => {
      window.AbortController = null;
      window.AbortSignal = null;
    });

    test('should return polyfill', () => {
      jest.resetModules();

      const { AbortController, AbortSignal, default: DefaultAbortController } = require('../lib/index');

      expect(DefaultAbortController).toBe(AbortController);
      expect(typeof AbortController.prototype.constructor).toBe('function');
      expect(typeof AbortSignal.prototype.constructor).toBe('function');
    });
  });
});
