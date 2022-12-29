import styled, { css } from 'styled-components';

export const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 5.625rem;
`;

export const Section = styled.section`
  max-width: 60rem;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: large;
  font-weight: bold;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const TabMenu = styled.div`
  display: flex;
  gap: 12vh;
  }
`;

export const TabItem = styled.p`
  border-bottom: 1px solid transparent;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      background: rgba(230, 230, 230, 0.0001);
      box-shadow: inset 0px -4px 0px #ffdc45;
    `}
`;
