import { combineReducers } from '@reduxjs/toolkit';

import feedbackReducer from './feedback/reducer';

const reducer = combineReducers({
  feedback: feedbackReducer
});

export default reducer;
