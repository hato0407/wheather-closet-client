import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header.style';
import Logo from '../../assets/icon/Logo';
import bar from '../../assets/icon/bars-solid.png';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogin(true);
    }
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const onLogout = () => {
    localStorage.clear();
    setIsLogin(false);
  };

  return (
    <header>
      <S.HeaderWrapper>
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
        {isLogin && (
          <S.UserMenu>
            <div onClick={toggleMenu}>
              <S.MenuIcon src={bar} alt="메뉴" />
            </div>
            {showMenu && (
              <S.UserMenuWrapper>
                <ul onClick={toggleMenu}>
                  <S.UserMenuItem>
                    <Link to="/mypage">마이페이지</Link>
                  </S.UserMenuItem>
                  <S.UserMenuItem>
                    <Link to="/account">계정관리</Link>
                  </S.UserMenuItem>
                  <S.UserMenuItem onClick={onLogout}>로그아웃</S.UserMenuItem>
                </ul>
              </S.UserMenuWrapper>
            )}
          </S.UserMenu>
        )}
      </S.HeaderWrapper>
    </header>
  );
}
