import styled from "styled-components";
import { device } from "./devices";
import next from "../assets/images/next.svg";
import prev from "../assets/images/prev.svg";

export const Course = {
  Wrapper: styled.section`
    padding: 4rem 0;
    position: relative;
    width: 100%;
    background-color: #ffffff;
    overflow: hidden;
    @media ${device.laptop} {
      max-height: 768px;
      padding: 7rem 0;
    }
  `,
  Inner: styled.div`
    width: 100%;
    height: 100%;
    @media ${device.laptop} {
      max-width: 1366px;
      margin: 0 auto;
      padding: 0 3vw;
    }
  `,
};

export const Card = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 1rem 0;
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
      &:hover {
        transform: scale3d(1.02, 1.02, 1.02);
      }
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
      width: 44px;
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
      width: 44px;
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
      transform: scale3d(1.02, 1.02, 1.02);
      transform-style: preserve-3d;
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
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-items: center;
    margin: 0 auto;
    img {
      display: inline-block;
      width: auto;
      height: 100%;
    }
  `,
  CardSection: styled.div`
    height: ${({ height }) => (height ? "height" : "100%")};
    width: 90%;
    max-width: 261px;
    padding: 1rem;
    position: relative;
    background-image: ${({ bgimage }) =>
      `linear-gradient(#ffffff00, #ffffff20 50%), url(${bgimage}) `};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0 0 3px -1px #858585;
    &::after {
      position: absolute;
      content: "";
      height: 0;
      width: 100%;
      background-color: #ec5252;
      left: 0;
      bottom: 0;
      transform-origin: bottom center;
      transition: height 0.2s ease-in;
    }
    &:hover {
      &::after {
        height: 5px;
      }
    }
  `,
  CardLogo: styled.img`
    position: absolute;
    top: 0;
    right: 0;
    width: 15px;
    margin: 0.5rem 0.5rem 0 0;
  `,
  CardBottom: styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `,
  CardCourseTitle: styled.h3`
    font-size: 1.4rem;
    font-weight: 600;
    color: #002d46;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  `,
  CardCourseSubTitle: styled.h4`
    font-size: 0.9rem;
    font-weight: 400;
    color: #002d46;
    margin: 0 auto;
    //text-align: center;
  `,

  CourseButton: styled.a`
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
    bottom: 15px;
    padding: 0.2rem 0;
    margin: 1rem auto 0;
    color: #ffffff;
    cursor: pointer;
    position: absolute;
    letter-spacing: 1px;
    overflow: hidden;
    font-weight: 600;
    background-color: #ec5252;
    width: 40%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    transition: background-color 0.5s ease-in-out;
    &:hover {
      background-color: #ec525290;
      transform-origin: top center;
    }
  `,
};
