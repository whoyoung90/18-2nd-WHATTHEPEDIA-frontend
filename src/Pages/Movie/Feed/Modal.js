import React from 'react';
import ModalContent from './ModalContent';
import styled from 'styled-components';

function Modal({ handleModal, movie }) {
  return (
    <ModalWrapper onClick={handleModal}>
      <div>
        <ModalView onClick={(handleModal.disabled = true)}>
          <ModalContent movie={movie} />
        </ModalView>
        <CloseBtn>취소</CloseBtn>
      </div>
    </ModalWrapper>
  );
}

export default Modal;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.67);
  z-index: 100;
`;

const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 250px;
  background-color: white;
`;

const CloseBtn = styled.button`
  background-color: white;
  border: none;
  outline: none;
  width: 300px;
  height: 50px;
  color: #ff2f6e;
  font-size: 15px;
  line-height: 20px;
`;
