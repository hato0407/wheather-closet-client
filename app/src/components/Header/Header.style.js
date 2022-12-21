import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px;
`;

export const Nav = styled.nav`
  display: flex;
  margin-left: auto;
`;

export const MenuItem = styled.span`
  display: inline-block;
  width: 130px;
  height: 40px;
  line-height: 40px;
  background-color: #fff0a4;
  text-align: center;
  cursor: pointer;
`;

export const MenuLogin = styled.span`
  span {
    width: 90px;
    background-color: #ececec;
    margin-left: 20px;
  }
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
  border: 1px solid black;
`;

export const UserMenuItem = styled.li`
  + li {
    margin-top: 6px;
  }
`;
