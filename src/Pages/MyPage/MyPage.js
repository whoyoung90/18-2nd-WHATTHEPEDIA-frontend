import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { BsGearFill, BsBarChartFill, BsFillStarFill } from 'react-icons/bs';
import { config } from '../../config.js';
import Nav from '../../Components/Nav/Nav';
import PublicFooter from '../../Components/PublicFooter/PublicFooter';

export default function Mypage() {
  const MENUITEMS = [
    { name: '영화', color: '45deg, #82d957 40%, #bfe874 100%' },
    {
      name: 'TV 프로그램',
      color: '45deg, rgb(255, 191, 102) 40%, rgb(255, 200, 158) 100%',
    },
    {
      name: '책',
      color: '45deg, rgb(96, 209, 240) 40%, rgb(112, 224, 211) 100%',
    },
  ];

  const [userData, setUserDatas] = useState([]);
  let token = localStorage.getItem('token');
  useEffect(() => {
    fetch(`${config.api}/user/mypage`, {
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => setUserDatas(data.mypage_data));
  }, []);

  const history = useHistory();
  const goToMyRating = () => {
    history.push('/myrating');
  };

  return (
    <>
      <Nav />
      <MyContainer>
        <MyWrapper>
          <MyHeaderImg>
            <SetIcon>
              <BsGearFill />
            </SetIcon>
          </MyHeaderImg>
          <MyBody>
            <MyBodyHeader>
              <UserIcon>
                <UserImg alt="유저프로필" src="/images/userprofile.png" />
              </UserIcon>
              <MyBodyTitle>
                <MyBodyTitleH1>{userData.user}</MyBodyTitleH1>
                <MyBodyTitleSpan>
                  노는게 제일 좋아 친구들 모여라 언제나 즐거워 개구쟁이 뽀로로
                  눈덮인 숲속마을 꼬마 펭귄 나가신다 언제나 즐거워 오늘은 또
                  무슨일이 생길까 뽀로로를 불러 봐요 뽀롱뽀로 뽀롱뽀로
                  뽀롱뽀롱뽀로로 🐧✅✅ 뽀로로 데이터 없을 경우// 프로필이
                  없습니다 추가
                </MyBodyTitleSpan>
              </MyBodyTitle>
            </MyBodyHeader>
            <MyFavor>
              <BsBarChartFill />
              <MyFavorSpan>취향분석</MyFavorSpan>
            </MyFavor>
            <MyList>
              <MyPickBox>
                <MyPicks>
                  {MENUITEMS.map((menu, index) => {
                    return (
                      <MyPick
                        key={index}
                        color={menu.color}
                        onClick={goToMyRating}
                      >
                        <MyPickContents>
                          <MyPickTitle>{menu.name}</MyPickTitle>
                          <MyPickCount>
                            <BsFillStarFill />
                            {menu.name === '영화'
                              ? userData.user_star_count
                              : '129'}
                          </MyPickCount>
                          <MyPickHope>보고싶어요 240</MyPickHope>
                        </MyPickContents>
                      </MyPick>
                    );
                  })}
                </MyPicks>
              </MyPickBox>
            </MyList>
          </MyBody>
        </MyWrapper>
      </MyContainer>
      <PublicFooter />
    </>
  );
}

const MyContainer = styled.section`
  position: relative;
  display: block;
  width: 100vw;
  height: 1018px;
  padding: 62px 0 0px;
  background-color: rgb(248, 248, 248);
`;

const MyWrapper = styled.div`
  display: block;
  max-width: 640px;
  width: 100%;
  max-height: 618px;
  height: auto;
  margin: 28px auto 30px;
  border: 1px solid rgb(227, 227, 227);
  border-radius: 6px;
  background-color: rgb(255, 255, 255);
`;

const MyHeaderImg = styled.div`
  display: block;
  width: 640px;
  height: 0;
  margin: 0px 0px -20px;
  padding-top: 32%;
  background: url('/images/sampleimg7.jpg') center 10% / cover no-repeat;
`;

const SetIcon = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: none;
  background: none;

  svg {
    width: 24px;
    height: 24px;
    color: rgb(239, 239, 239);
  }
`;

const MyBody = styled.div`
  display: block;
  width: 640px;
  height: 432px;
`;

const MyBodyHeader = styled.div`
  display: block;
  width: 100%;
  height: 144px;
`;

const UserIcon = styled.button`
  position: absolute;
  top: 0px;
  left: 24px;
  display: block;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
`;

const UserImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const MyBodyTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 598px;
  height: 144px;
  margin: 0 20px;
  padding-bottom: 10px;
`;

const MyBodyTitleH1 = styled.h1`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  margin-top: 50px;
  color: #000;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.9px;
  line-height: 30px;
  word-break: break-all;
`;

const MyBodyTitleSpan = styled.span`
  display: flex;
  width: 100%;
  max-height: 40px;
  height: auto;
  margin: 0;
  color: #4a4a4a;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 20px;
  word-break: break-all;
  overflow: hidden;
`;

const MyFavor = styled.div`
  display: flex;
  align-items: center;
  width: 598px;
  height: 22px;
  margin: 0 20px;
  padding: 17px 0;
  border-top: 1px solid rgb(237, 237, 237);
  cursor: pointer;

  svg {
    margin-right: 10px;
  }
`;

const MyFavorSpan = styled.span`
  display: flex;
  width: 100%;
  max-height: 40px;
  height: auto;
  margin: 0;
  padding: 13px 0;
  border-bottom: 1px solid rgb(237, 237, 237);
  color: #4a4a4a;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 20px;
  word-break: break-all;
  overflow: hidden;
`;

const MyList = styled.div`
  display: block;
  width: 640px;
  height: 240px;
`;

const MyPickBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 640;
  height: 192px;
  margin: 20px 20px;
`;

const MyPicks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 192px;
  margin: 24px 0px;
  padding: 0;
  font-size: 15px;
  border: none;
  white-space: no-wrap;
  color: rgb(255, 255, 255);
`;

const MyPick = styled.li`
  display: flex;
  width: 33.3333%;
  height: 192px;
  margin: 0px 5px;
  border-radius: 6px;
  background-image: linear-gradient(${props => props.color});
  vertical-align: middle;
  cursor: pointer;
`;

const MyPickContents = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 6.9px 11px 26.5px;
  color: rgb(255, 255, 255);
  overflow: hidden;
`;

const MyPickTitle = styled.li`
  display: flex;
  width: auto;
  height: auto;
  margin: 0px 5px;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.7px;
  line-height: 22px;
`;

const MyPickCount = styled.li`
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
  margin: 0px 5px;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.7px;
  line-height: 28px;

  svg {
    margin-right: 6px;
  }
`;

const MyPickHope = styled.li`
  position: absolute;
  bottom: 8.5px;
  display: flex;
  width: 100%;
  height: auto;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.2px;
  line-height: 18px;
`;
