import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaFolder,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaUserTie, // 이력서 아이콘
} from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import ProjectModal from "./ProjectModal";

import {
  ProjectsWrapper,
  CarouselContainer,
  SlideCard,
  ArrowButton,
  SmallGrid,
  SmallCard,
  ResumeBanner, // 스타일 파일에 추가할 컴포넌트
} from "./ProjectStyle";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // 1. 메인 프로젝트 데이터
  const mainProjects = [
    {
      id: 1,
      title: "공유 전기차 커뮤니티 서비스",
      description: `공유 전기차 플랫폼 Share EV 입니다.
Share EV는 회원들 간 전기차를 공유하여 탄소 절감을 목표로 하는 서비스입니다.`,
      tech: [
        "React",
        "Vite",
        "Chart.js",
        "Java",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "MyBatis",
        "Oracle",
        "AWS EC2",
        "AWS S3",
      ],
      image: "/img/shareEv.png",
      role: `담당 역할 : 팀장, Full-Stack 개발
- 맡은 파트/기여도 : 관리자 대시보드 기능 구현 / 60%
- 구현한 기능 범위 : 관리자 대시보드 기능 구현`,
      detail: `Share EV는 “회원 간 전기차 공유/대여”를 중심으로 예약/충전소/커뮤니티/관리자 기능을 제공하는 플랫폼입니다.

[Frontend - React/Vite]
- 관리자 대시보드: 회원/차량 통계 및 일일 예약 현황을 Chart.js로 시각화
- 관리 기능: 차량 등록/수정/삭제, 회원 관리, 커뮤니티 신고 처리 화면 구현
- 인증/권한: JWT 기반 인증 흐름을 전역 상태로 관리(Context API)하고 보호 라우팅 구조를 구성

[Backend - Spring Boot]
- 예약: 차량 조회/상세/예약 생성·수정·취소·반납 및 예약 히스토리
- 충전소: 공공데이터 API 연동 기반 충전소 검색/상세 + 리뷰
- 커뮤니티: 게시판/댓글/이미지 게시판/공지사항/신고
- 보안/데이터: Spring Security + JWT, MyBatis + Oracle 기반 데이터 처리`,
      features: [
        "전기차 공유/대여를 위한 차량 조회 및 예약(생성/수정/취소/반납)",
        "충전소 검색/상세(공공데이터 API) 및 리뷰 기능",
        "커뮤니티 게시판/댓글/신고 + 공지사항",
        "관리자 대시보드(차트) 및 관리 기능(차량/회원/신고 처리)",
        "JWT 기반 인증(일반/소셜 로그인 연동)",
      ],
      troubleshooting: `트러블 슈팅
1) 관리자 차트(MemberChart) 데이터 미표시
- 문제: 공통 응답에서 data를 잘못 참조해(res.data.data.data) 차트 데이터가 비어 보임
- 해결: 실제 응답 구조에 맞춰 res.data.data로 수정

2) 관리자 페이지 권한 검증(Protected URL)
- 문제: URL만 입력해도 접근되거나, 반대로 관리자임에도 접근이 막히는 케이스가 발생
- 해결: ProtectedURL 컴포넌트에서 UserRole(ROLE_ADMIN) 검증 로직을 추가하고 라우트에 적용

3) Spring Security 권한 메서드(hasRole vs hasAuthority)
- 문제: hasRole 사용 시 접두사 ROLE_ 처리로 ROLE 비교가 꼬여 권한 검증 실패
- 해결: hasAuthority로 변경하여 ROLE_ADMIN 문자열을 직접 비교하도록 수정

4) 예외 처리 분산(try/catch 난립)
- 문제: 예외 처리를 매번 try/catch로 작성해 중복/누락이 발생
- 해결: GlobalExceptionHandler로 전역 예외 처리 일원화

5) 공공데이터 API 응답 불규칙/누락
- 문제: 응답 속도/형식이 일정하지 않아 예외 케이스가 빈번
- 해결: 파싱/예외 처리 로직 강화로 안정성과 체감 성능 개선`,
      links: {
        front: "https://github.com/kanghyunseong/front_react",
        back: "https://github.com/kanghyunseong/backend_springboot",
      },
    },
    {
      id: 2,
      title: "TDB_Project",
      description: `TDB(Tablet Dispenser) 프로젝트는 아두이노/라즈베리파이/모바일 애플리케이션으로 구성된 하드웨어 연동 서비스입니다.
사용자가 알약을 직접 챙기지 않아도 디스펜서에 넣어두면, RFID로 유저를 확인하고 앱에서 지정한 스케줄에 맞춰 1일치 알약을 배출해 전용 케이스에 담도록 구현했습니다.`,
      tech: ["React Native", "TypeScript", "NestJS", "TypeORM", "MySQL", "QR", "RFID"],
      image: "/img/launch_screen.png",
      role: `프론트엔드 개발 및 서버 개발 (기여도 70%)
- 모바일 앱 기능 구현 및 서버 연동
- 디스펜서 연동(식별/상태/결과 동기화) 흐름 구성`,
      detail: `구성
- Mobile App(React Native): 사용자 인증, 약/영양제 등록/관리, 복용 스케줄 설정, 복용 기록/통계 확인 UI
- Device: RFID 기반 유저 확인 및 스케줄 기반 알약 배출
- Server(NestJS + MySQL): 사용자/가족/스케줄/기기 상태/복용 기록 API 제공 및 동기화

핵심 구현 포인트
- 가족(보호자–피보호자) 구조: 보호자 계정에서 자녀 계정으로 전환하며 데이터(약물/스케줄/기록)가 올바른 대상(targetUser)에 매칭되도록 설계
- 재고 관리: 약/영양제 재고 및 부족 시 경고 UI 제공
- 디스펜서 연동: QR/RFID 기반 식별 + 기기 상태/복용 결과를 서버와 동기화`,
      features: [
        "회원가입/로그인/로그아웃",
        "가족(보호자–피보호자) 구조 관리 및 계정 전환",
        "약/영양제 등록·수정·삭제 + 재고 관리/재고 부족 경고 UI",
        "요일/시간대별 복용 스케줄 등록 + 오늘/주간 일정 확인",
        "복용 완료 여부 기록 + 주간 통계 카드/가족 대시보드 시각화",
        "QR/RFID 기반 사용자 식별 및 디스펜서 상태/결과 동기화",
      ],
      troubleshooting: `트러블 슈팅
1) NestJS Entity 컬럼명 불일치
- 문제: 엔티티와 DB 컬럼명이 달라 쿼리/매핑 오류 발생
- 해결: DB 컬럼명과 엔티티 컬럼을 1:1로 매칭되도록 정리

2) 보호자→자녀 계정 전환 시 약물 데이터 타겟 불일치
- 문제: 보호자 계정에서 “내 약물”로 저장한 뒤 자녀 계정으로 전환해도 동일 데이터로 보이거나 누락 발생
- 원인: 그룹/역할(Role) 기반으로 targetUser를 확정해야 하는데 렌더링 과정에서 targetUser가 현재 사용자로 고정되는 문제가 발생
- 해결: GroupMembership(중간 테이블) + Member.groupId 구조로 DB 설계를 변경하고, role 비교로 targetUser PK를 확정해 올바른 유저 약물로 표시`,
      links: {
        front: "https://github.com/kanghyunseong/TDB_Project",
      },
    },
    {
      id: 3,
      title: "포트폴리오 웹사이트",
      description: `React와 Styled-Components로 제작한 개인 포트폴리오 웹사이트입니다.
별도 서버 없이 CSR로 구성하고, 캐러셀 같은 UI를 외부 라이브러리 없이 직접 구현해 번들 의존도를 낮추는 데 집중했습니다.`,
      tech: ["React", "Vite", "Styled-components"],
      image: "/img/image.png",
      role: `기획/디자인/개발 전 과정 단독
- UI 컴포넌트 설계 및 반응형 적용
- 프로젝트 섹션(캐러셀/상세보기) 구현`,
      detail: `구현 포인트
- Custom Carousel: React Hooks(useState/useEffect)로 Auto Play(4초), Hover Pause, Infinite Loop 직접 구현
- Component-driven: Styled-components로 컴포넌트 단위 스타일 캡슐화(전역 스타일 별도 관리)
- 라우팅/구성: 페이지 단위 섹션 구성(소개/스킬/프로젝트 등) 및 유지보수 가능한 구조로 정리

현재 프로젝트(이 포트폴리오)에서는 “프로젝트 상세보기 모달”로 상세 정보를 직관적으로 확인할 수 있도록 개선했습니다.`,
      features: [
        "프로젝트 섹션 커스텀 캐러셀(자동 재생/호버 일시정지/무한 루프)",
        "Styled-components 기반 컴포넌트 스타일링 + 반응형 대응",
        "프로젝트 상세보기 모달(스크롤/ESC/배경 클릭 닫기)",
        "정적 데이터 기반으로 섹션별 콘텐츠 관리",
      ],
      troubleshooting: `트러블 슈팅
- 자동 넘김(setInterval)과 사용자 버튼 클릭이 겹쳐 슬라이드가 2번 넘어가는 문제 → 타이머 제어(hover pause) + 의존성 관리로 충돌 방지
- 스타일/로직이 한 파일에 몰려 비대해지는 문제 → 스타일 파일 분리(ProjectStyle)로 가독성/유지보수성 개선`,
      links: {
        front: "https://github.com/kanghyunseong/hyunseongPortFolio",
        demo: "https://www.hyunseongkang.site",
      },
    },
    {
      id: 4,
      title: "Journey - 나만의 여행 모바일 애플리케이션",
      description:
        "지도 기반 장소 공유 모바일 앱으로, 방문 장소를 지도에 등록하고 사진/설명으로 피드를 작성하며 캘린더에서 날짜별 게시물을 확인할 수 있는 서비스입니다.",
      tech: [
        "React Native",
        "TypeScript",
        "NestJS",
        "react-navigation",
        "react-native-maps",
        "react-query",
        "Zustand",
      ],
      image: "/img/ic_launcher_round.png",
      role: `지도/피드/캘린더 기능 구현 및 상태관리 구조 설계
- Kakao 장소 검색 연동 및 권한 요청 UX
- 서버 상태(react-query)와 클라이언트 상태(Zustand) 역할 분리`,
      detail: `핵심 기능
- 지도 기반 장소 조회/등록(react-native-maps)
- Kakao 장소 검색 연동
- 피드 작성(이미지 업로드/미리보기)
- 캘린더 뷰로 날짜별 게시물 확인
- 카카오/애플 로그인 및 권한 요청 UX

상태관리 설계(README 기반)
- 서버 상태(게시물/장소 검색/상세 데이터): react-query로 로딩·에러·캐싱·refetch를 표준화
- 클라이언트 상태(로그인/선택 날짜/선택 장소 등): Zustand로 가볍게 전역 관리`,
      features: [
        "지도 기반 장소 조회 및 등록",
        "Kakao 장소 검색 연동",
        "피드 작성(이미지 업로드/미리보기)",
        "캘린더 뷰로 날짜별 게시물 확인",
        "카카오/애플 로그인 및 권한 요청 UX",
      ],
      troubleshooting: `트러블 슈팅
1) 카카오 로그인 실패
- 문제: 카카오 로그인 시 로그인이 되지 않음
- 원인: Kakao API에 콜백/리다이렉트 URL 미등록
- 해결: Kakao API 설정에 URL 등록하여 정상 로그인 처리

2) 화면 스크롤이 상단바 뒤로 들어가는 문제
- 문제: 화면 설계 시 스크롤이 디바이스 상단바 영역 뒤로 들어가 UI가 가려짐
- 해결: SafeAreaView로 전체를 감싸 레이아웃을 안전 영역 기준으로 재정렬

3) 데이터/상태 관리 복잡도
- Map/Feed/Calendar에서 동일 데이터를 사용하며 중복 호출/로딩 처리가 복잡 → react-query로 캐싱/동기화/에러 처리를 표준화
- 로그인/권한/선택 상태 등 UI 전역 상태 증가 → Zustand로 UI 상태를 분리`,
      links: {
        front: "https://github.com/kanghyunseong/Journey",
      },
    },
    {
      id: 5,
      title: "climateProject - 경기기후바이브 해커톤",
      description:
        "경기기후플랫폼 API를 활용해 지역별 기후 데이터를 지도 위에 시각화하고, 사용자 목적에 맞는 최적 지역을 추천하는 서비스(해커톤 프로토타입)입니다.",
      tech: [
        "TypeScript",
        "Vite",
        "Vercel",
        "React",
        "React-Leaflet",
        "GeoServer",
        "WMS",
        "WFS",
      ],
      image: "/img/climate.png",
      role: `프론트엔드 개발, 백엔드 개발 (기여도 100%)
- 지도 기반 시각화(WMS/WFS) 구현
- 목적별 추천 로직 설계 및 UI 연결`,
      detail: `프로젝트 핵심 구현
1) 경기기후플랫폼 WMS/WFS 기반 공간 데이터 엔진 구축
- WMS 레이어 오버레이: 기온/강수량/습도/토양 등 다양한 레이어를 지도 위에 실시간 렌더링하고, 사용자 인터랙션에 따라 즉시 교체
- WFS 상세 데이터 추출: 지도 클릭 시 WFS 엔드포인트에 CQL_FILTER를 포함한 요청을 보내 특정 좌표의 수치 데이터(JSON)를 정밀 추출

2) 목적별 지역 추천 알고리즘
- 사용자 목적(거주/농업/관광/투자 등)에 맞춰 기후 지표 가중치를 적용해 스코어링
- 탐색 중 실시간 점수화 및 시각화로 의사결정을 돕는 UX 제공

3) 프론트엔드 아키텍처/배포 최적화
- Vite + TypeScript로 개발 생산성과 타입 안정성 확보
- Vercel로 정적 배포(CI/CD) 구성`,
      features: [
        "지역별 기후 데이터 실시간 시각화(WMS 기반 지도 레이어)",
        "목적별 최적 지역 추천(가중치 기반 스코어링)",
        "인터랙티브 지도 클릭으로 상세 정보 확인(WFS)",
        "특정 좌표 기후 정보 실시간 조회(JSON)",
      ],
      troubleshooting: `트러블 슈팅
- 문제: API 호출 과정에서 데이터 타입 불일치로 데이터 처리 오류 발생
- 해결: API 호출부의 타입 정의와 실제 응답 값을 1:1로 맞춰 타입 불일치 문제를 해소`,
      links: {
        front: "https://github.com/kanghyunseong/climateProject",
      },
    },
  ];

  // 2. 기타 프로젝트 데이터
  const otherProjects = [
    {
      id: 1,
      title: "Mini Project - 우리만의 영화 사이트 제작",
      tech: "React, Spring legacy, Oracle Database",
      desc: "처음으로 시작한 웹 사이트입니다. 타 영화사를 모방하여 제작해본 팀 프로젝트입니다.",
      link: "https://github.com/ju1002/mini-cinema",
    },
    // {
    //   id: 2,
    //   title: "Climate Project - 경기기후바이브 해커톤",
    //   tech: "React, 경기기후API, Vercel",
    //   desc: "경기기후에 대한 바이브 해커톤 프로젝트입니다. 기후 문제점 해결을 위한 아이디어를 구현했습니다.",
    //   link: "https://github.com/kanghyunseong/climateProject",
    // },
  ];

  // 3. 이력서 데이터 (단독)
  const resumeLink =
    "https://jumbled-railway-172.notion.site/2ca88b73649880e7bb02de55056e8693?pvs=73";

  // 4. 학습 노션 데이터 (이력서 제외)
  const studyLinks = [
    {
      id: 1,
      title: "HTML, CSS 학습 노션",
      desc: "HTML, CSS 태그와 스타일링 기법을 정리한 노트입니다.",
      link: "https://jumbled-railway-172.notion.site/HTML-CSS-e6ad3ac316e340b7a8a463b5391b68f1?pvs=73",
    },
    {
      id: 2,
      title: "DataBase 학습 노션",
      desc: "RDBMS 기초와 SQL 쿼리 작성법을 정리했습니다.",
      link: "https://jumbled-railway-172.notion.site/Database-dc321558f91e46b4ba583e8ffd34912c?pvs=73",
    },
    {
      id: 3,
      title: "Java 학습 노션",
      desc: "Java 기초 문법부터 객체지향 프로그래밍까지 정리한 노트입니다.",
      link: "https://jumbled-railway-172.notion.site/Java-24788b73649880899c3bd5efcae2967c?pvs=73",
    },
    {
      id: 4,
      title: "JavaScript 학습 노션",
      desc: "React 학습의 기초가 되는 JS 핵심 개념 정리입니다.",
      link: "https://jumbled-railway-172.notion.site/JavaScript-1d988b7364988193bbffcd5f69cf1dee?pvs=73",
    },
    {
      id: 5,
      title: "Git/GitHub 학습 정리",
      desc: "협업을 위한 Git 명령어와 워크플로우 정리입니다.",
      link: "https://jumbled-railway-172.notion.site/Git-GitHub-1d988b73649881f19764db15f9faccb9?pvs=73",
    },
    {
      id: 6,
      title: "강현성의 개인적인 공부 파일이 담겨있는 노션 페이지입니다.",
      desc: "강현성의 개인 공부 노션 페이지입니다.",
      link: "https://jumbled-railway-172.notion.site/1d988b73649880088ad4cb8408d8ba82?v=1d988b7364988068b142000cbc84ce00&pvs=73",
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

  const openProject = (project) => setSelectedProject(project);
  const closeProject = () => setSelectedProject(null);

  return (
    <ProjectsWrapper>
      <header className="header">
        <h1 className="title">Featured Projects</h1>
        <p className="subtitle">
          핵심 역량을 집중하여 개발한 주요 프로젝트입니다.
        </p>
      </header>

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
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ cursor: "pointer" }}
                      onClick={() => openProject(project)}
                    />
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
                    <button type="button" onClick={() => openProject(project)}>
                      상세보기
                    </button>
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

      {/* ✅ [NEW] 이력서 강조 배너 (Resume Section) */}
      <div style={{ marginTop: "100px", marginBottom: "60px" }}>
        <ResumeBanner href={resumeLink} target="_blank" rel="noreferrer">
          <div className="icon-box">
            <FaUserTie />
          </div>
          <div className="text-box">
            <h3>강현성의 자세한 이력서와 포트폴리오가 궁금하시다면?</h3>
            <p>여기를 클릭해서 노션 페이지로 접속해주세요! 🚀</p>
          </div>
          <div className="arrow-box">
            <FaExternalLinkAlt />
          </div>
        </ResumeBanner>
      </div>

      {/* Study & Archive */}
      <header className="header">
        <h2 className="title" style={{ fontSize: "2rem" }}>
          Study & Archive
        </h2>
        <p className="subtitle">꾸준한 학습과 기록을 통해 성장을 증명합니다.</p>
      </header>

      <SmallGrid>
        {studyLinks.map((study) => (
          <SmallCard key={study.id}>
            <div className="top-row">
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

      <ProjectModal project={selectedProject} onClose={closeProject} />
    </ProjectsWrapper>
  );
};

export default Projects;
