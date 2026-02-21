import styled from "styled-components";

export const SkillsWrapper = styled.div`
  max-width: 1000px;
  margin: var(--space-xl) auto;
  padding: 0 var(--space-sm);
  font-family: var(--font-body);

  .header {
    text-align: center;
    margin-bottom: var(--space-lg);
  }
  .title {
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 800;
    color: var(--color-text);
    letter-spacing: -0.03em;
    line-height: 1.2;
    font-family: var(--font-heading);
  }
  .subtitle {
    font-size: 1.1rem;
    color: var(--color-text-muted);
    margin-top: var(--space-sm);
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    margin: var(--space-lg) auto;
    .header {
      margin-bottom: var(--space-md);
    }
    .title {
      font-size: 1.75rem;
    }
    .subtitle {
      font-size: 1rem;
    }
  }
`;

export const SkillSection = styled.section`
  margin-bottom: var(--space-lg);

  .category-title {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-size: 1.35rem;
    font-weight: 700;
    margin-bottom: var(--space-md);
    color: var(--color-text);
    font-family: var(--font-heading);

    svg {
      color: var(--color-primary);
      font-size: 1.25rem;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: var(--space-md);
    .category-title {
      font-size: 1.2rem;
      margin-bottom: var(--space-sm);
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-sm);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const SkillCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: var(--space-sm);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  border: 1px solid var(--color-border);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(255, 107, 107, 0.12);
    border-color: rgba(255, 107, 107, 0.25);
  }

  .card-top {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }

  .skill-icon {
    font-size: 2rem;
    margin-right: 14px;
    flex-shrink: 0;
  }

  .skill-name-area {
    flex: 1;
    min-width: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 8px;
  }

  .skill-name {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--color-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .skill-percent {
    font-size: 0.85rem;
    color: var(--color-primary);
    font-weight: 800;
    flex-shrink: 0;
  }

  .skill-desc {
    font-size: 0.9rem;
    color: var(--color-text-muted);
    line-height: 1.55;
    margin-bottom: 16px;
    min-height: 2.8em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .progress-bar {
    width: 100%;
    height: 6px;
    background: var(--color-border);
    border-radius: 999px;
    overflow: hidden;
    margin-top: auto;
  }

  .progress-fill {
    height: 100%;
    border-radius: 999px;
    transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }

  @media (max-width: 768px) {
    padding: 20px;
    .skill-desc {
      min-height: auto;
      -webkit-line-clamp: 3;
    }
    .skill-icon {
      font-size: 1.75rem;
    }
    &:hover {
      transform: none;
    }
  }
`;
