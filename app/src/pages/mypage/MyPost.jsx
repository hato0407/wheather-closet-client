import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './MyPost.style';
import SkeletonBoard from '../../components/skeletonUI/SkeletonBoard';

export default function BoardList() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const getBoardData = async () => {
    try {
      const result = await axios('/store/myPagePost.json');
      setData(result.data);
      setIsLoading(false);
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
      {isLoading ? (
        <SkeletonBoard />
      ) : (
        data.map((item) => <ListItem key={item.id} imageUrl={item.image} />)
      )}
    </S.ListLayout>
  );
}

function ListItem({ imageUrl }) {
  return (
    <li>
      <S.ItemWrapper>
        <S.Clothes>
          <S.ClothesImage src={imageUrl} alt="" />
        </S.Clothes>
      </S.ItemWrapper>
    </li>
  );
}
