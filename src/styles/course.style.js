import styled from 'styled-components';
import { device } from './devices';


export const Course = {
  Wrapper: styled.section`
    padding: 10vh 0 5vh;
    position: relative;
    width: 100%;
    background-color: #f7f7f7;
    
  `,
  Inner: styled.div`
    width: 100%;
    @media ${device.laptop}{
      max-width: 1366px;
      margin: 0 auto;
    }
`
};

export const Card = {
  Wrapper: styled.section`
    width: 80%;
    margin: 0 auto;
  `,
  CardCase: styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    @media ${device.tabletSM}{
      flex-direction: row;
      flex-wrap: wrap;
    }

  `,
  CardItem: styled.li`
    width: 100%;
    max-width: 290px;
    min-width: 260px;
    height: 350px;
    display: flex;
    flex-direction: column;
    margin: 0 auto 2rem;
    background-color: #ffffff;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 15px -5px #dbdbdb;
  `,
  CardTopSection: styled.div`
    background-color: ${({bgcolor}) => bgcolor};
    background-size: 30%;
    background-position: center center;
    background-repeat: no-repeat;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1.6rem;
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
  CardCourseTitle: styled.h3`
    font-size: 1.4rem;
    font-weight: 600;
    color: #FED47B;
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
    color: #ffffff;
  `,
  CardBottomSection: styled.p`
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  CourseRatingContainer: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
  `,
  CourseRating: styled.div`
    color: gold;
    display: flex;
    span{
      color: #FED47B;
    }
    svg{
      fill: gold;
    }
  `,
  CourseReviews: styled.span`
    color: #ffffff;
    margin: 0 0 0 0.2rem;
    font-size: 0.9rem;
  `,
  CourseStudents: styled.span`
    color: #ffffff;
    margin: 0 0 0 0.5rem;
  `,
  CourseBotton: styled.a`
    background-color: #326CE5;
    padding: 0.5rem 1.5rem;
    color: #ffffff;
    cursor: pointer;
    position: relative;
    letter-spacing: 1px;
    border-radius: 3px;
    overflow: hidden;
    &::after{
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        width: 0;
        height: 4px;
        background-color: #FED47B;
        transition: width 0.5s linear;
      }
    &:hover{
      &::after{
        width: 100%;
        
      }
    }
  `
}