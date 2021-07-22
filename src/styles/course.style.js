import styled from "styled-components";
import { device } from "./devices";
import next from "../assets/images/next.svg";
import prev from "../assets/images/prev.svg";
import { FaChevronRight } from "react-icons/fa";

export const Course = {
  Wrapper: styled.section`
    padding: 5vh 0 0;
    position: relative;
    width: 100%;
    background-color: #ffffff;
    overflow: hidden;
    @media ${device.tabletSM} {
      padding: 8vh 0 0;
      height: auto;
    }
    @media ${device.laptop} {
      padding: 8vh 0 0;
      height: 100vh;
      max-height: 750px;
    }
  `,
  Inner: styled.div`
    width: 100%;
    height: 100%;
    @media ${device.laptop} {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 3vw;
    }
  `,
};

export const CourseButtonSpan = styled.span`
  color: #ffffff;
  font-size: inherit;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: right;
  transition: all 0.3s linear;
`;

export const HoverArrow = styled(FaChevronRight)`
  color: #ffffff;
  width: 0;
  display: flex;
  transition: all 0.3s ease-in-out;
  font-size: 0.8rem;
  vertical-align: middle;
`;
export const Card = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0;
    position: relative;
    width: 80%;
    @media ${device.tabletSM} {
      flex-direction: row;
      flex-wrap: wrap;
      .swiper-container {
        width: 768px;
      }
      .swiper-wrapper {
        width: 768px;
      }
    }
    @media ${device.tabletLG} {
      .swiper-container {
        width: 992px;
      }
      .swiper-wrapper {
        width: 992px;
      }
    }
    @media ${device.laptop} {
      width: 992px;
      max-width: 992px;
      .swiper-container {
        width: 992px;
        max-width: 992px;
        margin: 0 auto;
      }
      .swiper-wrapper {
        width: 992px;
      }
    }
    .swiper-container {
      width: 100%;
      max-width: 100%;
      padding: 1rem 0 7rem;
    }
    .swiper-slide {
      height: 370px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 5px;
      padding: 0.5rem 0.2rem;
      transition: transform 0.3s ease-in-out;
      @media ${device.tabletSM} {
        max-width: 280px;
      }
    }
    .swiper-button-prev {
      background-image: url(${prev});
      background-size: 50%;
      background-position: 40% 50%;
      background-repeat: no-repeat;
      left: 30%;
      transform: translateX(-30%);
      right: auto;
      top: auto;
      bottom: 5%;
      width: 40px;
      height: 40px;
      border: 1px solid #aba8a8;
      border-radius: 50%;
      @media ${device.laptop} {
        left: 40%;
        transform: translateX(-40%);
      }
      svg {
        width: 20px;
      }
      &::after {
        font-size: 25px;
        color: #0096ff;
        display: none;
      }
    }
    .swiper-button-next {
      background-image: url(${next});
      background-size: 50%;
      background-position: 60% 50%;
      background-repeat: no-repeat;
      left: auto;
      top: auto;
      right: 30%;
      transform: translateX(30%);
      bottom: 5%;
      width: 40px;
      height: 40px;
      display: flex;
      border: 1px solid #aba8a8;
      border-radius: 50%;
      @media ${device.laptop} {
        right: 40%;
        transform: translateX(40%);
      }
      &::after {
        font-size: 25px;
        color: #0096ff;
        display: none;
      }
    }
  `,

  CardItem: styled.div`
    width: 100%;
    max-width: 280px;
    min-width: 260px;
    height: 400px;
    display: flex;
    flex-direction: column;
    background-color: #bfbfbf;
    border-radius: 5px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    margin: 0 0 2rem 0;
    &:hover {
      box-shadow: 0 0 3px -1px #858585;
    }
    @media ${device.tabletSM} {
      margin: 5px;
    }
    @media ${device.tabletLG} {
      margin: 10px;
    }
  `,
  CardTopSection: styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-items: center;
    margin: 0 auto;
    background-image: ${({ bgimage }) => `url(${bgimage})`};
  `,
  CourseImage: styled.img`
    display: inline-block;
    width: auto;
    height: 100%;
  `,

  CardSection: styled.div`
    height: ${({ height }) => (height ? "height" : "100%")};
    width: 100%;
    max-width: 261px;
    position: relative;
    background-color: #ffffff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0 0 3px -1px #858585;
    &::after {
      position: absolute;
      content: "";
      height: 3px;
      width: 0;
      background-color: #ec5252;
      left: 0;
      bottom: 0;
      transform-origin: left center;
      transition: width 0.3s ease-in;
    }
    &:hover {
      &::after {
        width: 100%;
      }
    }
  `,
  CardLogo: styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 10px;
    margin: 0 0 0.5rem 0.5rem;
  `,
  CardBottom: styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 1.5rem;
  `,
  CardCourseTitle: styled.h3`
    font-size: 1.4rem;
    font-weight: 600;
    color: #1a1d1f;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  `,
  CardCourseSubTitle: styled.h4`
    font-size: 0.9rem;
    font-weight: 400;
    color: #424242;
    margin: 0 auto;
  `,
  CourseButton: styled.a`
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    bottom: 15px;
    padding: 0;
    margin: 1rem auto 0;
    color: #ffffff;
    cursor: pointer;
    position: absolute;
    overflow: hidden;
    font-size: 1.1rem;
    font-weight: 600;
    background-color: #ec5252;
    width: 80px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;
    outline-color: transparent;
    &:hover {
      background-color: #ffffff;
      ${CourseButtonSpan} {
        color: #ec5252;
      }
      ${HoverArrow} {
        width: 20%;
        color: #ec5252;
      }
    }
  `,
};
