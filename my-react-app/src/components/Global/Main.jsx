import React from "react";
import { FaCode, FaDatabase, FaTools } from "react-icons/fa";
import GithubOverview from "./GithubOverview";
import AnimateOnScroll from "./AnimateOnScroll";
import {
  MainWrap,
  AboutSection,
  ProfileImage,
  DescriptionBox,
  ContactLinks,
  HashTag,
  SectionWrap,
  SectionTitle,
  ServiceCard,
  ServiceSection,
  TimelineSection,
  TimelineItem,
} from "./GlobalStyle";

const PRIMARY = "#ff6b6b";

const Main = () => {
  return (
    <MainWrap>
      <AnimateOnScroll>
      <AboutSection id="about">
        <ProfileImage src="/img/myImage.png" alt="프로필 이미지" />
        <DescriptionBox>
          <div className="label">Available for Work</div>
          <h2>강현성</h2>
          <div className="job-title">Full-Stack Developer</div>

          <p>
            기술로 일상의 불편함을 해결하고, 효율적인 시스템을 설계하는 풀스택 개발자입니다.
            &quot;왜 이 기술이 필요한가?&quot;를 먼저 고민하고, 그다음 구현합니다.
            백엔드는 Spring Boot로 REST API를 설계하고, 프론트는 React로 사용자 경험을 만드는 일에 집중하고 있습니다.
          </p>
          <p>
            최근에는 <strong>공유 전기차 커뮤니티 서비스</strong>에서 팀장 겸 풀스택 개발자로 참여하며,
            공공 OpenAPI 연동, 실시간 예약·반납 로직, MyBatis 기반 DB 설계와 최적화를 담당했습니다.
            관리자 대시보드에서는 Chart.js로 회원·차량·예약 통계를 시각화하고, Context API와 JWT로 권한을 관리해
            기획부터 배포까지 한 사이클을 이끌었습니다.
          </p>
          <p>
            현재는 <strong>ReactTrip</strong> 프로젝트를 진행 중입니다. ReactTrip은 여행 일정과 일기를 한곳에서 관리하고,
            지도·캘린더·룰렛·커뮤니티 기능으로 여행 경험을 시각화하고 공유할 수 있는 웹 서비스입니다.
            React 기반 SPA로 화면을 구성하고, Spring Boot REST API로 회원·일정·일기·지도 데이터를 다루며,
            실제 사용할 수 있는 수준까지 구현해 보는 데 초점을 두고 있습니다.
          </p>
          <p>
            단순히 동작하는 코드를 넘어 <strong>클린 코드</strong>와 <strong>유지보수·확장이 쉬운 아키텍처</strong>를 지향합니다.
            React Native·Nest.js로 모바일과 서버를, 라즈베리 파이와 Docker로 IoT·인프라까지 다뤄 보며
            끊임없이 학습하고 있습니다.
          </p>

          <h3>My Tech Stack</h3>
          <ContactLinks>
            <HashTag>#Java</HashTag>
            <HashTag>#Spring Boot</HashTag>
            <HashTag>#Spring Security</HashTag>
            <HashTag>#React.js</HashTag>
            <HashTag>#React Native</HashTag>
            <HashTag>#TypeScript</HashTag>
            <HashTag>#MySQL</HashTag>
            <HashTag>#Oracle</HashTag>
            <HashTag>#AWS EC2</HashTag>
            <HashTag>#Docker</HashTag>
            <HashTag>#Git</HashTag>
            <HashTag>#GitHub</HashTag>
          </ContactLinks>
        </DescriptionBox>
      </AboutSection>
      </AnimateOnScroll>

      <AnimateOnScroll>
      <SectionWrap>
        <SectionTitle>GitHub Overview</SectionTitle>
        <GithubOverview />
      </SectionWrap>
      </AnimateOnScroll>

      <AnimateOnScroll>
      <SectionWrap alt>
        <SectionTitle>What I Do</SectionTitle>
        <ServiceSection>
          <AnimateOnScroll delay={1}>
          <ServiceCard>
            <FaCode size={35} color={PRIMARY} />
            <h4>Frontend Development</h4>
            <p>
              React를 사용하여 재사용 가능한 컴포넌트를 설계합니다. 사용자
              경험(UX) 향상을 위한 렌더링 최적화에 관심이 많습니다.
            </p>
          </ServiceCard>
          </AnimateOnScroll>

          <AnimateOnScroll delay={2}>
          <ServiceCard>
            <FaDatabase size={35} color={PRIMARY} />
            <h4>Backend Development</h4>
            <p>
              Spring Boot를 기반으로 안정적인 REST API를 설계하고, 데이터
              무결성을 고려한 효율적인 DB 구조를 구축합니다.
            </p>
          </ServiceCard>
          </AnimateOnScroll>

          <AnimateOnScroll delay={3}>
          <ServiceCard>
            <FaTools size={35} color={PRIMARY} />
            <h4>DevOps & Tools</h4>
            <p>
              Git Flow를 준수한 협업 경험이 있으며, AWS EC2 및 Docker를 활용한
              배포 환경 구성이 가능합니다.
            </p>
          </ServiceCard>
          </AnimateOnScroll>
        </ServiceSection>
      </SectionWrap>
      </AnimateOnScroll>

      <TimelineSection id="experience">
        <AnimateOnScroll>
          <SectionTitle>Education & Experience</SectionTitle>
        </AnimateOnScroll>

        <AnimateOnScroll delay={1}>
        <TimelineItem>
          <div className="date">2026.02</div>
          <div>
            <h4>ReactTrip 프로젝트</h4>
            <p>
              ReactTrip은 여행 일정과 일기를 한곳에서 관리하고,
              지도·캘린더·룰렛·커뮤니티 기능으로 여행 경험을 시각화하고 공유할 수 있는 웹 서비스입니다.
              React 기반 SPA와 Spring Boot REST API로 구성된 풀스택 프로젝트입니다.
            </p>
          </div>
        </TimelineItem>
        </AnimateOnScroll>

        <AnimateOnScroll delay={2}>
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
        </AnimateOnScroll>

        <AnimateOnScroll delay={3}>
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
        </AnimateOnScroll>

        <AnimateOnScroll delay={4}>
        <TimelineItem>
          <div className="date">2025.02 - 2025.7</div>
          <div>
            <h4>나만의 여행 기록 앱 (Personal)</h4>
            <p>
              <strong>React Native와 TypeScript</strong>를 활용한 모바일 앱
              프로젝트입니다. NestJS로 백엔드 서버를 구축하고 AWS(EC2, RDS,
              S3)를 통해 배포 환경을 직접 구성해보며 인프라 이해도를 높였습니다.
            </p>
          </div>
        </TimelineItem>
        </AnimateOnScroll>

        <AnimateOnScroll delay={5}>
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
        </AnimateOnScroll>

        <AnimateOnScroll delay={6}>
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
        </AnimateOnScroll>
      </TimelineSection>
    </MainWrap>
  );
};

export default Main;
