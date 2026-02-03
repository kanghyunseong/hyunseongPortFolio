import styled, { css } from "styled-components";

export const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: 100px auto;
  padding: 0 20px;

  .header {
    text-align: center;
    margin-bottom: 40px;
  }
  .title {
    font-size: 2.5rem;
    font-weight: 800;
    color: #333;
  }
  .subtitle {
    color: #888;
    margin-top: 10px;
  }

  /* 모바일: 전체 여백 및 폰트 사이즈 축소 */
  @media (max-width: 768px) {
    margin: 60px auto;

    .title {
      font-size: 2rem;
    }
    .subtitle {
      font-size: 0.9rem;
    }
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  /* 마스크 영역 */
  .window {
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid #eee;
    background: #fff;
  }

  /* 움직이는 트랙 */
  .flex-box {
    display: flex;
    width: 100%;
    transition: transform 0.5s ease-in-out;
  }

  /* 하단 점(Indicator) */
  .indicators {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;

    .dot {
      width: 10px;
      height: 10px;
      background: #ddd;
      border-radius: 50%;
      cursor: pointer;
      transition: 0.3s;
      &.active {
        background: #007bff;
        transform: scale(1.2);
      }
    }
  }
`;

export const SlideCard = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;

  /* PC 버전: 가로 배치 및 높이 고정 */
  @media (min-width: 768px) {
    flex-direction: row;
    height: 380px;
  }

  .img-box {
    flex: 1.2;
    background: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    /* 모바일: 이미지가 너무 길어지지 않도록 높이 제한 */
    height: 250px;
    @media (min-width: 768px) {
      height: auto; /* PC에서는 flex 부모 높이를 따름 */
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .no-img {
      color: #aaa;
      font-weight: bold;
    }
  }

  .info-box {
    flex: 1;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      font-size: 1.8rem;
      margin-bottom: 15px;
    }
    p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 20px;
      word-break: keep-all;
    }

    .tags {
      margin-bottom: 25px;
      span {
        color: #007bff;
        font-weight: bold;
        margin-right: 8px;
        font-size: 0.9rem;
      }
    }

    .btn-group {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;

      button {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 16px;
        border-radius: 8px;
        font-weight: bold;
        font-size: 0.9rem;
        transition: 0.2s;
        border: 1px solid #333;
        color: #333;
        background: #fff;
        cursor: pointer;

        &:hover {
          background: #333;
          color: #fff;
        }
      }

      a {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 16px;
        border-radius: 8px;
        font-weight: bold;
        text-decoration: none;
        font-size: 0.9rem;
        transition: 0.2s;
        border: 1px solid #333;
        color: #333;

        &:hover {
          background: #333;
          color: #fff;
        }

        &.demo {
          border-color: #007bff;
          color: #007bff;
          &:hover {
            background: #007bff;
            color: #fff;
          }
        }
      }
    }

    /* 모바일: 패딩 축소 및 폰트 조절 */
    @media (max-width: 768px) {
      padding: 20px;

      h3 {
        font-size: 1.5rem;
      }
      p {
        font-size: 0.95rem;
        margin-bottom: 15px;
      }
    }
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 9999;
  overflow: auto;
`;

export const ModalContainer = styled.div`
  width: min(900px, 100%);
  max-height: min(80vh, 800px);
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 20px;
  border-bottom: 1px solid #eee;
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 800;
  color: #222;
  line-height: 1.3;
`;

export const ModalCloseButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #333;
  transition: 0.15s;

  &:hover {
    background: #f3f4f6;
    border-color: #cfd6dd;
  }
`;

export const ModalBody = styled.div`
  padding: 18px 20px 24px;
  overflow: auto;
  flex: 1;
  min-height: 0;

  .hero-img {
    width: 100%;
    height: 320px;
    border-radius: 14px;
    overflow: hidden;
    background: #f1f1f1;
    margin-bottom: 18px;
    border: 1px solid #eee;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    .hero-img {
      height: 220px;
    }
  }
