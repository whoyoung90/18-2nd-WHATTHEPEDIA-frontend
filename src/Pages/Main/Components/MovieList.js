import React, { useState } from 'react';
import Movies from './Movies';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const CAROUSEL_WIDTH = 1310;

function MovieList({ movieData }) {
  const [carousel, setCarousel] = useState(0);
  const [handleLeft, setHandleLeft] = useState(false);
  const [handleRight, setHandleRight] = useState(true);

  const handleButton = WIDTH => {
    setCarousel(carousel + WIDTH);
    setHandleLeft(carousel + WIDTH === 0 ? false : true);
    setHandleRight(
      carousel + WIDTH === WIDTH * Math.floor(movieData.length - 1 / 5)
        ? false
        : true
    );
  };

  return (
    <Wrap>
      <Container>
        <Article
          carousel={carousel}
          handleLeft={handleLeft}
          handleRight={handleRight}
        >
          <Movies movieData={movieData} />
        </Article>
      </Container>
      {handleLeft && (
        <Button left onClick={() => handleButton(CAROUSEL_WIDTH)}>
          <FiChevronLeft />
        </Button>
      )}
      {handleRight && (
        <Button right onClick={() => handleButton(-CAROUSEL_WIDTH)}>
          <FiChevronRight />
        </Button>
      )}
    </Wrap>
  );
}

export default MovieList;

const Wrap = styled.div`
  position: relative;
  width: 1320px;
  margin: 0 auto 42px;
`;
const Container = styled.div`
  position: relative;
  width: 1320px;
  overflow: hidden;
`;
const Article = styled.div`
  display: flex;
  transition: 1s;
  transform: translateX(${props => props.carousel}px);
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 170px;
  left: ${props => (props.left ? '-10px' : '1295px')};
  width: 34px;
  height: 34px;
  border-radius: 50%;
  outline: none;
  border: 1px solid #f9f9f9;
  background-color: white;
  box-shadow: 0 0 4px rgb(0 0 0 / 40%);
  font-size: 24px;
  z-index: 2;
  color: #bbbbbb;
  &:hover {
    color: black;
    box-shadow: 0 0 4px rgb(0 0 0 / 80%);
  }
`;
