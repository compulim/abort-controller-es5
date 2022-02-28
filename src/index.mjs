import AbortControllerImpl, { AbortSignal as AbortSignalImpl } from 'abort-controller';

const NativeAbortController = (typeof window === 'undefined' ? {} : window).AbortController;
const AbortController = NativeAbortController || AbortControllerImpl;

const NativeAbortSignal = (typeof window === 'undefined' ? {} : window).AbortSignal;
const AbortSignal = NativeAbortSignal || AbortSignalImpl;

export default AbortController;
export { AbortController, AbortSignal };
