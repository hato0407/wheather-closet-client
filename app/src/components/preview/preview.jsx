import React from 'react';
import * as S from '../board/BoardList.style';
import styled from 'styled-components';

export default function BoardList() {
  return (
    <Container>
      <Text>옷차림 특파원에서 더 알아보기</Text>
      <S.ListLayout>
        {[0, 1, 2].map((item) => (
          <ListItem key={item} />
        ))}
      </S.ListLayout>
    </Container>
  );
}

ListItem.defaultProps = {
  clothesImage: 'https://picsum.photos/id/22/480/480',
};

function ListItem({ clothesImage }) {
  return (
    <li>
      <S.ItemWrapper>
        <S.Clothes>
          <S.ClothesImage src={clothesImage} alt="" />
        </S.Clothes>
      </S.ItemWrapper>
    </li>
  );
}

const Text = styled.div`
  padding: 4vh 0;
  font-size: 24px;
`;
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
