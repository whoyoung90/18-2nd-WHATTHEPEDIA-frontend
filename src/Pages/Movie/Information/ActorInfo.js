import React from 'react';
import styled from 'styled-components';

function ActorInfo({ movie }) {
  return (
    <Actor>
      {movie.panels &&
        movie.panels.map((el, idx) => (
          <List key={idx}>
            <Img alt="job" src={el.profile} />
            <Info>
              <Name>{el.actor}</Name>
              <Job>
                {el.role} | {el.character}
              </Job>
            </Info>
          </List>
        ))}
    </Actor>
  );
}

export default ActorInfo;

const Actor = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 220px;
`;

const List = styled.li`
  display: flex;
  flex-grow: 1;
  flex-basis: 40%;
  align-content: flex-start;
  margin: 5px;
  width: 300px;
  height: 70px;
`;

const Img = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 6px;
  object-fit: fill;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

const Name = styled.section`
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
`;

const Job = styled.section`
  margin-top: 2px;
  color: #8c8c8c;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
`;
