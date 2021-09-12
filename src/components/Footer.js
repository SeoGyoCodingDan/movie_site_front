import React from 'react';
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterWrap>
            © 서교 코딩단
        </FooterWrap>
    );
};

export default Footer;

const FooterWrap = styled.div`
  border-top: #E0E0E0 1px solid;
  background-color: #F3F3F3;
  //margin: 20px 0;
  padding: 20px 0;
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
`