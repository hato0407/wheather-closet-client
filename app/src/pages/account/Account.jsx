import { useState } from 'react';
import * as S from './Account.style';
import Avartar from '../../components/avatar/Avatar';
import AvartarModal from '../../components/avatar/AvatarModal';

Account.defaultProps = {
  nickname: 'clother',
  userEmail: 'clother@email.com',
};

export default function Account({ nickname, userEmail }) {
  // Avartar 변경 State
  const [show, setShow] = useState(false);

  // 새로운 비밀번호 State
  const [password, setPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordCheckMessage, setPasswordCheckMessage] = useState('');

  // 비밀번호 정규식
  const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  const regExp = /\s/g;

  // TODO input Debouncing 처리하기
  const handlePassword = (e) => {
    const password = e.target.value;

    if (regExp.test(password)) {
      setPasswordMessage('공백을 제거해주세요');
    } else if (!passwordRegExp.test(password)) {
      setPasswordMessage('영문, 숫자, 특수문자 혼합하여 8~25자');
    } else {
      setPassword(password);
      setPasswordMessage('');
    }
  };

  const handlePasswordCheck = (e) => {
    const passwordCheck = e.target.value;

    setPasswordCheck(passwordCheck);

    if (passwordCheck !== password) {
      setPasswordCheckMessage('비밀번호가 일치하지 않습니다');
    } else {
      setPasswordCheckMessage('');
    }
  };

  // Avartar 변경 모달창
  const handleModal = () => {
    setShow(!show);
  };

  const handleDeleteAccount = () => {
    const message = window.confirm('정말로 탈퇴하시겠습니까?');

    if (message) {
      window.location = '/';
    }
  };

  return (
    <main>
      <S.AccountWrapper>
        <S.Profile>
          <h2>프로필</h2>
          <hr />
          <S.ProfileContainer>
            <S.ProfileWrapper>
              <Avartar onClick={handleModal} />
              {show && <AvartarModal onClick={handleModal} />}
              <S.UserFormWrapper>
                <form>
                  <S.Label>닉네임</S.Label>
                  <S.NickNameWrapper>
                    <S.Input type="text" defaultValue={nickname} />
                    <S.SubmitButton type="submit">변경하기</S.SubmitButton>
                  </S.NickNameWrapper>
                  <S.Password>
                    <div>
                      <S.Label htmlFor="password">새로운 비밀번호</S.Label>
                      <S.PasswordWrapper>
                        <S.Input
                          type="password"
                          id="password"
                          defaultValue={password}
                          onChange={handlePassword}
                        />
                        <S.Message>{passwordMessage}</S.Message>
                      </S.PasswordWrapper>
                    </div>
                    <div>
                      <S.Label htmlFor="password-check">
                        새로운 비밀번호 확인
                      </S.Label>
                      <S.PasswordWrapper>
                        <S.Input
                          type="password"
                          id="password-check"
                          defaultValue={passwordCheck}
                          onChange={handlePasswordCheck}
                        />
                        <S.Message>{passwordCheckMessage}</S.Message>
                      </S.PasswordWrapper>
                    </div>
                    <S.SubmitButton type="submit">변경하기</S.SubmitButton>
                  </S.Password>
                </form>
                <div>
                  <S.Label>이메일</S.Label>
                  <S.Input type="text" value={userEmail} disabled />
                </div>
              </S.UserFormWrapper>
            </S.ProfileWrapper>
          </S.ProfileContainer>
        </S.Profile>
        <S.DeleteAccount>
          <h2>회원탈퇴</h2>
          <hr />
          <S.DeleteDescription>
            회원탈퇴 시 작성한 게시물은 삭제되지 않습니다. <br />
            작성한 게시물은 직접 삭제해주세요.
          </S.DeleteDescription>
          <S.DeleteButton>
            <S.SubmitButton onClick={handleDeleteAccount}>
              회원탈퇴
            </S.SubmitButton>
          </S.DeleteButton>
        </S.DeleteAccount>
      </S.AccountWrapper>
    </main>
  );
}
