import { Fragment } from 'react';
import { Form } from 'react-final-form';
import './DishesForm.css';
import PizzaVariant from './DishVariants/PizzaVariant';
import SoupVariant from './DishVariants/SoupVariant';
import BreadVariant from './DishVariants/BreadVariant';
import DishesButtons from './DishesButtons';
import DishType from './DishType';
import DishFields from './DishFields';

const DishesForm = () => {
  const initialValues = {
    preparation_time: '00:00:00',
    type: 'pizza',
    no_of_slices: '1',
    diameter: '1',
  };

  const onSubmit = async (values) => {
    const abortController = new AbortController();
    let url = 'localhost';
    fetch(url, {
      signal: abortController.signal,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch the data');
        }
        return res.json();
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.log(err.message);
        }
      });
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
            <DishFields />
            <DishType form={form} />
            <Fragment>
              {values.type === 'pizza' && <PizzaVariant />}
              {values.type === 'soup' && <SoupVariant />}
              {values.type === 'sandwich' && <BreadVariant />}
            </Fragment>
            <DishesButtons
              submitting={submitting}
              pristine={pristine}
              form={form}
            />
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
};

export default DishesForm;
