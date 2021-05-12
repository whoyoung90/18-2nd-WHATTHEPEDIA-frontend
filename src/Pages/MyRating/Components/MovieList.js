import React from 'react';
import Movie from './Movie';
import styled from 'styled-components';
const MovieList = ({ movie, word }) => {
  const matchSortValue = {
    '담은 순': 'rate_order',
    // '평점 순': 'average_stars',
    '평점 순': 'star',
    '가나다 순': 'title',
    '개봉일 순': 'release_date',
  };
  const changeWord = () => {
    if (word === '담은 순' || word === '평점 순') {
      return (a, b) => {
        const sortA = a[matchSortValue[word]];
        const sortB = b[matchSortValue[word]];
        return sortB - sortA;
      };
    }
    if (word === '가나다 순' || word === '개봉일 순') {
      return (a, b) => {
        const sortA = a[matchSortValue[word]];
        const sortB = b[matchSortValue[word]];
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
  const sortBy = movie.movie_info_data?.sort(changeWord());
  console.log('💌', sortBy);
  return (
    <Wrap>
      {sortBy?.map((data, idx) => (
        <Movie
          key={idx}
          id={data.id}
          image={data.image}
          title={data.title}
          // average_stars={data.average_stars}
          average_stars={data.star}
          // logo={data.logo}
          logo={data.is_watcha}
          word={word}
        />
      ))}
    </Wrap>
  );
};
export default MovieList;
const Wrap = styled.div`
  padding: 254px 16px 0;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;
