import { get as _get } from 'lodash-es';

export default function paazlConfigurationRequestModifier(result) {
  return _get(result, 'data.paazlConfiguration', {});
}