`;

export const ModalSection = styled.section`
  & + & {
    margin-top: 18px;
  }

  h4 {
    margin: 0 0 10px;
    font-size: 1rem;
    font-weight: 800;
    color: #222;
  }

  p {
    margin: 0;
    color: #666;
    line-height: 1.7;
    word-break: keep-all;
    white-space: pre-wrap;
  }

  ul {
    margin: 0;
    padding-left: 18px;
    color: #666;
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
  padding: 6px 10px;
  border-radius: 999px;
  background: #f0f7ff;
  border: 1px solid rgba(0, 123, 255, 0.2);
  color: #007bff;
  font-weight: 800;
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
    padding: 10px 14px;
    border-radius: 10px;
    font-weight: 800;
    text-decoration: none;
    border: 1px solid #333;
    color: #333;
    transition: 0.2s;
    background: #fff;

    &:hover {
      background: #333;
      color: #fff;
    }

    &.demo {
      border-color: #007bff;
      color: #007bff;
      &:hover {
        background: #007bff;
        color: #fff;
      }
    }
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border: 1px solid #ddd;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: 0.2s;
  color: #333;

  &:hover {
    background: #f8f9fa;
    transform: translateY(-50%) scale(1.1);
  }

  /* PC: 카드 바깥쪽에 위치 */
  ${(props) =>
    props.direction === "left" &&
    css`
      left: -50px;
    `}
  ${(props) =>
    props.direction === "right" &&
    css`
      right: -50px;
    `}

  /* 태블릿 및 모바일: 카드 안쪽으로 위치 이동 및 크기 조절 */
  @media (max-width: 1000px) {
    width: 35px;
    height: 35px;
    background: rgba(255, 255, 255, 0.9); /* 살짝 투명하게 */

    ${(props) =>
      props.direction === "left" &&
      css`
        left: 10px;
      `}
    ${(props) =>
      props.direction === "right" &&
      css`
        right: 10px;
      `}
  }
`;

export const SmallGrid = styled.div`
  display: grid;
  /* 모바일 호환성 향상: 최소 너비를 280px 정도로 줄여 작은 폰에서도 1열로 예쁘게 보이게 함 */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-content: center;
  gap: 25px;
  width: 100%;

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 아주 작은 화면에서는 무조건 1열 */
  }
`;

export const SmallCard = styled.div`
  background: #f9f9f9;
  padding: 25px;
  border-radius: 15px;
  transition: 0.3s;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-5px);
    border-color: #007bff;
    background: #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }

  .top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    .folder-icon {
      font-size: 1.8rem;
      color: #007bff;
    }
    .link-icon {
      color: #666;
      font-size: 1.1rem;
      &:hover {
        color: #007bff;
      }
    }
  }

  h4 {
    margin-bottom: 10px;
    font-size: 1.1rem;
    color: #333;
  }
  p {
    font-size: 0.85rem;
    color: #666;
    line-height: 1.5;
    margin-bottom: 15px;
    min-height: 40px;
  }
  .small-tags {
    font-size: 0.8rem;
    color: #007bff;
    font-weight: bold;
  }

  /* 모바일: 패딩 약간 축소 */
  @media (max-width: 480px) {
    padding: 20px;
    p {
      min-height: auto; /* 폰에서는 높이 맞춤 해제 */
    }
  }
`;

export const ResumeBanner = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border: 2px solid #007bff;
  border-radius: 20px;
  padding: 30px 40px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 123, 255, 0.1);
  max-width: 900px;
  margin: 0 auto;

  &:hover {
    transform: translateY(-5px);
    background: #f0f7ff;
    box-shadow: 0 10px 30px rgba(0, 123, 255, 0.2);
  }

  .icon-box {
    font-size: 3rem;
    color: #007bff;
    display: flex;
    align-items: center;
    margin-right: 20px;
  }

  .text-box {
    flex: 1;
    h3 {
      font-size: 1.4rem;
      font-weight: 800;
      margin-bottom: 8px;
      color: #333;
    }
    p {
      color: #666;
      font-size: 1rem;
      font-weight: 500;
    }
  }

  .arrow-box {
    font-size: 1.2rem;
    color: #ccc;
    transition: 0.3s;
  }

  &:hover .arrow-box {
    color: #007bff;
    transform: translateX(5px);
  }

  /* 모바일: 세로 정렬 및 텍스트 중앙 정렬 */
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 25px 20px;

    .icon-box {
      margin-right: 0;
      margin-bottom: 15px;
      font-size: 2.5rem;
    }

    .text-box {
      margin-bottom: 20px;
      h3 {
        font-size: 1.3rem;
      }
      p {
        font-size: 0.95rem;
      }
    }

    /* 모바일에서는 화살표가 아래로 회전하거나 숨김 처리 등을 고려할 수 있음 */
    .arrow-box {
      transform: rotate(90deg);
      &:hover {
        transform: rotate(90deg) translateY(5px);
      }
    }
  }
`;
