import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';

export default function GoogleButton() {
  const navigate = useNavigate();
  //const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const clientId =
    '803415258516-mnfugdooat10f7flaiicqctg70nusnb5.apps.googleusercontent.com';

  const onGoogleSignInSuccess = (res) => {
    const params = new URLSearchParams();
    params.append('idToken', res.tokenObj.id_token); //id token 발급

    const googleLogin = async () => {
      const res = await axios
        .post('요청 주소', params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        .then((res) => {
          localStorage.setItem('accessToken', res.data.token.access);
          alert('로그인 되었습니다.');
          navigate('/');
        });
    };

    googleLogin();
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin onSuccess={onGoogleSignInSuccess} onError={onError} />
    </GoogleOAuthProvider>
  );
}
