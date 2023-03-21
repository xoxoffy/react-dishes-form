import React from 'react';

const DishesButtons = ({ submitting, pristine, form }) => {
  return (
    <div className="buttons">
      <button type="submit" disabled={submitting || pristine}>
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
  );
};

export default DishesButtons;
