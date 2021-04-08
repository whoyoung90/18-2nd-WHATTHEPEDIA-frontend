import React from 'react';
import ActorInfo from './ActorInfo';
import styled from 'styled-components';

function Actor({ movie }) {
  return (
    <>
      <Info>출연/제작</Info>
      <ActorInfo movie={movie} />
    </>
  );
}

export default Actor;

const Info = styled.h2`
  margin: 8px;
  color: #000;
  border-bottom: 1px solid #e3e3e3;
  font-size: 19px;
  font-weight: 700;
  line-height: 38px;
`;
