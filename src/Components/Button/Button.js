import React from 'react';
import styled from 'styled-components';

export default function Button({ value, submitData, kakaoLoginBtnHandler }) {
  return (
    <>
      {value.type === 'kakaoLogin' ? (
        <FormButton
          color={value.color}
          fontcolor={value.fontcolor}
          onClick={kakaoLoginBtnHandler}
        >
          <KakaoSymbol />
          {value.text}
        </FormButton>
      ) : (
        <FormButton
          color={value.color}
          fontcolor={value.fontcolor}
          onClick={submitData}
        >
          {value.text}
        </FormButton>
      )}
    </>
  );
}

const KakaoSymbol = styled.img.attrs({
  alt: '카카오 심볼',
  src: '/images/kakaosymbol.png',
})`
  display: inline-block;
  width: 20px;
  height: auto;
  margin: 0 70px 0 -70px;
  z-index: 10;
`;

const FormButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  margin-top: 16px;
  padding: 0;
  border: none;
  border-radius: 6px;
  background-color: ${props => props.color};
  color: ${props => props.fontcolor};
  font-size: 17px;
  font-weight: 400;
  text-align: center;
  line-height: 22px;
  cursor: pointer;
`;
