import * as S from './SkeletonBoard.style';

export default function SkeletonBoard() {
  return (
    <S.SkeletonBoardLayout>
      {new Array(9).fill(1).map((item) => (
        <ListItem key={item} />
      ))}
    </S.SkeletonBoardLayout>
  );
}

function ListItem() {
  return <S.Li></S.Li>;
}
