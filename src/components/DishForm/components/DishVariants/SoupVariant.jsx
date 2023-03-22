import React from 'react';
import { Field } from 'react-final-form';
import ValidationError from '../../../ValidationError';

const SoupVariant = () => {
  return (
    <div>
      <Field name="spiciness_scale">
        {({ input, meta }) => (
          <div>
            <label>Spiciness Scale</label>
            <input
              {...input}
              className="field"
              type="number"
              placeholder="Spiciness Scale"
            />
            <ValidationError meta={meta} />
          </div>
        )}
      </Field>
    </div>
  );
};

export default SoupVariant;
