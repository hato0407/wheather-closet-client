import styled, { keyframes } from 'styled-components';

// List(ul)
export const SkeletonBoardLayout = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 20px;
`;

// Item(li)
const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(307px);
  }
`;

export const Li = styled.li`
  position: relative;
  width: 307px;
  min-height: 307px;
  background-color: #c1c1c1;
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 100%;
    background: linear-gradient(to right, transparent, #d7d7d7, transparent);
    animation: ${loading} 2s infinite;
  }
`;
