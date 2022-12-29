import React from 'react';
import emptyHeart from '../../../assets/icon/empty-heart.png';
import fullHeart from '../../../assets/icon/full-heart.png';
import styled from 'styled-components';

export default function HeartButton({ likes, onClick, count }) {
  return (
    <Container>
      <Heart src={likes ? fullHeart : emptyHeart} onClick={onClick} />
      <Count>{count}</Count>
    </Container>
  );
}

const Heart = styled.img``;
const Count = styled.span`
  padding-left: 10px;
  font-size: 25px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
