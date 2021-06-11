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
      max-width: 600px;
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
    @media ${device.tabletSM}{
      margin: 5px;
    }
  `,
  CardTopSection: styled.div`
    background-image: ${({bgimage,gradone}) => `linear-gradient(${gradone}, #ffffff 50%), url(${bgimage})` };
    background-size: cover;
    background-position: center top;
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
    color: #326CE5;
    margin: 0 0 0 0.2rem;
    font-size: 0.9rem;
  `,
  CourseStudents: styled.span`
    color: #326CE5;
    margin: 0 0 0 0.5rem;
  `,
  CourseButton: styled.a`
    display: inline-block;
    left: 0;
    bottom: 0;
    padding: 0.2rem 0;
    margin: 2rem 0 0;
    color: #326CE5;
    cursor: pointer;
    position: absolute;
    letter-spacing: 1px;
    overflow: hidden;
    font-weight: 600;
    border-bottom: 2px solid;
    &::after{
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        width: 0;
        height:100%;
        padding: 0.2rem 0;
        border-bottom: 3px solid #FED47B;
        transition: width 0.5s linear;
        z-index: 1;
      }
    &:hover{
      &::after{
        width: 100%;
      }
    }
  `
}
