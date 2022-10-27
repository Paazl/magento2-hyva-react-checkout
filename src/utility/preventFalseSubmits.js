function delegate(el, evt, sel, handler) {
  el.addEventListener(evt, function (event) {
    let t = event.target;
    while (t && t !== this) {
      if (t.matches(sel)) {
        handler.call(t, event);
      }
      t = t.parentNode;
    }
  });
}

export default function init() {
  delegate(
    document,
    'click',
    '#widget_paazlshipping_paazlshipping button',
    function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  );
}
