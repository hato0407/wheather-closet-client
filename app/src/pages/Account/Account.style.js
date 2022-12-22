import styled from 'styled-components';

export const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Profile = styled.section`
  width: 100%;
  max-width: 52rem;
  margin-top: 2.5rem;
`;

export const ProfileInner = styled.div`
  display: flex;
  padding: 1.5rem 0;
`;

export const UserContainer = styled.div`
  margin-left: 80px;
  padding-top: 32px;
`;

export const UserWrapper = styled.div`
  display: flex;

  > div + div {
    margin-left: 150px;
  }
`;

export const PasswordForm = styled.form`
  margin-top: 2rem;

  > div + div {
    margin-top: 20px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
`;

export const DeleteAccount = styled.section`
  width: 100%;
  max-width: 52rem;
  margin-top: 1.125rem;
`;

export const DeleteDescription = styled.p`
  padding: 1.5rem 0;
  text-align: center;
`;

export const DeleteButton = styled.div`
  text-align: center;
`;
