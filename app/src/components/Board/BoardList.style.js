import styled from 'styled-components';

export const ListLayout = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 20px;
`;

// List
export const ItemWrapper = styled.div`
  position: relative;
`;

export const Clothes = styled.div`
  width: 100%;
  height: 100%;
`;

export const ClothesImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const HeartWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 30px;

  > span + span {
    margin-left: 4px;
  }
`;

// HeartIcon(임시)
export const HeartIcon = styled.span`
  font-size: 20px;
`;

export const HeartCount = styled.span`
  margin-left: 4px;
  font-size: 20px;
`;
