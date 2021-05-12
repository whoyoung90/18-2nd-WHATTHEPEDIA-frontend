import React, { useState, useEffect } from 'react';
import { config } from '../../config';
import Nav from '../../Components/Nav/Nav';
import MyNav from './Components/MyNav';
import Modal from './Components/Modal';
import MovieList from './Components/MovieList';
import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';

const MyRating = () => {
  const [showModal, setShowModal] = useState(false);
  const [word, setWord] = useState('담은 순');
  const [movie, setMovie] = useState({});
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = () => {
    fetch(`${config.api}/user/rating`, {
      // fetch('/data/MyMovie.json', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMH0.8ea-EYWNQ4Orfazh5Y7SNxhKcnfhhIt4QySLGfg3xt4',
      },
    })
      .then(res => res.json())
      .then(res => {
        setMovie(res);
      });
  };
  const handleModal = e => {
    setWord(e.target.name);
    setShowModal(open => !open);
  };
  return (
    <Wrap>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        list={LIST}
        handleModal={handleModal}
      />
      <Nav />
      <Fix>
        <MyNav />
        <Sort>
          <Button onClick={handleModal}>
            <FaAngleDown />
            &nbsp; {word}
          </Button>
        </Sort>
      </Fix>
      <MovieList movie={movie} word={word} />
    </Wrap>
  );
};
export default MyRating;

const LIST = [
  {
    title: '담은 순',
  },
  {
    title: '평점 순',
  },
  {
    title: '가나다 순',
  },
  {
    title: '개봉일 순',
  },
];

const Wrap = styled.div`
  position: relative;
`;

const Fix = styled.div`
  position: fixed;
  margin-top: 62px;
  width: 100%;
  z-index: 1;
`;

const Sort = styled.div`
  display: flex;
  padding: 0 16px;
  height: 48px;
  background: #fafafa;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  font-size: 15px;
  font-weight: bold;
`;
