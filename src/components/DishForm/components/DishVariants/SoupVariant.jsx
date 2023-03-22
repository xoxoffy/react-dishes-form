import React from 'react';
import { Field } from 'react-final-form';
import ValidationError from '../../../ValidationError';

const SoupVariant = () => {
  return (
    <div>
      <Field name="spicyness_scale">
        {({ input, meta }) => (
          <div className="dishContainer">
            <label>Spicyness Scale</label>
            <ValidationError meta={meta} />
            <input
              {...input}
              className="field"
              type="number"
              placeholder="Spicyness Scale"
            />
          </div>
        )}
      </Field>
    </div>
  );
};

export default SoupVariant;
