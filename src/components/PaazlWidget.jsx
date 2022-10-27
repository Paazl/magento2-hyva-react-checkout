import React, { useState, useEffect } from 'react';
import useCartContext from '../hooks/useCartContext';
import usePaazlCheckout from '../hooks/usePaazlCheckout';
import usePaazlMethodChanged from '../hooks/usePaazlMethodChanged';

function PaazlWidget() {
  const { cartShippingAddress, cartActions } = useCartContext();
  const [paazlCheckout, setPaazlCheckout] = useState(false);
  const [currentData, setCurrentData] = useState(false);

  usePaazlCheckout(setPaazlCheckout);
  usePaazlMethodChanged(paazlCheckout, (data) => {
    // Method changed so update the cart/totals.
    if (data === currentData) {
      return;
    }

    setCurrentData(data);
    cartActions
      .setShippingMethod({
        carrierCode: 'paazlshipping',
        methodCode: 'paazlshipping',
      })
      .then(() => cartActions.getCustomerCartInfo);
  });

  useEffect(() => {
    if (!paazlCheckout || !cartShippingAddress.country) {
      return;
    }

    // eslint-disable-next-line prettier/prettier
    paazlCheckout.setConsigneeCountryCode( // eslint-disable-line no-undef
      cartShippingAddress.country
    );
  }, [paazlCheckout, cartShippingAddress.country]);

  useEffect(() => {
    if (!paazlCheckout || !cartShippingAddress.postcode) {
      return;
    }

    // eslint-disable-next-line prettier/prettier
    paazlCheckout.setConsigneePostalCode( // eslint-disable-line no-undef
      cartShippingAddress.postcode
    );
  }, [paazlCheckout, cartShippingAddress.postcode]);

  return <div id="widget_paazlshipping_paazlshipping" className="w-full" />;
}

export default PaazlWidget;
