import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { API } from '../../config/config';
import * as action from '../../redux/weather';
import * as S from './search.style';

export default function Search() {
  const [place, setPlace] = useState('');
  const API_KEY = API.WEATHER_API_KEY;
  const dispatch = useDispatch();

  function handleChange(event) {
    setPlace(event.target.value);
  }

  const handleClickForLatAndLon = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`,
        )
        .then((response) => {
          const kelbin = response.data.main.temp;
          const degree = (kelbin - 273.15).toFixed(1);
          dispatch(action.SETCITY(response.data.name));
          dispatch(action.SETTMEPERATURE(degree));
          dispatch(action.SETWEATHER(response.data.weather[0].main));
          dispatch(action.SETICON(response.data.weather[0].icon));
        });
    });
  };
  const hanleClickForCity = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}`,
      )
      .then((response) => {
        const kelbin = response.data.main.temp;
        const degree = (kelbin - 273.15).toFixed(1);
        dispatch(action.SETCITY(response.data.name));
        dispatch(action.SETTMEPERATURE(degree));
        dispatch(action.SETWEATHER(response.data.weather[0].main));
        dispatch(action.SETICON(response.data.weather[0].icon));
      });
  };

  return (
    <S.SearchContainer>
      <S.Title>
        <h1>What Should I Wear Today?</h1>
      </S.Title>
      <S.Input
        type="text"
        placeholder="영어로 지역명을 입력하세요. ex)Seoul"
        onChange={handleChange}
      />
      <S.SearchButton onClick={hanleClickForCity}>검색</S.SearchButton>
      <S.Button onClick={handleClickForLatAndLon}>
        내 주변 날씨 바로알기!
      </S.Button>
    </S.SearchContainer>
  );
}
