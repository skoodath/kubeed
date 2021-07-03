import styled from 'styled-components';
import { device } from './devices';
import next from '../illustrations/next.svg';
import prev from '../illustrations/prev.svg';


export const Course = {
  Wrapper: styled.section`
    padding: 10rem 0;
    position: relative;
    width: 100%;
    background-color: #ffffff;
    overflow: hidden;
    @media ${device.laptop}{
      max-height: 768px;
    }
  `,
  Inner: styled.div`
    width: 100%;
    height: 100%;
    @media ${device.laptop}{
      max-width: 1366px;
      margin: 0 auto;
      padding: 0 3vw;
    }
`
};

export const Card = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 1rem 0;
    position: relative;
    width: 80%;
    @media ${device.tabletSM}{
      flex-direction: row;
      flex-wrap: wrap;
     .swiper-container{
        width: 768px;
      }
      .swiper-wrapper{
        width: 768px;
      }
    }
    @media ${device.tabletLG}{
      .swiper-container{
        width: 992px;
      }
      .swiper-wrapper{
        width: 992px;
      }
    }
    @media ${device.laptop}{
        width: 992px;
        max-width: 992px;
      .swiper-container{
        width: 992px;
        max-width: 992px;
        margin: 0 auto;
      }
      .swiper-wrapper{
        width: 992px;
      }
    }
    .swiper-container{
      width: 100%;
      max-width: 100%;
      padding: 1rem 0 7rem;
    }
    .swiper-slide{
      height: 370px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 5px;
      padding: 0.5rem 0.2rem;
      transition: transform 0.3s ease-in-out;
      &:hover{
      transform: scale3d(1.02, 1.02, 1.02);
      }
      @media ${device.tabletSM}{
        max-width: 280px;
      }
    }
    .swiper-button-prev{
      background-image: url(${prev});
      background-size: 60%;
      background-position: center center;
      background-repeat: no-repeat;
      left: 30%;
      transform: translateX(-30%);
      right: auto;
      top: auto;
      bottom: 5%;
      width: 44px;
      border: 1px solid #858585;
      border-radius: 50%;
      @media ${device.laptop}{
        left: 40%;
        transform: translateX(-40%);  
      }
      svg{
        width: 20px
      }
      &::after{
        font-size: 25px;
        color: #0096FF;
        display: none;
        }
      }
    .swiper-button-next{
      background-image: url(${next});
      background-size: 60%;
      background-position: center center;
      background-repeat: no-repeat;
      left: auto;
      top: auto;
      right: 30%;
      transform: translateX(30%);
      bottom: 5%;
      width: 44px;
      display: flex;
      border: 1px solid #858585;
      border-radius: 50%;
      @media ${device.laptop}{
        right: 40%;
        transform: translateX(40%);
      }
      &::after{
        font-size: 25px;
        color: #0096FF;
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
    &:hover{
      transform: scale3d(1.02, 1.02, 1.02);
      transform-style: preserve-3d;
      box-shadow: 0 0 3px -1px #858585;
    }
    @media ${device.tabletSM}{
      margin: 5px;
    }
    @media ${device.tabletLG}{
      margin: 10px;
    }
  `,
  CardTopSection: styled.div`
    width: 95%;
    max-width: 276px;
    height: ${({height}) => height };
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-items: center;
    margin: 0 auto;
    img{
      width: 95%;
      display: inline-block;
      height: 100%;
    }
  `,
  CardLogo: styled.img`
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    margin: 0.5rem 0.5rem 0 0;
  `,
  CardBottomsection: styled.div`
    height: ${({height}) => height?  'height' : '100%' };
    width: 90%;
    max-width: 261px;
    padding: 1rem;
    position: relative;
    background-color: #f9f9f9;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0 0 3px -1px #858585;
    &::after{
      position: absolute;
      content: '';
      height: 0;
      width: 100%;
      background-color: #0095ff;
      left: 0;
      bottom: 0;
      transform-origin: bottom center;
      transition: height 0.2s ease-in;
      }
    &:hover{
      &::after{
        height: 5px;
      }
    }
    
  `,
  CardCourseTitle: styled.h3`
    font-size: 1.4rem;
    font-weight: 600;
    color: #00518A;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    mark{
      margin-left: 0.5rem;
      padding: 0 0.5rem;
      border-radius: 20px;
      text-align: center;
    }
  `,
  CardCourseSubTitle: styled.h4`
    font-size: 1.2rem;
    font-weight: 300; 
    color: #858585;
    text-align: center;
  `,

  CourseButton: styled.a`
    display: inline-block;
    left: 0;
    bottom: 0;
    padding: 0.2rem 0;
    margin: 2rem auto 0;
    color: #ffffff;
    cursor: pointer;
    position: relative;
    letter-spacing: 1px;
    overflow: hidden;
    font-weight: 600;
    background-color: #0096FF;
    width: 40%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    transition: background-color 0.5s ease-in-out;
    svg{
      visibility: hidden;
      width: 0;
      transform: translateY(-100%);
      fill: #ffffff;
      transition: transform 0.3s ease-in-out, width 0.5s ease-in-out;
      font-size: 20px;
    }
    &:hover{
      svg{
        visibility: visible;
        width: 100%;
        transform: translateY(-100%);
        fill: #ffffff;
        transition: transform 0.3s ease-in-out, width 0.5s ease-in-out;
        font-size: 20px;
    }
    }
    &:hover{
      background-color: #0096ff90;
      transform-origin: top center;
    }
  `,

}
