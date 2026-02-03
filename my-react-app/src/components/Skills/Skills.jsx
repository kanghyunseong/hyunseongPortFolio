import React from "react";
import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaAws,
  FaServer,
  FaCode,
  FaTools,
  FaMobileAlt,
  FaDocker,
  FaWindows,
  FaLock,
  FaDatabase,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiOracle,
  SiJavascript,
  SiPostman,
  SiFigma,
  SiAxios,
  SiNotion,
  SiKubernetes,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiMysql,
  SiNestjs,
  SiSpring,
  SiSlack,
  SiEclipseide,
  SiApachetomcat,
  SiApple,
} from "react-icons/si";
import { SkillCard, SkillSection, SkillsWrapper, Grid } from "./SkillsStyle";

const Skills = () => {
  const skillGroups = [
    {
      category: "Backend & Database",
      icon: <FaServer />,
      skills: [
        {
          name: "Java",
          icon: <FaJava />,
          level: "85%",
          color: "#0073B1",
          desc: "OOP 원리를 적용한 견고한 코드 작성 및 비즈니스 로직 구현",
        },
        {
          name: "Python",
          icon: <SiPython />,
          level: "70%",
          color: "#3776AB",
          desc: "스크립팅 및 백엔드·데이터 처리 활용",
        },
        {
          name: "Spring",
          icon: <SiSpring />,
          level: "75%",
          color: "#6DB33F",
          desc: "Spring Framework 기반 웹 애플리케이션 개발",
        },
        {
          name: "Spring Boot 3.5.7",
          icon: <SiSpringboot />,
          level: "80%",
          color: "#6DB33F",
          desc: "REST API 설계, MVC 패턴 적용, Spring Security 인증/인가 구현",
        },
        {
          name: "JSP & Servlet",
          icon: <FaCode />,
          level: "70%",
          color: "#4A90D9",
          desc: "서블릿 기반 웹 애플리케이션 및 뷰 템플릿 구현",
        },
        {
          name: "MyBatis",
          icon: <FaDatabase />,
          level: "80%",
          color: "#B7312D",
          desc: "SQL 매퍼 기반 DB 연동 및 동적 쿼리 작성",
        },
        {
          name: "Nest.js",
          icon: <SiNestjs />,
          level: "75%",
          color: "#E0234E",
          desc: "TypeScript 기반 백엔드 API 및 모듈 구조 설계",
        },
        {
          name: "JWT",
          icon: <FaLock />,
          level: "80%",
          color: "#000000",
          desc: "토큰 기반 인증/인가 및 보안 처리",
        },
        {
          name: "Lombok",
          icon: <FaCode />,
          level: "85%",
          color: "#1A1A1A",
          desc: "보일러플레이트 코드 감소 및 유지보수성 향상",
        },
        {
          name: "Oracle 21C",
          icon: <SiOracle />,
          level: "75%",
          color: "#F80000",
          desc: "RDBMS 스키마 설계, Join 및 서브쿼리를 활용한 데이터 처리",
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
          level: "75%",
          color: "#4479A1",
          desc: "관계형 DB 설계 및 쿼리 최적화",
        },
        {
          name: "Postman",
          icon: <SiPostman />,
          level: "90%",
          color: "#FF6C37",
          desc: "API 엔드포인트 테스트 및 팀원 간 API 명세 공유",
        },
      ],
    },
    {
      category: "Frontend & Mobile",
      icon: <FaCode />,
      skills: [
        {
          name: "JavaScript",
          icon: <SiJavascript />,
          level: "80%",
          color: "#F7DF1E",
          desc: "ES6+ 문법 활용, DOM 조작 및 이벤트 처리 로직 구현",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
          level: "80%",
          color: "#3178C6",
          desc: "타입 안정성과 유지보수성을 높인 프론트/백엔드 개발",
        },
        {
          name: "jQuery",
          icon: <SiJquery />,
          level: "75%",
          color: "#0769AD",
          desc: "DOM 조작, Ajax 요청 및 이벤트 핸들링",
        },
        {
          name: "HTML5",
          icon: <SiHtml5 />,
          level: "85%",
          color: "#E34F26",
          desc: "시맨틱 마크업 및 웹 접근성 고려 구조 설계",
        },
        {
          name: "CSS3",
          icon: <SiCss3 />,
          level: "85%",
          color: "#1572B6",
          desc: "레이아웃, 반응형 디자인 및 애니메이션 구현",
        },
        {
          name: "Ajax",
          icon: <FaCode />,
          level: "80%",
          color: "#4A90D9",
          desc: "비동기 HTTP 요청 및 동적 데이터 갱신",
        },
        {
          name: "React.js",
          icon: <FaReact />,
          level: "75%",
          color: "#61DAFB",
          desc: "Functional Component, Hooks, Context API를 활용한 SPA 개발",
        },
        {
          name: "React Native",
          icon: <FaMobileAlt />,
          level: "70%",
          color: "#61DAFB",
          desc: "TypeScript 기반의 크로스 플랫폼 모바일 애플리케이션 개발",
        },
        {
          name: "Axios",
          icon: <SiAxios />,
          level: "85%",
          color: "#5A29E4",
          desc: "비동기 통신 처리 및 Interceptor를 활용한 토큰/에러 관리",
        },
      ],
    },
    {
      category: "DevOps & Tools",
      icon: <FaTools />,
      skills: [
        {
          name: "Git / GitHub",
          icon: <FaGitAlt />,
          level: "85%",
          color: "#F05032",
          desc: "Git Flow 전략 이해, Conflict 해결 및 형상 관리 능력",
        },
        {
          name: "AWS",
          icon: <FaAws />,
          level: "60%",
          color: "#FF9900",
          desc: "EC2 서버 구축, RDS 연동, S3 스토리지 활용 경험",
        },
        {
          name: "Docker",
          icon: <FaDocker />,
          level: "60%",
          color: "#2496ED",
          desc: "도커 컨테이너 생성을 통한 개발 및 배포 환경 일관성 유지",
        },
        {
          name: "Kubernetes",
          icon: <SiKubernetes />,
          level: "40%",
          color: "#326CE5",
          desc: "컨테이너 오케스트레이션의 기본 개념 이해 및 학습 진행 중",
        },
        {
          name: "Eclipse",
          icon: <SiEclipseide />,
          level: "75%",
          color: "#2C2255",
          desc: "Java/Spring 개발용 IDE 활용",
        },
        {
          name: "Visual Studio Code",
          icon: <FaCode />,
          level: "90%",
          color: "#007ACC",
          desc: "프론트엔드·풀스택 개발용 에디터 및 확장 활용",
        },
        {
          name: "ERDcloud",
          icon: <FaProjectDiagram />,
          level: "80%",
          color: "#4A90D9",
          desc: "ERD 설계 및 DB 스키마 시각화·협업",
        },
        {
          name: "Figma",
          icon: <SiFigma />,
          level: "70%",
          color: "#F24E1E",
          desc: "디자이너와의 소통을 위한 UI 분석 및 프로토타입 활용",
        },
        {
          name: "Slack",
          icon: <SiSlack />,
          level: "85%",
          color: "#4A154B",
          desc: "팀 커뮤니케이션 및 채널 기반 협업",
        },
        {
          name: "Notion",
          icon: <SiNotion />,
          level: "90%",
          color: "#000000",
          desc: "개발 문서 정리, 트러블슈팅 기록 및 프로젝트 일정 관리",
        },
        {
          name: "Windows 10",
          icon: <FaWindows />,
          level: "90%",
          color: "#0078D6",
          desc: "개발 환경 및 일반 업무 OS",
        },
        {
          name: "Mac OS",
          icon: <SiApple />,
          level: "80%",
          color: "#000000",
          desc: "개발 및 모바일 빌드 환경",
        },
        {
          name: "Tomcat",
          icon: <SiApachetomcat />,
          level: "70%",
          color: "#F8DC75",
          desc: "Java 웹 애플리케이션 서버 배포 및 운영",
        },
      ],
    },
  ];

  return (
    <SkillsWrapper>
      {/* 렌더링 부분은 기존 코드와 동일하므로 그대로 사용하시면 됩니다 */}
      <header className="header">
        <h1 className="title">Technical Skills</h1>
        <p className="subtitle">
          풀스택 개발을 위한 핵심 기술부터 인프라, 협업 도구까지 폭넓게
          활용합니다.
        </p>
      </header>

      <div className="container">
        {skillGroups.map((group, idx) => (
          <SkillSection key={idx}>
            <h3 className="category-title">
              {group.icon} <span>{group.category}</span>
            </h3>
            <Grid>
              {group.skills.map((skill, sIdx) => (
                <SkillCard key={sIdx}>
                  <div className="card-top">
                    <span className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <div className="skill-name-area">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}</span>
                    </div>
                  </div>
                  <p className="skill-desc">{skill.desc}</p>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: skill.level,
                        backgroundColor: skill.color,
                      }}
                    ></div>
                  </div>
                </SkillCard>
              ))}
            </Grid>
          </SkillSection>
        ))}
      </div>
    </SkillsWrapper>
  );
};

export default Skills;
