import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

const MyRating = ({ history }) => {
  const handleBack = () => {
    history.goBack();
  };

  return (
    <Wrap>
      <Nav>
        <Back>
          <FaArrowLeft onClick={handleBack} />
        </Back>
        <Title>평가한 작품들</Title>
      </Nav>
      <List>
        <ol>
          <AllLi>전체</AllLi>
          <RateLi>별점 순</RateLi>
        </ol>
      </List>
    </Wrap>
  );
};

export default withRouter(MyRating);

const Wrap = styled.div`
  background: white;
`;

const Nav = styled.div`
  padding: 0 16px;
`;

const Back = styled.button`
  height: 44px;
  border: none;
  outline: none;
  background: none;
  font-size: 20px;
  color: #ff2f6e;
`;

const Title = styled.div`
  height: 30px;
  font-size: 22px;
  font-weight: bold;
`;

const List = styled.div`
  ol {
    display: flex;
    border-bottom: 1px solid #cccccc;
    padding: 0 16px;
  }
`;

const RateLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 151px;
  height: 44px;
  font-size: 15px;
  cursor: pointer;
`;

const AllLi = styled(RateLi)`
  border-bottom: 3px solid #ff2f6e;
  font-weight: bold;
  color: #ff2f6e;
`;
