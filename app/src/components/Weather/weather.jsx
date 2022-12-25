import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import jacket from '../../assets/Icons/jacket.png';

export default function WeatherView() {
  const [temperature, setTemperature] = useState('');
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');
  const [icon, setIcon] = useState('01d');
  const [place, setPlace] = useState('seoul');
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
        <Title>
          <h1>What Should I Wear Today?</h1>
        </Title>
        <Input
          type="text"
          placeholder="영어로 지역명을 입력하세요. ex)Seoul"
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
      <ClothesContainer>
        <TextBox>
          {temperature}도
          <Text>
            목도리, 귀마개 등 방한용품 필수! 보온내의가 필요할 때 입니다!
          </Text>
        </TextBox>
        <ClothesBox>
          <ClotheIcon>
            <img src={jacket} />
          </ClotheIcon>
          두꺼운 코트, 패딩 등
        </ClothesBox>
      </ClothesContainer>
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
const Title = styled.div`
  padding-bottom: 5vh;
  font-size: 2rem;
  text-align: center;
`;
const Input = styled.input`
  border-radius: 25px;
  width: 55vw;
  height: 6vh;
  text-align: center;
  border: solid 1px #e2e2e2;
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
const ClothesContainer = styled.div`
  display: flex;
  background-color: #f5f5f5;
  align-items: center;
  width: 55vw;
  height: 40vh;
  box-sizing: border-box;
  justify-content: center;
  border-radius: 20px;
`;
const TextBox = styled.div`
  width: 18vw;
  background-color: #213e6a;
  color: white;
  height: 25vh;
  border-radius: 20px;
  text-align: center;
  padding: 5vh 2vw;
  font-size: 32px;
`;
const ClothesBox = styled.div`
  display: flex;
  align-items: center;
  width: 23vw;
  background-color: #4b76b6;
  color: white;
  height: 25vh;
  border-radius: 20px;
  padding: 3vh 2vw;
`;
const Text = styled.div`
  font-size: 14px;
  padding-top: 4vh;
`;
const ClotheIcon = styled.div`
  padding-right: 1vw;
`;
