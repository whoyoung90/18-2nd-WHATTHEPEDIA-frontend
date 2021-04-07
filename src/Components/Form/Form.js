import React from 'react';
import styled from 'styled-components';
import FormLayout from './FormLayout';
import Button from '../Button/Button';
import Input from '../Input/Input';
import KakaoLogin from '../Nav/Login/KakaoLogin';

export default function Form({
  format,
  kakaoBtn,
  handleChange,
  handleLogin,
  inputValue,
  submitData,
  resetInput,
}) {
  const isIdValid = /^[A-Za-z0-9][A-Za-z0-9._-]+[@]{1}[a-z]+[.]{1}[a-z]{1,4}$/;
  const isPwValid = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{10,20}$/;

  const isValidInput = item => {
    const INPUT_VALIDATION_MAP = {
      email: inputValue.email && isIdValid.test(inputValue.email),
      password: inputValue.password && isPwValid.test(inputValue.password),
      name: inputValue.name && inputValue.name.length > 1,
    };

    return INPUT_VALIDATION_MAP[item];
  };

  return (
    <FormLayout>
      <FormTitle>{format.text}</FormTitle>
      <div>
        {format.data.map((input, idx) => (
          <>
            <Input
              key={idx}
              type={input.type}
              text={input.text}
              value={input.text}
              inputState={inputValue}
              inputValue={inputValue[input.type]}
              handleChange={handleChange}
              isValidInput={isValidInput}
              resetInput={resetInput}
              format={format}
            />
            {input.type === 'name' &&
              inputValue.name &&
              !isValidInput('name') && (
                <FormValidChk>정확하지 않은 이름입니다.</FormValidChk>
              )}
            {input.type === 'email' &&
              inputValue.email &&
              !isValidInput('email') && (
                <FormValidChk>정확하지 않은 이메일입니다.</FormValidChk>
              )}
            {input.type === 'password' &&
              inputValue.password &&
              !isValidInput('password') && (
                <FormValidChk>
                  비밀번호는 영문, 숫자, 특수문자 중 2개 이상을 조합하여 최소
                  10자리 이상이여야 합니다.
                </FormValidChk>
              )}
          </>
        ))}
      </div>
      <Button value={format} submitData={submitData} />
      <FormP>
        {format.type === 'login' && (
          <FormSpanClick>비밀번호를 잊어버리셨나요?</FormSpanClick>
        )}
        <FormSpan>
          {format.type === 'signUp'
            ? '이미 가입하셨나요?'
            : '계정이 없으신가요?'}
          <FormSpanClick onClick={handleLogin}>
            {format.type === 'signUp' ? '로그인' : '회원가입'}
          </FormSpanClick>
        </FormSpan>
      </FormP>
      <Line />
      <KakaoLogin kakaoBtn={kakaoBtn} />
    </FormLayout>
  );
}

const FormTitle = styled.h2`
  margin: 24px 0 20px;
  font-size: 17px;
  font-weight: 700;
  text-align: center;
`;

const FormValidChk = styled.p`
  margin: 6px 18px 4px;
  color: rgb(245, 0, 0);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.2px;
  line-height: 18px;
`;

const FormP = styled.p`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  text-align: center;
  color: rgb(140, 140, 140);
`;

const FormSpan = styled.span`
  margin: 20px 0px 14px;
  color: rgb(140, 140, 140);
`;

const FormSpanClick = styled.span`
  margin-left: 4px;
  color: rgb(255, 47, 110);
  cursor: pointer;
`;

const Line = styled.hr`
  position: relative;
  height: 1.5em;
  margin: 24px 0;
  border: 0;
  outline: 0;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    border-top: 1px solid rgb(216, 216, 216);
  }

  &::after {
    content: 'OR';
    position: relative;
    display: inline-block;
    top: -2px;
    padding: 0 14px;
    background-color: rgb(255, 255, 255);
    color: rgb(160, 160, 160);
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    vertical-align: middle;
  }
`;
