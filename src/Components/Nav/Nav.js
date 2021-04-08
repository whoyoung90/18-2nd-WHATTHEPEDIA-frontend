import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import Modal from '../Modal/Modal';

export default function Nav() {
  const MENU_ITEMS = [
    { name: '영화' },
    { name: 'TV 프로그램' },
    { name: '책' },
  ];

  const [isMember, setIsMember] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const useScroll = () => {
    const [moveScroll, setMoveScroll] = useState({ x: 0, y: 0 });
    const onScroll = e => {
      setMoveScroll({ x: window.screenX, y: window.scrollY });
    };

    useEffect(() => {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return moveScroll;
  };

  const fetchNavUser = () => {
    fetch('/user/login', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'INVALID_TOKEN_TYPE') {
          setIsMember(true);
        } else {
          setIsMember(false);
        }
      });
  };

  const { y } = useScroll();
  const isNavTop = () => {
    if (y < 60) {
      return true;
    } else {
      return false;
    }
  };

  const changeModal = () => {
    setIsMember(!isMember);
  };

  const handleModal = e => {
    setShowModal(!showModal);
  };

  const goToLogin = () => {
    setShowModal(true);
    setIsMember(true);
  };

  const goToSignUp = () => {
    setIsMember(false);
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <Modal
          fetchNavUser={fetchNavUser}
          isMember={isMember}
          setIsMember={setIsMember}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          changeModal={changeModal}
          showModal={showModal}
          setShowModal={setShowModal}
          handleModal={handleModal}
        />
      )}
      <NavContainer isNavTop={isNavTop()}>
        <MenuWrapper>
          <MenuList>
            <HomeButton as="a" href="/">
              <NavLogo isNavTop={isNavTop()} />
            </HomeButton>
            {MENU_ITEMS.map((menu, index) => {
              return (
                <NavList key={index} isNavTop={isNavTop()}>
                  <Button as="a" href="/" isNavTop={isNavTop()}>
                    {menu.name}
                  </Button>
                </NavList>
              );
            })}
            <SearchBar isNavTop={isNavTop()}>
              <SearchIcon isNavTop={isNavTop()}>
                <BsSearch />
              </SearchIcon>
              <Search isNavTop={isNavTop()} />
            </SearchBar>
            <NavList>
              {isLogin ? (
                <Button as="a" isNavTop={isNavTop()}>
                  평가하기
                </Button>
              ) : (
                <Button as="a" onClick={goToLogin} isNavTop={isNavTop()}>
                  로그인
                </Button>
              )}
            </NavList>
            <NavList>
              {isLogin ? (
                <UserIcon as="a" href="/mypage">
                  <UserImg alt="유저프로필" src="/images/userprofile.png" />
                </UserIcon>
              ) : (
                <SignUp as="a" onClick={goToSignUp} isNavTop={isNavTop()}>
                  회원가입
                </SignUp>
              )}
            </NavList>
            <NavList></NavList>
          </MenuList>
        </MenuWrapper>
      </NavContainer>
    </>
  );
}

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 62px;
  background-color: ${props => (props.isNavTop ? '#fff' : 'transparent')};
  box-shadow: ${props =>
    props.isNavTop ? 'rgb(0 0 0 / 8%) 0px 1px 0px 0px' : 'none'};
  z-index: 100;
  transition: background-color 200ms ease 0s;
`;

const MenuWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0px;
`;

const MenuList = styled.div`
  display: flex;
  align-items: center;
  max-width: 1320px;
  width: 100%;
  margin: 0 3.5%;
`;

const HomeButton = styled.button`
  width: auto;
  height: auto;
`;

const NavLogo = styled.img.attrs(props => ({
  alt: 'logo',
  src: props.isNavTop ? '/images/logo.png' : 'images/logo_white.png',
}))`
  display: inline-block;
  width: 151px;
  height: 29px;
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  max-width: 300px;
  width: auto;
  height: 100%;
  margin: 0 0 0 24px;
  padding: 5px;
  color: ${props =>
    props.isNavTop ? 'rgb(126, 126, 126)' : 'rgb(255, 255, 255)'};
  text-align: center;
  text-decoration: none;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 15px;
  border: none;
  margin: 0;
  color: ${props =>
    props.isNavTop ? 'rgb(126, 126, 126)' : 'rgba(255, 255, 255, 0.7)'};
  text-decoration: none;
  cursor: pointer;

  &:active,
  &:hover {
    color: rgb(53, 53, 53);
  }
`;

const SearchBar = styled.div`
  position: relative;
  display: block;
  width: auto;
  height: auto;
  margin: 0 0 0 auto;
`;

const Search = styled.input.attrs(props => ({
  type: 'text',
  autocomplete: 'off',
  placeholder: '작품 제목, 배우, 감독을 검색해보세요.',
  placeholderTextColor: props.isNavTop
    ? 'rgb(126, 126, 126)'
    : 'rgba(255, 255, 255, 0.7)',
}))`
  display: inline-block;
  width: auto;
  min-width: 300px;
  height: 38px;
  margin: 12px 0;
  padding: 7px 10px 8px 30px;
  outline: none;
  border: 1px solid
    ${props => (props.isNavTop ? 'transparent' : 'rgba(255, 255, 255, 0.25)')};
  border-radius: 2px;
  background-color: ${props =>
    props.isNavTop ? 'rgb(245, 245, 247)' : 'rgba(0, 0, 0, 0.2)'};
  font-size: 14px;
  font-weight: 400;
  color: ${props =>
    props.isNavTop ? 'rgb(126, 126, 126)' : 'rgba(255, 255, 255, 0.7)'};
  &::placeholder {
    color: ${props =>
      props.isNavTop ? 'rgb(126, 126, 126)' : 'rgba(255, 255, 255, 0.7)'};
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  display: block;
  top: 24px;
  left: 12px;
  z-index: 10;

  svg {
    width: 14px;
    height: 14px;
    color: ${props =>
      props.isNavTop ? 'rgb(126, 126, 126)' : 'rgba(255, 255, 255, 0.7)'};
  }
`;

const SignUp = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  min-width: 72px;
  height: 32px;
  margin: 15px 0px;
  padding: 5px 14px 6px;
  border: 1px solid
    ${props =>
      props.isNavTop ? 'rgba(116, 116, 123, 0.5)' : 'rgba(255, 255, 255, 0.7)'};
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: ${props =>
    props.isNavTop ? 'rgb(126, 126, 126)' : 'rgba(255, 255, 255, 0.7)'};
  text-decoration: none;
  cursor: pointer;

  &:active,
  &:hover {
    color: rgb(53, 53, 53);
  }
`;

const UserIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;

const UserImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
