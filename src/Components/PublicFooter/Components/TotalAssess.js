import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

class TotalAssess extends React.Component {
  render() {
    return (
      <Container>
        지금까지&nbsp;
        <Assessment>
          <FaStar />
          &nbsp;
          {this.props.rating_amount} 개의 평가가&nbsp;
        </Assessment>
        쌓였어요.
      </Container>
    );
  }
}

export default TotalAssess;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 62px;
  background-color: #101113;
  font-size: 19px;
  color: #d1d1d2;
`;

const Assessment = styled.span`
  display: flex;
  color: #ff0558;
`;
