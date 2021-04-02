import React from 'react';
import styled from 'styled-components';
import {
  BsFillXCircleFill,
  BsCheckCircle,
  BsExclamationCircle,
} from 'react-icons/bs';

export default function Input({
  type,
  text,
  inputState,
  inputValue,
  handleChange,
  isValidInput,
  resetInput,
  format,
}) {
  return (
    <FormInput type={type} inputState={inputState} isValidInput={isValidInput}>
      <InputWrapper>
        <Inputbox
          type={type}
          name={type}
          value={inputValue}
          placeholder={text}
          onChange={handleChange}
          autoComplete="off"
        />
        {inputValue && (
          <InputAlert isValidInput={isValidInput}>
            {(type === 'name' && !isValidInput('name')) ||
            (type === 'email' && !isValidInput('email')) ||
            (type === 'password' && !isValidInput('password')) ? (
              <>
                <BsFillXCircleFill
                  className="delete"
                  onClick={() => resetInput(format.type)}
                />
                <BsExclamationCircle className="false" />
              </>
            ) : (
              <BsCheckCircle className="true" />
            )}
          </InputAlert>
        )}
      </InputWrapper>
    </FormInput>
  );
}

const FormInput = styled.div`
  height: 44px;
  margin: 8px 0;
  padding: 11px 0;
  border: ${props =>
    (props.type === 'name' &&
      props.inputState.name &&
      !props.isValidInput('name')) ||
    (props.type === 'email' &&
      props.inputState.email &&
      !props.isValidInput('email')) ||
    (props.type === 'password' &&
      props.inputState.password &&
      !props.isValidInput('password'))
      ? '1px solid rgb(245, 0, 0)'
      : 'none'};
  border-radius: 6px;
  background-color: ${props =>
    (props.type === 'name' &&
      props.inputState.name &&
      !props.isValidInput('name')) ||
    (props.type === 'email' &&
      props.inputState.email &&
      !props.isValidInput('email')) ||
    (props.type === 'password' &&
      props.inputState.password &&
      !props.isValidInput('password'))
      ? 'rgb(255, 240, 240)'
      : 'rgb(245, 245, 245)'};
`;

const InputWrapper = styled.div`
  padding: 0 80px 0 12px;
`;

const InputAlert = styled.div`
  position: absolute;
  top: 0;
  right: 12px;
  display: flex;
  align-items: center;
  margin: 0px 0px 0px 24px;

  svg {
    width: 24px;
    height: 24px;
  }

  & .true {
    color: #20c997;
  }

  & .false {
    color: rgb(245, 0, 0);
  }

  & .delete {
    width: 18px;
    height: 18px;
    margin-right: 20px;
    color: #868e96;
  }
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
