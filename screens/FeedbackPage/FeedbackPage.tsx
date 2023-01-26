import React from 'react';

import { Footer, Header } from 'components';
import { AboutUs, Technologies, Promo, Steps, FAQ, Review, Gallery, FeedbackForm } from './sections';

import css from './FeedbackPage.module.scss';

const FeedbackPage = () => (
  <div className={css.page}>
    <Header />

    <main>
      <div className="mt-76">
        <Promo />
      </div>

      <div className="mt-189">
        <AboutUs />
      </div>

      <div className="mt-180">
        <Technologies />
      </div>

      <div className="mt-184">
        <Steps />
      </div>

      <div className="mt-180">
        <FAQ />
      </div>

      <div className="mt-180">
        <Review />
      </div>

      <div className="mt-180">
        <Gallery />
      </div>

      <div className="mt-180">
        <FeedbackForm />
      </div>
    </main>

    <div className="mt-148">
      <Footer />
    </div>
  </div>
);

export default FeedbackPage;
