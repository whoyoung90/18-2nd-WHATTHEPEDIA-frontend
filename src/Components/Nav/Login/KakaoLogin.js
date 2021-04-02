import React from 'react';
import { useHistory } from 'react-router-dom';
import { config } from '../../../config';
import Button from '../../Button/Button';

export default function KakaoLogin({ kakaoBtn }) {
  const history = useHistory();
  const kakaoLoginBtnHandler = () => {
    const { Kakao } = window;
    Kakao.Auth.login({
      scope: 'account_email,gender,profile',
      success: function (res) {
        console.log(res);
        fetch(`${config.api}/user/login/kakao`, {
          method: 'GET',
          headers: {
            Authorization: res.access_token,
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
            // const userID = res.id;
            // const userEmail = res.kaccount_email;
            // const userNickName = res.properties.nickname;
          },
        });
      },
      fail: function (err) {
        console.log(err);
      },
    });
  };

  return (
    <Button
      kakaoLoginBtnHandler={kakaoLoginBtnHandler}
      value={kakaoBtn}
      color={kakaoBtn}
    />
  );
}
