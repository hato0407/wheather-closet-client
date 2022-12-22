import styled from 'styled-components';

export const HeaderLayout = styled.header`
  width: 1280px;
  margin: 0 auto;
  padding: 0 55px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 34px 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Menu = styled.div`
  display: flex;
`;

export const MenuItem = styled.span`
  display: inline-block;

  > a {
    display: inline-block;
    padding: 12px 16px;
    background-color: #fff0a4;
    border-radius: 8px;
  }
`;

export const MenuItemAuth = styled.div`
  display: inline-block;

  > span > a {
    display: inline-block;
    margin-left: 20px;
    padding: 12px 16px;
    background-color: #00E5FF
`;

export const UserMenu = styled.div`
  position: relative;
  margin-left: 30px;

  div:first-child {
    width: 40px;
    height: 40px;
  }
`;

export const UserMenuWrapper = styled.div`
  position: absolute;
  width: 100px;
  height: 110px;
  right: 0;
  top: 50px;
  padding: 18px 8px;
  background-color: #fff;
  border: 1px solid black;
`;

export const UserMenuItem = styled.li`
  margin-top: 12px;

  :first-child {
    margin-top: 0;
  }
`;
