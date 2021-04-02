import { React, useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';
import styled from 'styled-components';

function Comment({ movie }) {
  const [carousel, setCarousel] = useState(0);
  const [handleLeft, setHandleLeft] = useState(false);
  const [handleRight, setHandleRight] = useState(true);

  const handleArrow = WIDTH => {
    setCarousel(carousel + WIDTH);
    setHandleLeft(carousel + WIDTH === 0 ? false : true);
    {
      movie.comments &&
        setHandleRight(
          carousel + WIDTH === WIDTH * Math.floor(movie.comments.length / 3)
            ? false
            : true
        );
    }
  };

  return (
    <CommentWrap>
      <CommentTitle>코멘트</CommentTitle>
      <SubWrap>
        <List
          carousel={carousel}
          handleLeft={handleLeft}
          handleRight={handleRight}
        >
          {movie.comments &&
            movie.comments.map((el, idx) => (
              <Item key={idx}>
                <ItemWrap>
                  <Profile>
                    <div>
                      <Logo alt="user" src="/images/userprofile.png" />
                      <Id>{el.user}</Id>
                    </div>
                    <Rate>★ {el.user_star}</Rate>
                  </Profile>
                  <Reviews>{el.content}</Reviews>
                  <GoodIcon>
                    <AiFillLike size="15" color="gray" />
                    <GoodCount>{el.like}</GoodCount>
                  </GoodIcon>
                  <GoodBtn>좋아요</GoodBtn>
                </ItemWrap>
              </Item>
            ))}
        </List>
      </SubWrap>
      {handleRight && (
        <RightBtn onClick={() => handleArrow(-630)}>
          <FiArrowRightCircle size="40" />
        </RightBtn>
      )}
      {handleLeft && (
        <LeftBtn onClick={() => handleArrow(630)}>
          <FiArrowLeftCircle size="40" />
        </LeftBtn>
      )}
    </CommentWrap>
  );
}

export default Comment;

const CommentWrap = styled.div`
  position: relative;
`;

const CommentTitle = styled.h2`
  margin: 8px;
  color: #000;
  border-bottom: 1px solid #e3e3e3;
  font-size: 19px;
  font-weight: 700;
  line-height: 38px;
`;

const SubWrap = styled.section`
  width: 650px;
  overflow: hidden;
`;

const List = styled.ul`
  display: flex;
  transition: 1s;
  transform: translateX(${props => props.carousel}px);
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  padding: 0 12px;
  border-radius: 7px;
  background: rgb(242, 242, 242);
`;

const ItemWrap = styled.div`
  width: 270px;
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

const Logo = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;
const Id = styled.div`
  float: right;
  padding: 6px 8px;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
`;

const Rate = styled.span`
  align-items: center;
  padding: 3px;
  background: white;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
`;

const Reviews = styled.div`
  margin-bottom: 12px;
  height: 120px;
  line-height: 20px;
  overflow-y: hidden;
`;

const GoodIcon = styled.div`
  margin-left: 2px;
  margin-bottom: 3px;
`;

const GoodCount = styled.em`
  margin-left: 4px;
  color: gray;
  font-size: 15px;
`;

const GoodBtn = styled.button`
  width: 50px;
  padding-bottom: 7px;
  color: rgb(255, 47, 110);
  border: none;
  line-height: 22px;
  font-size: 15px;
  font-weight: bold;
`;

const RightBtn = styled.button`
  position: absolute;
  top: 150px;
  right: 0;
  border: none;
  background: none;
  outline: none;
  color: gray;
`;

const LeftBtn = styled.button`
  position: absolute;
  top: 150px;
  border: none;
  background: none;
  outline: none;
  color: gray;
`;
