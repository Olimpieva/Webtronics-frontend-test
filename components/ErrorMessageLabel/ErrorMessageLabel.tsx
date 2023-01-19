import React from 'react';

import css from './ErrorMessageLabel.module.scss';

type Props = {
  message?: string;
};

const ErrorMessageLabel = ({ message }: Props) => {
  if (!message) {
    return null;
  }

  return <div className={css.error}>{message}</div>;
};

export default ErrorMessageLabel;
