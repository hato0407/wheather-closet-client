import styled from 'styled-components';

export const AvartarModalLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 12px;
  background-color: #0000004d;
  z-index: 999;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 580px;
  height: 310px;
  background-color: #ffffff;
  box-shadow: 5px 10px 10px 1px #0000004d;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div:first-child {
    width: 150px;
    height: 150px;
    background: gray;
    border-radius: 70%;
    overflow: hidden;
  }
`;

export const SaveButton = styled.button`
  position: absolute;
  bottom: 30px;
  padding: 6px 10px;
  border: 1px solid #000;
  border-radius: 20px;

  :hover {
    background-color: #eaeaea;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const Buttons = styled.div`
  margin-left: 68px;

  input {
    display: none;
  }
`;

export const Label = styled.label`
  display: block;
  padding: 14px 12px;
  text-align: center;
  border: 1px solid #000;
  cursor: pointer;

  :hover {
    background-color: #eaeaea;
  }
`;

export const DeleteButton = styled.button`
  display: block;
  width: 100%;
  margin-top: 18px;
  font-size: 1rem;
  padding: 14px 12px;
  border: 1px solid #000;

  :hover {
    background-color: #eaeaea;
  }
`;
