import React from 'react';
import Movie from './Movie';
import styled from 'styled-components';

const MovieList = ({ movie, word }) => {
  const changeWord = () => {
    if (word === '담은 순' || '평점 순') {
      return (a, b) => {
        const sortA = word === '담은 순' ? a.rate_order : a.average_stars;
        const sortB = word === '담은 순' ? b.rate_order : b.average_stars;
        return sortB - sortA;
      };
    }

    if (word === '가나다 순' || '개봉일 순') {
      return (a, b) => {
        const sortA = word === '가나다 순' ? a.title : a.release_date;
        const sortB = word === '가나다 순' ? b.title : b.release_date;
        if (sortA < sortB) {
          return -1;
        }
        if (sortA > sortB) {
          return 1;
        }
        return 0;
      };
    }
  };

  const sortBy = movie.my_movies?.sort(changeWord());
  return (
    <Wrap>
      {sortBy?.map((data, idx) => (
        <Movie
          key={idx}
          id={data.id}
          image={data.image}
          title={data.title}
          average_stars={data.average_stars}
          logo={data.logo}
          word={word}
        />
      ))}
    </Wrap>
  );
};

export default MovieList;

const Wrap = styled.div`
  padding-top: 234px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;
