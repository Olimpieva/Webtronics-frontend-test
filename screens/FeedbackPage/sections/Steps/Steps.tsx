import React, { useMemo } from 'react';

import { Step } from 'entities/step';

import css from './Steps.module.scss';

const stepData: Step[] = [
  {
    title: 'Introduction to Front-End',
    description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
  },
  {
    title: 'Overview of Development',
    description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '
  },
  {
    title: 'Introduction to Front-End',
    description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '
  },
  {
    title: 'Overview of Development',
    description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '
  },
  {
    title: 'Introduction to Front-End',
    description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '
  },
  {
    title: 'Overview of Development',
    description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '
  }
];

const Steps = () => {
  const steps = useMemo(
    () =>
      stepData.map((step, index) => (
        <li key={`step.title=${index}`} className={css.stepContainer}>
          <div className={css.step}>
            <h4 className={css.counter}>Step {index + 1}</h4>
            <h3 className={css.name}>{step.title}</h3>
            <p className={css.description}>{step.description}</p>
          </div>
        </li>
      )),
    []
  );

  return (
    <section className={css.section} id="steps">
      <h2 className={css.title}>Steps</h2>
      <ul className={css.stepList}>{steps}</ul>
    </section>
  );
};

export default Steps;
