import React from "react";
import styled from "styled-components";
import { FaGithub, FaEnvelope, FaBlog } from "react-icons/fa";
import { FooterContainer, FooterContent } from "./GlobalStyle";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <div className="social-links">
          <a
            href="https://github.com/kanghyunseong"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a href="mailto:rkdgustjd2756@gmail.com">
            <FaEnvelope />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <FaBlog />
          </a>
        </div>

        <p className="description">끊임없이 성장하는 개발자 강현성입니다.</p>
        <p className="copyright">
          &copy; {new Date().getFullYear()} 강현성 Portfolio. All rights
          reserved.
        </p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
