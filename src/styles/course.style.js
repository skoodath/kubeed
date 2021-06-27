import styled from 'styled-components';
import { device } from './devices';


export const Course = {
  Wrapper: styled.section`
    padding: 10vh 0 0;
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
    }
    @media ${device.laptop}{
      width: 1200px;
      max-width: 1366px;
      .swiper-container{
        width: 1366px;
        max-width: 1366px;
        margin: 0 auto;
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
      left: 5%;
      right: auto;
      top: auto;
      bottom: 5%;
      width: 44px;
      display: flex;
      background-color: #f5f5f5;
      border-radius: 50%;
      &::after{
        font-size: 25px;
        color: #0096FF;
      }
      }
    .swiper-button-next{
      right: 5%;
      left: auto;
      top: auto;
      bottom: 5%;
      width: 44px;
      display: flex;
      background-color: #f5f5f5;
      border-radius: 50%;
      &::after{
        font-size: 25px;
        color: #0096FF;
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
      box-shadow: 0 0 15px -5px #bfbfbf;
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
    border-radius: 5px 5px 0 0;
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
    box-shadow: 1px 1px 2px #bfbfbf;
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
    &::before{

    }
  `,

}


