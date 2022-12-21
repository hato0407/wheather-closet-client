import styled from 'styled-components';

export const AvartarModalLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #2e2d2d;
  opacity: 0.6;
  z-index: 999;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 320px;
  border: 1px solid #eee;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SaveButton = styled.button`
  position: absolute;
  bottom: 30px;
  width: 100px;
  height: 30px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Preview = styled.div`
  width: 140px;
  height: 140px;
  border: 1px solid #eee;
  border-radius: 70%;
  color: white;
`;

export const Buttons = styled.div`
  margin-left: 68px;

  input {
    display: none;
  }
`;

export const Label = styled.label`
  display: block;
  width: 180px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: lightgray;
  cursor: pointer;
`;

export const Button = styled.button`
  display: block;
  width: 180px;
  height: 50px;
  margin-top: 18px;
`;
