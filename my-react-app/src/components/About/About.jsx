import React from "react";
import {
  FaPenNib,
  FaUsers,
  FaLightbulb,
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";
import {
  AboutWrapper,
  ValueGrid,
  ValueCard,
  InfoList,
  StorySection,
  StyleList,
} from "./AboutStyle";

const About = () => {
  return (
    <AboutWrapper>
      <section className="intro">
        <h1>"기능을 넘어 사용자 경험을 설계합니다"</h1>
        <p>
          사용자가 겪는 사소한 불편함을 기술로 해결했을 때 가장 큰 보람을
          느낍니다. <br />
          <strong>Spring Boot</strong>와 <strong>React</strong>를 주력으로
          다루며, <br />
          끊임없이 기록하고 공유하며 동료와 함께 성장하는 개발자입니다.
        </p>
        <div style={{ marginTop: "15px", color: "#666", fontSize: "0.9rem" }}>
          <span>#FullStack</span> &nbsp; <span>#ProblemSolver</span> &nbsp;
          <span>#Documentation</span>
        </div>
      </section>

      <StorySection>
        <h3>My Journey</h3>
        <p>
          <strong>"왜 이 코드는 이렇게 동작할까?"</strong>
          <br />
          단순한 호기심에서 시작한 코딩이 이제는 제 일상이 되었습니다. <br />
          작성한 코드가 즉각적인 결과물로 나타나는 과정에서 큰 성취감을 느꼈고,
          이는 제가 개발자로서의 길을 걷게 된 가장 큰 원동력이 되었습니다.
        </p>
        <p>
          KH 정보교육원에서 <strong>프로젝트 기반 AWS 웹 풀스택 과정</strong>을
          수료하며 웹 개발의 전반적인 흐름을 익혔습니다. 특히 팀 프로젝트로
          <strong>공유 전기차 서비스</strong>를 구축하며, 백엔드 로직 설계와
          프론트엔드 상태 관리의 중요성을 몸소 체험했습니다.
        </p>
        <p>
          저는 화려한 기술보다 <strong>탄탄한 기본기</strong>를 중요하게
          생각합니다. 새로운 기술을 무작정 도입하기보다, 현재 프로젝트에 필요한
          최적의 기술이 무엇인지 고민하고 적용하는 과정을 즐깁니다.
        </p>
      </StorySection>

      <section className="values">
        <h3>Core Values</h3>
        <ValueGrid>
          <ValueCard>
            <FaPenNib className="icon" />
            <h4>기록하는 습관</h4>
            <p>
              공부한 내용과 트러블 슈팅 과정을 노션에 정리하여 지식을
              자산화합니다.
            </p>
          </ValueCard>
          <ValueCard>
            <FaUsers className="icon" />
            <h4>원활한 소통</h4>
            <p>
              적극적인 의견 조율을 통해 팀원과의 간극을 줄이고 최선의 결과를
              만듭니다.
            </p>
          </ValueCard>
          <ValueCard>
            <FaLightbulb className="icon" />
            <h4>문제 해결력</h4>
            <p>
              '왜?'라는 질문을 던지며 에러의 근본적인 원인을 끝까지 분석합니다.
            </p>
          </ValueCard>
        </ValueGrid>
      </section>

      <section className="work-style" style={{ marginTop: "80px" }}>
        <h3>How I Work</h3>
        <StyleList>
          <li>
            <FaCheckCircle className="check-icon" />
            <span>
              <strong>Clean Code:</strong> 읽기 좋은 코드가 유지보수하기 좋은
              코드라 믿습니다. 변수명 하나에도 의도를 담으려 노력합니다.
            </span>
          </li>
          <li>
            <FaCheckCircle className="check-icon" />
            <span>
              <strong>User Centric:</strong> 개발자의 입장이 아닌, 서비스를
              사용하는 사용자의 입장에서 불편함을 찾습니다.
            </span>
          </li>
          <li>
            <FaCheckCircle className="check-icon" />
            <span>
              <strong>Growth:</strong> 코드 리뷰를 두려워하지 않으며, 피드백을
              성장의 기회로 삼습니다.
            </span>
          </li>
        </StyleList>
      </section>

      <section className="info">
        <h3>Information</h3>
        <InfoList>
          <li>
            <strong>Name:</strong> 강현성
          </li>
          {/* ✅ Education 부분 수정: 하이픈 추가 */}
          <li>
            <strong>Education:</strong>
            <div className="text-content">
              <span>
                - 경동대학교 컴퓨터공학과 (2020.03 ~ 2026.02 졸업 예정)
              </span>
              <span>- 영훈고등학교 (2017.03 ~ 2020.02 졸업)</span>
            </div>
          </li>
          <li>
            <strong>Training:</strong>
            <div className="text-content">
              <span>- KH 정보교육원 풀스택 웹 개발자 양성 과정 수료</span>
            </div>
          </li>
          <li>
            <strong>Contact:</strong>
            <a
              href="mailto:rkdgustjd2756@gmail.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              rkdgustjd2756@gmail.com
            </a>
          </li>
          <li>
            <strong>Channels:</strong>
            <div
              className="text-content"
              style={{ flexDirection: "row", gap: "15px" }}
            >
              <a
                href="https://github.com/kanghyunseong"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: "bold",
                }}
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://jumbled-railway-172.notion.site/2ca88b73649880e7bb02de55056e8693?pvs=73"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: "bold",
                }}
              >
                <FaExternalLinkAlt size={14} /> Notion
              </a>
            </div>
          </li>
        </InfoList>
      </section>
    </AboutWrapper>
  );
};

export default About;
