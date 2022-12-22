import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

export default function WeatherView() {
  const [temperature, setTemperature] = useState();
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');
  const [icon, setIcon] = useState('');
  const [place, setPlace] = useState('');
  const API_KEY = 'a360461662224b3d0ea83d05566bf189';
  const iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png';
  function handleChange(event) {
    setPlace(event.target.value);
  }

  function handleClickForLatAndLon() {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`,
        )
        .then((response) => {
          const kelbin = response.data.main.temp;
          setTemperature((kelbin - 273.15).toFixed(1));
          setCity(response.data.name);
          setIcon(response.data.weather[0].icon);
          setWeather(response.data.weather[0].main);
        });
    });
  }

  function hanleClickForCity() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}`,
      )
      .then((response) => {
        const kelbin = response.data.main.temp;
        setTemperature((kelbin - 273.15).toFixed(1));
        setCity(response.data.name);
        setIcon(response.data.weather[0].icon);
        setWeather(response.data.weather[0].main);
      });
  }
  return (
    <Container>
      <SearchContainer>
        <Title>What Should I Wear Today?</Title>
        <Input
          type="text"
          placeholder="지역을 입력하세요."
          onChange={handleChange}
        />
        <SearchButton onClick={hanleClickForCity}>검색</SearchButton>
        <Button onClick={handleClickForLatAndLon}>
          내 주변 날씨 바로알기!
        </Button>
      </SearchContainer>
      <Temperature>{temperature}</Temperature>
      <City>{city}</City>
      <Icon src={iconUrl} />
      <Weather>{weather}</Weather>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 2vh 2vw;
  flex-direction: column;
  align-items: center;
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
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;
const Title = styled.h1`
  text-align: center;
`;
const Input = styled.input`
  border-radius: 25px;
  width: 55vw;
  height: 5vh;
  text-align: center;
`;
const Button = styled.button`
  background-color: #f5f5f5;
  border: none;
  width: 275px;
  height: 52px;
  margin: 2vh 0;
`;
const SearchButton = styled.button`
  background-color: #e2e2e2;
  border: none;
  width: 275px;
  height: 52px;
  margin: 2vh 0;
`;
