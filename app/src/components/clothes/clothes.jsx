import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './clothes.style';
import * as action from '../../redux/clothes';
import jacket from '../../assets/icon/jacket.png';

export default function Clothes() {
  const temperature = useSelector((state) => state.weather.temperature);
  const dispatch = useDispatch();
  const descTem = useSelector((state) => state.clothes.descTem);
  return (
    <S.ClothesContainer>
      <S.TextBox>
        {temperature}
        <S.Text>{descTem}</S.Text>
      </S.TextBox>
      <S.ClothesBox>
        <S.ClotheIcon>
          <img src={jacket} />
        </S.ClotheIcon>
        두꺼운 코트, 패딩 등
      </S.ClothesBox>
    </S.ClothesContainer>
  );
}
