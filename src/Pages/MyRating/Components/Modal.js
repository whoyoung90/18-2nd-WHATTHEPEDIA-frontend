import React from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

const Modal = ({ showModal, setShowModal, list, handleModal }) => {
  return (
    <>
      {showModal ? (
        <Wrap>
          <Container>
            <Title>
              <Close onClick={() => setShowModal(open => !open)}>
                <GrClose />
              </Close>
              평가한 작품들
            </Title>
            <BoxContainer>
              {list.map((data, idx) => (
                <Button key={idx} onClick={handleModal} name={data.title}>
                  {data.title}
                </Button>
              ))}
            </BoxContainer>
          </Container>
        </Wrap>
      ) : null}
    </>
  );
};

export default Modal;

const Wrap = styled.div`
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const Container = styled.div`
  width: 375px;
  height: 540px;
  border-radius: 8px;
  background: white;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 44px;
  border-bottom: 1px solid #dddddd;
  font-size: 17px;
  font-weight: bold;
`;

const Close = styled.button`
  position: absolute;
  left: 16px;
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  color: #ff2f6e;
`;

const BoxContainer = styled.div`
  margin: 0 16px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 345px;
  height: 48px;
  border: none;
  outline: none;
  background: none;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #dddddd;
`;
