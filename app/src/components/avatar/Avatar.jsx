import * as S from './Avatar.style';
import defalutAvartar from '../../assets/images/default-avartar.png';

export default function Avartar({ toggle }) {
  return (
    <S.AvatarLayout>
      <S.AvatarImage
        src={defalutAvartar}
        alt="프로필 이미지"
        onClick={toggle}
      />
    </S.AvatarLayout>
  );
}
