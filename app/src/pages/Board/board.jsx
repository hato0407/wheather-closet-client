import { useState } from 'react';
import * as S from './board.style';
import Avartar from '../../components/avatar/Avatar';
import AvartarModal from '../../components/avatar/AvatarModal';
import BoardList from '../../components/board/BoardList';

MyPage.defaultProps = {
  userId: 'TODAY Weather Fit !',
};

export default function MyPage({ userId }) {
  const [show, setShow] = useState(false);

  const handleModal = () => {
    setShow(!show);
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
          <S.TabMenu>거리순</S.TabMenu>
          <S.TabMenu>랜덤</S.TabMenu>
          <S.TabMenu>좋아요</S.TabMenu>
        </S.TabWrapper>
        <BoardList />
      </section>
    </main>
  );
}
