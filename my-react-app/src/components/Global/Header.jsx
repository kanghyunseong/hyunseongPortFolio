import styled from "styled-components";
import { HeaderSection } from "./GlobalStyle";

const Header = () => (
  <HeaderSection>
    <div className="container">
      <h1>
        안녕하세요, <span className="highlight">끊임없이 도전하는 개발자 </span>
        강현성입니다.
      </h1>
      <h2>문제를 해결하고 사용자에게 가치를 전달하는 웹 개발을 지향합니다.</h2>
    </div>
  </HeaderSection>
);

export default Header;
