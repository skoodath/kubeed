import styled from 'styled-components';
import { device } from './devices';


export const Course = {
  Wrapper: styled.section`
    padding: 15vh 0;
    position: relative;
    width: 100%;
    background-color: #fafafa;
    
  `,
  Inner: styled.div`
    width: 100%;
    height: 100%;
    @media ${device.laptop}{
      max-width: 1366px;
      margin: 0 auto;
    }
`
};

export const Card = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    position: relative;
    width: 80%;
    @media ${device.tabletSM}{
      flex-direction: row;
      flex-wrap: wrap;
      .swiper-container{
        width: 768px;
      }
    }
    @media ${device.tabletLG}{
      .swiper-container{
        width: 992px;
      }
    }
    @media ${device.laptop}{
      width: 1366px;
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
      height: 500px;
    }
    .swiper-slide{
      width: 100%;
      max-width: 280px;
      min-width: 260px;
      height: 400px;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
    }
    .swiper-button-prev{
      bottom: 0 !important;
      top: auto !important;
    }
    .swiper-button-next{
      bottom: 0 !important;
      top: auto !important;
    }
  `,
   
  CardItem: styled.div`
    width: 100%;
    max-width: 280px;
    min-width: 260px;
    height: 400px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 5px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    margin: 0 0 2rem 0;
    &:hover{
      transform: scale3d(1.02, 1.02, 1.02);
      box-shadow: 0 0 15px -5px #dbdbdb;
    }
    @media ${device.tabletSM}{
      margin: 5px;
    }
    @media ${device.tabletLG}{
      margin: 10px;
    }
  `,
  CardTopSection: styled.div`
    background-image: ${({bgimage,gradone}) => `linear-gradient(${gradone}, #ffffff 50%), url(${bgimage})` };
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1rem 1.6rem;
    position: relative;
    &::before{
      position: absolute;
      background-color: #651EFEab;
      content: '';
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      z-index: -1;
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
    height: 50%;
    position: relative;
  `,
  CardCourseTitle: styled.h3`
    font-size: 1.4rem;
    font-weight: 600;
    color: #E5AB32;
    display: flex;
    align-items: center;
    mark{
      margin-left: 0.5rem;
      padding: 0 0.5rem;
      border-radius: 20px;
    }
  `,
  CardCourseSubTitle: styled.h4`
    font-size: 1.2rem;
    font-weight: 300; 
    color: #326CE5;
  `,

  CourseButton: styled.a`
    display: inline-block;
    left: 0;
    bottom: 0;
    padding: 0.2rem 0;
    margin: 2rem 0 2rem;
    color: #326CE5;
    cursor: pointer;
    position: absolute;
    letter-spacing: 1px;
    overflow: hidden;
    font-weight: 600;
    border-bottom: 2px solid;
    &:hover{
      color: #326CE5b5;
    }
    &::before{

    }
  `,

}


