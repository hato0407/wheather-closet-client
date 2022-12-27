import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './clothes.style';
import * as action from '../../redux/clothes';
import { DescTemperature } from '../../config/config';
export default function Clothes() {
  const temperature = useSelector((state) => state.weather.temperature);
  const dispatch = useDispatch();
  useEffect(() => {
    for (let i = 1; i < 9; i++) {
      if (temperature < DescTemperature[i].temperature) {
        dispatch(action.SETDESCTEM(DescTemperature[i].desc));
        dispatch(action.SETDESCCLOTHE(DescTemperature[i].clothes));
      }
    }
  });
  const descClothes = useSelector((state) => state.clothes.descClothes);
  const descTem = useSelector((state) => state.clothes.descTem);
  return (
    <S.ClothesContainer>
      <S.TextBox>
        {temperature}
        <S.Text>{descTem}</S.Text>
      </S.TextBox>
      <S.ClothesBox>
        <S.ClotheIcon></S.ClotheIcon>
        {descClothes}
      </S.ClothesBox>
    </S.ClothesContainer>
  );
}
