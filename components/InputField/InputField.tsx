import React from 'react';

import ErrorMessageLabel from 'components/ErrorMessageLabel';

import css from './InputField.module.scss';

type Props = {
  id: string;
  placeholder: string;
  error?: string;
};

const InputField = ({ id, placeholder, error, ...props }: Props) => (
  <fieldset className={css.container}>
    <div className={css.inputContainer}>
      <input className={css.input} id={id} placeholder={placeholder} {...props} />
    </div>
    <ErrorMessageLabel message={error} />
  </fieldset>
);

export default InputField;
