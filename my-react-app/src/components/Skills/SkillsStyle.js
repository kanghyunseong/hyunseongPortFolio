import styled from "styled-components";

export const SkillsWrapper = styled.div`
  max-width: 1200px;
  margin: 120px auto;
  padding: 0 20px;

  .header {
    text-align: center;
    margin-bottom: 80px;
  }
  .title {
    font-size: 3rem;
    font-weight: 800;
    color: #1a1a1a;
    letter-spacing: -1px;
    line-height: 1.2;
  }
  .subtitle {
    font-size: 1.15rem;
    color: #666;
    margin-top: 15px;
  }

  /* 모바일: 여백 축소 및 폰트 사이즈 조절 */
  @media (max-width: 768px) {
    margin: 60px auto; /* 상하 여백 절반으로 축소 */

    .header {
      margin-bottom: 40px;
    }
    .title {
      font-size: 2rem;
    }
    .subtitle {
      font-size: 1rem;
    }
  }
`;

export const SkillSection = styled.section`
  margin-bottom: 70px;

  .category-title {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 30px;
    color: #333;
    gap: 12px;
    svg {
      color: #007bff;
    }
  }

  /* 모바일: 섹션 간격 및 제목 크기 조절 */
  @media (max-width: 768px) {
    margin-bottom: 50px;

    .category-title {
      font-size: 1.4rem;
      margin-bottom: 20px;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  /* PC: 최소 320px 유지 */
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;

  /* 태블릿 및 모바일 대응 */
  @media (max-width: 768px) {
    /* 화면이 좁아지면 카드가 너무 작아지지 않도록 유동적으로 조절 */
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }

  @media (max-width: 480px) {
    /* 아주 작은 화면에서는 1열로 보기 좋게 정렬 */
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const SkillCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  border: 1px solid #f1f1f1;
  transition: all 0.3s ease;
  display: flex; /* flex 추가: 내부 요소 정렬을 위해 */
  flex-direction: column; /* 세로 정렬 */

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  }

  .card-top {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .skill-icon {
    font-size: 2.2rem;
    margin-right: 15px;
  }

  .skill-name-area {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .skill-name {
    font-size: 1.2rem;
    font-weight: 700;
    color: #222;
  }
  .skill-percent {
    font-size: 0.9rem;
    color: #007bff;
    font-weight: 800;
  }

  .skill-desc {
    font-size: 0.9rem;
    color: #777;
    line-height: 1.5;
    margin-bottom: 20px;
    height: 40px; /* PC에서는 줄맞춤을 위해 높이 고정 */
    overflow: hidden;
  }

  .progress-bar {
    width: 100%;
    height: 6px;
    background: #f0f0f0;
    border-radius: 10px;
    overflow: hidden;
    margin-top: auto; /* 내용이 적어도 바닥에 붙도록 */
  }

  .progress-fill {
    height: 100%;
    border-radius: 10px;
  }

  /* 모바일 스타일 */
  @media (max-width: 768px) {
    padding: 20px;

    /* 모바일에서는 hover 효과 제거 (터치 시 들석거림 방지) */
    &:hover {
      transform: none;
    }

    .skill-desc {
      height: auto; /* 모바일에서는 텍스트 길이에 따라 높이 자동 조절 */
      min-height: auto;
      margin-bottom: 15px;
    }

    .skill-icon {
      font-size: 1.8rem; /* 아이콘 크기 약간 축소 */
    }
  }
`;
