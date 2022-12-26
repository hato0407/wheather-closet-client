import { createSlice } from '@reduxjs/toolkit';

export const WeatherSlice = createSlice({
  name: 'weather',
  initialState: { temperature: 0, city: '', weather: '', icon: '' },
  reducers: {
    SETCITY: (state, action) => {
      state.city = action.payload;
    },
    SETTMEPERATURE: (state, action) => {
      state.temperature = action.payload;
    },
    SETWEATHER: (state, action) => {
      state.weather = action.payload;
    },
    SETICON: (state, action) => {
      state.icon = action.payload;
    },
  },
});

export default WeatherSlice.reducer;
export const { SETCITY } = WeatherSlice.actions;
export const { SETTMEPERATURE } = WeatherSlice.actions;
export const { SETWEATHER } = WeatherSlice.actions;
export const { SETICON } = WeatherSlice.actions;
