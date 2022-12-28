import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './MyBoard.style';

export default function BoardList() {
  const [boardData, setBoardData] = useState([]);

  const getBoardData = async () => {
    try {
      const result = await axios('');
    } catch (err) {
      console.log(err);
    }
  };

  //
  useEffect(() => {
    getBoardData();
  }, []);

  return (
    <S.ListLayout>
      {new Array(9).fill(1).map((item, idx) => (
        <ListItem key={idx} />
      ))}
    </S.ListLayout>
  );
}

ListItem.defaultProps = {
  clothesImage: 'https://picsum.photos/id/22/480/480',
  heartCount: 10,
};

function ListItem({ heartCount, clothesImage }) {
  return (
    <li>
      <S.ItemWrapper>
        <S.Clothes>
          <S.ClothesImage src={clothesImage} alt="" />
        </S.Clothes>
        {/* HeartIcon */}
      </S.ItemWrapper>
    </li>
  );
}
