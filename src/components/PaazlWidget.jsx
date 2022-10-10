import React, { useEffect } from 'react';
import paazlConfigurationRequest from '../api/paazlConfiguration';
import usePaazlAppContext from '../hooks/usePaazlAppContext';

function PaazlWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    // TODO: Make this configurable.
    script.src = 'https://widget-acc.paazl.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const callback = async () => {
      const paazlConfigurationResult = await paazlConfigurationRequest(
        usePaazlAppContext.appDispatch
      );

      PaazlCheckout.init(paazlConfigurationResult); // eslint-disable-line no-undef
    };

    callback();
  }, []);

  return <div id="widget_paazlshipping_paazlshipping" className="w-full" />;
}

export default PaazlWidget;
