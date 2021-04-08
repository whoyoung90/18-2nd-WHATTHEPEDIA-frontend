import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

function SameMovie({ movie, history }) {
  const goToMovieDetail = id => {
    history.push(`/movie/${id}`);
  };

  return (
    <div>
      <Same>비슷한 작품</Same>
      <List>
        {movie.related_movies &&
          movie.related_movies.map((el, idx) => (
            <Item key={idx} onClick={() => goToMovieDetail(el.id)}>
              <Anchor>
                <Img alt="sameMovie" src={el.image} />
                {el.logo && (
                  <WatCha alt="image" src="/images/watthe_label.png" />
                )}
                <Title>{el.title}</Title>
                <Rate>평균 ★ {el.average_stars}</Rate>
              </Anchor>
            </Item>
          ))}
      </List>
    </div>
  );
}

export default withRouter(SameMovie);

const Same = styled.h2`
  margin: 8px;
  color: #000;
  border-bottom: 1px solid #e3e3e3;
  font-size: 19px;
  font-weight: 700;
  line-height: 38px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding-left: 10px;
`;

const Item = styled.li`
  width: 23%;
  padding: 0px 5px;
  margin-bottom: 24px;
`;

const Anchor = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

const Img = styled.img`
  width: 100%;
  height: 230px;
  object-fit: fill;
  border-radius: 5px;
`;

const WatCha = styled.img`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
`;

const Title = styled.span`
  color: black;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;

const Rate = styled.span`
  padding-top: 3px;
  color: rgb(255, 47, 110);
  font-size: 13px;
  font-weight: 400;
`;
