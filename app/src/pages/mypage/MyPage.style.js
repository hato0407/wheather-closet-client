import styled from 'styled-components';

export const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: 5.625rem;
`;

export const Section = styled.section`
  display: flex;
  max-width: 60rem;
  width: 100%;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  gap: 2.5rem;

  > span {
    align-self: center;
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 1.5rem;
`;

export const TabMenu = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 12vh;

  > span {
    cursor: pointer;
    border-bottom: 1px solid transparent;

    :hover {
      border-bottom: 1px solid black;
    }
  }
`;
