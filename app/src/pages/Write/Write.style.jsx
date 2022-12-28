import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1100px;
  height: 650px;
  box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
`;

export const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container2 = styled.div`
  border: 2px solid #f0f1f3;
  border-radius: 3px;
  width: 600px;
  height: 500px;
  box-sizing: border-box;
  padding: 28px 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  + div {
    width: 340px;
    margin-left: 40px;
  }
`;

export const UserName = styled.div`
  width: 300px;
  height: 30px;
  margin-bottom: 50px;
`;

export const UserWrite = styled.div`
  width: 300px;
  height: 50px;
  margin: 25px 0px 25px 0px;
  border-bottom: solid 1px #ececec;
`;

export const Title = styled.h5`
  color: #5e5f61;
  margin: 0;
  margin-top: 20px;
`;

export const SubTitle = styled.h4`
  color: #5e5f61;
  font-size: 20px;
  opacity: 0.8;
`;

export const Description = styled.p`
  color: #5e5f61;
  font-size: 14px;
  font-weight: bold;
`;

export const SeleteButton = styled.button`
  height: 35px;
  margin: 0px 0px 20px 0px;
  background-color: #fff0a4;
  border: solid #ffffff;
  border-radius: 8px;
  padding: 5px;
  margin-top: auto;
`;

export const Button = styled.button`
  height: 35px;
  margin-top: 45px;
  background-color: #fff0a4;
  border: solid #ffffff;
  padding: 5px;
  border-radius: 8px;
`;

export const Imgbox = styled.div`
  margin-top: auto;
  overflow: hidden;
`;

export const SelectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InputImg = styled.input`
  width: 0;
  height: 0;
`;

export const Label = styled.label`
  cursor: pointer;
`;
