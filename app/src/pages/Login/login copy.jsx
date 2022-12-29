import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import GoogleButton from './googleLogin';
import * as L from './Login.style';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <L.Container>
        <L.Container2>
          <L.TitleWrapper>
            <L.Title>날씨 옷장</L.Title>
            <L.SubTitle>오늘 날씨엔 어떻게 입을까?</L.SubTitle>
          </L.TitleWrapper>
          <L.Input
            type="email"
            {...register('email', { required: true })}
            placeholder="이메일"
          />

          <L.Input
            type="password"
            {...register('password', { required: true, minLength: 4 })}
            placeholder="비밀번호"
          />

          <L.Button type="submit">로그인</L.Button>
          <L.DividerLine />
          <L.LoginWrapper>
            <L.Description2>
              <GoogleButton></GoogleButton>
            </L.Description2>
            {/* <L.Description2>비밀번호를 잊으셨나요?</L.Description2> */}
          </L.LoginWrapper>
        </L.Container2>
        <L.Container3>
          <L.Description>아직 계정이 없다면?</L.Description>

          <L.Description>
            <Link to="/register">가입하기</Link>
          </L.Description>

          <L.Description>{data}</L.Description>
        </L.Container3>
      </L.Container>
    </form>
  );
}
