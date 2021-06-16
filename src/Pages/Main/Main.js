import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { config } from '../../config';
import Nav from '../../Components/Nav/Nav';
import MovieList from './Components/MovieList';
import PublicFooter from '../../Components/PublicFooter/PublicFooter';
import styled from 'styled-components';

function Main() {
  const [movieData, setMovieData] = useState({});

  const goToData = () => {
    axios.get(`${config.api}`).then(res => setMovieData(res.data.results));
  };

  useEffect(() => {
    goToData();
  }, []);

  return (
    <div>
      <Nav />
      <Head top>박스오피스 순위</Head>
      <MovieList movieData={movieData.box_office} />
      <Head>왓더 영화 순위</Head>
      <MovieList movieData={movieData.watcha_movie} />
      <PublicFooter rating_amount={movieData.rating_amount} />
    </div>
  );
}

export default Main;

const Head = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0 14px;
  margin: auto;
  width: 1320px;
  height: 30px;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
  margin-top: ${props => props.top && '100px'};
`;
