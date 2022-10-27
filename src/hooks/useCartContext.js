import { useContext } from 'react';
import { get as _get } from 'lodash-es';
import CartContext from '../../../../context/Cart/CartContext';

export default function useCartContext() {
  const [cartData, cartActions] = useContext(CartContext);
  const cart = _get(cartData, 'cart');
  const cartShippingAddress = _get(cart, `shipping_address`) || {};

  return {
    cartShippingAddress,
    cartActions,
  };
}
