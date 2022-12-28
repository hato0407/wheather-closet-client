import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header.style';
import Avartar from '../../components/avatar/Avatar';
import Logo from '../logo/Logo';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <S.HeaderWrapper>
        {/* TODO 로고 컴포넌트 만들기 */}
        <Logo />
        <S.Nav>
          <S.Menu>
            <S.MenuItem>
              <a href="/board">옷차림 특파원</a>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/write">작성하기</Link>
            </S.MenuItem>
            {!isLogin && (
              <S.MenuItemAuth>
                <S.MenuItem>
                  <Link to="/login">로그인</Link>
                </S.MenuItem>
                <S.MenuItem>
                  <Link to="/register">회원가입</Link>
                </S.MenuItem>
              </S.MenuItemAuth>
            )}
          </S.Menu>
        </S.Nav>
        {/* TODO isLogin true로 변경하기*/}
        {!isLogin && (
          <S.UserMenu>
            <Avartar toggle={toggleMenu} />
            {showMenu && (
              <S.UserMenuWrapper>
                <ul onClick={toggleMenu}>
                  <S.UserMenuItem>
                    <Link to="/mypage">마이페이지</Link>
                  </S.UserMenuItem>
                  <S.UserMenuItem>
                    <Link to="/account">계정관리</Link>
                  </S.UserMenuItem>
                  <S.UserMenuItem>로그아웃</S.UserMenuItem>
                </ul>
              </S.UserMenuWrapper>
            )}
          </S.UserMenu>
        )}
      </S.HeaderWrapper>
    </header>
  );
}
