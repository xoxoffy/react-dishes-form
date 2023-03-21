import React from 'react';
import { Form, Field } from 'react-final-form';
import './DishesForm.css';
import { OnChange } from 'react-final-form-listeners';

const DishesForm = () => {
  const initialValues = {
    preparation_time: '00:00:00',
    type: 'pizza',
    no_of_slices: '1',
    diameter: '1',
  };

  const onSubmit = (event) => {
    return null;
  };

  const validate = (values) => {
    console.log('validate', values);
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.type) {
      errors.type = 'Required';
    } else if (values.type === 'pizza') {
      if (!values.no_of_slices) {
        errors.no_of_slices = 'Required';
      }
      if (!values.diameter) {
        errors.diameter = 'Required';
      }
    } else if (values.type === 'soup') {
      if (!values.spiciness_scale) {
        errors.spiciness_scale = 'Required';
      }
    } else if (values.type === 'sandwich') {
      if (!values.slices_of_bread) {
        errors.slices_of_bread = 'Required';
      }
    }

    return errors;
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initialValues}
        mutators={{
          setValue: ([field, value], state, { changeValue }) => {
            changeValue(state, field, () => value);
          },
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form className="formContainer" onSubmit={handleSubmit}>
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

                  <div className="validationError">
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
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
                    type="time"
                    step="1"
                    placeholder="Preparation Time"
                  />
                  <div className="validationError">
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                </div>
              )}
            </Field>
            <div>
              <Field name="type">
                {({ input, meta }) => (
                  <div>
                    <label>Type</label>
                    <select {...input} className="field" placeholder="name">
                      <option value="pizza"> pizza </option>
                      <option value="soup"> soup</option>
                      <option value="sandwich"> sandwich</option>
                    </select>
                    <div className="validationError">
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  </div>
                )}
              </Field>
              <OnChange name="type">
                {() => {
                  form.mutators.setValue('no_of_slices', undefined);
                  form.mutators.setValue('diameter', undefined);
                  form.mutators.setValue('spiciness_scale', undefined);
                  form.mutators.setValue('slices_of_bread', undefined);
                }}
              </OnChange>
            </div>
            {values.type === 'pizza' && (
              <div>
                <Field name="no_of_slices">
                  {({ input, meta }) => (
                    <div>
                      <label>No Of Slices</label>
                      <input
                        {...input}
                        type="number"
                        placeholder="No Of Slices"
                        step="1"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="diameter">
                  {({ input, meta }) => (
                    <div>
                      <label>Diameter</label>
                      <input {...input} type="number" placeholder="Diameter" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </div>
            )}
            {values.type === 'soup' && (
              <Field name="spiciness_scale">
                {({ input, meta }) => (
                  <div>
                    <label>Spiciness Scale</label>
                    <input
                      {...input}
                      type="number"
                      placeholder="Spiciness Scale"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            )}
            {values.type === 'sandwich' && (
              <Field name="slices_of_bread">
                {({ input, meta }) => (
                  <div>
                    <label>Slices Of Bread</label>
                    <input
                      {...input}
                      type="number"
                      placeholder="Slices Of Bread"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            )}
            <div className="buttons">
              <button type="submit" /*disabled={submitting || pristine}*/>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
};

export default DishesForm;
