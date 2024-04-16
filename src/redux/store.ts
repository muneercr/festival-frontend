// store.js
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './features/authSlice'; 
import { apiMiddleware } from './axios';

 

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiMiddleware), // Add your API middleware
});

export default store;
export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch =  typeof store.dispatch