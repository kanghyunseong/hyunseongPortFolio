import styled from "styled-components";

// 기존 AboutWrapper 등은 그대로 두시고 아래 내용들을 추가/수정하세요.

export const AboutWrapper = styled.div`
  max-width: 1000px;
  margin: 100px auto;
  padding: 0 20px;
  /* 화면 중앙 정렬 및 여백 확보 */
  min-height: calc(100vh - 350px);
  text-align: left; /* 기본 정렬을 왼쪽으로 변경 (가독성 위해) */

  /* Intro 섹션만 중앙 정렬 */
  .intro {
    text-align: center;
    margin-bottom: 80px;
  }

  h1 {
    font-size: 2.2rem;
    margin-bottom: 20px;
    word-break: keep-all; /* 단어 단위 줄바꿈 */
  }

  /* 공통 섹션 제목 스타일 */
  h3 {
    font-size: 1.8rem;
    margin-bottom: 30px;
    color: #007bff;
    text-align: center; /* 제목은 중앙 정렬 */
    font-weight: 700;
  }

  p {
    line-height: 1.8;
    color: #555;
    font-size: 1.05rem;
  }

  /* Information 섹션은 중앙 정렬이 예쁠 수 있음 */
  .info {
    text-align: left;
    margin-top: 80px;
    h3 {
      text-align: left;
      border-bottom: 2px solid #eee;
      padding-bottom: 10px;
    }
  }
`;

// [NEW] 스토리 섹션 스타일
export const StorySection = styled.section`
  margin-bottom: 80px;
  background-color: #f8f9fa; /* 은은한 배경색 */
  padding: 40px;
  border-radius: 15px;

  p {
    margin-bottom: 15px;
    text-align: center; /* 스토리 본문 중앙 정렬 (원하면 left로 변경) */
    word-break: keep-all;
  }
  strong {
    color: #333;
    font-weight: 700;
  }
`;

// [NEW] 업무 스타일 리스트 스타일
export const StyleList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto; /* 중앙 배치 */

  li {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #444;

    .check-icon {
      color: #007bff; /* 파란색 체크 아이콘 */
      font-size: 1.4rem;
      margin-top: 3px;
      flex-shrink: 0;
    }

    strong {
      color: #222;
      font-weight: 700;
      margin-right: 5px;
    }
  }
`;

// 기존 ValueGrid, ValueCard, InfoList는 그대로 유지...
export const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ValueCard = styled.div`
  padding: 30px;
  background: #fff; /* 배경 흰색 */
  border: 1px solid #eee; /* 테두리 추가 */
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    border-color: #007bff;
  }

  .icon {
    font-size: 2rem;
    color: #007bff;
    margin-bottom: 15px;
  }
  h4 {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }
  p {
    font-size: 0.95rem;
    color: #666;
  }
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 15px;
    font-size: 1.1rem;
    display: flex;
    align-items: center; /* 세로 중앙 정렬 */
    flex-wrap: wrap;
    gap: 10px;
  }
  strong {
    color: #333;
    min-width: 100px; /* 라벨 너비 고정 */
    font-weight: 700;
  }
`;
