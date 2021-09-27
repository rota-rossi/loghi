import { configureStore } from '@reduxjs/toolkit';
import jumpReducer from './jumps';

export const store = configureStore({
  reducer: {
    jumps: jumpReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
