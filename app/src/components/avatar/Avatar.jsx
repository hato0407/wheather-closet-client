import * as S from './Avatar.style';
import defalutProgfile from '../../assets/images/default-profile.png';

export default function Avartar({ toggleMenu, toggleModal, previewAvartar }) {
  return (
    <S.AvatarLayout>
      <S.AvatarImage
        src={previewAvartar ? previewAvartar : defalutProgfile}
        alt="프로필 이미지"
        onClick={() => {
          toggleMenu();
          // toggleModal();
        }}
      />
    </S.AvatarLayout>
  );
}
