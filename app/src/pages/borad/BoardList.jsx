import * as S from './BoardList.style';

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

export default function BoardList({ boardData }) {
  const sortedPost = boardData.sort(compare);

  return (
    <S.ListLayout>
      {sortedPost.map((item, idx) => (
        <ListItem item={item} key={item.id} />
      ))}
    </S.ListLayout>
  );
}

function ListItem({ item }) {
  return (
    <li>
      <S.ItemWrapper>
        <S.Clothes>
          <S.ClothesImage src={item.image} alt="" />
        </S.Clothes>
      </S.ItemWrapper>
    </li>
  );
}
