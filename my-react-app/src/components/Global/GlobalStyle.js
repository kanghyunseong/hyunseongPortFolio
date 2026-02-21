import styled from "styled-components";

// --- Nav (1. 색상 통일, 6. 아이덴티티) ---
export const Nav = styled.nav`
  height: 72px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
  font-family: var(--font-heading);

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 var(--space-sm);
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 12px 0;
    .content {
      flex-direction: column;
      gap: 12px;
    }
  }
`;

export const Logo = styled.div`
  font-weight: 800;
  font-size: 1.4rem;
  color: var(--color-primary);
  cursor: pointer;
  letter-spacing: -0.5px;
  transition: color 0.2s;
  &:hover {
    color: var(--color-primary-dark);
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 28px;
  list-style: none;
  margin: 0;
  padding: 0;

  li a {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--color-text-muted);
    transition: color 0.2s;
    cursor: pointer;
    &:hover {
      color: var(--color-primary);
    }
  }

  @media (max-width: 768px) {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    li a {
      font-size: 0.9rem;
    }
  }
`;

// --- Header (최신 디자인) ---
export const HeaderSection = styled.header`
  padding: var(--space-xl) 0;
  background: linear-gradient(180deg, #fff 0%, var(--color-bg-alt) 100%);
  text-align: center;
  font-family: var(--font-heading);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -20%;
    width: 60%;
    height: 120%;
    background: radial-gradient(ellipse at center, rgba(255, 107, 107, 0.06) 0%, transparent 70%);
    pointer-events: none;
  }
  &::after {
    content: "";
    position: absolute;
    top: -30%;
    right: -10%;
    width: 40%;
    height: 80%;
    background: radial-gradient(ellipse at center, rgba(255, 142, 83, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }

  .container {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 var(--space-sm);
    position: relative;
    z-index: 1;
  }

  h1 {
    font-size: clamp(1.85rem, 4.5vw, 2.85rem);
    font-weight: 800;
    margin-bottom: var(--space-sm);
    letter-spacing: -0.04em;
    line-height: 1.35;
    color: var(--color-text);
  }

  h2 {
    font-size: clamp(1.05rem, 2.2vw, 1.2rem);
    font-weight: 500;
    color: var(--color-text-muted);
    line-height: 1.65;
  }

  span.highlight {
    color: var(--color-primary);
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 100%;
      height: 8px;
      background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
      opacity: 0.2;
      border-radius: 4px;
      z-index: -1;
    }
  }

  @media (max-width: 768px) {
    padding: var(--space-lg) 0;
    h1 {
      margin-bottom: var(--space-sm);
    }
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin-left: 200px;
  margin-top: 50px;

  @media (max-width: 960px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    width: 100%;
  }
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 107, 107, 0.08);
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 20px 48px rgba(255, 107, 107, 0.15), 0 0 0 1px rgba(255, 107, 107, 0.12);
  }

  @media (max-width: 480px) {
    width: 160px;
    height: 160px;
  }
`;

export const ProfileAlt = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-top: 20px;
  text-align: center;
`;

// --- About (최신 디자인) ---
export const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-lg);
  padding: var(--space-xl) var(--space-sm);
  max-width: 1000px;
  margin: 0 auto;
  background: var(--color-bg-alt);
  border-radius: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: var(--space-md);
    padding: var(--space-lg) var(--space-sm);
  }
`;

export const DescriptionBox = styled.div`
  flex: 1;
  font-family: var(--font-body);
  max-width: 560px;

  .label {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--color-primary);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 14px;
    padding: 8px 16px;
    background: rgba(255, 107, 107, 0.1);
    border: 1px solid rgba(255, 107, 107, 0.2);
    border-radius: 999px;
  }

  h2 {
    font-family: var(--font-heading);
    font-size: clamp(1.75rem, 3.5vw, 2.25rem);
    font-weight: 800;
    margin-bottom: 6px;
    color: var(--color-text);
    letter-spacing: -0.03em;
  }

  .job-title {
    font-size: 1.1rem;
    color: var(--color-primary);
    font-weight: 600;
    margin-bottom: var(--space-md);
  }

  .title {
    font-size: 1.2rem;
    color: var(--color-primary);
    font-weight: 600;
    margin-bottom: 20px;
  }

  h3 {
    font-family: var(--font-heading);
    margin-top: var(--space-md);
    margin-bottom: 14px;
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.02em;
  }

  p {
    line-height: 1.8;
    color: var(--color-text-muted);
    margin-bottom: 16px;
    word-break: keep-all;
    font-size: 0.98rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.75rem;
    }
    div {
      justify-content: center;
    }
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-top: var(--space-sm);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }

  a {
    padding: 10px 20px;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.25s ease;
    border: 1px solid var(--color-border);

    &.primary {
      background: var(--color-primary);
      color: white;
      border: none;
      &:hover {
        background: var(--color-primary-dark);
      }
    }

    &.outline {
      background: #fff;
      color: var(--color-text-muted);
      &:hover {
        background: var(--color-bg);
        color: var(--color-primary);
        border-color: var(--color-primary);
      }
    }
  }
`;

