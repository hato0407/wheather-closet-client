import { useState } from 'react';
import * as S from './MyPage.style';
import Avartar from '../../components/avatar/Avatar';
import AvartarModal from '../../components/avatar/AvatarModal';
import BoardList from '../../components/board/BoardList';

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
      <S.MyPageWrapper>
        <S.Section>
          {/*  */}
          <S.AvatarWrapper>
            <Avartar onClick={handleModal} />
            {show && <AvartarModal onClick={handleModal} />}
            <span>{userId}</span>
          </S.AvatarWrapper>
        </S.Section>
        {/* TODO themeProvieder 사용 (hr, h*, wrapper) */}
        <hr style={{ width: '100%', maxWidth: '1100px' }} />
        <S.Section>
          {/*  */}
          <S.ContentsWrapper>
            <S.TabMenu>
              <span>내 게시글</span>
              {/*HeartIcon(임시)*/}
              <span>♡ 좋아요</span>
            </S.TabMenu>
            <BoardList />
          </S.ContentsWrapper>
        </S.Section>
      </S.MyPageWrapper>
    </main>
  );
}
