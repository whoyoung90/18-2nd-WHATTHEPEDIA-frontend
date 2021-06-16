import React, { useState } from 'react';
import styled from 'styled-components';
import Form from '../Form/Form';
import { config } from '../../config';
import { useHistory } from 'react-router';

const INITIAL_INPUT = {
  name: '',
  email: '',
  password: '',
};

export default function Modal({
  fetchNavUser,
  isLogin,
  isMember,
  setIsLogin,
  setIsMember,
  changeModal,
  showModal,
  setShowModal,
  handleModal,
}) {
  const [loginInput, setLoginInput] = useState({
    INITIAL_INPUT,
  });
  const [signInput, setSignInput] = useState({
    INITIAL_INPUT,
  });

  const handleLogin = () => {
    changeModal();
    isLogin ? resetInput('login') : resetInput('signUp');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    isMember
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
    const isIdValid =
      /^[A-Za-z0-9][A-Za-z0-9._-]+[@]{1}[a-z]+[.]{1}[a-z]{1,4}$/;
    const isPwValid = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{10,20}$/;

    if (
      isIdValid.test(loginInput.email || signInput.email) &&
      isPwValid.test(loginInput.password || signInput.password)
    ) {
      !isMember
        ? fetch(`${config.api}/user/signup`, {
            method: 'POST',
            body: JSON.stringify({
              email: signInput.email,
              name: signInput.name,
              password: signInput.password,
            }),
          })
            .then(res => res.json())
            .then(res => {
              if (res.message === 'SUCCESS') {
                changeModal();
                alert('회원가입이 완료되었습니다.');
                setShowModal(true);
              } else {
                alert('회원가입 실패');
              }
            })
        : fetch(`${config.api}/user/login`, {
            method: 'POST',
            body: JSON.stringify({
              email: loginInput.email,
              password: loginInput.password,
            }),
          })
            .then(res => res.json())
            .then(res => {
              if (res.message === 'SUCCESS') {
                localStorage.setItem('token', res.access_token);
                alert('로그인 완료');
                setShowModal(false);
                setIsLogin(true);
                setIsMember(true);
                history.push('/');
              } else {
                alert('로그인 실패');
              }
            });

      isLogin ? resetInput('login') : resetInput('signUp');
    } else {
      alert('🔒이메일과 비밀번호를 다시 확인해보세요🔒');
    }
  };

  return (
    <ModalBackground onClick={handleModal}>
      <ModalContainer>
        <Form
          onClick={e => e.stopPropagation()}
          kakaoBtn={kakaoBtn}
          handleChange={handleChange}
          handleLogin={handleLogin}
          resetInput={resetInput}
          submitData={submitData}
          setShowModal={setShowModal}
          setIsLogin={setIsLogin}
          setIsMember={setIsMember}
          format={isMember ? LOGIN : SIGNUP}
          inputValue={isMember ? loginInput : signInput}
        />
      </ModalContainer>
    </ModalBackground>
  );
}

const ModalContainer = styled.div`
  display: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBackground = styled.div`
  display: relative;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.56);
  z-index: 1000;
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
