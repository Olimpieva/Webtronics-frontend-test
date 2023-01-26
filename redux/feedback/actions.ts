import { createAsyncThunk } from '@reduxjs/toolkit';

import { FeedbackFormData } from 'entities/form';
import { feedbackApi } from 'api';
import { handleError } from 'utils/axios';

const defaultErrorMessage = 'Oops! Something wrong!';

const createFeedbackAction = createAsyncThunk<
  void | string,
  FeedbackFormData,
  {
    rejectValue?: string;
  }
>('feedback/createFeedbackAction', async (data, { rejectWithValue }) => {
  try {
    await feedbackApi.createFeedback(data);

    return;
  } catch (e) {
    const { axiosError } = handleError(e);

    if (axiosError) {
      return rejectWithValue(axiosError.message);
    }

    return defaultErrorMessage;
  }
});

// eslint-disable-next-line import/prefer-default-export
export { createFeedbackAction };
