import { React, useState } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import styled from 'styled-components';

function Gallery({ movie }) {
  const [carousel, setCarousel] = useState(0);
  const [handleLeft, setHandleLeft] = useState(false);
  const [handleRight, setHandleRight] = useState(true);

  const handleArrow = WIDTH => {
    setCarousel(carousel + WIDTH);
    setHandleLeft(carousel + WIDTH === 0 ? false : true);
    {
      movie.galleries &&
        setHandleRight(
          carousel + WIDTH === WIDTH * Math.floor(movie.galleries.length / 3)
            ? false
            : true
        );
    }
  };
  return (
    <GalleryWrap>
      <GalleryTitle>갤러리</GalleryTitle>
      <SubWrap>
        <List
          carousel={carousel}
          handleLeft={handleLeft}
          handleRight={handleRight}
        >
          {movie.galleries &&
            movie.galleries.map((el, idx) => (
              <li key={idx}>
                <Img alt="gallery" src={el} />
              </li>
            ))}
        </List>
      </SubWrap>
      {handleRight && (
        <RightBtn onClick={() => handleArrow(-260)}>
          <FiArrowRightCircle size="30" />
        </RightBtn>
      )}
      {handleLeft && (
        <LeftBtn onClick={() => handleArrow(260)}>
          <FiArrowLeftCircle size="30" />
        </LeftBtn>
      )}
    </GalleryWrap>
  );
}

export default Gallery;

const GalleryWrap = styled.div`
  position: relative;
  display: inline-block;
  padding: 0 8px;
  width: 340px;
  border: 1px solid #e3e3e3;
  border-radius: 6px;
  text-align: left;
  vertical-align: top;
`;

const GalleryTitle = styled.h2`
  margin: 10px 0;
  color: #000;
  border-bottom: 1px solid #e3e3e3;
  font-size: 19px;
  font-weight: 700;
  line-height: 38px;
`;

const SubWrap = styled.section`
  width: 320px;
  overflow: hidden;
`;

const List = styled.ul`
  display: flex;
  transition: 1s;
  transform: translateX(${props => props.carousel}px);
`;

const Img = styled.img`
  width: 130px;
  height: 90px;
  padding: 0 5px;
`;

const RightBtn = styled.button`
  position: absolute;
  top: 90px;
  right: 0;
  border: none;
  background: none;
  outline: none;
  color: gray;
`;

const LeftBtn = styled.button`
  position: absolute;
  top: 90px;
  border: none;
  background: none;
  outline: none;
  color: gray;
`;
