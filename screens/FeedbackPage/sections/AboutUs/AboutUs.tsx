import Image, { StaticImageData } from 'next/image';
import MentorImage1 from 'images/mentors/mentor-1.jpeg';
import MentorImage2 from 'images/mentors/mentor-2.jpeg';
import MentorImage3 from 'images/mentors/mentor-3.jpeg';

import css from './AboutUs.module.scss';
import { useMemo } from 'react';

type Mentor = {
  name: string;
  description: string;
  image: StaticImageData;
};

const mentorsData: Mentor[] = [
  {
    name: 'Wade Warren',
    description: 'Front-end engineers work closely with designers',
    image: MentorImage1
  },
  {
    name: 'Kristin Watson',
    description: 'Front-end engineers work closely with designers',
    image: MentorImage2
  },
  {
    name: 'Robert Fox',
    description: 'Front-end engineers work closely with designers',
    image: MentorImage3
  }
];

const AboutUs = () => {
  const mentors = useMemo(() => {
    return mentorsData.map((mentor) => (
      <div key={mentor.name} className={css.mentor}>
        <div className={css.imageContainer}>
          <Image className={css.image} src={mentor.image} alt={mentor.name} />
        </div>
        <h4>{mentor.name}</h4>
        <span>{mentor.description}</span>
      </div>
    ));
  }, []);

  return (
    <section className={css.section}>
      <h2 id="about" className={css.title}>
        About Us
      </h2>
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
