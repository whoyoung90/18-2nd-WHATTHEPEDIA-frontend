import React from 'react';
import TotalAssess from './Components/TotalAssess';
import Address from './Components/Address';
import styled from 'styled-components';

class PublicFooter extends React.Component {
  render() {
    return (
      <Footer>
        <TotalAssess rating_amount={this.props.rating_amount} />
        <Address />
      </Footer>
    );
  }
}

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 275px;
  background-color: #1c1d1f;
`;
export default PublicFooter;
