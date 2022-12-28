import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

export default function Logo() {
  return (
    <LogoLayout>
      <img src={logo} />
      <Link to="/">날씨옷장</Link>
    </LogoLayout>
  );
}

const LogoLayout = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;

  > a {
    margin-left: 8px;
  }
`;
