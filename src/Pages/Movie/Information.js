import React from 'react';
import BasicInfo from './Information/BasicInfo';
import Actor from './Information/Actor';
import Graph from './Information/Graph';
import Comment from './Information/Comment';
import SameMovie from './Information/SameMovie';
import styled from 'styled-components';

function Information({ movie }) {
  // console.log(movie);
  return (
    <InfoWrap>
      <BasicInfo movie={movie} />
      <Actor movie={movie} />
      {movie.star_graph !== undefined && <Graph movie={movie} />}
      <Comment movie={movie} />
      <SameMovie movie={movie} />
    </InfoWrap>
  );
}

export default Information;

const InfoWrap = styled.div`
  display: inline-block;
  margin-right: 30px;
  padding: 0 8px;
  width: 650px;
  border: 1px solid #e3e3e3;
  border-radius: 6px;
  text-align: left;
`;
