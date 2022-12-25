import * as S from './BoardList.style';

export default function BoardList() {
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
