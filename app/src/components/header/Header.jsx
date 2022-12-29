import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './Header.style';
import Logo from '../../assets/icon/Logo';
import bar from '../../assets/icon/bars-solid.png';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogin(true);
    }
  }, [isLogin]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const onLogout = () => {
    localStorage.clear();
    setIsLogin(false);
    alert(`정상적으로 로그아웃 되었습니다.`);
    navigate('/');
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
            {!isLogin ? (
              <S.MenuItemAuth>
                <S.MenuItem>
                  <Link to="/login">로그인</Link>
                </S.MenuItem>
                <S.MenuItem>
                  <Link to="/register">회원가입</Link>
                </S.MenuItem>
              </S.MenuItemAuth>
            ) : (
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
                      <S.UserMenuItem onClick={onLogout}>
                        로그아웃
                      </S.UserMenuItem>
                    </ul>
                  </S.UserMenuWrapper>
                )}
              </S.UserMenu>
            )}
          </S.Menu>
        </S.Nav>
      </S.HeaderWrapper>
    </header>
  );
}
