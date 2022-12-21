import styled from 'styled-components';

export default function NotFound() {
  return (
    <div>
      <div>로고</div>
      <NotFoundMessage>
        <h2>요청한 페이지를 찾을 수 없습니다.</h2>
        <Paraghraph>
          찾으려는 페이지의 주소가 잘못 입력되었거나,
          <br /> 주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다.
          <br /> 입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주세요.
        </Paraghraph>
      </NotFoundMessage>
      <Links>
        <LinkButton href="#"> 이전 페이지로 이동 </LinkButton>
        <LinkButton href="#"> 홈으로 이동 </LinkButton>
      </Links>
    </div>
  );
}

const NotFoundMessage = styled.div`
  margin-top: 70px;
`;

const Paraghraph = styled.p`
  margin-top: 40px;
`;

const Links = styled.div`
  margin-top: 50px;
`;

const LinkButton = styled.a`
  + a {
    margin-left: 70px;
  }
`;
