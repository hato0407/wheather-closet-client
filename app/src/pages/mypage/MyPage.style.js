import styled from 'styled-components';

export const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const ProfileWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1100px;
  margin-top: 2rem;
`;

export const UserId = styled.span`
  margin-left: 24px;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Hr = styled.hr`
  width: 100%;
  max-width: 1100px;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1100px;
`;

export const TabWrapper = styled.div`
  margin-bottom: 30px;
  text-align: center;
  cursor: pointer;

  > span + span {
    margin-left: 12vw;
  }
`;

export const TabMenu = styled.span`
  font-size: 1.125rem;
  font-weight: bold;
`;
