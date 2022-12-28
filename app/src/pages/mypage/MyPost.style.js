import styled from 'styled-components';

// List(ul)
export const ListLayout = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 20px;
  padding-bottom: 2rem;
`;

// Item(li)
export const ItemWrapper = styled.div`
  position: relative;
`;

export const Clothes = styled.div`
  width: 300px;
  height: 230px;
  overflow: hidden;
`;

export const ClothesImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
