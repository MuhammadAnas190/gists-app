import { configureStore } from '@reduxjs/toolkit';
import { gistReducer as gists } from './slice';

const store = configureStore({
  reducer: { gists },
});

export default store;
