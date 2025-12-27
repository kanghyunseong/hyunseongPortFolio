import styled from "styled-components";

export const Nav = styled.nav`
  height: 70px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 100;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
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
  }

  p {
    font-size: 1.2rem;
    color: #64748b;
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
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin-left: 200px;
  margin-top: 50px;
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

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 30px;
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
`;

export const ContactLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 25px;

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
`;

export const ActionButton = styled.a`
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;

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
export const ServiceSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 20px;
    .date {
      min-width: auto;
    }
  }
`;
