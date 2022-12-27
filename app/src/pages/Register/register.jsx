import styled from 'styled-components';
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState('');

  const password = useRef();
  password.current = watch('password');

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <Container>
        <Container2>
          <TitleWrapper>
            <Title>날씨 옷장</Title>
            <SubTitle>날씨에 맞는 옷을 추천해드려요.</SubTitle>
            <RButton>구글로 로그인</RButton>
          </TitleWrapper>
          <Input
            type="email"
            {...register('email', { required: true })}
            placeholder="이메일 주소"
          />

          <Input
            type="password"
            {...register('password', { required: true, minLength: 4 })}
            placeholder="비밀번호"
          />

          <Input
            type="password"
            {...register('password_confirm', {
              required: true,
              validate: (value) => value === password.current,
            })}
            placeholder="비밀번호 확인"
          />

          <Input
            type="text"
            {...register('nickname', { required: true, maxLength: 10 })}
            placeholder="닉네임"
          />

          <LButton type="submit">가입</LButton>

          {errors.password_confirm && (
            <Description>비밀번호가 일치하지 않습니다.</Description>
          )}
        </Container2>
        <Container3>
          <Description>계정이 있으신가요?</Description>

          <Description>
            <Link to="/login">로그인</Link>
          </Description>

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
  height: 560px;
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
  margin: 0px 0px 20px 0px;
  opacity: 0.7;
`;

const Description = styled.p`
  color: #5e5f61;
  font-size: 14px;
  font-weight: bold;

  + p {
    margin-left: 10px;
    color: #4b7bf4;
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 310px;
  height: 38px;
  padding-left: 10px;
  opacity: 0.7;
  + input {
    margin-top: 25px;
  }
`;

const LButton = styled.button`
  width: 320px;
  height: 40px;
  margin: 20px 0px 20px 0px;
  background-color: #fff500;
  border: solid #ffffff;
  border-radius: 8px;
  opacity: 0.5;
`;

const RButton = styled.button`
  width: 320px;
  height: 35px;
  background-color: #fff500;
  border: solid #ffffff;
  border-radius: 8px;
  opacity: 0.8;
`;

const DividerLine = styled.div`
  width: 310px;
  height: 2px;
  background-color: #ececec;
  position: absolute;
  bottom: 260px;
`;
