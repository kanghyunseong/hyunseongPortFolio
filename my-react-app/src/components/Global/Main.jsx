import React from "react";
import { FaGithub, FaCode, FaDatabase, FaTools } from "react-icons/fa";
import {
  AboutSection,
  ProfileImage,
  DescriptionBox,
  ContactLinks,
  HashTag,
  ServiceCard,
  ServiceSection,
  TimelineSection,
  TimelineItem,
} from "./GlobalStyle";

const Main = () => {
  return (
    <div style={{ width: "100%" }}>
      <AboutSection id="about">
        <ProfileImage src="../public/img/myImage.jpeg" alt="프로필 이미지" />
        <DescriptionBox>
          <div className="label">Available for Work</div>
          <h2>강현성</h2>
          <div className="job-title">Full-Stack Developer</div>

          <p>
            안녕하세요! 문제를 해결하는 과정에서 즐거움을 느끼는 개발자
            강현성입니다.
          </p>
          <p>
            최근에는 <strong>공유 전기차 커뮤니티 서비스</strong> 프로젝트를
            통해 Spring Boot와 React를 연동하여 효율적인 데이터 처리와 직관적인
            사용자 인터페이스를 구현하는 경험을 쌓았습니다.
          </p>
          <p>
            단순히 기능을 구현하는 것에 그치지 않고, <strong>클린 코드</strong>
            와 <strong>유지보수가 쉬운 아키텍처</strong>를 설계하기 위해
            끊임없이 고민합니다.
          </p>

          <h3 style={{ marginTop: "30px", fontSize: "1.1rem" }}>
            My Tech Stack
          </h3>
          <ContactLinks>
            <HashTag>#Java</HashTag>
            <HashTag>#Spring Boot</HashTag>
            <HashTag>#React.js</HashTag>
            <HashTag>#Oracle SQL</HashTag>
            <HashTag>#AWS</HashTag>
          </ContactLinks>
        </DescriptionBox>
      </AboutSection>

      <section style={{ padding: "80px 20px", backgroundColor: "#fcfcfc" }}>
        <h3
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontSize: "1.8rem",
            fontWeight: "bold",
          }}
        >
          What I Do
        </h3>
        <ServiceSection>
          <ServiceCard>
            <FaCode size={35} color="#007bff" />
            <h4>Frontend Development</h4>
            <p>
              React를 사용하여 재사용 가능한 컴포넌트를 설계합니다. 사용자
              경험(UX) 향상을 위한 렌더링 최적화에 관심이 많습니다.
            </p>
          </ServiceCard>

          <ServiceCard>
            <FaDatabase size={35} color="#007bff" />
            <h4>Backend Development</h4>
            <p>
              Spring Boot를 기반으로 안정적인 REST API를 설계하고, 데이터
              무결성을 고려한 효율적인 DB 구조를 구축합니다.
            </p>
          </ServiceCard>

          <ServiceCard>
            <FaTools size={35} color="#007bff" />
            <h4>DevOps & Tools</h4>
            <p>
              Git Flow를 준수한 협업 경험이 있으며, AWS EC2 및 Docker를 활용한
              배포 환경 구성이 가능합니다.
            </p>
          </ServiceCard>
        </ServiceSection>
      </section>

      <TimelineSection id="experience">
        <h3
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontSize: "1.8rem",
            fontWeight: "bold",
          }}
        >
          Education & Experience
        </h3>

        {/* 최신순으로 정렬하는 것이 일반적입니다 */}
        <TimelineItem>
          <div className="date">2025.12</div>
          <div>
            <h4>경기 기후 바이브 해커톤 참여</h4>
            <p>
              '기후 위기 해결'을 주제로 한 무박 2일 해커톤에 참여하여 팀원들과
              아이디어를 도출하고 프로토타입을 개발했습니다. 짧은 시간 내에
              결과물을 만들어내는 <strong>집중력과 팀워크</strong>를
              경험했습니다.
            </p>
          </div>
        </TimelineItem>

        <TimelineItem>
          <div className="date">2025.11 - 2025.12</div>
          <div>
            <h4>공유 전기차 커뮤니티 서비스 (Final Project)</h4>
            <p>
              팀장 및 Full-Stack 개발자로 참여하여 Spring Boot와 React 기반의 웹
              서비스를 구축했습니다. RESTful API 설계, 실시간 예약 시스템,
              관리자 대시보드를 구현하며 전체적인 개발 사이클을 주도했습니다.
            </p>
          </div>
        </TimelineItem>

        <TimelineItem>
          <div className="date">2025.09 - 2025.10</div>
          <div>
            <h4>나만의 여행 기록 앱 (Personal)</h4>
            <p>
              <strong>React Native와 TypeScript</strong>를 활용한 모바일 앱
              프로젝트입니다. NestJS로 백엔드 서버를 구축하고 AWS(EC2, RDS,
              S3)를 통해 배포 환경을 직접 구성해보며 인프라 이해도를 높였습니다.
            </p>
          </div>
        </TimelineItem>

        <TimelineItem>
          <div className="date">2025.07 - 2026.02</div>
          <div>
            <h4>K-Digital Training 풀스택 개발자 과정</h4>
            <p>
              Java, Spring Boot, React를 중심으로 웹 개발의 전반적인 프로세스를
              학습했습니다. 매일 학습 내용을 기록하고, 총 3회의 팀 프로젝트를
              수행하며 협업 능력을 길렀습니다.
            </p>
          </div>
        </TimelineItem>

        <TimelineItem>
          <div className="date">2025.02 - 2025.12</div>
          <div>
            <h4>IoT 스마트 알약 배출기 'TDB Project'</h4>
            <p>
              Arduino와 Raspberry Pi 하드웨어를 React Native 앱과 연동한 캡스톤
              디자인 프로젝트입니다. 하드웨어 제어 통신과 모바일 앱 간의 데이터
              흐름을 이해하는 계기가 되었습니다.
            </p>
          </div>
        </TimelineItem>
      </TimelineSection>
    </div>
  );
};

export default Main;
