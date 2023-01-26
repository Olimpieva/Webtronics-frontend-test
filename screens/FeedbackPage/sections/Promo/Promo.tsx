import React from 'react';
import Link from 'next/link';

import { Button } from 'components';

import css from './Promo.module.scss';

const Promo = () => (
  <div className={css.container}>
    <div className={css.containerTop}>
      <h1 className={css.title}>Front-End</h1>
      <p className={css.description}>
        Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and
        more).
      </p>
    </div>
    <div className={css.containerBottom}>
      <Link href="#connect">
        <Button title="Start my career change" />
      </Link>

      <h1 className={css.title}>Developer</h1>
    </div>
    <h3 className={css.subtitle}>Courses</h3>
  </div>
);

export default Promo;
