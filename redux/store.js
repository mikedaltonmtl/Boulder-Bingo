import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './features/setting-slice';

export const store = configureStore({
  reducer: {
    settingsReducer,
  }
});