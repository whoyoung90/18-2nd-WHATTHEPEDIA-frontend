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
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #1c1d1f;
`;
export default PublicFooter;
