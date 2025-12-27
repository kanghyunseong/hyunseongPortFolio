import React from "react";
// 스타일 컴포넌트 import 생략 (기존 유지)
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
          name: "Spring Boot",
          icon: <SiSpringboot />,
          level: "80%",
          color: "#6DB33F",
          desc: "REST API 설계, MVC 패턴 적용, Spring Security 인증/인가 구현",
        },
        {
          name: "Oracle SQL",
          icon: <SiOracle />,
          level: "75%",
          color: "#F80000",
          desc: "RDBMS 스키마 설계, Join 및 서브쿼리를 활용한 데이터 처리",
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
        {
          name: "JavaScript",
          icon: <SiJavascript />,
          level: "80%",
          color: "#F7DF1E",
          desc: "ES6+ 문법 활용, DOM 조작 및 이벤트 처리 로직 구현",
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
          name: "Notion",
          icon: <SiNotion />,
          level: "90%",
          color: "#000000",
          desc: "개발 문서 정리, 트러블슈팅 기록 및 프로젝트 일정 관리",
        },
        {
          name: "Figma",
          icon: <SiFigma />,
          level: "70%",
          color: "#F24E1E",
          desc: "디자이너와의 소통을 위한 UI 분석 및 프로토타입 활용",
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
