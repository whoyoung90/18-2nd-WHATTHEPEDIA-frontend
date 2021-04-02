import React from 'react';
import Movies from './Movies';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const CAROUSEL_WIDTH = 1310;

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      carousel: 0,
      handleLeft: false,
      handleRight: true,
    };
  }

  handleButton = buttonValue => {
    const { carousel } = this.state;
    const { movieData } = this.props;
    const totalMovieNumber = movieData.length - 1;
    this.setState({
      carousel: carousel + buttonValue,
      handleLeft: carousel + buttonValue === 0 ? false : true,
      handleRight:
        carousel + buttonValue ===
        buttonValue * Math.floor(totalMovieNumber / 5)
          ? false
          : true,
    });
  };

  render() {
    const { carousel, handleLeft, handleRight } = this.state;

    return (
      <Wrap>
        <Container>
          <Article
            carousel={carousel}
            handleLeft={handleLeft}
            handleRight={handleRight}
          >
            <Movies movieData={this.props.movieData} />
          </Article>
        </Container>
        {handleLeft && (
          <Button left onClick={() => this.handleButton(CAROUSEL_WIDTH)}>
            <FiChevronLeft />
          </Button>
        )}
        {handleRight && (
          <Button right onClick={() => this.handleButton(-CAROUSEL_WIDTH)}>
            <FiChevronRight />
          </Button>
        )}
      </Wrap>
    );
  }
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
