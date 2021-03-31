import React from 'react';
import styled from 'styled-components';

export default function Input({ type, inputValue, text, handleChange }) {
  return (
    <FormInput>
      <InputWrapper>
        <Inputbox
          type={type}
          name={type}
          value={inputValue}
          placeholder={text}
          onChange={handleChange}
          autoComplete="off"
        />
      </InputWrapper>
    </FormInput>
  );
}

const FormInput = styled.div`
  height: 44px;
  margin: 8px 0;
  padding: 11px 0;
  border-radius: 6px;
  background-color: rgb(245, 245, 245);
`;

const InputWrapper = styled.div`
  padding: 0 12px;
`;

const Inputbox = styled.input`
  width: 100%;
  padding: 0;
  border: 0;
  outline: none;
  background: transparent;
  line-height: 21px;
  font-size: 16px;
  font-weight: 400;
  caret-color: rgb(255, 47, 110);

  &::placeholder {
    color: rgb(118, 118, 118);
  }
`;
