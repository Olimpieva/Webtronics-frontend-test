import React, { useMemo } from 'react';
import Image from 'next/image';

import { CollapseItem } from 'entities/collapse';
import { Collapse } from 'components';
import QuestionIcon from 'images/icons/question.png';

import css from './FAQ.module.scss';

const FAQItems: CollapseItem[] = [
  {
    title: 'What is the price?',
    description:
      'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
  },
  {
    title: 'What is the price?',
    description:
      'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
  },
  {
    title: 'What is the price?',
    description:
      'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
  },
  {
    title: 'What is the price?',
    description:
      'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
  },
  {
    title: 'What is the price?',
    description:
      'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
  }
];

const FAQ = () => (
  <section className={css.section} id="faq">
    <h2 id="faq" className={css.title}>
      Frequently Asked Questions
    </h2>

    <div className={css.content}>
      <div className={css.leftContainer}>
        <p className={css.description}>
          Do you have any kind of questions? <span>We are here to help.</span>
        </p>

        <Image src={QuestionIcon} alt="Question" className={css.image} />
      </div>

      <div className={css.rightContainer}>
        <Collapse items={FAQItems} defaultKeys={[0]} />
      </div>
    </div>
  </section>
);

export default FAQ;
