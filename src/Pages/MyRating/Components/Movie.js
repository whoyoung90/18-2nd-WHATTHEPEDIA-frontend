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
  padding: 26px 16px 0;
  width: 137px;
`;

const Container = styled.div`
  position: relative;
  margin-bottom: 24px;
  cursor: pointer;
  img {
    border-radius: 5px;
    height: 200px;
  }
`;

const Title = styled.p`
  margin-top: 5px;
  font-size: 16px;
`;

const Rate = styled.p`
  margin-top: 2px;
  font-size: 13px;
  color: #ffa136;
`;

const Logo = styled.div`
  img {
    position: absolute;
    top: 6px;
    right: 6px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;