export const HashTag = styled.span`
  background: #fff;
  color: var(--color-text-muted);
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.25s ease;
  cursor: default;
  border: 1px solid var(--color-border);

  &:hover {
    background: rgba(255, 107, 107, 0.08);
    color: var(--color-primary);
    border-color: rgba(255, 107, 107, 0.25);
    transform: translateY(-2px);
  }
`;

// --- 메인 래퍼 ---
export const MainWrap = styled.div`
  width: 100%;
  background: #fff;
`;

// --- 섹션 공통 (최신 디자인) ---
export const SectionWrap = styled.section`
  padding: var(--space-xl) var(--space-sm);
  background: ${(props) => (props.alt ? "var(--color-bg-alt)" : "#fff")};
  position: relative;
`;

export const SectionTitle = styled.h3`
  font-family: var(--font-heading);
  text-align: center;
  margin-bottom: var(--space-lg);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  color: var(--color-text);
  letter-spacing: -0.03em;
  position: relative;
  display: inline-block;
  width: 100%;

  &::after {
    content: "";
    display: block;
    width: 48px;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
    border-radius: 4px;
    margin: 12px auto 0;
    opacity: 0.8;
  }
`;

// --- What I Do (최신 디자인) ---
export const ServiceSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 var(--space-sm);

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: var(--space-sm);
  }
`;

export const ServiceCard = styled.div`
  background: #fff;
  padding: var(--space-md) var(--space-sm);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, border-color 0.35s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(255, 107, 107, 0.12);
    border-color: rgba(255, 107, 107, 0.25);
  }

  h4 {
    margin: 18px 0 12px;
    font-family: var(--font-heading);
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--color-primary);
    letter-spacing: -0.02em;
  }

  p {
    font-size: 0.95rem;
    color: var(--color-text-muted);
    line-height: 1.7;
    margin: 0;
  }
`;

// --- Timeline (최신 디자인) ---
export const TimelineSection = styled.section`
  padding: var(--space-xl) var(--space-sm);
  background: linear-gradient(180deg, #fff 0%, var(--color-bg-alt) 100%);
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: var(--space-lg) var(--space-sm);
  }
`;

export const TimelineItem = styled.div`
  display: flex;
  margin-bottom: var(--space-md);
  border-left: 3px solid var(--color-primary);
  padding-left: 28px;
  position: relative;
  transition: border-color 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    left: -10px;
    top: 2px;
    width: 18px;
    height: 18px;
    background: var(--color-primary);
    border-radius: 50%;
    border: 4px solid #fff;
    box-shadow: 0 0 0 2px var(--color-primary), 0 4px 12px rgba(255, 107, 107, 0.25);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  &:hover {
    border-color: var(--color-primary-dark, #e85555);
  }
  &:hover::before {
    transform: scale(1.15);
    box-shadow: 0 0 0 2px var(--color-primary), 0 6px 20px rgba(255, 107, 107, 0.4);
  }

  .date {
    font-size: 0.9rem;
    color: var(--color-primary);
    font-weight: 700;
    min-width: 140px;
    margin-bottom: 6px;
    flex-shrink: 0;
  }

  h4 {
    margin-bottom: 8px;
    font-family: var(--font-heading);
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.02em;
  }

  p {
    font-size: 0.95rem;
    color: var(--color-text-muted);
    line-height: 1.7;
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 24px;
    .date {
      min-width: auto;
      margin-bottom: 4px;
    }
  }
`;

// --- Footer (1. 색상) ---
export const FooterContainer = styled.footer`
  background: #0f0f0f;
  color: #e2e8f0;
  padding: var(--space-lg) var(--space-sm) 32px;
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

export const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;

  .social-links {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    gap: var(--space-sm);

    a {
      font-size: 1.4rem;
      color: #94a3b8;
      transition: color 0.2s ease, transform 0.2s ease;

      &:hover {
        color: var(--color-primary);
        transform: scale(1.1);
      }
    }
  }

  .description {
    font-size: 0.95rem;
    color: var(--color-text-muted);
    margin-bottom: 8px;
  }

  .copyright {
    font-size: 0.85rem;
    color: #94a3b8;
    opacity: 0.9;
  }

  @media (max-width: 480px) {
    .social-links a {
      font-size: 1.25rem;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ActionButton = styled.a`
  padding: 10px 22px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
  display: inline-block;

  &.primary {
    background: var(--color-primary);
    color: white;
    border: none;
    &:hover {
      background: var(--color-primary-dark);
    }
  }

  &.secondary {
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    &:hover {
      background: rgba(255, 107, 107, 0.08);
    }
  }
`;
