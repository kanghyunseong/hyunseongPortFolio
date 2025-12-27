import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaFolder,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaBook, // Notion 대신 쓸 일반 아이콘 (SiNotion이 없다면 이걸 쓰세요)
} from "react-icons/fa";
// SiNotion을 쓰려면: npm install react-icons 하고 아래 주석 해제
import { SiNotion } from "react-icons/si";

import {
  ProjectsWrapper,
  CarouselContainer,
  SlideCard,
  ArrowButton,
  SmallGrid,
  SmallCard,
} from "./ProjectStyle";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // ... (mainProjects 데이터는 기존과 동일하게 유지) ...
  const mainProjects = [
    {
      id: 1,
      title: "공유 전기차 커뮤니티 서비스",
      description:
        "Spring Boot와 React를 활용한 풀스택 프로젝트입니다. 실시간 API 연동과 사용자 커뮤니티 활성화에 집중했습니다.",
      tech: ["Java", "Spring Boot", "React", "Oracle"],
      image: "/public/img/shareEv.png",
      links: {
        front: "https://github.com/kanghyunseong/front_react",
        back: "https://github.com/kanghyunseong/backend_springboot",
      },
    },
    {
      id: 2,
      title: "TDB_Project",
      description:
        "Context API를 활용한 상태 관리와 사용자 맞춤형 UI/UX를 제공하는 개인 알약 배출 관리 서비스입니다.",
      tech: ["React-native", "TypeScript", "Nest.js", "Type-ORM"],
      image: "/public/img/launch_screen.png",
      links: {
        front: "https://github.com/kanghyunseong/TDB_Project",
      },
    },
    {
      id: 3,
      title: "포트폴리오 웹사이트",
      description:
        "React와 Styled-Components로 제작한 개인 포트폴리오 사이트입니다. 반응형 디자인을 지원합니다.",
      tech: ["React", "Vite", "Styled-componet"],
      image: "/public/img/image.png",
      links: {
        front: "https://github.com/kanghyunseong/portfolio",
      },
    },
    {
      id: 4,
      title: "Journey - 나만의 여행 모바일 애플리케이션",
      description: "React Native, Nest.js를 활용한 모바일 애플리케이션입니다.",
      tech: [
        "React Native, 공공데이터포탈 API, Zustand, TypeORM, Nest.js, Postgresql, AWS EC2, RDS, S3",
      ],
      image: "/public/img/ic_launcher_round.png",
      links: {
        front: "https://github.com/kanghyunseong/Journey",
      },
    },
  ];

  const otherProjects = [
    {
      id: 1,
      title: "Mini Project - 우리만의 영화 사이트 제작",
      tech: "React, Spring legacy, Oracle Database",
      desc: "처음으로 시작한 웹 사이트입니다. 타 영화사를 모방하여 제작해본 팀 프로젝트입니다.",
      link: "https://github.com/ju1002/mini-cinema",
    },
    {
      id: 2,
      title: "Climate Project - 경기기후바이브 해커톤",
      tech: "React, 경기기후API, Vercel",
      desc: "경기기후에 대한 바이브 해커톤 프로젝트입니다. 기후 문제점 해결을 위한 아이디어를 구현했습니다.",
      link: "https://github.com/kanghyunseong/climateProject",
    },
  ];

  // ✅ 추가: Notion / Study 데이터
  const studyLinks = [
    {
      id: 1,
      title: "HTML, CSS 학습 노션",
      desc: "HTML, CSS를 학습한 것을 정리해놓은 노션입니다. 해당 노션에는 태그들에 관한 정리를 해두었습니다.",
      link: "https://jumbled-railway-172.notion.site/HTML-CSS-e6ad3ac316e340b7a8a463b5391b68f1?pvs=73",
    },
    {
      id: 2,
      title: "DataBase 학습 노션",
      desc: "DataBase에 대한 기본적인 학습에 대한 노션입니다.",
      link: "https://jumbled-railway-172.notion.site/Database-dc321558f91e46b4ba583e8ffd34912c?pvs=73",
    },
    {
      id: 3,
      title: "Java 학습 노션",
      desc: "Java에 관한 기본적인 학습과 Java 학습에 있어 필요한 것을 모아둔 노션입니다.",
      link: "https://jumbled-railway-172.notion.site/Java-24788b73649880899c3bd5efcae2967c?pvs=73",
    },
    {
      id: 4,
      title: "JavaScript 학습 노션",
      desc: "React를 사용하기 위한 JavaScript학습 노션입니다.",
      link: "https://jumbled-railway-172.notion.site/JavaScript-1d988b7364988193bbffcd5f69cf1dee?pvs=73",
    },
    {
      id: 5,
      title: "나만의 GitHub정리",
      desc: "Git을 효율적으로 사용하기 위해 정리했습니다.",
      link: "https://jumbled-railway-172.notion.site/Git-GitHub-1d988b73649881f19764db15f9faccb9?pvs=73",
    },
    {
      id: 6,
      title: "더 많은 정보는 해당 노션에 모여있습니다!",
      desc: "해당 노션은 저의 개인적인 공부 목적이 담긴 노션 주소입니다.",
      link: "https://jumbled-railway-172.notion.site/1d988b73649880088ad4cb8408d8ba82?v=1d988b7364988068b142000cbc84ce00",
    },
  ];

  useEffect(() => {
    if (isPaused || mainProjects.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === mainProjects.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, currentSlide, mainProjects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === mainProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? mainProjects.length - 1 : prev - 1
    );
  };

  return (
    <ProjectsWrapper>
      <header className="header">
        <h1 className="title">Featured Projects</h1>
        <p className="subtitle">
          핵심 역량을 집중하여 개발한 주요 프로젝트입니다.
        </p>
      </header>

      {/* Main Carousel */}
      <CarouselContainer
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <ArrowButton direction="left" onClick={prevSlide}>
          <FaChevronLeft />
        </ArrowButton>

        <div className="window">
          <div
            className="flex-box"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {mainProjects.map((project) => (
              <SlideCard key={project.id}>
                <div className="img-box">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="no-img">No Image</div>
                  )}
                </div>
                <div className="info-box">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tags">
                    {project.tech.map((t, i) => (
                      <span key={i}>#{t}</span>
                    ))}
                  </div>

                  <div className="btn-group">
                    {project.links.front && (
                      <a
                        href={project.links.front}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub /> FE Code
                      </a>
                    )}
                    {project.links.back && (
                      <a
                        href={project.links.back}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub /> BE Code
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="demo"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </SlideCard>
            ))}
          </div>
        </div>

        <ArrowButton direction="right" onClick={nextSlide}>
          <FaChevronRight />
        </ArrowButton>

        <div className="indicators">
          {mainProjects.map((_, idx) => (
            <div
              key={idx}
              className={`dot ${currentSlide === idx ? "active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </CarouselContainer>

      <header className="header" style={{ marginTop: "100px" }}>
        <h2 className="title" style={{ fontSize: "2rem" }}>
          Other Experience
        </h2>
        <p className="subtitle">
          기술적 기초를 다지기 위해 진행한 프로젝트들입니다.
        </p>
      </header>

      <SmallGrid>
        {otherProjects.map((project) => (
          <SmallCard key={project.id}>
            <div className="top-row">
              <FaFolder className="folder-icon" />
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="link-icon"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            <div className="small-tags">{project.tech}</div>
          </SmallCard>
        ))}
      </SmallGrid>

      <header className="header" style={{ marginTop: "100px" }}>
        <h2 className="title" style={{ fontSize: "2rem" }}>
          Study & Archive
        </h2>
        <p className="subtitle">꾸준한 학습과 기록을 통해 성장을 증명합니다.</p>
      </header>

      <SmallGrid>
        {studyLinks.map((study) => (
          <SmallCard key={study.id}>
            <div className="top-row">
              {/* Notion 아이콘 적용 (없으면 FaBook 사용) */}
              <SiNotion className="folder-icon" style={{ color: "#000" }} />
              <a
                href={study.link}
                target="_blank"
                rel="noreferrer"
                className="link-icon"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
            <h4>{study.title}</h4>
            <p>{study.desc}</p>
            <div className="small-tags" style={{ color: "#666" }}>
              Notion Page
            </div>
          </SmallCard>
        ))}
      </SmallGrid>

      <div style={{ marginBottom: "100px" }}></div>
    </ProjectsWrapper>
  );
};

export default Projects;
