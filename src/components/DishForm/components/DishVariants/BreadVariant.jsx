import React from 'react';
import { Field } from 'react-final-form';
import ValidationError from '../../../ValidationError';

const BreadVariant = () => {
  return (
    <div>
      <Field name="slices_of_bread">
        {({ input, meta }) => (
          <div>
            <label>Slices Of Bread</label>
            <input
              {...input}
              className="field"
              type="number"
              placeholder="Slices Of Bread"
            />
            <ValidationError meta={meta} />
          </div>
        )}
      </Field>
    </div>
  );
};

export default BreadVariant;
