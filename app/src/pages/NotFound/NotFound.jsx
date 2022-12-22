import { Link } from 'react-router-dom';
import * as S from './NotFound.style';

export default function NotFound() {
  return (
    <S.NotFoundLayout>
      <S.NotFoundWrapper>
        <span>날씨옷장 로고</span>
        <S.Title>존재하지 않는 페이지 입니다.</S.Title>
        <S.Links>
          <Link to="/"> 홈으로 이동 </Link>
        </S.Links>
      </S.NotFoundWrapper>
    </S.NotFoundLayout>
  );
}
