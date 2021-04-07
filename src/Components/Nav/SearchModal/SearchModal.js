import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export default function SearchModal({
  userInput,
  movies,
  id,
  showSearchModal,
  match,
}) {
  const history = useHistory();
  const goToDetail = e => {
    history.push(`/movies/${e.target.id}`);
  };

  const SEARCH_MENU = userInput !== '' ? movies : POPULAR_MOVIE;

  return (
    <SearchBox>
      {showSearchModal && (
        <SearchList userInput={userInput} movies={movies}>
          {movies.length > 0 && (
            <SearchContent movies={movies}>
              {userInput.keyword !== '' ? '연관 검색어' : '인기 검색어'}
            </SearchContent>
          )}
          {SEARCH_MENU.slice(0, 9).map((movie, index) => {
            return (
              <SearchContent key={index} id={movie.id} onClick={goToDetail}>
                {movie.korean_title}
              </SearchContent>
            );
          })}
        </SearchList>
      )}
    </SearchBox>
  );
}

const SearchBox = styled.div`
  position: absolute;
  top: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  max-height: 320px;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  z-index: 10000;
`;

const SearchList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  width: 100%;
  max-height: 328px;
  height: ${props =>
    props.userInput ? props => props.movies.length * 32 : '320px'};
  margin: 0;
  padding: 0;
`;

const SearchContent = styled.li`
  display: flex;
  align-items: center;
  max-width: 300px;
  width: 100%;
  height: 32px;
  padding: 0 12px 0;
  color: #292a32;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;

  &:not(:first-child):hover {
    background-color: rgb(245, 245, 247);
  }

  &:first-child {
    color: #ff0558;
    cursor: default;
  }
`;

const POPULAR_MOVIE = [
  { id: 1, title: '해리포터와 마법사의 돌과 막대기' },
  { id: 2, title: '불과 바람과 물의 잔과 해리포터' },
  { id: 3, title: '해리포터와 선릉 위워크의 죄수' },
  { id: 4, title: '해리포터 라이브러리' },
  { id: 5, title: '죽음의 리액트와 해리포터' },
  { id: 6, title: '해리포터와 위코더' },
  { id: 7, title: '치킨계 기사단과 해리포터' },
  { id: 8, title: '조용히하세요 해리포터 닥쳐 말포이' },
  { id: 9, title: '해리포터와 꾸꾸까까' },
];
