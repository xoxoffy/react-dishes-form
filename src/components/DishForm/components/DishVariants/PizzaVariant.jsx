import { Fragment } from 'react';
import { Field } from 'react-final-form';
import ValidationError from '../../../ValidationError';

const PizzaVariant = () => {
  return (
    <Fragment>
      <Field name="no_of_slices">
        {({ input, meta }) => (
          <div className="dishContainer">
            <label>No Of Slices</label>
            <ValidationError meta={meta} />
            <input
              {...input}
              className="field"
              type="number"
              placeholder="No Of Slices"
              step="1"
            />
          </div>
        )}
      </Field>
      <Field name="diameter">
        {({ input, meta }) => (
          <div className="dishContainer">
            <label>Diameter</label>
            <ValidationError meta={meta} />
            <input
              {...input}
              className="field"
              type="number"
              placeholder="Diameter"
            />
          </div>
        )}
      </Field>
    </Fragment>
  );
};

export default PizzaVariant;
