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
  }
  .subtitle {
    font-size: 1.15rem;
    color: #666;
    margin-top: 15px;
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
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
`;
export const SkillCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  border: 1px solid #f1f1f1;
  transition: all 0.3s ease;

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
    height: 40px;
  }

  .progress-bar {
    width: 100%;
    height: 6px;
    background: #f0f0f0;
    border-radius: 10px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    border-radius: 10px;
  }
`;
