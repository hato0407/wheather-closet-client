import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { WeatherSlice } from './weather';

const rootreducer = combineReducers({
  weather: WeatherSlice.reducer,
});

const store = configureStore({
  reducer: rootreducer,
});

export default store;
