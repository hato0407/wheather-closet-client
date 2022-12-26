import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { WeatherSlice } from './weather';
import { ClothesSlice } from './clothes';

const rootreducer = combineReducers({
  weather: WeatherSlice.reducer,
  clothes: ClothesSlice.reducer,
});

const store = configureStore({
  reducer: rootreducer,
});

export default store;
