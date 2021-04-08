import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Movie = ({ id, image, title, average_stars, logo, history }) => {
  const goToMovieDetail = () => {
    history.push(`/movie/${id}`);
  };

  return (
    <Wrap>
      <Container onClick={goToMovieDetail}>
        <img alt="movie" src={image} />
        <Title>{title}</Title>
        <Rate>평가함 ★ {average_stars}</Rate>
        <Logo>{logo && <img alt="logo" src="/images/watthe_label.png" />}</Logo>
      </Container>
    </Wrap>
  );
};

export default withRouter(Movie);

const Wrap = styled.div`
  width: 140px;
  margin-bottom: 24px;
`;

const Container = styled.div`
  position: relative;
  cursor: pointer;
  img {
    border-radius: 5px;
    width: 136px;
    height: 200px;
  }
`;

const Title = styled.p`
  margin: 5px 0;
  font-size: 16px;
`;

const Rate = styled.p`
  font-size: 13px;
  color: #ffa136;
`;

const Logo = styled.div`
  img {
    position: absolute;
    bottom: 205px;
    right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;
