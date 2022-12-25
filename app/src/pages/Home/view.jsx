import React from 'react';
import * as S from '../../components/board/BoardList.style';

export default function BoardList() {
  return (
    <S.ListLayout>
      {[0, 1, 2].map((item, idx) => (
        <ListItem key={idx} />
      ))}
    </S.ListLayout>
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
