import { useState } from 'react';
import * as S from './MyPage.style';
import Avartar from '../../components/avatar/Avatar';
import AvartarModal from '../../components/avatar/AvatarModal';
import BoardList from '../../components/Board/BoardList';

MyPage.defaultProps = {
  userId: 'clother',
};

export default function MyPage({ userId }) {
  const [show, setShow] = useState(false);

  const handleModal = () => {
    setShow(!show);
  };

  return (
    <main>
      <S.UserProfile>
        <Avartar onClick={handleModal} />
        {show && <AvartarModal onClick={handleModal} />}
        <S.UserId>{userId}</S.UserId>
      </S.UserProfile>
      <hr />
      <section>
        <S.TabWrapper>
          <S.TabMenu>내 게시글</S.TabMenu>
          {/*HeartIcon(임시)*/}
          <S.TabMenu>♡ 좋아요</S.TabMenu>
        </S.TabWrapper>
        <BoardList />
      </section>
    </main>
  );
}
