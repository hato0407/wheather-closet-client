import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './clothes.style';
import * as action from '../../redux/clothes';
import axios from 'axios';

export default function Clothes() {
  const temperature = useSelector((state) => state.weather.temperature);
  const dispatch = useDispatch();
  const descTem = useSelector((state) => state.clothes.descTem);
  const icon = useSelector((state) => state.clothes.icon);
  function getText() {
    dispatch(
      temperature > -10
        ? action.SETDESCTEM(
            '목도리, 귀마개 등 방한용품 필수! 보온내의가 필요할 때 입니다!',
          )
        : action.SETDESCTEM(
            '웬만하면 밖으로 나오지 않고 따뜻한 집안에 있으세요!',
          ),
    );
  }
  function getIcon() {
    dispatch(action.SETICON(axios.get('http://localhost:3000/jacket.png')));
  }
  getText();
  getIcon();
  return (
    <S.ClothesContainer>
      <S.TextBox>
        {temperature}
        <S.Text>{descTem}</S.Text>
      </S.TextBox>
      <S.ClothesBox>
        <S.ClotheIcon>
          <img src={icon} />
        </S.ClotheIcon>
        두꺼운 코트, 패딩 등
      </S.ClothesBox>
    </S.ClothesContainer>
  );
}
