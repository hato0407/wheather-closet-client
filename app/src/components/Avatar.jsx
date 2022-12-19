import styled from 'styled-components';

export default function Avartar() {
  return (
    <AvatarLayout>
      <AvatarImage src="../../default-profile.png" alt="프로필 이미지" />
    </AvatarLayout>
  );
}

const AvatarLayout = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 70%;
  overflow: hidden;
  cursor: pointer;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
