import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { config } from '../../config';
import Nav from '../../Components/Nav/Nav';
import PublicFooter from '../../Components/PublicFooter/PublicFooter';
import Feed from './Feed';
import Information from './Information';
import Gallery from './Gallery';
import styled from 'styled-components';

function Movie(props) {
  console.log('동적라우팅 props', props.match.params.id);
  const [movie, setMovie] = useState('');
  // const getMovie = () => {
  //   axios
  //     .get(`${config.api}/movie/${props.match.params.id}`)
  //     .then(res => setMovie(res.data.results));
  // };

  const getMovie = () => {
    axios
      .get(`${config.api}`)
      .then(res =>
        setMovie(
          res.data.results.box_office.filter(
            item => item.id === Number(props.match.params.id)
          )[0]
        )
      );
  };

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    getMovie();
    window.scrollTo(0, 0);
  }, [props.match.params.id]);

  // useEffect(() => {
  //   getReview();
  // }); //Rating.js 별점 받아오는 컨디업
  // const getReview = () => {
  //   fetch('http://localhost:3000/mypage', {});
  // }; //Rating.js 별점
  console.log(movie);

  return (
    <>
      <Nav />
      <Wrap>
        {movie.galleries && <Img alt="movie" src={movie.galleries[0]} />}
        <Feed movie={movie} />
        <SubWrap>
          <Information movie={movie} />
          <Gallery movie={movie} />
        </SubWrap>
      </Wrap>
      <PublicFooter rating_amount={movie.rating_amount} />
    </>
  );
}
export default Movie;
const Wrap = styled.div`
  margin: 64px auto 0;
`;
const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: fill;
`;
const SubWrap = styled.div`
  margin: 40px auto;
  text-align: center;
`;
