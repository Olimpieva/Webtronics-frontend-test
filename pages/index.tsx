import React from 'react';

import { BackgroundDecorationsLayout, MainLayout } from 'layouts';
import { FeedbackPage } from 'screens';

const Main = () => {
  return (
    <MainLayout>
      <BackgroundDecorationsLayout>
        <FeedbackPage />
      </BackgroundDecorationsLayout>
    </MainLayout>
  );
};

export default Main;
