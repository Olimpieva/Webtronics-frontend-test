import React from 'react';

import ErrorMessageLabel from 'components/ErrorMessageLabel';

import css from './InputField.module.scss';

type Props = {
  id: string;
  placeholder: string;
  disabled: boolean;
  error?: string;
};

const InputField = ({ id, placeholder, error, disabled, ...props }: Props) => (
  <fieldset className={`${css.container} ${error && css.invalid} ${disabled && css.disabled}`}>
    <div className={css.inputContainer}>
      <input className={css.input} id={id} placeholder={placeholder} disabled={disabled} {...props} />
    </div>
    <ErrorMessageLabel message={error} />
  </fieldset>
);

export default InputField;
