import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Clothes() {
  const [temperature, setTemperature] = useState();
  return (
    <Container>
      <TextBox>안녕하세요</TextBox>
      <ClothesBox>반갑습니다</ClothesBox>
    </Container>
  );
}
const Container = styled.div`
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
`;
const ClothesBox = styled.div`
  width: 23vw;
  background-color: #4b76b6;
  color: white;
  height: 25vh;
  border-radius: 20px;
  text-align: center;
  padding: 5vh 2vw;
`;
