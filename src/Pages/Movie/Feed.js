import React from 'react';
import MovieInfo from './Feed/MovieInfo';
import Utility from './Feed/Utility';
import styled from 'styled-components';

function Feed({ movie }) {
  return (
    <Wrap>
      <NarrowImg alt="poster" src={movie.main_image} />
      <MovieTitle>
        <MovieInfo movie={movie} />
        <Utility movie={movie} />
      </MovieTitle>
    </Wrap>
  );
}

export default Feed;

const Wrap = styled.div`
  position: relative;
  margin: 0 auto;
  padding-bottom: 30px;
  width: 960px;
  border-bottom: 1px solid #e3e3e3;
`;

const NarrowImg = styled.img`
  position: absolute;
  top: -40px;
  left: 100px;
  width: 160px;
  height: 230px;
  object-fit: fill;
  border: 3px solid white;
  border-radius: 5px;
`;

const MovieTitle = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding-left: 300px;
`;
