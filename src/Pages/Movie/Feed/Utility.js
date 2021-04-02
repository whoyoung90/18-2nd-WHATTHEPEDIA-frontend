import { React, useState } from 'react';
import Modal from './Modal';
import Rating from './Rating';
import * as Config from '../../../config';
import styled from 'styled-components';

function Utility({ movie }) {
  const [isModalView, setModalView] = useState(false);

  const handleModal = () => {
    setModalView(!isModalView);
  };

  return (
    <>
      {isModalView && <Modal handleModal={handleModal} movie={movie} />}
      <UtilityWrap>
        <LikeMovie onClick={handleModal}>
          <BtnImg alt="star" src={Config.PLUS_BUTTON} />
          <BtnText>보고싶어요</BtnText>
        </LikeMovie>
        <Rating />
      </UtilityWrap>
    </>
  );
}

export default Utility;

const UtilityWrap = styled.li`
  display: flex;
`;

const LikeMovie = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 39px 21px 0 0;
  width: 250px;
  height: 40px;
  background: #ff2f6e;
  border-radius: 6px;
  border: none;
  outline: none;
`;

const BtnImg = styled.img`
  margin-right: 15px;
  width: 15px;
  color: white;
  &:hover {
    transform: rotate(90deg);
    transition: all ease 100ms;
  }
`;

const BtnText = styled.div`
  margin-right: 15px;
  padding-top: 3px;
  color: white;
  font-size: 17px;
  font-weight: 500;
  line-height: 22px;
`;
