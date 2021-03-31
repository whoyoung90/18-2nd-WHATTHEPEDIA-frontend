import React from 'react';
import styled from 'styled-components';

export default function FormLayout({ children }) {
  return (
    <FormContainer>
      <FormHeader>
        <FormLogo>
          <Logo />
        </FormLogo>
      </FormHeader>
      {children}
    </FormContainer>
  );
}

const FormContainer = styled.div`
  width: 375px;
  padding: 32px 20px 48px;
  border-radius: 6px;
  background: white;
`;

const FormLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 116px;
  height: auto;
  margin: 0 auto;
`;

const Logo = styled.img.attrs({
  alt: '왓더피디아 로고',
  src: '/images/logo.png',
})`
  width: 198px;
  height: auto;
`;

const FormHeader = styled.div`
  margin-bottom: 14px;
`;
