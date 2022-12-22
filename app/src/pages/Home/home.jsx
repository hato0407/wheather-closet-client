import react, { useEffect, useState } from 'react';
import styled from 'styled-components';
import WeatherView from './weather';
import Youtube from './youtube';
import Clothes from './clothes';
export default function Home() {
  return (
    <Container>
      <WeatherView />
      <Clothes />
      <View />
      <Youtube />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 20vh 20vw;
  justify-content: center;
  align-items: center;
`;
const View = styled.div`
  width: 300px;
`;
