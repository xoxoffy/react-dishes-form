import { Fragment } from 'react';
import { Field } from 'react-final-form';
import ValidationError from '../../../ValidationError';

const DishFields = () => {
  return (
    <Fragment>
      <Field name="name">
        {({ input, meta }) => (
          <div>
            <label>Name</label>
            <input
              {...input}
              className="field"
              type="text"
              placeholder="Dish Name"
            />
            <ValidationError meta={meta} />
          </div>
        )}
      </Field>
      <Field name="preparation_time">
        {({ input, meta }) => (
          <div>
            <label>Preparation Time </label>
            <input
              {...input}
              className="field"
              type="text"
              step="1"
              placeholder="hh/ss/ms"
            />
            <ValidationError meta={meta} />
          </div>
        )}
      </Field>
    </Fragment>
  );
};

export default DishFields;
