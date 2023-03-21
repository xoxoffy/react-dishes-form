const useValidateDish = (values) => {
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

export default useValidateDish;
