import { useCallback, useEffect, useState } from 'react';
import Config from '../utility/config';

export default function usePaazlMethodChanged(paazlCheckout, callback) {
  const callbackWrapper = useCallback(callback, [callback]);
  const [currentData, setCurrentData] = useState();

  useEffect(() => {
    if (!currentData) {
      return;
    }

    callbackWrapper(currentData);
  }, [currentData, callbackWrapper]);

  if (!paazlCheckout) {
    return;
  }

  const { send } = window.XMLHttpRequest.prototype;
  // Remove the trailing slash
  const checkoutApiUrl = Config.checkoutApiUrl.substring(
    0,
    Config.checkoutApiUrl.length - 1
  );

  window.XMLHttpRequest.prototype.send = function (data) {
    let oldOnReadyStateChange;

    function onReadyStateChange() {
      if (this.readyState === window.XMLHttpRequest.DONE) {
        // When this URL is called, the shipping method has been changed.
        if (
          data !== null &&
          this.responseURL.indexOf(checkoutApiUrl) === 0 &&
          currentData !== data
        ) {
          setCurrentData(data); // Track data so we don't trigger the callback too often.
        }
      }

      if (oldOnReadyStateChange) {
        oldOnReadyStateChange();
      }
    }

    /* Set xhr.noIntercept to true to disable the interceptor for a particular call */
    if (this.addEventListener) {
      this.addEventListener('readystatechange', onReadyStateChange, false);
    } else {
      oldOnReadyStateChange = this.onreadystatechange;
      this.onreadystatechange = onReadyStateChange;
    }

    send.call(this, data);
  };
}
