import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { config } from '../../../config';

export default function Login() {
  const history = useHistory();
  const kakaoLoginBtnHandler = () => {
    const { Kakao } = window;
    Kakao.Auth.login({
      scope: 'account_email,gender,profile',
      success: function (response) {
        console.log(response);
        fetch(`${config.api}/user/login/kakao`, {
          method: 'GET',
          headers: {
            Authorization: response.access_token,
          },
        })
          .then(res => res.json())
          .then(res => {
            localStorage.setItem('access_token', res.access_token);
            if (res.access_token) {
              alert('로그인 성공!!');
              history.push('/');
              console.log('토큰:', res.access_token);
            }
          });
        Kakao.API.request({
          url: '/v2/user/me',
          success: res => {
            const kakao_account = res.kakao_account;
            console.log('계정:', kakao_account);
          },
        });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  return (
    <KaKaoBtn onClick={kakaoLoginBtnHandler}>카카오 계정으로 로그인</KaKaoBtn>
  );
}

const KaKaoBtn = styled.button`
  padding: 0;
  width: 300px;
  height: 45px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;
