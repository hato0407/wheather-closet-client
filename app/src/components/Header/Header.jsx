import * as S from './Header.style';
import Avartar from './../Avartar/Avatar';

export default function Header() {
  return (
    <header>
      <S.HeaderWrapper>
        {/* TODO 로고 컴포넌트 만들기 */}
        <span>날씨옷장</span>
        <S.Nav>
          <S.MenuItem>옷차림 특파원</S.MenuItem>
          <S.MenuLogin>
            <S.MenuItem>로그인</S.MenuItem>
            <S.MenuItem>회원가입</S.MenuItem>
          </S.MenuLogin>
        </S.Nav>
        <S.UserMenu>
          <Avartar />
          <S.UserMenuWrapper>
            <ul>
              <S.UserMenuItem>마이페이지</S.UserMenuItem>
              <S.UserMenuItem>계정관리</S.UserMenuItem>
              <S.UserMenuItem>로그아웃</S.UserMenuItem>
            </ul>
          </S.UserMenuWrapper>
        </S.UserMenu>
      </S.HeaderWrapper>
    </header>
  );
}
