import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/header-logo.png';

export default function Logo() {
  return (
    <LogoLayout>
      <Link to="/">
        <LogoImamge src={logo} alt="날씨옷장로고" />
        날씨옷장
      </Link>
    </LogoLayout>
  );
}

const LogoLayout = styled.div`
  > a {
    display: flex;
    align-items: center;
  }
`;

const LogoImamge = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 0.6rem;
`;
