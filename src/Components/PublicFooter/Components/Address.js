import React from 'react';
import styled from 'styled-components';
import { FaAws, FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';

const ICON = [
  <a href="https://github.com/wecode-bootcamp-korea/18-2nd-WHATTHEPEDIA-frontend">
    <FaGithub size={24} />
  </a>,
  <FaFacebook size={24} />,
  <FaTwitter size={24} />,
];

class Address extends React.Component {
  render() {
    return (
      <AddressBox>
        <ul>
          <Li>서비스 이용약관 | 개인정보 처리방침 | 회사 안내</Li>
          <Li top>고객센터 | kjwoo9595@gmail.com</Li>
          <Li>제휴 및 대외 협력 | kjwoo9595@gmail.com</Li>
          <Li top>
            주식회사 왓더 | 대표 예병수 | 서울특별시 강남구 테헤란로 427
          </Li>
          <Li>사업자 등록 번호 2021-0329-0409</Li>
        </ul>
        <Last>
          <ul>
            <Li>
              <FaAws />
              &nbsp;© 2021 by WATCHTHE, Inc. All rights reserved.
            </Li>
          </ul>
          <ul>
            {ICON.map((icon, idx) => (
              <Li left key={idx}>
                {icon}
              </Li>
            ))}
          </ul>
        </Last>
      </AddressBox>
    );
  }
}

export default Address;

const AddressBox = styled.div`
  padding: 20px 0 38px;
  width: 1320px;
  height: 155px;
  font-size: 13px;
  color: #a5a5a7;
  list-style: none;
  line-height: 175%;
`;

const Li = styled.li`
  margin-top: ${props => props.top && '12px'};
  margin-left: ${props => props.left && '14px'};
`;

const Last = styled.li`
  display: flex;
  text-align: center;
  justify-content: space-between;

  ul {
    display: flex;
  }
`;
