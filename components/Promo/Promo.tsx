import Button from 'components/Button';
import Header from 'components/Header';
import React from 'react';

import css from './Promo.module.scss';

const Promo = () => {
  return (
    <div className={css.container}>
      <div className={css.containerTop}>
        <h1 className={css.title}>Front-End</h1>
        <p className={css.description}>
          Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach
          (and more).{' '}
        </p>
      </div>
      <div className={css.containerBottom}>
        <Button title="Start my career change" />
        <h1 className={css.title}>Developer</h1>
      </div>
      <h3 className={css.subtitle}>Courses</h3>
    </div>
  );
};

export default Promo;
