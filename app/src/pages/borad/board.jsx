import { useState } from 'react';
import * as S from './board.style';
import Avartar from '../../components/avatar/Avatar';
import AvartarModal from '../../components/avatar/AvatarModal';
import BoardList from '../../components/board/BoardList';
import { dummypost } from './../../data/post';

MyPage.defaultProps = {
  userId: 'TODAY Weather Fit !',
};

const arr = [
  // {
  //   label: "거리순",
  //   value: "",
  // },
  {
    label: '시간순',
    value: 'createdDatetime',
  },
  {
    label: '좋아요',
    value: 'likedBy',
  },
];
export default function MyPage({ userId }) {
  const [show, setShow] = useState(false);
  const [tab, setTab] = useState(0);
  const [boardData, setBoardData] = useState(dummypost);

  const handleModal = () => {
    setShow(!show);
  };

  const onChangeTab = (idx, value) => {
    setTab(idx);

    const sortedPost = boardData.sort((a, b, sortedBy) => {
      if (a[value] < b[value]) {
        return -1;
      }
      if (a[value] > b[value]) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });
    setBoardData(sortedPost);
  };

  return (
    <main>
      {/* <S.UserProfile>
        <Avartar onClick={handleModal} />
        {show && <AvartarModal onClick={handleModal} />}
        <S.UserId>{userId}</S.UserId>
      </S.UserProfile> */}
      <hr />
      <section>
        <S.TabWrapper>
          {arr.map((el, idx) => {
            return (
              <S.TabMenu
                onClick={() => {
                  onChangeTab(idx, el.value);
                }}
                key={idx}
              >
                {el.label}
              </S.TabMenu>
            );
          })}
        </S.TabWrapper>
        <BoardList boardData={boardData} />
      </section>
    </main>
  );
}
