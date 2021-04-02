import React from 'react';
import TotalAssess from './Components/TotalAssess';
import Address from './Components/Address';
import styled from 'styled-components';

class PublicFooter extends React.Component {
  render() {
    return (
      <Footer>
        <TotalAssess />
        <Address />
      </Footer>
    );
  }
}

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 275px;
  border: 1px solid black;
  background-color: #1c1d1f;
`;
export default PublicFooter;
