import React, { useEffect } from 'react';
import { API } from '../../config/config';
import { useSelector, useDispatch } from 'react-redux';
import * as L from './Write.style';
import axios from 'axios';
import * as action from '../../redux/weather';

export default function City() {
  const API_KEY = API.WEATHER_API_KEY;
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${API_KEY}`,
      )
      .then((response) => {
        const kelbin = response.data.main.temp;
        const degree = (kelbin - 273.15).toFixed(1);
        dispatch(action.SETCITY(response.data.name));
        dispatch(action.SETTMEPERATURE(degree));
        dispatch(action.SETWEATHER(response.data.weather[0].main));
        dispatch(action.SETICON(response.data.weather[0].icon));
      });
  }, [API_KEY, dispatch]);

  const city = useSelector((state) => state.weather.city);

  return <L.City>{city}</L.City>;
}
