import styled from 'styled-components';
import BoardList from './../../components/BoardList';

MyPage.defaultProps = {
  userAvatar: '../../default-profile.png',
  userId: 'clother',
};

export default function MyPage({ userAvatar, userId }) {
  return (
    <main>
      <UserProfile>
        <Avatar>
          <AvatarImage src={userAvatar} alt="프로필 이미지" />
        </Avatar>
        <UserId>{userId}</UserId>
      </UserProfile>
      <hr />
      <section>
        <TabWrapper>
          <TabMenu>내 게시글</TabMenu>
          {/*HeartIcon(임시)*/}
          <TabMenu>♡ 좋아요</TabMenu>
        </TabWrapper>
        <BoardList />
      </section>
    </main>
  );
}

const UserProfile = styled.section`
  display: flex;
  align-items: center;
  padding: 24px 0;
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 70%;
  overflow: hidden;
  cursor: pointer;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserId = styled.span`
  margin-left: 24px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const TabWrapper = styled.div`
  margin: 30px 0;
  text-align: center;
  cursor: pointer;

  > span + span {
    margin-left: 12vw;
  }
`;

const TabMenu = styled.span`
  font-size: 1.125rem;
  font-weight: bold;
`;
