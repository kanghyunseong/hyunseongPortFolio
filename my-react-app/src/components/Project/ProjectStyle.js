import styled, { css } from "styled-components";

export const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: var(--space-xl) auto;
  padding: 0 var(--space-sm);
  font-family: var(--font-body);

  .header {
    text-align: center;
    margin-bottom: var(--space-md);
  }
  .title {
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 800;
    color: var(--color-text);
    letter-spacing: -0.03em;
    font-family: var(--font-heading);
  }
  .subtitle {
    color: var(--color-text-muted);
    margin-top: var(--space-sm);
    font-size: 1.1rem;
    line-height: 1.6;
  }

  .section-spaced {
    margin-top: var(--space-xl);
  }
  .title--secondary {
    font-size: clamp(1.5rem, 3vw, 2rem) !important;
  }
  .bottom-spacer {
    height: var(--space-xl);
  }

  @media (max-width: 768px) {
    margin: var(--space-lg) auto;
    .title {
      font-size: 1.75rem;
    }
    .subtitle {
      font-size: 1rem;
    }
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 920px;
  margin: 0 auto;

  .window {
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    border: 1px solid var(--color-border);
    background: #fff;
  }

  .flex-box {
    display: flex;
    width: 100%;
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .indicators {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: var(--space-md);
  }
  .dot {
    width: 10px;
    height: 10px;
    background: var(--color-border);
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.25s ease, background 0.25s ease;
  }
  .dot.active {
    background: var(--color-primary);
    transform: scale(1.25);
    box-shadow: 0 0 0 2px rgba(255, 107, 107, 0.3);
  }
`;

export const SlideCard = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 460px;
  }

  .img-box {
    flex: 0 0 48%;
    background: var(--color-bg-alt);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 220px;
    @media (min-width: 768px) {
      height: 100%;
      flex: 0 0 44%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    &:hover img {
      transform: scale(1.03);
    }
    .no-img {
      color: var(--color-text-muted);
      font-weight: 600;
    }
  }

  .info-box {
    flex: 1;
    padding: var(--space-md);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 0;
    overflow-y: auto;
  }
  .info-box h3 {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 12px;
    color: var(--color-text);
    font-family: var(--font-heading);
  }
  .info-box p {
    color: var(--color-text-muted);
    line-height: 1.6;
    margin-bottom: var(--space-sm);
    word-break: keep-all;
    font-size: 0.95rem;
  }
  .info-box .tags {
    margin-bottom: var(--space-sm);
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .info-box .tags span {
    color: var(--color-primary);
    font-weight: 600;
    font-size: 0.8rem;
    padding: 4px 10px;
    background: rgba(255, 107, 107, 0.08);
    border-radius: 999px;
  }
  .info-box .btn-group {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    flex-shrink: 0;
    margin-top: auto;
    padding-top: 4px;
  }
  .info-box .btn-group button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 10px 18px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 0.9rem;
    transition: all 0.25s ease;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    background: #fff;
    cursor: pointer;
    font-family: var(--font-body);
  }
  .info-box .btn-group button:hover {
    background: var(--color-primary);
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(255, 107, 107, 0.35);
  }
  .info-box .btn-group a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 10px 18px;
    border-radius: 12px;
    font-weight: 700;
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.25s ease;
    border: 1px solid var(--color-border);
    color: var(--color-text);
    background: #fff;
    font-family: var(--font-body);
  }
  .info-box .btn-group a:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .info-box {
      padding: var(--space-sm);
    }
    .info-box h3 {
      font-size: 1.35rem;
    }
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-sm);
  z-index: 9999;
  overflow: auto;
`;

export const ModalContainer = styled.div`
  width: min(900px, 100%);
  max-height: min(85vh, 800px);
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: var(--space-sm) var(--space-md);
  border-bottom: 1px solid var(--color-border);
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-text);
  line-height: 1.3;
  font-family: var(--font-heading);
`;

export const ModalCloseButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  background: #fff;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  transition: all 0.2s ease;
  font-size: 1.2rem;
  &:hover {
    background: var(--color-bg-alt);
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
`;

export const ModalBody = styled.div`
  padding: var(--space-md);
  overflow: auto;
  flex: 1;
  min-height: 0;
  .hero-img {
    width: 100%;
    height: 300px;
    border-radius: 16px;
    overflow: hidden;
    background: var(--color-bg-alt);
    margin-bottom: var(--space-md);
    border: 1px solid var(--color-border);
  }
  .hero-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    .hero-img {
      height: 200px;
    }
  }
`;

export const ModalSection = styled.section`
  & + & {
    margin-top: var(--space-md);
  }
  h4 {
    margin: 0 0 10px;
    font-size: 1rem;
    font-weight: 800;
    color: var(--color-text);
    font-family: var(--font-heading);
  }
  p {
    margin: 0;
    color: var(--color-text-muted);
    line-height: 1.7;
    word-break: keep-all;
    white-space: pre-wrap;
  }
  ul {
    margin: 0;
    padding-left: 20px;
    color: var(--color-text-muted);
    line-height: 1.7;
  }
`;

export const ModalTagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ModalTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 107, 107, 0.08);
  border: 1px solid rgba(255, 107, 107, 0.2);
  color: var(--color-primary);
  font-weight: 700;
  font-size: 0.85rem;
`;

export const ModalLinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border-radius: 12px;
    font-weight: 700;
    text-decoration: none;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    transition: all 0.2s ease;
    background: #fff;
    font-family: var(--font-body);
  }
  a:hover {
    background: var(--color-primary);
    color: #fff;
    transform: translateY(-2px);
  }
  a.demo {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
  a.demo:hover {
    background: var(--color-primary);
    color: #fff;
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border: 1px solid var(--color-border);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;
  color: var(--color-text);
  font-size: 1rem;

  &:hover {
    background: var(--color-primary);
    color: #fff;
    border-color: var(--color-primary);
    transform: translateY(-50%) scale(1.08);
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.3);
  }

  ${(props) =>
    props.direction === "left" &&
    css`
      left: -52px;
    `}
  ${(props) =>
    props.direction === "right" &&
    css`
      right: -52px;
    `}

  @media (max-width: 1000px) {
    width: 38px;
    height: 38px;
    background: rgba(255, 255, 255, 0.95);
    ${(props) =>
      props.direction === "left" &&
      css`
        left: 12px;
      `}
    ${(props) =>
      props.direction === "right" &&
      css`
        right: 12px;
      `}
  }
`;

export const SmallGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-sm);
  width: 100%;
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const SmallCard = styled.div`
  background: #fff;
  padding: var(--space-md);
  border-radius: 16px;
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 107, 107, 0.3);
    box-shadow: 0 12px 28px rgba(255, 107, 107, 0.1);
  }

  .top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
  }
  .top-row .folder-icon {
    font-size: 1.75rem;
    color: var(--color-primary);
  }
  .top-row .link-icon {
    color: var(--color-text-muted);
    font-size: 1.1rem;
    transition: color 0.2s;
  }
  .top-row .link-icon:hover {
    color: var(--color-primary);
  }
  h4 {
    margin-bottom: 10px;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--color-text);
    font-family: var(--font-heading);
  }
  p {
    font-size: 0.9rem;
    color: var(--color-text-muted);
    line-height: 1.55;
    margin-bottom: 14px;
  }
  .small-tags {
    font-size: 0.85rem;
    color: var(--color-primary);
    font-weight: 600;
  }

  @media (max-width: 480px) {
    padding: var(--space-sm);
  }
