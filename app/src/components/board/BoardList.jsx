import * as S from './BoardList.style';

export default function BoardList() {
  return (
    <S.ListLayout>
      {[0, 1, 2, 3, 4].map((item) => (
        <ListItem key={item} />
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
        <S.HeartWrapper>
          <S.HeartIcon>♡</S.HeartIcon>
          <S.HeartCount>{heartCount}</S.HeartCount>
        </S.HeartWrapper>
      </S.ItemWrapper>
    </li>
  );
}
