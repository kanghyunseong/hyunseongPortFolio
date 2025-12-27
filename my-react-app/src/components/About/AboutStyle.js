import styled from "styled-components";

export const AboutWrapper = styled.div`
  max-width: 1000px;
  margin: 100px auto;
  padding: 0 20px;
  min-height: calc(100vh - 350px);
  text-align: left;

  /* Intro 섹션만 중앙 정렬 */
  .intro {
    text-align: center;
    margin-bottom: 80px;
  }

  h1 {
    font-size: 2.2rem;
    margin-bottom: 20px;
    word-break: keep-all;
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 30px;
    color: #007bff;
    text-align: center;
    font-weight: 700;
  }

  p {
    line-height: 1.8;
    color: #555;
    font-size: 1.05rem;
  }

  .info {
    text-align: left;
    margin-top: 80px;
    h3 {
      text-align: left;
      border-bottom: 2px solid #eee;
      padding-bottom: 10px;
    }
  }

  /* 📱 모바일 반응형 추가 (768px 이하) */
  @media (max-width: 768px) {
    margin: 60px auto; /* 상단 여백 줄임 */

    h1 {
      font-size: 1.8rem; /* 폰트 사이즈 줄임 */
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 20px;
    }

    .intro {
      margin-bottom: 50px;
    }

    .info {
      margin-top: 50px;
    }
  }
`;

export const StorySection = styled.section`
  margin-bottom: 80px;
  background-color: #f8f9fa;
  padding: 40px;
  border-radius: 15px;

  p {
    margin-bottom: 15px;
    text-align: center;
    word-break: keep-all;
  }
  strong {
    color: #333;
    font-weight: 700;
  }

  /* 📱 모바일 반응형 추가 */
  @media (max-width: 768px) {
    padding: 25px; /* 패딩 줄임 */
    margin-bottom: 50px;

    p {
      text-align: left; /* 모바일에서는 긴 글을 왼쪽 정렬이 읽기 편할 수 있음 (선택사항) */
      font-size: 1rem;
    }
  }
`;

export const StyleList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;

  li {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #444;

    .check-icon {
      color: #007bff;
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

  /* 📱 모바일 반응형 추가 */
  @media (max-width: 768px) {
    li {
      font-size: 1rem;
      gap: 10px;
    }
    .check-icon {
      font-size: 1.2rem;
      margin-top: 2px;
    }
  }
`;

export const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  /* 📱 모바일 반응형 (기존에 있던 것 유지) */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1줄로 변경 */
  }
`;

export const ValueCard = styled.div`
  padding: 30px;
  background: #fff;
  border: 1px solid #eee;
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
    margin-bottom: 20px;
    font-size: 1.1rem;
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }

  strong {
    min-width: 120px;
    font-weight: 700;
    color: #333;
    flex-shrink: 0;
    line-height: 1.6;
  }

  .text-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: #555;
    line-height: 1.6;
  }

  a {
    transition: color 0.2s;
    &:hover {
      color: #007bff;
    }
  }

  /* 📱 모바일 반응형 추가 (핵심 수정) */
  @media (max-width: 768px) {
    li {
      flex-direction: column; /* 라벨과 내용을 세로로 배치 */
      gap: 5px; /* 간격 좁힘 */
    }

    strong {
      min-width: auto; /* 고정 너비 해제 */
      margin-bottom: 5px;
      font-size: 1.15rem; /* 라벨을 조금 더 크게 강조 */
    }

    .text-content {
      padding-left: 0; /* 들여쓰기 제거 */
    }
  }
`;
