import React from 'react';
import { VictoryBar, VictoryLabel } from 'victory';
import styled from 'styled-components';

function Graph({ movie }) {
  let arr = [];
  for (let i = 5; i > 0; i--) {
    let newGraph = new Object();
    newGraph.x = i;
    newGraph.y = movie.star_graph[i];
    arr = arr.concat(newGraph);
  }

  return (
    <>
      <Wrap>
        <GraphName>별점 그래프</GraphName>
        <Average>평균 ★{movie.average_stars}</Average>
      </Wrap>
      <GraphWrap>
        {
          <VictoryBar
            data={arr}
            x="x"
            y="y"
            style={{
              data: { fill: data => (data.y > 5 ? 'orange' : 'green') },
            }}
            padding={50}
            labels={['1', '2', '3', '4', '5']}
            labelComponent={<VictoryLabel y={280} />}
            animate={{
              onLoad: { duration: 6000 },
            }}
          />
        }
      </GraphWrap>
    </>
  );
}

export default Graph;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
  border-bottom: 1px solid #e3e3e3;
  line-height: 38px;
`;

const GraphName = styled.h2`
  color: #000;
  font-size: 19px;
  font-weight: 700;
`;

const Average = styled.section`
  color: rgb(255, 47, 110);
  font-size: 17px;
  font-weight: 400;
`;

const GraphWrap = styled.div`
  width: 500px;
  margin: 0 auto;
`;
