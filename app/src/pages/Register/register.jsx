import * as L from './Register.style';
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
      <L.Container>
        <L.Container2>
          <L.TitleWrapper>
            <L.Title>날씨 옷장</L.Title>
            <L.SubTitle>날씨에 맞는 옷을 추천해드려요.</L.SubTitle>
            <L.RButton>구글로 로그인</L.RButton>
          </L.TitleWrapper>
          <L.Input
            type="email"
            {...register('email', {
              required: true,
              minLength: {
                value: 1,
                message: '이메일을 입력해주세요.',
              },
            })}
            placeholder="이메일 주소"
          />

          <L.Input
            type="password"
            {...register('password', { required: true, minLength: 4 })}
            placeholder="비밀번호"
          />

          <L.Input
            type="password"
            {...register('password_confirm', {
              required: true,
              validate: (value) => value === password.current,
              message: '비밀번호가 일치하지 않습니다.',
            })}
            placeholder="비밀번호 확인"
          />

          <L.Input
            type="text"
            {...register('nickname', { required: true, maxLength: 10 })}
            placeholder="닉네임"
          />

          <L.LButton type="submit">가입</L.LButton>

          {errors.password_confirm && (
            //<L.Description>{errors?.password_confirm?.message}</L.Description>
            <L.Description>비밀번호가 일치하지 않습니다.</L.Description>
          )}
        </L.Container2>
        <L.Container3>
          <L.Description>계정이 있으신가요?</L.Description>

          <L.Description>
            <Link to="/login">로그인</Link>
          </L.Description>

          <L.Description>{data}</L.Description>
        </L.Container3>
      </L.Container>
    </form>
  );
}
