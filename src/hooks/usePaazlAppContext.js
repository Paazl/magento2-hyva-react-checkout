import { useContext } from 'react';
import AppContext from '../../../../context/App/AppContext';

export default function usePaazlAppContext() {
  const [, { dispatch: appDispatch, setErrorMessage, setPageLoader }] =
    useContext(AppContext);

  return {
    appDispatch,
    setErrorMessage,
    setPageLoader,
  };
}
