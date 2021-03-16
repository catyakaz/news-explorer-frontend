import { useState, useCallback } from 'react';

function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [formIsValid, setFormIsValid] = useState(false);

  function handleChange(event) {
    const inputElement = event.target;
    const value = inputElement.value;
    const name = inputElement.name;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: inputElement.validationMessage });
    setFormIsValid(inputElement.closest('form').checkValidity());
  }

  const resetForm = useCallback(() => {
    setValues({});
    setErrors({});
    setFormIsValid(false);
  }, []);

  return [values, errors, formIsValid, handleChange, resetForm];
}

export default useForm;
