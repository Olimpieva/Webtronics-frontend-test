import React, { useCallback, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { FeedbackFormData as FeedbackFormDataType } from 'entities/form';
import { nameFieldValidation, emailFieldValidation, phoneFieldValidation } from 'utils/validation/fields';
import { useAppSelector, useAppThunkDispatch, useFormValidatedOnce } from 'utils/hooks';
import { createFeedbackAction } from 'redux/feedback/actions';
import { selectFeedbackError, selectFeedbackLoading } from 'redux/feedback/selectors';
import { Button, ErrorMessageLabel, InputField } from 'components';

import css from './FeedbackForm.module.scss';

const initialValues = {
  name: '',
  phone: '',
  email: ''
};

const formValidationSchema = yup
  .object({
    name: nameFieldValidation,
    phone: phoneFieldValidation,
    email: emailFieldValidation
  })
  .required();

const FeedbackForm = () => {
  const dispatch = useAppThunkDispatch();
  const { setSubmitCount, validatedOnce } = useFormValidatedOnce();
  const { loaded } = useAppSelector(selectFeedbackLoading);
  const error = useAppSelector(selectFeedbackError);

  const onSubmitHandler = useCallback((data: FeedbackFormDataType) => dispatch(createFeedbackAction(data)), []);

  const formik = useFormik<FeedbackFormDataType>({
    initialValues: initialValues,
    validationSchema: formValidationSchema,
    validateOnBlur: false,
    validateOnChange: validatedOnce,
    onSubmit: onSubmitHandler
  });

  setSubmitCount(formik.submitCount);

  useEffect(() => {
    if (loaded) {
      formik.resetForm();
    }
  }, [loaded]);

  return (
    <form
      className={css.form}
      autoComplete="off"
      onSubmit={(event) => {
        event.preventDefault();
        formik.submitForm();
      }}
      id="connect"
    >
      <div className={css.container}>
        <h1 className={css.title}>Contact us</h1>

        <p className={css.subtitle}>Do you have any kind of help please contact with us.</p>

        <div className="mb-16">
          <InputField
            id="name"
            placeholder="Name"
            error={formik.errors.name}
            disabled={formik.isSubmitting}
            {...formik.getFieldProps('name')}
          />
        </div>
        <div className="mb-16">
          <InputField
            id="phone"
            placeholder="Phone"
            error={formik.errors.phone}
            disabled={formik.isSubmitting}
            {...formik.getFieldProps('phone')}
          />
        </div>
        <div className="mb-24">
          <InputField
            id="email"
            placeholder="E-mail"
            error={formik.errors.email}
            disabled={formik.isSubmitting}
            {...formik.getFieldProps('email')}
          />
        </div>

        <Button title="Send" disabled={formik.isSubmitting || !formik.isValid} type="submit" />
        <ErrorMessageLabel message={error} />
      </div>
    </form>
  );
};

export default FeedbackForm;
