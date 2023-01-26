import { createReducer } from '@reduxjs/toolkit';
import { InitialState } from './types';
import { createFeedbackAction } from './actions';

const initialState: InitialState = {
  loading: false,
  loaded: false,
  error: undefined
};

const feedbackReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createFeedbackAction.pending, (state) => {
      state.loading = true;
    })
    .addCase(createFeedbackAction.fulfilled, (state) => {
      state.loading = false;
      state.loaded = true;
    })
    .addCase(createFeedbackAction.rejected, (state, action) => {
      const errorMessage = action.payload as string;

      state.loading = false;
      state.loaded = false;
      state.error = errorMessage;
    });
});

export default feedbackReducer;
