import { useState } from 'react';
import * as S from './MyPage.style';
import MyPost from './MyPost';

MyPage.defaultProps = {
  userId: 'clother',
};

export default function MyPage({ userId }) {
  const TAB_MENU = ['내 게시글', '좋아요'];

  // State
  // Tab
  const [clickedTab, setClickedTab] = useState('내 게시글');

  // Handle Event
  // Tab 클릭 시 변경
  const handleClickTab = (tab) => {
    setClickedTab(tab);
  };

  return (
    <main>
      <S.MyPageWrapper>
        <S.Section>
          <S.Title>{userId}님의 날씨옷장</S.Title>
        </S.Section>
        <S.Hr />
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
            {clickedTab === '내 게시글' ? (
              <MyPost />
            ) : (
              <S.EmptyMessage>좋아요 한 게시글이 없습니다.</S.EmptyMessage>
            )}
          </S.ContentsWrapper>
        </S.Section>
      </S.MyPageWrapper>
    </main>
  );
}
