import { get as _get } from 'lodash-es';
import RootElement from '../../../../utils/rootElement';

const paazlConfig = _get(RootElement.getCheckoutConfig(), 'paazlshipping');
const mode = paazlConfig?.mode || 'test';
const checkoutApiUrl =
  paazlConfig?.checkoutApiUrl || 'https://api-acc.paazl.com/v1/checkout/';

export default {
  isProduction: mode === 'live',
  checkoutApiUrl,
};
