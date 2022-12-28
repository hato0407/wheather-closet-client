import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

export const Container2 = styled.div`
  border: 2px solid #f0f1f3;
  border-radius: 3px;
  width: 400px;
  height: 560px;
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
  margin: 0px 0px 20px 0px;
  opacity: 0.7;
`;

export const Description = styled.p`
  color: #5e5f61;
  font-size: 14px;
  font-weight: bold;

  + p {
    margin-left: 10px;
    color: #4b7bf4;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 310px;
  height: 38px;
  padding-left: 10px;
  opacity: 0.7;
  + input {
    margin-top: 25px;
  }
`;

export const LButton = styled.button`
  width: 320px;
  height: 40px;
  margin: 20px 0px 20px 0px;
  background-color: #fff0a4;
  border: solid #ffffff;
  border-radius: 8px;
`;

export const DividerLine = styled.div`
  width: 310px;
  height: 2px;
  background-color: #ececec;
  position: absolute;
  bottom: 260px;
`;
