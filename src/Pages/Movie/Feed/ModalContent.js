import React from 'react';
import styled from 'styled-components';

function ModalContent({ movie }) {
  return (
    <>
      <Title>{movie.korean_title}</Title>
      <Content>영화 ・ {movie.release_data}</Content>
    </>
  );
}

export default ModalContent;

const Title = styled.div`
  font-size: 19px;
  font-weight: 700;
  line-height: 28px;
`;

const Content = styled.div`
  color: rgb(120, 120, 120);
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
`;
