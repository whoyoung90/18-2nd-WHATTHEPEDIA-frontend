import React from 'react';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { BsDot } from 'react-icons/bs';

function Movies({ movieData }) {
  const history = useHistory();

  const goToMovie = id => {
    history.push(`/movie/${id}`);
  };

  return (
    <Wrap>
      {movieData?.map((data, idx) => (
        <SubWrap key={idx} onClick={() => goToMovie(data.id)}>
          <img alt="moviePicture" src={data.image} />
          <ol>
            <MovieInfo movieTitle>{data.title}</MovieInfo>
            <MovieInfo movieSubInfo>
              {data.release_date} <BsDot /> {data.nationality}
            </MovieInfo>
            <MovieInfo movieRate>평균 ★ {data.average_stars}</MovieInfo>
          </ol>
          <RankBox>{idx + 1}</RankBox>
          <Logo>
            {data.logo && <img alt="whatThe" src="/images/watthe_label.png" />}
          </Logo>
        </SubWrap>
      ))}
    </Wrap>
  );
}

export default withRouter(Movies);

const Wrap = styled.div`
  display: flex;
`;
const SubWrap = styled.div`
  position: relative;
  margin: 0 6px;
  width: 250px;
  cursor: pointer;
  &:first-child {
    margin-left: 10px;
  }
  img {
    margin-bottom: 10px;
    width: 250px;
    height: 353px;
    border-radius: 5px;
  }
`;
const MovieInfo = styled.li`
  margin-top: ${props => props.movieRate || (props.movieSubInfo && '10px')};
  margin-bottom: ${props => (props.movieSubInfo ? '10px' : '3px')};
  font-size: ${props => (props.movieTitle ? '18px' : '14px')};
  font-weight: ${props => (props.movieTitle ? 'bold' : 'normal')};
  color: ${props => (props.movieRate ? '#FF0558' : 'black')};
`;
const RankBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  left: 5px;
  width: 28px;
  height: 28px;
  border-radius: 5px;
  background: black;
  color: white;
  font-weight: bold;
`;
const Logo = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  img {
    width: 30px;
    height: 30px;
  }
`;
