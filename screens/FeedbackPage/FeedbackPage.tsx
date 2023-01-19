import { FeedbackForm, Footer, Header, Promo } from 'components';
import React from 'react';

import css from './FeedbackPage.module.scss';
import { AboutUs } from './sections';

const FeedbackPage = () => {
  console.log('FEEDBACK PAGE');

  return (
    <div className={css.page}>
      <div className={css.layout} />
      <Header />

      <main>
        <Promo />

        <div className="mt-180">
          <AboutUs />
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
};

export default FeedbackPage;
