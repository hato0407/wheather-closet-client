import styled from 'styled-components';

export const UserProfile = styled.section`
  display: flex;
  align-items: center;
  padding: 24px 0;
`;

export const UserId = styled.span`
  margin-left: 24px;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const TabWrapper = styled.div`
  margin: 30px 0;
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