`;

export const ResumeBanner = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #fff 0%, rgba(255, 107, 107, 0.04) 100%);
  border: 2px solid rgba(255, 107, 107, 0.3);
  border-radius: 20px;
  padding: var(--space-md) var(--space-lg);
  text-decoration: none;
  color: var(--color-text);
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(255, 107, 107, 0.08);
  max-width: 900px;
  margin: 0 auto;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--color-primary);
    box-shadow: 0 12px 32px rgba(255, 107, 107, 0.15);
  }

  .icon-box {
    font-size: 2.5rem;
    color: var(--color-primary);
    display: flex;
    align-items: center;
    margin-right: var(--space-md);
  }
  .text-box {
    flex: 1;
  }
  .text-box h3 {
    font-size: 1.3rem;
    font-weight: 800;
    margin-bottom: 6px;
    color: var(--color-text);
    font-family: var(--font-heading);
  }
  .text-box p {
    color: var(--color-text-muted);
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
  }
  .arrow-box {
    font-size: 1.2rem;
    color: var(--color-border);
    transition: all 0.3s ease;
  }
  &:hover .arrow-box {
    color: var(--color-primary);
    transform: translateX(6px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: var(--space-md) var(--space-sm);
    .icon-box {
      margin-right: 0;
      margin-bottom: var(--space-sm);
      font-size: 2.25rem;
    }
    .text-box {
      margin-bottom: var(--space-sm);
    }
    .text-box h3 {
      font-size: 1.2rem;
    }
    .arrow-box {
      transform: rotate(90deg);
    }
    &:hover .arrow-box {
      transform: rotate(90deg) translateY(4px);
    }
  }
`;
