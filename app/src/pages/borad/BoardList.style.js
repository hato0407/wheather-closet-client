import styled from 'styled-components';

// List(ul)
export const ListLayout = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 20px;
`;

// Item(li)
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
