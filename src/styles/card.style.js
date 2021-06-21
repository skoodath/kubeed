import styled from 'styled-components';
import { device } from './devices';

export const Card = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 1rem 0;
    position: relative;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
    background-color: #326ce5;
    &::before{
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      top: 6%;
      transform: translateX(20px);
      //background-color: #326c5e;
      background-image: linear-gradient(180deg, #edf3ff, #fcfdff );
      z-index: 0;
    }
    @media ${device.tabletSM}{
      flex-direction: row;
      flex-wrap: wrap;
      &::before{
        top: 10%;
        transform: translateX(20px);
        background-image: linear-gradient(180deg, #edf3ff, #fcfdff );
        z-index: 0;
      }
    }
    @media ${device.tabletLG}{
      transform: translateX(30px);
      &::before{
        top: 20%;
        transform: translateX(20px);
        background-image: linear-gradient(180deg, #edf3ff, #fcfdff );
        z-index: 0;
      }
    }
    @media ${device.laptop}{
      width: 1240px;
      transform: translateX(20deg);
      &::before{
        background-image: linear-gradient(45deg, #edf3ff, #fcfdff );
        z-index: 0;
      }
    
    }
    
  `,
   
  CardItem: styled.div`
    width: 310px;
    min-width: 260px;
    height: 420px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    margin: 0 0 2rem 0;
    &:hover{
      transform: scale3d(1.02, 1.02, 1.02);
    }
    @media ${device.tabletSM}{
      margin: 5px;
    }
    @media ${device.tabletLG}{
      margin: 10px;
    }
  `,
  CardTopSection: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-items: center;
    margin: 0 auto;
    border-radius: 5px 5px 0 0;
    
  `,
  CardImageWrapper: styled.div`
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background-color: #ffffff;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 20px -5px #183675;
  `,
  CardLogo: styled.img`
    width: 60%;
    object-fit: cover;
  `,
  CardBottomsection: styled.div`
    height: 65%;
    padding: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    font-size: 1rem;
    font-weight: 600; 
    color: #333333;
  `,

  CourseButton: styled.a`
    display: inline-block;
    left: 0;
    bottom: 0;
    padding: 0.2rem 0;
    margin: 2rem 0 0;
    color: #326CE5;
    cursor: pointer;
    letter-spacing: 1px;
    overflow: hidden;
    font-weight: 600;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
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