import { Fragment } from 'react';
import { Form } from 'react-final-form';
import './DishesForm.css';
import DishesButtons from './components/DishesButtons/DishesButtons';
import DishType from './components/DishType/DishType';
import DishFields from './components/DishFields/DishFields';
import PizzaVariant from './components/DishVariants/PizzaVariant';
import SoupVariant from './components/DishVariants/SoupVariant';
import BreadVariant from './components/DishVariants/BreadVariant';

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
    const errors = {};

    if (!values.name) {
      errors.name = 'This field is required';
    }
    if (!values.preparation_time) {
      errors.preparation_time = 'This field is required';
    }

    if (!values.type) {
      errors.type = 'This field is required';
    } else if (values.type === 'pizza') {
      if (!values.no_of_slices) {
        errors.no_of_slices = 'This field is required';
      }
      if (!values.diameter) {
        errors.diameter = 'This field is required';
      }
    } else if (values.type === 'soup') {
      if (!values.spicyness_scale) {
        errors.spicyness_scale = 'This field is required';
      }
      if (values.spicyness_scale < 0) {
        errors.spicyness_scale = 'Please enter a valid number';
      }
    } else if (values.type === 'sandwich') {
      if (!values.slices_of_bread) {
        errors.slices_of_bread = 'This field is required';
      }
      if (values.slices_of_bread <= 0) {
        errors.slices_of_bread = 'Please enter a valid number';
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
          </form>
        )}
      />
    </div>
  );
};

export default DishesForm;
