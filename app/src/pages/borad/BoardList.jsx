import react, { useState } from 'react';
import store from '../../utils/store';
import * as S from './BoardList.style';
import HeartButton from './likes/likes';

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
  //const sortedPost = boardData.sort(compare);
  return (
    <S.ListLayout>
      {boardData.map((item, idx) => (
        <ListItem item={item} key={item.id} />
      ))}
    </S.ListLayout>
  );
}

function ListItem({ item, key }) {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  function handleClick() {
    setLike(!like);
    if (like === true) {
      setCount(count - 1);
    } else if (like === false) {
      setCount(count + 1);
    }
  }
  const pics = store.getData('pics');
  return (
    <li>
      <S.ItemWrapper>
        <S.Clothes>
          <S.ClothesImage src={pics} alt="" />
        </S.Clothes>
        <HeartButton likes={like} onClick={handleClick} count={count} />
      </S.ItemWrapper>
    </li>
  );
}
