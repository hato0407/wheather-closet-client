import { useState } from 'react';
import * as S from './AvatarModal.style';
import defalutProgfile from '../../assets/images/default-profile.png';

export default function AvartarModal({ toggle }) {
  const [previewAvartar, setPreviewAvartar] = useState(null);

  // 이미지 미리보기
  const changeAvartar = (e) => {
    const reader = new FileReader();

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
    toggle();
  };

  // 이미지 삭제
  const deleteAvartar = () => {
    setPreviewAvartar(null);
  };

  return (
    <S.AvartarModalLayout>
      <S.Container>
        <S.Wrapper>
          <S.Preview>
            <S.PreviewImage
              src={previewAvartar ? previewAvartar : defalutProgfile}
              alt="이미지"
            />
          </S.Preview>
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
        <S.CloseButton onClick={toggle}>X</S.CloseButton>
      </S.Container>
    </S.AvartarModalLayout>
  );
}
