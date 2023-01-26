import React from 'react';

import { Carousel } from 'components';
import { CarouselItem } from 'entities/carousel';
import reviewImage1 from 'images/review/man-1.jpeg';
import reviewImage2 from 'images/review/man-2.jpeg';
import reviewImage3 from 'images/review/man-3.jpeg';

import css from './Review.module.scss';

const reviewItems: CarouselItem[] = [
  {
    title: 'Best courses ever',
    description:
      'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.',
    image: reviewImage1
  },
  {
    title: 'Amazing teaching',
    description:
      "The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.",
    image: reviewImage2
  },
  {
    title: 'Simple and easy',
    description:
      'I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.',
    image: reviewImage3
  }
];

const Review = () => (
  <section className={css.section} id="review">
    <h2 className={css.title}>Review</h2>
    <Carousel items={reviewItems} />
  </section>
);

export default Review;
