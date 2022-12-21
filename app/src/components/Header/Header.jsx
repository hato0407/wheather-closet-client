import * as S from './Header.style';
import Avartar from './../Avartar/Avatar';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <S.HeaderLayout>
      <S.HeaderWrapper>
        {/* TODO 로고 컴포넌트 만들기 */}
        <span>
          <Link to="/">날씨옷장</Link>
        </span>
        <S.Nav>
          <S.MenuItem>옷차림 특파원</S.MenuItem>
          <S.MenuLogin>
            <S.MenuItem>
              <Link to="/login">로그인</Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/register">회원가입</Link>
            </S.MenuItem>
          </S.MenuLogin>
        </S.Nav>
        <S.UserMenu>
          <Avartar />
          <S.UserMenuWrapper>
            <ul>
              <S.UserMenuItem>
                <Link to="/MyPage">마이페이지</Link>
              </S.UserMenuItem>
              <S.UserMenuItem>계정관리</S.UserMenuItem>
              <S.UserMenuItem>로그아웃</S.UserMenuItem>
            </ul>
          </S.UserMenuWrapper>
        </S.UserMenu>
      </S.HeaderWrapper>
    </S.HeaderLayout>
  );
}
