import React from 'react';
import Image from 'next/image';

import developerImage1 from 'images/gallery/developer-1.jpeg';
import developerImage2 from 'images/gallery/developer-2.jpeg';
import developerImage3 from 'images/gallery/developer-3.jpeg';
import developerImage4 from 'images/gallery/developer-4.jpeg';

import css from './Gallery.module.scss';

const Gallery = () => {
  return (
    <section className={css.section} id="gallery">
      <h2 className={css.title}>Gallery</h2>

      <div className={css.container}>
        <p className={css.topLeft}>
          By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In
          this course we will focus on coding exercises and projects.
        </p>
        <Image src={developerImage1} alt="developer" className={`${css.centerCenter} ${css.image}`} />
        <Image src={developerImage2} alt="developer" className={`${css.topRight} ${css.image}`} />
        <Image src={developerImage3} alt="developer" className={`${css.centerRight} ${css.image}`} />
        <Image src={developerImage4} alt="developer" className={`${css.centerLeft} ${css.image}`} />
        <p className={css.bottomCenter}>
          If you would like to learn web development and get a job in the tech industry, you are going to LOVE this
          course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course
          was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a simple
          web page.
        </p>
      </div>
    </section>
  );
};

export default Gallery;
