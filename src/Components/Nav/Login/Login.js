import React from 'react';
import styled from 'styled-components';
// import { config } from '../../../config';

export default function Login() {
  const kakaoLoginBtnHandler = () => {
    const { Kakao } = window;
    Kakao.Auth.login({
      success: function (response) {
        console.log(response);
        Kakao.API.request({
          url: '/v2/user/me',
          success: res => {
            const kakao_account = res.kakao_account;
            console.log(kakao_account);
          },
        });
      },
    });
  };
  // Kakao.Auth.login({
  //   success: function (response) {
  //     fetch(`${config.api/user/signup}`, {
  //       body: JSON.stringify({
  //         access_token: response.access_token,
  //       }),
  //     })
  //       .then(res => res.json())
  //       .then(res => {
  //         localStorage.setItem('Kakao_token', res.access_token);
  //         if (res.access_token) {
  //           alert('카카오 로그인 성공!');
  //         }
  //       });
  //   },
  //   fail: function (error) {
  //     alert(JSON.stringify(error));
  //     console.log(error);
  //   },
  // });
  // };

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
