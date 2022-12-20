import * as S from './MyPage.style';
import BoardList from './../../components/BoardList';
import Avartar from './../../components/Avartar';

MyPage.defaultProps = {
  userAvatar: '../../default-profile.png',
  userId: 'clother',
};

export default function MyPage({ userAvatar, userId }) {
  return (
    <main>
      <S.UserProfile>
        <Avartar />
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
