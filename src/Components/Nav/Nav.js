import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import Login from './Login/Login';
// import Logout from './Login/Logout';

export default function Nav() {
  const Menuitems = [{ name: '영화' }, { name: 'TV 프로그램' }, { name: '책' }];

  return (
    <NavContainer>
      <MenuWrapper>
        <MenuList>
          <NavLogo />
          {Menuitems.map((el, index) => {
            return (
              <NavList key={index}>
                <Button as="a" href="/">
                  {el.name}
                </Button>
              </NavList>
            );
          })}
          <SearchBar>
            <SearchIcon>
              <BsSearch />
            </SearchIcon>
            <Search />
          </SearchBar>
          <NavList>
            <Button as="a" href="/">
              로그인
            </Button>
          </NavList>
          <NavList>
            <SignUp as="a" href="/">
              회원가입
            </SignUp>
          </NavList>
          <NavList>
            <UserIcon as="a" href="/mypage">
              <UserImg alt="유저프로필" src="/images/userprofile.png" />
            </UserIcon>
          </NavList>
        </MenuList>
      </MenuWrapper>
      <Login />
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 62px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 0px 0px;
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

const NavLogo = styled.img.attrs({
  alt: 'logo',
  src: '/images/logo.png',
})`
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
  color: grey;
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
  color: rgb(126, 126, 126);
  text-decoration: none;

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

const Search = styled.input.attrs({
  type: 'text',
  autocomplete: 'off',
  placeholder: '작품 제목, 배우, 감독을 검색해보세요.',
})`
  display: inline-block;
  width: auto;
  min-width: 300px;
  height: 23px;
  margin: 12px 0;
  padding: 7px 10px 8px 44px;
  outline: none;
  border: 1px solid transparent;
  border-radius: 2px;
  background-color: rgb(245, 245, 247);
  font-size: 14px;
  font-weight: 400;
`;

const SearchIcon = styled.div`
  position: absolute;
  display: block;
  top: 24px;
  left: 20px;
  width: 14px;
  height: 14px;
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
  border: 1px solid rgba(116, 116, 123, 0.5);
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: grey;
  text-decoration: none;

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
