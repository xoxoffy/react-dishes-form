import React, { FC } from 'react';
import { Form, Field } from 'react-final-form';
import './DishesForm.css';

const DishesForm = () => {
  const onSubmit = (event) => {
    debugger;
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Dish name is empty.';
    }

    return errors;
  };

  return (
    <div className="formContainer">
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label>Dish Name</label>
              <Field name="name" component="input" className="field" />
            </div>
            <div className="field">
              <label>Preparation Time</label>
              <Field
                name="preparation_time"
                component="input"
                className="field"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
};

export default DishesForm;