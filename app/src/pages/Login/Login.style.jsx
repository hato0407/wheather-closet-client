import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

export const Container2 = styled.div`
  border: 2px solid #f0f1f3;
  border-radius: 3px;
  width: 400px;
  height: 450px;
  box-sizing: border-box;
  padding: 28px 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Container3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #f0f1f3;
  border-radius: 3px;
  width: 400px;
  height: 70px;
  margin: 20px 0px 20px 0px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 40px;
  color: #151618;
  margin: 0;
  margin-top: 20px;
`;

export const SubTitle = styled.h4`
  color: #5e5f61;
  font-size: 14px;
  margin: 0;
  opacity: 0.7;
`;

export const Description = styled.p`
  color: #5e5f61;
  font-size: 14px;
  font-weight: bold;

  + p {
    margin-left: 10px;
    color: #4b7bf4;
  }
`;

export const Description2 = styled.p`
  color: #2063b1;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 310px;
  height: 38px;
  padding-left: 10px;
  opacity: 0.7;
  + input {
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  width: 320px;
  height: 35px;
  margin: 20px 0px 20px 0px;
  background-color: #fff500;
  border: solid #ffffff;
  border-radius: 8px;
  opacity: 0.5;
`;

export const DividerLine = styled.div`
  width: 310px;
  height: 2px;
  background-color: #ececec;
  position: absolute;
  bottom: 120px;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70px;
  margin-top: auto;
`;
