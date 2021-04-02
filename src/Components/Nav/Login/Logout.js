import React from 'react';
import styled from 'styled-components';

export default function Logout() {
  const kakaoLogoutBtnHandler = () => {
    const { Kakao } = window;

    if (!Kakao.Auth.getAccessToken()) {
      console.log('Not logged in.');
      return;
    }
    Kakao.Auth.logout(function () {
      console.log(Kakao.Auth.getAccessToken());
    });
    Kakao.API.request({
      url: '/v1/user/unlink',
      success: function (response) {
        console.log(response);
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };
  return <KaKaoBtn onClick={kakaoLogoutBtnHandler}>로그아웃</KaKaoBtn>;
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
