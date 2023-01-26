import React, { useMemo } from 'react';

import { Technology } from 'entities/technology';
import AngularIcon from 'images/tech/angular.svg';
import JsIcon from 'images/tech/js.svg';
import ReactIcon from 'images/tech/react.svg';
import VueIcon from 'images/tech/vue.svg';

import css from './Technologies.module.scss';

const technologyItems: Technology[] = [
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
      technologyItems.map((technology) => (
        <li key={technology.name} className={css.tech}>
          <div className={css.imageContainer}>{technology.image}</div>
          <h4 className={css.techName}>{technology.name}</h4>
        </li>
      )),
    []
  );

  return (
    <section className={css.section} id="programs">
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
