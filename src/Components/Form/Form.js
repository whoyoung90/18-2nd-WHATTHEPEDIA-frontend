import React from 'react';
import styled from 'styled-components';
import FormLayout from './FormLayout';
import Button from '../Button/Button';
import Input from '../Input/Input';

export default function Form({
  format,
  kakaoBtn,
  handleChange,
  handleLogin,
  onReset,
  inputValue,
}) {
  return (
    <FormLayout>
      <FormTitle>{format.text}</FormTitle>
      <div>
        {format.data.map((input, idx) => (
          <Input
            key={idx}
            type={input.type}
            text={input.text}
            value={input.text}
            inputValue={inputValue[input.type]}
            handleChange={handleChange}
          />
        ))}
      </div>
      <Button value={format} color={format} onReset={onReset} />
      {format.type === 'signUp' && (
        <FormP>
          <FormSpan>
            이미 가입하셨나요?
            <FormSpanClick onClick={handleLogin}>로그인</FormSpanClick>
          </FormSpan>
        </FormP>
      )}

      {format.type === 'login' && (
        <FormP>
          <FormSpanClick>비밀번호를 잊어버리셨나요?</FormSpanClick>
          <FormSpan>
            계정이 없으신가요?
            <FormSpanClick onClick={handleLogin}>회원가입</FormSpanClick>
          </FormSpan>
        </FormP>
      )}
      <Line />
      <Button value={kakaoBtn} color={kakaoBtn} />
    </FormLayout>
  );
}

const FormTitle = styled.h2`
  margin: 24px 0 20px;
  font-size: 17px;
  font-weight: 700;
  text-align: center;
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
