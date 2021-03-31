import React, { useState } from 'react';
import styled from 'styled-components';
import Form from '../Form/Form';

export default function Modal() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  });
  const [signInput, setSignInput] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleLogin = () => {
    setIsLogin(!isLogin);
    isLogin
      ? setLoginInput({ ...loginInput, email: '', password: '' })
      : setSignInput({ ...signInput, name: '', email: '', password: '' });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    isLogin
      ? setLoginInput({ ...loginInput, [name]: value })
      : setSignInput({ ...signInput, [name]: value });
  };

  const onReset = () => {
    setLoginInput({ ...loginInput, email: '', password: '' });
    setSignInput({ ...signInput, name: '', email: '', password: '' });
  };

  return (
    <ModalContainer>
      {isLogin ? (
        <Form
          format={login}
          kakaoBtn={kakaoBtn}
          handleChange={handleChange}
          handleLogin={handleLogin}
          onReset={onReset}
          inputValue={loginInput}
        />
      ) : (
        <Form
          format={signUp}
          kakaoBtn={kakaoBtn}
          handleChange={handleChange}
          handleLogin={handleLogin}
          onReset={onReset}
          inputValue={signInput}
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

const signUp = {
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

const login = {
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
