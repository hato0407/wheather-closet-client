import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './BoardList.style';
import { dummypost } from '../../config/post';

function compare(a, b) {
  if (a.likedBy > b.likedBy) {
    return -1;
  }
  if (a.likedBy < b.likedBy) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

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

  const sortedPost = dummypost.sort(compare);

  return (
    <S.ListLayout>
      {sortedPost.map((item, idx) => (
        <ListItem item={item} key={idx} />
      ))}
    </S.ListLayout>
  );
}

ListItem.defaultProps = {
  clothesImage: 'https://picsum.photos/id/22/480/480',
  heartCount: 10,
};

function ListItem({ item, heartCount, clothesImage }) {
  return (
    <li>
      <p>{item.title}</p>
      <p>{item.content}</p>
      <p>{item.likedBy}</p>
      <S.ItemWrapper>
        <S.Clothes>
          <S.ClothesImage src={item.img} alt="" />
        </S.Clothes>
        {/* HeartIcon */}
      </S.ItemWrapper>
    </li>
  );
}
