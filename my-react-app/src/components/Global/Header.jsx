import { HeaderSection } from "./GlobalStyle";

const Header = () => (
  <HeaderSection>
    <div className="container">
      <h1 className="animate-on-load">
        안녕하세요. <span className="highlight">사용자 경험을 설계하고,</span> 백엔드부터 프론트엔드까지 풀스택으로 구현하는 개발자 강현성입니다.
      </h1>
      <h2 className="animate-on-load sub">
        Spring Boot와 React로 안정적인 API와 직관적인 UI를 만들고, 클린 코드와 확장 가능한 아키텍처를 지향합니다.
      </h2>
    </div>
  </HeaderSection>
);

export default Header;
