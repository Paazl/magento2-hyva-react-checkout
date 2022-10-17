import { get as _get } from 'lodash-es';
import RootElement from '../../../../utils/rootElement';

const paazlConfig = _get(RootElement.getCheckoutConfig(), 'paazlshipping');
const mode = paazlConfig?.mode || 'test';

export default {
  isProduction: mode === 'live',
};
