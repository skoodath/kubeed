import styled from 'styled-components';
import { Link } from 'react-scroll';
import { device } from './devices';

export const Landing = {
  Wrapper: styled.section`
    padding: 10vh 0 5vh 0;
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #fcfdff;
    @media ${device.mobileSM}{
      height: 100vh;
    }
    @media ${device.tabletSM}{
      height: 100vh;
    }
    @media ${device.tabletLG}{
      height: auto;
    }
    @media ${device.laptop}{
      height: auto;
    }
  `,
  Inner: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10vh 0 0 0;
    @media ${device.mobileSM}{
      padding: 5vh 0 0 0;
    }
    @media ${device.tabletLG}{
      padding: 0;
    }
    @media ${device.laptop}{
      padding: 10vh 0 0 0;
      flex-direction: row;
      max-width: 1366px;
      margin: 0 auto;
    }
  `,
  Text: styled.div`
    width: 100%;
    height: 50%;
    margin: 0;
    @media ${device.tabletSM}{
      padding: 0 0 2rem 0;
    }
    @media ${device.tabletLG}{
      padding: 0 0 5rem 0;
    }
  `,
  Title:styled.h1`
    width: 80%;
    display: flex;
    flex-direction: column;
    letter-spacing: 1px;
    line-height: 1;
    margin: 0 auto;
    @media ${device.mobileSM}{
      margin: 0 auto;
    }
  `,
  TitleOne: styled.span`
    font-size: 1.1rem;
    color: #E5AB32;
    @media ${device.tabletSM}{
      font-size: 1.3rem;
    }
    @media ${device.tabletLG}{
      font-size: 1.5rem;
    }
  `,
  TitleTwo: styled.span`
    font-size: 2rem;
    @media ${device.mobileSM}{
      font-size: 2rem;
    }
    @media ${device.tabletSM}{
      font-size: 3rem;
    }
    @media ${device.tabletLG}{
      font-size: 4rem;
    }
  `,
  Subtitle: styled.h2`
    margin: 0 auto;
    width: 80%;
    padding: 0 10vw 0 0;
    font-size: 0.9rem;
    font-weight: 300;
    @media ${device.tabletSM}{
      font-size: 1.5rem;
    }
    @media ${device.tabletLG}{
      font-size: 1.8rem;
      padding: 0 20vw 0 0;
    }
    @media ${device.laptop}{
      font-size: 1.8rem;
      padding: 0;
    }
  `,
  Image: styled.div`
    width: 100%;
    height: 50%;
    img{
      width: 100%;
      height: 100%;
    }
  `
};

export const ScrollDown = styled(Link)`
    position: absolute;
    left: 50%;
    bottom: 0;
    margin: 0 0 3rem 0;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    cursor: pointer;
    svg{
      font-size: 5rem;
      font-weight: 400;
    }
`;
export const CtaLink = styled(Link)`
    display: flex;
    color: #326CE5;
    justify-content: center;
    border-radius: 3px;
    padding: 0.3rem 0.5rem;
    border: 1px solid #E5AB32;
    cursor: pointer;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 0.85rem;
    font-weight: 600;
    margin: 1rem 0 0 10%;
    width: 150px;
    @media ${device.tabletLG}{
      align-items: center;
      height: 40px;
      font-size: 1.2rem;
    }
    
`;
