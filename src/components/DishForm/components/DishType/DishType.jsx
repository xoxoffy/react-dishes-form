import React from 'react';
import { Field } from 'react-final-form';
import { OnChange } from 'react-final-form-listeners';

const DishType = ({ form }) => {
  return (
    <div>
      <Field name="type">
        {({ input }) => (
          <div>
            <label>Type</label>
            <select {...input} className="field" placeholder="name">
              <option value="pizza"> pizza </option>
              <option value="soup"> soup</option>
              <option value="sandwich"> sandwich</option>
            </select>
          </div>
        )}
      </Field>
      <OnChange name="type">
        {() => {
          form.mutators.setValue('no_of_slices');
          form.mutators.setValue('diameter');
          form.mutators.setValue('spicyness_scale');
          form.mutators.setValue('slices_of_bread');
        }}
      </OnChange>
    </div>
  );
};

export default DishType;
