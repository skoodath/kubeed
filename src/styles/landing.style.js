import styled, { keyframes } from 'styled-components';
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
      padding: 5vh 0 0 0;
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
      padding: 0 0 5rem 0;
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
    font-size: 1.3rem;
    color: #CC9D3B;
    @media ${device.tabletSM}{
      font-size: 1.6rem;
    }
    @media ${device.tabletLG}{
      font-size: 1.8rem;
    }
  `,
  TitleTwo: styled.span`
    font-size: 3rem;
    @media ${device.mobileSM}{
      font-size: 2.5rem;
    }
    @media ${device.tabletSM}{
      font-size: 3.5rem;
    }
    @media ${device.tabletLG}{
      font-size: 4.5rem;
    }
  `,
  TitleThree: styled.span`
    font-size: 2.3rem;
    @media ${device.mobileSM}{
      font-size: 2.2rem;
    }
    @media ${device.tabletSM}{
      font-size: 2.8rem;
    }
    @media ${device.tabletLG}{
      font-size: 3.8rem;
    }
  `,
  TitleStrike: styled.span`
    font-size: 2rem;
    position: relative;
    &::before{
      position: absolute;
      content: '';
      width: 100%;
      background-color: red;
      border-top: 4px solid red;
      z-index: 1;
      left: 0;
      top: 50%;
    }
    @media ${device.mobileSM}{
      font-size: 1.5rem;
    }
    @media ${device.tabletSM}{
      font-size: 2.2rem;
    }
    @media ${device.tabletLG}{
      font-size: 3rem;
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
    width: 90%;
    height: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    img{
      width: 95%;
      max-width: 615px;
      height: 100%;
      @media ${device.tabletSM}{
        max-width: 550px;
      }
    }
  `
};

const bounce = keyframes`
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-10px);
      }
    }
`
export const CtaLink = styled(Link)`
    display: flex;
    color: #1D51BF;
    justify-content: center;
    border-radius: 3px;
    padding: 0.3rem 0.5rem;
    border: 1px solid #CC9D3B;
    cursor: pointer;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 0.85rem;
    font-weight: 600;
    margin: 1rem 0 0 10%;
    width: 150px;
    svg{
      visibility: hidden;
      width: 0;
      transform: translateY(-100%);
      fill: #326CE5;
      transition: transform 0.5s ease-in-out, width 0.5s ease-in-out;
    }
    &:hover{
      color: #326CE5;
      svg{
      visibility: visible;
      width: 100%;
      transform: translateY(0);
      fill: #326CE5;
      animation: 1.5s ${bounce} cubic-bezier(0.0075, 0.52, 0.0095, 0.6) infinite;
    }
    }
    @media ${device.tabletLG}{
      align-items: center;
      height: 40px;
      font-size: 1.2rem;
    }
    
`;
