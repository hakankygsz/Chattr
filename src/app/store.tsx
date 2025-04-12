import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/Auth/AuthSlice.tsx';
import loadingReducer from '../features/Loading/LoadingSlice.tsx';

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    auth: authReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;