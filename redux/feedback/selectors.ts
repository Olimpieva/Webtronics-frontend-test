import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const selectState = (state: RootState) => state.feedback;

const selectFeedbackError = createSelector(selectState, ({ error }) => error);
const selectFeedbackLoading = createSelector(selectState, ({ loading, loaded }) => ({ loading, loaded }));

export { selectState, selectFeedbackError, selectFeedbackLoading };
