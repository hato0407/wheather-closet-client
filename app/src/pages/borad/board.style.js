import styled, { css } from 'styled-components';

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5.625rem;
  padding-bottom: 2rem;
`;

export const Section = styled.section`
  max-width: 60rem;
  width: 100%;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const TabMenu = styled.div`
  display: flex;
  gap: 5vh;
  }
`;

export const TabItem = styled.span`
  border-bottom: 1px solid transparent;
  font-weight: bold;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      background: rgba(230, 230, 230, 0.0001);
      box-shadow: inset 0px -4px 0px #ffdc45;
    `}
`;
