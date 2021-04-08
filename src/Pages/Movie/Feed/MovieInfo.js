import React from 'react';
import styled from 'styled-components';

function MovieInfo({ movie }) {
  return (
    <>
      <Name>{movie.korean_title}</Name>
      <Info>
        {movie.release_data} ・ {movie.genre} ・ {movie.nationality}
      </Info>
      <Rate>
        평균 ★{movie.average_stars} ({movie.num_of_stars}명)
      </Rate>
    </>
  );
}

export default MovieInfo;

const Name = styled.li`
  font-size: 33px;
  font-weight: 700;
`;

const Info = styled.li`
  margin-top: 4px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
`;

const Rate = styled.li`
  margin-top: 14px;
  padding: 8px 0px;
  color: black;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
`;
