import { Fragment } from 'react';
import { Field } from 'react-final-form';
import ValidationError from '../../../ValidationError';

const DishFields = () => {
  return (
    <Fragment>
      <Field name="name">
        {({ input, meta }) => (
          <div className="dishContainer">
            <label>Name</label>
            <ValidationError meta={meta} />
            <input
              {...input}
              className="field"
              type="text"
              placeholder="Dish Name"
            />
          </div>
        )}
      </Field>
      <Field name="preparation_time">
        {({ input, meta }) => (
          <div className="dishContainer">
            <label>Preparation Time</label>
            <ValidationError meta={meta} />
            <input
              {...input}
              className="field"
              type="text"
              step="1"
              placeholder="hs/min/sec"
            />
          </div>
        )}
      </Field>
    </Fragment>
  );
};

export default DishFields;
