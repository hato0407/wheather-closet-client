import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function WeatherView() {
  const [temperature, setTemperature] = useState(0);
  const [city, setCity] = useState('Busan');
  const [weather, setWeather] = useState('');
  const [icon, setIcon] = useState();
  const API_KEY = 'a360461662224b3d0ea83d05566bf189';
  const iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png';
  //const lat = position.coords.latitude;
  //const lng = position.coords.longitude;
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
      )
      .then((response) => {
        const kelbin = response.data.main.temp;
        setTemperature((kelbin - 273.15).toFixed(1));
        setCity(response.data.name);
        setIcon(response.data.weather[0].icon);
        setWeather(response.data.weather[0].main);
      });
  });
  return (
    <Container>
      <Temperature>{temperature}</Temperature>
      <City>{city}</City>
      <Icon src={iconUrl} alt="날씨아이콘" />
      <Weather>{weather}</Weather>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  border: solid 2px black;
  margin: 5vh 5vw;
  padding: 2vh 2vw;
`;
const Temperature = styled.div`
  font-size: 70px;
`;
const City = styled.h2`
  font-size: 50px;
`;
const Icon = styled.img`
  width: 100px;
`;
const Weather = styled.h3`
  font-size: 30px;
`;
