import React, { useMemo } from 'react';
import Image from 'next/image';

import { Mentor } from 'entities/mentor';
import mentorImage1 from 'images/mentors/mentor-1.jpeg';
import mentorImage2 from 'images/mentors/mentor-2.jpeg';
import mentorImage3 from 'images/mentors/mentor-3.jpeg';

import css from './AboutUs.module.scss';

const mentorItems: Mentor[] = [
  {
    name: 'Wade Warren',
    description: 'Front-end engineers work closely with designers',
    image: mentorImage1
  },
  {
    name: 'Kristin Watson',
    description: 'Front-end engineers work closely with designers',
    image: mentorImage2
  },
  {
    name: 'Robert Fox',
    description: 'Front-end engineers work closely with designers',
    image: mentorImage3
  }
];

const AboutUs = () => {
  const mentors = useMemo(
    () =>
      mentorItems.map((mentor) => (
        <div key={mentor.name} className={css.mentor}>
          <div className={css.imageContainer}>
            <Image className={css.image} src={mentor.image} alt={mentor.name} />
          </div>
          <h4 className={css.name}>{mentor.name}</h4>
          <span className={css.info}>{mentor.description}</span>
        </div>
      )),
    []
  );

  return (
    <section className={css.section} id="about">
      <h2 className={css.title}>About Us</h2>
      <div className={css.container}>
        <div className={css.scheme}>
          <h3 className={css.subtitle}>Mentors</h3>
          <div className={css.mentorList}>{mentors}</div>
        </div>
        <p className={css.description}>
          Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career
          Path will teach you not only the necessary languages and technologies, but how to think like a front-end
          engineer, too.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
