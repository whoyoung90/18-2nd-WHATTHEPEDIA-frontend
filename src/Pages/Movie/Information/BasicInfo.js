import React from 'react';
import styled from 'styled-components';

function BasicInfo({ movie }) {
  return (
    <Wrap>
      <Info>기본정보</Info>
      <Intro>{movie.korean_title}</Intro>
      <Intro>
        {movie.release_data} · {movie.nationality} · {movie.genre}
      </Intro>
      <Intro>
        {parseInt(movie.running_time / 60)}시간{' '}
        {parseInt(movie.running_time % 60)}분
      </Intro>
      <Intro>{movie.description}</Intro>
    </Wrap>
  );
}

export default BasicInfo;

const Wrap = styled.div`
  margin: 8px;
`;

const Info = styled.h2`
  margin: 10px 0;
  color: #000;
  border-bottom: 1px solid #e3e3e3;
  font-size: 19px;
  font-weight: 700;
  line-height: 38px;
`;

const Intro = styled.section`
  margin: 10px 0;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
`;
