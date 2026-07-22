import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Safe window.fetch patcher to fix "Cannot set property fetch of #<Window> which has only a getter"
(function setupSafeFetchLogger() {
  try {
    const originalFetch = window.fetch;
    if (typeof originalFetch === 'function') {
      let activeFetch = function (input: RequestInfo | URL, init?: RequestInit) {
        console.log('[FETCH LOGGER]', new Date().toISOString(), input);
        return originalFetch.call(window, input, init);
      };

      const desc =
        Object.getOwnPropertyDescriptor(window, 'fetch') ||
        Object.getOwnPropertyDescriptor(Object.getPrototypeOf(window), 'fetch') ||
        Object.getOwnPropertyDescriptor(Window.prototype, 'fetch');

      if (!desc || (desc.get && !desc.set) || !desc.writable) {
        Object.defineProperty(window, 'fetch', {
          configurable: true,
          enumerable: true,
          get() {
            return activeFetch;
          },
          set(newFetchFn) {
            if (typeof newFetchFn === 'function') {
              activeFetch = function (input: RequestInfo | URL, init?: RequestInit) {
                console.log('[FETCH LOGGER INTERCEPTED]', new Date().toISOString(), input);
                return newFetchFn.call(window, input, init);
              };
            } else {
              activeFetch = newFetchFn;
            }
          },
        });
      }
    }
  } catch (err) {
    console.warn('Safe fetch logger setup notice:', err);
  }
})();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

