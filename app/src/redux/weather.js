import { createSlice } from '@reduxjs/toolkit';
import React from 'react';
import axios from 'axios';
export const WeatherSlice = createSlice({
  name: 'weather',
  initialState: { temperature: 0, city: '', weather: '', icon: '' },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload.city;
    },
    setTemperature: (state, action) => {
      state.temperature = action.payload.temperature;
    },
    setWeather: (state, action) => {
      state.weather = action.payload.weather;
    },
    setIcon: (state, action) => {
      state.icon = action.payload.icon;
    },
  },
});

export default WeatherSlice.reducer;
export const { setCity } = WeatherSlice.actions;
export const { setTemperature } = WeatherSlice.actions;
export const { setWeather } = WeatherSlice.actions;
export const { setIcon } = WeatherSlice.actions;

export function hanleClickForCity(props) {
  const place = props;
  const API_KEY = 'a360461662224b3d0ea83d05566bf189';
  const request = axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}`,
    )
    .then((response) => response.data);
  return {
    type: {
      setCity,
      setIcon,
      setTemperature,
      setWeather,
    },
    payload: request,
  };
}

export function handleClickForLatAndLon() {
  const API_KEY = 'a360461662224b3d0ea83d05566bf189';
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const request = axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`,
      )
      .then((response) => response.data);
    return {
      type: {
        setCity,
        setIcon,
        setTemperature,
        setWeather,
      },
      payload: request,
    };
  });
}
