import { useState } from 'react';
import * as S from './Account.style';
import Avartar from '../../components/avatar/Avatar';
import AvartarModal from '../../components/avatar/AvatarModal';

export default function Account() {
  const [show, setShow] = useState(false);

  const handleModal = () => {
    setShow(!show);
  };

  const handleDeleteAccount = () => {
    const message = window.confirm('정말로 탈퇴하시겠습니까?');
  };

  return (
    <main>
      <S.AccountWrapper>
        <S.Profile>
          <h2>프로필</h2>
          <hr />
          <S.ProfileInner>
            <Avartar onClick={handleModal} />
            {show && <AvartarModal onClick={handleModal} />}
            <S.UserContainer>
              <S.UserWrapper>
                <div>
                  <h3>닉네임</h3>
                  <input type="text" value="clother" />
                  <button type="submit">변경</button>
                </div>
                <div>
                  <h3>이메일</h3>
                  <p>clother@email.com</p>
                </div>
              </S.UserWrapper>
              <S.PasswordForm>
                <div>
                  <S.Label htmlFor="password">새로운 비밀번호</S.Label>
                  <input type="text" id="password" />
                </div>
                <div>
                  <S.Label htmlFor="password-check">
                    새로운 비밀번호 확인
                  </S.Label>
                  <input type="text" id="password-check" />
                </div>
                <button type="submit">변경사항 저장</button>
              </S.PasswordForm>
            </S.UserContainer>
          </S.ProfileInner>
        </S.Profile>
        <S.DeleteAccount>
          <h2>회원탈퇴</h2>
          <hr />
          <S.DeleteDescription>
            회원탈퇴 시 작성한 게시물은 삭제되지 않습니다. <br />
            작성한 게시물은 직접 삭제해주세요.
          </S.DeleteDescription>
          <S.DeleteButton>
            <button onClick={handleDeleteAccount}>회원탈퇴</button>
          </S.DeleteButton>
        </S.DeleteAccount>
      </S.AccountWrapper>
    </main>
  );
}
