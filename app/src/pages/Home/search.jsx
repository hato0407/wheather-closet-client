import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Search() {
  return (
    <Container>
      <Title>What Should I Wear Today?</Title>
      <Input type="text" placeholder="지역을 입력하세요." />
      <Button>내 주변 날씨 바로알기!</Button>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  text-align: center;
`;
const Input = styled.input`
  border-radius: 25px;
  width: 872px;
  height: 50px;
  text-align: center;
`;
const Button = styled.button`
  background-color: #f5f5f5;
  border: none;
  width: 275px;
  height: 52px;
`;
