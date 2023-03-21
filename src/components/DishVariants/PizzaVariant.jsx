import { Fragment } from 'react';
import { Field } from 'react-final-form';
import ValidationError from './../ValidationError';

const PizzaVariant = () => {
  return (
    <Fragment>
      <Field name="no_of_slices">
        {({ input, meta }) => (
          <Fragment>
            <label>No Of Slices</label>
            <input
              {...input}
              className="field"
              type="number"
              placeholder="No Of Slices"
              step="1"
            />
            <ValidationError meta={meta} />
          </Fragment>
        )}
      </Field>
      <Field name="diameter">
        {({ input, meta }) => (
          <Fragment>
            <label>Diameter</label>
            <input
              {...input}
              className="field"
              type="number"
              placeholder="Diameter"
            />
            <ValidationError meta={meta} />
          </Fragment>
        )}
      </Field>
    </Fragment>
  );
};

export default PizzaVariant;
