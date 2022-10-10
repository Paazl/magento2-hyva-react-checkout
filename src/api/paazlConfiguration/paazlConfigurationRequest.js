import sendRequest from '../../../../../api/sendRequest';
import LocalStorage from '../../../../../utils/localStorage';

import modifier from './modifier';
import { PAAZL_CONFIGURATION_QUERY } from './query';

export default async function paazlConfigurationRequest(appDispatch) {
  const variables = {
    cartId: LocalStorage.getCartId(),
  };

  return modifier(
    await sendRequest(appDispatch, {
      query: PAAZL_CONFIGURATION_QUERY,
      variables,
    })
  );
}
