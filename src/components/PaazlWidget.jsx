import React, { useEffect } from 'react';
import paazlConfigurationRequest from '../api/paazlConfiguration';
import usePaazlAppContext from '../hooks/usePaazlAppContext';
import PaazlConfig from '../utility/config';
import useCartContext from '../hooks/useCartContext';

function PaazlWidget() {
  const cartContext = useCartContext();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.paazl.com/v1/checkout.js';
    if (!PaazlConfig.isProduction) {
      script.src = 'https://widget-acc.paazl.com/v1/checkout.js';
    }
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const callback = async () => {
      const paazlConfigurationResult = await paazlConfigurationRequest(
        usePaazlAppContext.appDispatch
      );

      paazlConfigurationResult.consigneePostalCode =
        cartContext.cartShippingAddress.postcode ||
        paazlConfigurationResult.consigneePostalCode;

      paazlConfigurationResult.consigneeCountryCode =
        cartContext.cartShippingAddress.country ||
        paazlConfigurationResult.consigneeCountryCode;

      PaazlCheckout.init(paazlConfigurationResult); // eslint-disable-line no-undef
    };

    callback();
  }, [
    cartContext.cartShippingAddress.postcode,
    cartContext.cartShippingAddress.country,
  ]);

  return <div id="widget_paazlshipping_paazlshipping" className="w-full" />;
}

export default PaazlWidget;
