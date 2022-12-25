import { useState } from 'react';
import * as S from './MyPage.style';
import Avartar from '../../components/avatar/Avatar';
import AvartarModal from '../../components/avatar/AvatarModal';
import BoardList from '../../components/board/BoardList';
import SkeletonBoard from '../../components/skeletonUI/SkeletonBoard';

MyPage.defaultProps = {
  userId: 'clother',
};

export default function MyPage({ userId }) {
  // Avartar 변경 State
  const [showModal, setShowModal] = useState(false);
  const TAB_MENU = ['내 게시글', '좋아요'];

  // 로딩 State
  const [isLoading, setIsLoading] = useState(false);

  // Tab State
  const [clickedTab, setClickedTab] = useState('내 게시글');

  // Handle Event

  // Tab 클릭 시 변경
  const handleClickTab = (tab) => {
    setClickedTab(tab);
  };

  // Avartar 변경 모달창
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <main>
      <S.MyPageWrapper>
        <S.Section>
          <S.AvatarWrapper>
            <Avartar toggleModal={toggleModal} />
            {showModal && <AvartarModal toggleModal={toggleModal} />}
            <span>{userId}</span>
          </S.AvatarWrapper>
        </S.Section>
        {/* TODO themeProvieder 사용 (hr, h*, wrapper) */}
        <hr style={{ width: '100%', maxWidth: '60rem' }} />
        <S.Section>
          <S.ContentsWrapper>
            <S.TabMenu>
              {TAB_MENU.map((item, idx) => (
                <S.TabItem
                  key={idx}
                  active={clickedTab === item}
                  onClick={() => handleClickTab(item)}
                >
                  {item}
                </S.TabItem>
              ))}
            </S.TabMenu>
            {clickedTab === '내 게시글' ? <BoardList /> : <SkeletonBoard />}
          </S.ContentsWrapper>
        </S.Section>
      </S.MyPageWrapper>
    </main>
  );
}
