import styled from 'styled-components';
import Avartar from './../../components/Avartar/Avatar';

export default function Account() {
  return (
    <main>
      <section>
        <h2>프로필</h2>
        <hr />
        <Wrapper>
          <Avartar />
          <UserContainer>
            <UserWrapper>
              <div>
                <h3>닉네임</h3>
                <input type="text" value="clother" />
                <button type="submit">변경</button>
              </div>
              <div>
                <h3>이메일</h3>
                <p>clother@email.com</p>
              </div>
            </UserWrapper>
            <PasswordForm>
              <div>
                <Label htmlFor="password">새로운 비밀번호</Label>
                <input type="text" id="password" />
              </div>
              <div>
                <Label htmlFor="password-check">새로운 비밀번호 확인</Label>
                <input type="text" id="password-check" />
              </div>
              <button type="submit">변경사항 저장</button>
            </PasswordForm>
          </UserContainer>
        </Wrapper>
      </section>
      <DeleteAccount>
        <h2>회원탈퇴</h2>
        <hr />
        <DeleteDescription>
          회원탈퇴 시 작성한 게시물은 삭제되지 않습니다. <br />
          작성한 게시물은 직접 삭제해주세요.
        </DeleteDescription>
        <button>회원탈퇴</button>
      </DeleteAccount>
    </main>
  );
}

const Wrapper = styled.div`
  display: flex;

  padding: 24px 40px;
`;

const UserContainer = styled.div`
  margin-left: 80px;
  padding-top: 32px;
`;

const UserWrapper = styled.div`
  display: flex;

  > div + div {
    margin-left: 150px;
  }
`;

const PasswordForm = styled.form`
  margin-top: 60px;

  > div + div {
    margin-top: 20px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
`;

const DeleteAccount = styled.section`
  margin-top: 40px;
`;

const DeleteDescription = styled.p`
  padding: 30px 0;
  text-align: center;
`;
