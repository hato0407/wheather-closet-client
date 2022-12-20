import * as S from './AvatarModal.style';

export default function AvartarModal() {
  return (
    <S.AvartarModalLayout>
      <S.Container>
        <S.Wrapper>
          <S.Preview>이미지 미리보기</S.Preview>
          <S.Buttons>
            <S.Label htmlFor="upload">이미지 업로드</S.Label>
            <input type="file" name="" id="upload" />
            <S.Button>이미지 삭제</S.Button>
          </S.Buttons>
        </S.Wrapper>
        <S.SaveButton>저장</S.SaveButton>
        <S.CloseButton>X</S.CloseButton>
      </S.Container>
    </S.AvartarModalLayout>
  );
}
