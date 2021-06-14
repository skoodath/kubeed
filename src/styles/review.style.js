import styled from 'styled-components';
import { device } from './devices';

export const Review = {
  Wrapper: styled.section`
    padding: 15vh 0;
    position: relative;
    width: 100%;
    height: auto;
    background-color: #fefefe;
    
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
      justify-content: center;
    }
    @media ${device.laptop}{
      max-width: 992px;
    }
  `,
  CardItem: styled.li`
    width: 100%;
    max-width: 290px;
    height: auto;
    margin: 0 auto 2rem;
    background-color: #003cb1b5;
    border-radius: 5px;
    padding: 2rem;
    transition: transform 0.3s ease-in-out;
    position: relative;
    &::before{
      position: absolute;
      content: '';
      height: 100%;
      width: 50%;
      top: 0;
      left: 0;
      background-color:#253e701a;
    }
    &:hover{
      transform: scale3d(1.02, 1.02, 1.02);
    }
    @media ${device.tabletSM}{
      margin: 5px;
    }
    @media ${device.tabletLG}{
      max-width: 350px;
    }
    @media ${device.laptop}{
      max-width: 360px;
    }
  `,
  CardTitle: styled.h2`
    font-size: 1.5rem;
    color: #ffffff;
  `,
  CardDesc: styled.p`
    font-size: 1.1rem;
    color: #ffffff;
  `
}

