import React from 'react';
import styled from 'styled-components';
import Nav from '../../Components/Nav/Nav';
import PublicFooter from '../../Components/PublicFooter/PublicFooter';

function Main() {
  return (
    <>
      <MainContainer>
        <Nav />
        <PublicFooter />
      </MainContainer>
    </>
  );
}

// 네비게이션 테스트용 (conflict 발생 시 기존 코드 사용)
const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 2000px;
  background: orange;
`;

export default Main;
