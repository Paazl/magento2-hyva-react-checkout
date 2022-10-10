import React from 'react';
import { func, shape } from 'prop-types';
import { __ } from '../../../i18n';
import RadioInput from '../../../components/common/Form/RadioInput';
import { shippingMethodShape } from '../../../utils/shipping';
import PaazlWidget from './components/PaazlWidget';

function PaazlShipping({ method, selected, actions }) {
  const isSelected = selected.carrierCode === method.carrierCode;

  return (
    <div className="flex-wrap">
      <div className="flex">
        <RadioInput
          value={method.id}
          label={method.carrierTitle}
          name="shippingMethod"
          checked={isSelected}
          onChange={actions.change}
        />
        <span className="pt-2 pl-3 font-semibold">
          {__('Price: %1', method.price)}
        </span>
      </div>
      {isSelected ? <PaazlWidget /> : ''}
    </div>
  );
}

PaazlShipping.propTypes = {
  method: shippingMethodShape.isRequired,
  selected: shippingMethodShape.isRequired,
  actions: shape({ change: func }).isRequired,
};

export default PaazlShipping;
