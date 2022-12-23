import Avartar from './Avatar';
import * as S from './AvatarModal.style';

export default function AvartarModal({ onClick }) {
  return (
    <S.AvartarModalLayout>
      <S.Container>
        <S.Wrapper>
          <Avartar />
          <S.Buttons>
            <S.Label htmlFor="upload">이미지 업로드</S.Label>
            <input type="file" id="upload" accept="image/jpg, image/png" />
            <S.DeleteButton>이미지 삭제</S.DeleteButton>
          </S.Buttons>
        </S.Wrapper>
        <S.SaveButton onClick={onClick}>저장</S.SaveButton>
        <S.CloseButton onClick={onClick}>X</S.CloseButton>
      </S.Container>
    </S.AvartarModalLayout>
  );
}
