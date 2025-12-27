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

  /* PC 버전: 가로 배치 */
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

  /* 💡 여기서 css 함수를 사용하므로 상단 import가 필수입니다 */
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

  @media (max-width: 900px) {
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 350px));
  justify-content: center;
  gap: 25px;
  width: 100%;
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
`;
