import { useState } from 'react';
import Avartar from './Avatar';
import * as S from './AvatarModal.style';

export default function AvartarModal({ toggleModal }) {
  const [previewAvartar, setPreviewAvartar] = useState(null);

  // 이미지 미리보기
  const changeAvartar = (e) => {
    const reader = new FileReader();
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      setPreviewAvartar(previewImgUrl);
    };
  };

  // 이미지 저장
  const saveAvartar = () => {
    toggleModal();

    // TODO 서버에 이미지 값 저장
    console.log(previewAvartar);
  };

  // 이미지 삭제
  const deleteAvartar = () => {
    setPreviewAvartar(null);
  };

  return (
    <S.AvartarModalLayout>
      <S.Container>
        <S.Wrapper>
          <Avartar previewAvartar={previewAvartar} />
          <S.Buttons>
            <S.Label htmlFor="upload">이미지 업로드</S.Label>
            <input
              type="file"
              id="upload"
              accept="image/*"
              onChange={changeAvartar}
            />
            <S.DeleteButton onClick={deleteAvartar}>이미지 삭제</S.DeleteButton>
          </S.Buttons>
        </S.Wrapper>
        <S.SaveButton onClick={saveAvartar}>저장</S.SaveButton>
        <S.CloseButton onClick={toggleModal}>X</S.CloseButton>
      </S.Container>
    </S.AvartarModalLayout>
  );
}
