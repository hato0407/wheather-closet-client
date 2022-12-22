import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function NotFound() {
  return (
    <NotFoundLayout>
      <NotFoundWrapper>
        <span>날씨옷장 로고</span>
        <h1>존재하지 않는 페이지 입니다.</h1>
        <Links>
          <Link to="/"> 홈으로 이동 </Link>
        </Links>
      </NotFoundWrapper>
    </NotFoundLayout>
  );
}

const NotFoundLayout = styled.section`
  padding: 8.75rem 0;
`;

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const Links = styled.div`
  margin-top: 1rem;
`;
