import React, { useCallback } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { FeedbackFormData as FeedbackFormDataType } from 'entities/feedbackForm';
import { nameFieldValidation, emailFieldValidation, phoneFieldValidation } from 'utils/validation/fields';
import { useFormValidatedOnce } from 'utils/hooks';

import css from './FeedbackForm.module.scss';
import InputField from 'components/InputField';
import { Button } from 'components';

const formValidationSchema = yup
  .object({
    name: nameFieldValidation,
    phone: phoneFieldValidation,
    email: emailFieldValidation
  })
  .required();

const FeedbackForm = () => {
  const { setSubmitCount, validatedOnce } = useFormValidatedOnce();

  const onSubmitHandler = useCallback((data: FeedbackFormDataType) => {
    console.log(JSON.stringify(data, null, 2));
  }, []);

  const formik = useFormik<FeedbackFormDataType>({
    initialValues: {
      name: '',
      phone: '',
      email: ''
    },
    validationSchema: formValidationSchema,
    validateOnBlur: false,
    validateOnChange: validatedOnce,
    onSubmit: onSubmitHandler
  });

  setSubmitCount(formik.submitCount);

  return (
    <form
      className={css.form}
      autoComplete="off"
      onSubmit={(event) => {
        event.preventDefault();
        formik.submitForm();
      }}
    >
      <h1 className={css.title}>Contact us</h1>

      <p className={css.subtitle}>Do you have any kind of help please contact with us.</p>

      <div className="mb-16">
        <InputField id="name" placeholder="Name" error={formik.errors.name} {...formik.getFieldProps('name')} />
      </div>
      <div className="mb-16">
        <InputField id="phone" placeholder="Phone" error={formik.errors.phone} {...formik.getFieldProps('phone')} />
      </div>
      <div className="mb-24">
        <InputField id="email" placeholder="E-mail" error={formik.errors.email} {...formik.getFieldProps('email')} />
      </div>

      <Button title="Send" disabled={formik.isSubmitting || !formik.isValid} type="submit" />
    </form>
  );
};

export default FeedbackForm;
