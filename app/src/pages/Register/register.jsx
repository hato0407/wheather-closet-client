import styled from 'styled-components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Register() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <Container>
        <Container2>
          <TitleWrapper>
            <Title>날씨 옷장</Title>
            <SubTitle>어서 가입하시죠</SubTitle>
          </TitleWrapper>
          <Input
            type="email"
            {...register('email', { required: true })}
            placeholder="이메일"
          />

          <Input
            type="password"
            {...register('password', { required: true, minLength: 4 })}
            placeholder="비밀번호"
          />

          <Button type="submit">로그인</Button>
          <DividerLine />
          <LoginWrapper>
            <Description2>구글로 로그인</Description2>
            <Description2>비밀번호를 잊으셨나요?</Description2>
          </LoginWrapper>
        </Container2>
        <Container3>
          <Description>아직 계정이 없다면?</Description>
          <Description></Description>
          <Description>{data}</Description>
        </Container3>
      </Container>
    </form>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Container2 = styled.div`
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

const Container3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #f0f1f3;
  border-radius: 3px;
  width: 400px;
  height: 70px;
  margin: 20px 0px 20px 0px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 40px;
  color: #151618;
  margin: 0;
  margin-top: 20px;
`;

const SubTitle = styled.h4`
  color: #5e5f61;
  font-size: 14px;
  margin: 0;
  opacity: 0.7;
`;

const Description = styled.p`
  color: #5e5f61;
  font-size: 14px;
  font-weight: bold;

  + p {
    margin-left: 10px;
    color: #4b7bf4;
  }
`;

const Description2 = styled.p`
  color: #2063b1;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 310px;
  height: 38px;
  padding-left: 10px;
  opacity: 0.7;
  + input {
    margin-top: 10px;
  }
`;

const Button = styled.button`
  width: 320px;
  height: 35px;
  margin: 20px 0px 20px 0px;
  background-color: #fff500;
  border: solid #ffffff;
  border-radius: 8px;
  opacity: 0.5;
`;

const DividerLine = styled.div`
  width: 310px;
  height: 2px;
  background-color: #ececec;
  position: absolute;
  bottom: 120px;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70px;
  margin-top: auto;
`;
