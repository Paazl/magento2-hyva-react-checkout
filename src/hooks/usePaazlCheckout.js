import { useState, useEffect } from 'react';
import PaazlConfig from '../utility/config';
import paazlConfigurationRequest from '../api/paazlConfiguration';
import usePaazlAppContext from './usePaazlAppContext';
import preventFalseSubmits from '../utility/preventFalseSubmits';

export default function usePaazlCheckout(callback) {
  const [paazlCheckout, setPaazlCheckout] = useState(false);

  useEffect(() => {
    const paazlPromise = new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://widget.paazl.com/v1/checkout.js';
      if (!PaazlConfig.isProduction) {
        script.src = 'https://widget-acc.paazl.com/v1/checkout.js';
      }
      script.async = true;
      script.addEventListener('load', () => {
        resolve(PaazlCheckout); // eslint-disable-line no-undef
      });

      document.body.appendChild(script);
    });

    paazlPromise.then((PaazlCheckout) => {
      const initCallback = async () => {
        const paazlConfigurationResult = await paazlConfigurationRequest(
          usePaazlAppContext.appDispatch
        );

        PaazlCheckout.init(paazlConfigurationResult);
        preventFalseSubmits();

        // Even though we called the `init` method, the widget is not yet ready.
        setTimeout(() => {
          setPaazlCheckout(PaazlCheckout);
        }, 100);
      };

      initCallback();
    });
  }, []);

  useEffect(() => {
    if (paazlCheckout && callback) {
      callback(paazlCheckout);
    }
  }, [paazlCheckout, callback]);
}
