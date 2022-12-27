import * as S from './Avatar.style';
import defalutProgfile from '../../assets/images/default-profile.png';

export default function Avartar({ toggle, previewAvartar }) {
  return (
    <S.AvatarLayout>
      <S.AvatarImage
        src={previewAvartar ? previewAvartar : defalutProgfile}
        alt="프로필 이미지"
        onClick={toggle}
      />
    </S.AvatarLayout>
  );
}
