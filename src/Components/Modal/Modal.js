import React, { useState } from 'react';
import styled from 'styled-components';
import Form from '../Form/Form';
import { config } from '../../config.js';
import { useHistory } from 'react-router';

const INITIAL_INPUT = {
  name: '',
  email: '',
  password: '',
};

export default function Modal() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginInput, setLoginInput] = useState({
    INITIAL_INPUT,
  });
  const [signInput, setSignInput] = useState({
    INITIAL_INPUT,
  });

  const handleLogin = () => {
    setIsLogin(!isLogin);
    isLogin ? resetInput('login') : resetInput('signUp');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    isLogin
      ? setLoginInput({ ...loginInput, [name]: value })
      : setSignInput({ ...signInput, [name]: value });
  };

  const resetInput = type => {
    type === 'login'
      ? setLoginInput({ email: '', password: '' })
      : setSignInput({ name: '', email: '', password: '' });
  };

  const history = useHistory();
  const submitData = () => {
    isLogin
      ? fetch(`${config.api}/login`, {
          method: 'POST',
          body: JSON.stringify({
            email: signInput.email,
            password: signInput.password,
          }),
        })
      : fetch(`${config.api}/account/signup`, {
          method: 'POST',
          body: JSON.stringify({
            email: signInput.email,
            name: signInput.name,
            password: signInput.password,
          }),
        })
          .then(res => res.json())
          .then(res => {
            if (
              res.message ===
              `email must contain the '@' symbol and the period'.'`
            ) {
              alert('이메일을 다시 확인해 주세요.');
            }

            if (res.message === 'password must be at least 8 characters') {
              alert('비밀번호는 8자리 이상이여야 합니다.');
            }

            if (res.message === 'That email is taken. Try another') {
              alert('이미 존재하는 이메일입니다.');
            }

            if (res.message === 'Please provide username') {
              alert('닉네임을 확인해 주세요');
            }

            if (res.result === 'SUCCESS') {
              history.push('/login');
              alert('회원가입이 완료되었습니다.');
            }
          });
  };

  return (
    <ModalContainer>
      {isLogin ? (
        <Form
          format={LOGIN}
          kakaoBtn={kakaoBtn}
          handleChange={handleChange}
          handleLogin={handleLogin}
          inputValue={loginInput}
          submitData={submitData}
        />
      ) : (
        <Form
          format={SIGNUP}
          kakaoBtn={kakaoBtn}
          handleChange={handleChange}
          handleLogin={handleLogin}
          inputValue={signInput}
          submitData={submitData}
        />
      )}
      ;
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.56);
`;

const SIGNUP = {
  type: 'signUp',
  text: '회원가입',
  color: 'rgb(255, 47, 110)',
  fontcolor: 'rgb(255, 255, 255)',
  data: [
    {
      type: 'name',
      text: '이름',
    },
    {
      type: 'email',
      text: '이메일',
    },
    {
      type: 'password',
      text: '비밀번호',
    },
  ],
};

const LOGIN = {
  type: 'login',
  text: '로그인',
  color: 'rgb(255, 47, 110)',
  fontcolor: 'rgb(255, 255, 255)',
  data: [
    {
      type: 'email',
      text: '이메일',
    },
    {
      type: 'password',
      text: '비밀번호',
    },
  ],
};

const kakaoBtn = {
  type: 'kakaoLogin',
  text: '카카오로 로그인하기',
  color: '#FEE500',
  fontcolor: '#000000 85%',
};
