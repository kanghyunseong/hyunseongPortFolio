import styled from "styled-components";

// --- Nav Styles ---
export const Nav = styled.nav`
  height: 70px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* 모바일: 네비게이션 높이 자동 조절 및 패딩 수정 */
  @media (max-width: 768px) {
    height: auto;
    padding: 10px 0;

    .content {
      flex-direction: column;
      gap: 15px;
    }
  }
`;

export const Logo = styled.div`
  font-weight: 800;
  font-size: 1.5rem;
  color: #2563eb;
  cursor: pointer;
  letter-spacing: -1px;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;

  li a {
    font-size: 0.95rem;
    font-weight: 500;
    color: #475569;
    transition: 0.3s;

    &:hover {
      color: #2563eb;
    }
  }

  /* 모바일: 메뉴 간격 좁힘 */
  @media (max-width: 768px) {
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;

    li a {
      font-size: 0.9rem;
    }
  }
`;

// --- Header Styles ---
export const HeaderSection = styled.header`
  padding: 120px 0;
  background: linear-gradient(to bottom, #f8fafc, #ffffff);
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 24px;
    letter-spacing: -1.5px;
    line-height: 1.2;
  }

  p {
    font-size: 1.2rem;
    color: #64748b;
    padding: 0 20px; /* 텍스트가 화면 끝에 붙지 않도록 */
  }

  span.highlight {
    color: #2563eb;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 8px;
      background: rgba(37, 99, 235, 0.1);
      z-index: -1;
    }
  }

  /* 모바일: 헤더 패딩 및 폰트 사이즈 축소 */
  @media (max-width: 768px) {
    padding: 80px 0;

    h1 {
      font-size: 2rem;
      margin-bottom: 16px;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin-left: 200px; /* 기존 PC 레이아웃 */
  margin-top: 50px;

  /* 태블릿 및 모바일: 고정 마진 제거 후 중앙 정렬 */
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
  border: 5px solid #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  /* 모바일: 이미지 크기 약간 축소 */
  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

export const ProfileAlt = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-top: 20px;
  text-align: center;
`;

export const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 80px 20px;
  max-width: 1000px;
  margin: 0 auto;

  /* 모바일: 세로 배치 및 간격 축소 */
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
    padding: 50px 20px;
  }
`;

export const DescriptionBox = styled.div`
  flex: 1;

  h2 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: #1e293b;
  }

  .title {
    font-size: 1.2rem;
    color: #2563eb;
    font-weight: 600;
    margin-bottom: 20px;
  }

  p {
    line-height: 1.7;
    color: #475569;
    margin-bottom: 15px;
    word-break: keep-all;
  }

  /* 모바일: 폰트 사이즈 조절 */
  @media (max-width: 768px) {
    h2 {
      font-size: 1.8rem;
    }

    /* 모바일에서 버튼 그룹 중앙 정렬 */
    div {
      justify-content: center;
    }
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 25px;

  /* 모바일에서 링크 중앙 정렬 */
  @media (max-width: 768px) {
    justify-content: center;
  }

  a {
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    transition: 0.3s;
    border: 1px solid #e2e8f0;

    &.primary {
      background: #2563eb;
      color: white;
      border: none;
      &:hover {
        background: #1d4ed8;
      }
    }

    &.outline {
      background: white;
      color: #475569;
      &:hover {
        background: #f8fafc;
      }
    }
  }
`;

export const HashTag = styled.span`
  background-color: #f1f3f6;
  color: #64748b;
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: 0.3s;
  cursor: default;

  &:hover {
    background-color: #e2e8f0;
    color: #2563eb;
    transform: translateY(-2px);
  }
`;

export const ServiceSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px; /* 좌우 여백 추가 */

  /* 태블릿: 2열 */
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 모바일: 1열 */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ServiceCard = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }

  h4 {
    margin: 15px 0;
    color: #007bff;
  }
  p {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.6;
  }
`;

export const TimelineSection = styled.section`
  padding: 80px 20px;
  background-color: #ffffff;
  max-width: 900px;
  margin: 0 auto;

  /* 모바일: 패딩 축소 */
  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

export const TimelineItem = styled.div`
  display: flex;
  margin-bottom: 40px;
  border-left: 2px solid #007bff;
  padding-left: 30px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -9px;
    top: 0;
    width: 16px;
    height: 16px;
    background-color: #007bff;
    border-radius: 50%;
    border: 3px solid #fff;
    box-shadow: 0 0 0 2px #007bff;
  }

  .date {
    font-size: 0.95rem;
    color: #007bff;
    font-weight: bold;
    min-width: 150px;
    margin-bottom: 8px;
    flex-shrink: 0; /* 날짜가 줄어들지 않도록 고정 */
  }

  h4 {
    margin-bottom: 10px;
    font-size: 1.25rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
  }

  /* 모바일: 날짜와 내용을 상하 배치 */
  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 20px;

    .date {
      min-width: auto;
      margin-bottom: 5px;
    }
  }
`;

export const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 3rem 1rem;
  margin-top: auto;
  border-top: 1px solid #333;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  .social-links {
    margin-bottom: 1.5rem;

    a {
      font-size: 1.5rem;
      color: #ccc;
      margin: 0 15px;
      transition: color 0.3s ease;

      &:hover {
        color: #007bff;
      }
    }
  }

  /* 모바일: 소셜 링크 간격 조절 */
  @media (max-width: 480px) {
    .social-links a {
      margin: 0 10px;
      font-size: 1.2rem;
    }
  }

  .description {
    font-size: 1rem;
    color: #888;
    margin-bottom: 0.5rem;
  }

  .copyright {
    font-size: 0.85rem;
    color: #666;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  /* 모바일: 버튼 중앙 정렬 및 랩핑 */
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const ActionButton = styled.a`
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  display: inline-block; /* a태그 패딩 적용 위해 */

  &.primary {
    background-color: #007bff;
    color: white;
    &:hover {
      background-color: #0056b3;
    }
  }

  &.secondary {
    border: 1px solid #007bff;
    color: #007bff;
    &:hover {
      background-color: #f0f7ff;
    }
  }
`;
