import React from 'react';
import { ButtonHTMLAttributes } from 'react';

import css from './Button.module.scss';

const Button = ({ title, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={css.button} {...props}>
      {title}
    </button>
  );
};

export default Button;
