import * as yup from 'yup';
import validationErrorMessages from './validationErrorMessages';

const inputPatterns = {
  email:
    /(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}/,
  phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
};

const emailFieldValidation = yup
  .string()
  .required(validationErrorMessages.common.isEmpty('Email'))
  .matches(inputPatterns.email, validationErrorMessages.common.isInvalid('Email'));

const phoneFieldValidation = yup
  .string()
  .required(validationErrorMessages.common.isEmpty('Phone'))
  .matches(inputPatterns.phone, validationErrorMessages.common.isInvalid('Phone'));

const nameFieldValidation = yup.string().required(validationErrorMessages.common.isEmpty('Name'));

export { emailFieldValidation, nameFieldValidation, phoneFieldValidation };
