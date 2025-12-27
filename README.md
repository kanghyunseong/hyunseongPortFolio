# 📘 Kang Hyun Seong - Portfolio Website

![Generic badge](https://img.shields.io/badge/Status-Active-green.svg)
![Generic badge](https://img.shields.io/badge/Version-1.0.0-blue.svg)

> **"기능을 넘어 사용자 경험을 설계하는 풀스택 개발자, 강현성의 포트폴리오입니다."**

React와 Styled-Components를 사용하여 제작한 개인 포트폴리오 웹사이트입니다.  
별도의 서버 없이 **클라이언트 사이드 렌더링(CSR)**만으로 효율적인 데이터 관리를 구현하였으며, 라이브러리 의존도를 낮추고 직접 구현하는 것에 초점을 맞추었습니다.

## 🔗 배포 주소 (Deployment)
> **[포트폴리오 바로가기 (Click)](https://kanghyunseong-portfolio.vercel.app)** > *(※ 위 링크는 예시입니다. 실제 Vercel 배포 주소로 수정해주세요)*

---

## 🛠️ Tech Stack

### Frontend
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/Styled Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black">

### Infrastructure & Tools
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white"> <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

---

## ✨ Key Features & Implementation

### 1. 🎠 Custom Carousel Slider (Projects Section)
* **구현 의도:** 무거운 라이브러리(`react-slick` 등)를 사용하지 않고, **React Hooks(`useState`, `useEffect`)**만으로 슬라이더 기능을 직접 구현하여 번들 사이즈를 줄였습니다.
* **주요 기능:**
    * **Auto Play:** 4초마다 자동으로 슬라이드가 넘어갑니다.
    * **Pause on Hover:** 사용자가 내용을 읽을 수 있도록 마우스를 올리면 슬라이드가 일시 정지됩니다.
    * **Infinite Loop:** 마지막 슬라이드에서 다시 첫 번째로 자연스럽게 순환합니다.

### 2. 📄 Dynamic Routing (Project Detail)
* **구현 내용:** `react-router-dom`의 `useParams`를 활용하여 단일 컴포넌트(`ProjectDetail.js`)로 여러 프로젝트의 상세 내용을 보여줍니다.
* **데이터 관리:** 별도의 백엔드 서버 없이 `src/data/projectData.js` 파일에 JSON 형식으로 데이터를 구조화하여 관리함으로써 유지보수성을 높였습니다.

### 3. 🎨 Component-Driven Design
* **Styled-components:** 컴포넌트 단위로 스타일을 캡슐화하여 재사용성을 높였습니다. (`GlobalStyle.js`로 전역 스타일 관리)
* **Responsive Layout:** 모바일 환경을 고려하여 `Media Query`를 적용한 반응형 웹으로 제작되었습니다.

---

## 📂 Folder Structure

```bash
src
├── components
│   ├── Main.js           # 메인 랜딩 (Intro & Timeline)
│   ├── About.js          # 자기소개 및 핵심 가치관
│   ├── Skills.js         # 기술 스택 시각화
│   ├── Projects.js       # 프로젝트 리스트 (Custom Carousel)
│   ├── ProjectDetail.js  # 프로젝트 상세 페이지 (Dynamic Route)
│   ├── Navbar.js         # 상단 네비게이션
│   └── Footer.js         # 하단 정보
├── data
│   └── projectData.js    # 프로젝트 정적 데이터 관리
├── styles
│   ├── GlobalStyle.js    # 전역 스타일 및 Reset CSS
│   ├── ProjectStyle.js   # 프로젝트 관련 스타일 분리
│   └── SkillsStyle.js    # 스킬 관련 스타일 분리
└── App.js                # 라우터 설정 및 레이아웃 구성


---

```
## 🔥 Trouble Shooting Experience

### 1. 캐러셀 자동 넘김과 사용자 인터랙션 충돌
* **문제:** `setInterval`로 구현한 오토플레이가 동작하는 도중 사용자가 이전/다음 버튼을 클릭하면, 슬라이드가 의도치 않게 두 번 넘어가는 현상 발생.
* **해결:** `useEffect`의 의존성 배열에 `currentSlide`를 추가하고, 마우스 호버 시(`onMouseEnter`) `isPaused` 상태를 `true`로 변경하여 타이머를 일시 정지시키는 로직을 추가하여 충돌을 방지했습니다.

### 2. 스타일 파일 비대화 문제
* **문제:** `Projects.js` 한 파일 내에 컴포넌트 로직과 `styled-components` 스타일 정의가 섞여 코드가 300줄 이상으로 길어짐.
* **해결:** `ProjectStyle.js` 파일을 별도로 생성하여 스타일 코드를 분리(Import)함으로써 가독성을 높이고 비즈니스 로직에 집중할 수 있는 구조로 리팩토링했습니다.

---

## 🚀 Getting Started

로컬 환경에서 이 프로젝트를 실행하려면 다음 명령어를 입력하세요.

```bash
# 1. Repository Clone
git clone [https://github.com/kanghyunseong/PortFolio.git](https://github.com/kanghyunseong/PortFolio.git)

# 2. Install Dependencies
npm install

# 3. Run Dev Server
npm run dev
