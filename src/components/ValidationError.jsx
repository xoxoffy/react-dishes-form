import React from 'react';

const ValidationError = ({ meta }) => {
  return (
    <div className="validationError">
      {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
  );
};

export default ValidationError;
