import styled from 'styled-components';
import { Link } from 'react-scroll';
import { device } from './devices';
import { animated } from 'react-spring';


export const Landing = {
  Wrapper: styled.section`
    padding: 0;
    position: relative;
    width: 100%;
    height: 90vh;
    background-color: #ffffff;
    @media ${device.mobileSM}{
      height: 80vh;
    }
    @media ${device.tabletSM}{
      height: 90vh;
    }
    @media ${device.laptop}{
      height: 100vh;
    }
   `,
  Inner: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    @media ${device.tabletSM}{
      height: 100%;
      flex-direction: column;
    }
    @media ${device.tabletLG}{
      flex-direction: row;
      }
    @media ${device.laptop}{
      padding: 0;
      flex-direction: row;
      max-width: 1366px;
      margin: 0 auto;
    }
  `,
  Text: styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Raleway', sans-serif;
    padding: 0;
    align-items: center;
    .mytypist{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    @media ${device.tabletLG}{
      height: 100%;
    }
    @media ${device.laptop}{
      width: 100%;
    }
  `,
  TitleOne: styled.span`
    font-size: 2.2rem;
    font-weight: 600;
    height: 50px;
    text-align: center;
    letter-spacing: 1px;
    @media ${device.tabletSM}{
      font-size: 4rem;
      height: 60px;
    }
    @media ${device.tabletSM}{
      font-size: 4rem;
      height: 75px;
    }

  `,
  TitleTwo: styled.span`
    font-size: 2.1rem;
    font-weight: 700;
    text-align: center;
    letter-spacing: 1px;
    @media ${device.tabletSM}{
      font-size: 4rem;
    }
  `,
  Subtitle: styled(animated.h2)`
    margin: 1rem 0 0;
    padding: 0;
    font-size: 1.2rem;
    font-weight: 300;
    text-align: center;
    @media ${device.tabletSM}{
      font-size: 1.5rem;
    }
    @media ${device.tabletLG}{
      font-size: 1.8rem;
      padding: 0;
    }
    @media ${device.laptop}{
      font-size: 1.8rem;
      padding: 0;
    }
  `,

};

export const CtaLink = styled(Link)`
    display: flex;
    color: #ffffff;
    background-image: linear-gradient(45deg, #0096FF, #008cee, #0096FF);
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 0.3rem 0.5rem;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 600;
    margin: 2.5rem auto 0;
    width: 150px;
    height: 40px;
    font-size: 1.1rem;
     &:hover{
      color: #fcfdff;
    }
    @media ${device.tabletLG}{
      height: 40px;
      font-size: 1.2rem;
      width: 180px;
    }
    
`;
