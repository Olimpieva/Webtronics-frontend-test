import React, { useMemo, ReactElement } from 'react';

import AngularIcon from 'images/icons/angular.svg';
import JsIcon from 'images/icons/js.svg';
import ReactIcon from 'images/icons/react.svg';
import VueIcon from 'images/icons/vue.svg';

import css from './Technologies.module.scss';

type Technology = {
  name: string;
  image: ReactElement;
};

const technologiesData: Technology[] = [
  {
    name: 'Angular',
    image: <AngularIcon />
  },
  {
    name: 'React',
    image: <ReactIcon />
  },
  {
    name: 'Vue.js',
    image: <VueIcon />
  },
  {
    name: 'JavaScript',
    image: <JsIcon />
  }
];

const Technologies = () => {
  const technologies = useMemo(
    () =>
      technologiesData.map((technology) => (
        <li key={technology.name} className={css.tech}>
          <div className={css.imageContainer}>{technology.image}</div>
          <h4 className={css.techName}>{technology.name}</h4>
        </li>
      )),
    []
  );

  return (
    <section className={css.section}>
      <h2 id="technologies" className={css.title}>
        Programming technologies
      </h2>
      <p className={css.description}>
        By the end, you'll have the portfolio and interview skills you need to start your new career.
      </p>
      <ul className={css.techList}>{technologies}</ul>
    </section>
  );
};

export default Technologies;
