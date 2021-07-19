import styled from "styled-components";
import { Link } from "react-scroll";
import { device } from "./devices";
import landing from "./../assets/images/landing.png";

export const Landing = {
  Wrapper: styled.section`
    padding: 70px 0 0 0;
    position: relative;
    width: 100%;
    height: 90vh;
    background-color: #ffffff;
    @media ${device.mobileSM} {
      height: 80vh;
    }
    @media ${device.tabletSM} {
      height: 100vh;
    }
    @media ${device.tabletLG} {
      height: 100vh;
    }
    @media ${device.laptop} {
      height: 100vh;
    }
  `,
  BackgroundLayer: styled.div`
    width: 100%;
    height: 100%;
    //background-image: url(${landing});
    background-size: 100%;
    background-position: 40% 10%;
    background-repeat: no-repeat;
    @media ${device.tabletSM} {
      background-size: 70%;
    }
    @media ${device.tabletLG} {
      background-size: 50%;
      background-position: 90% 50%;
    }
    @media ${device.laptop} {
      background-position: 100% 20%;
      background-size: 868px;
    }
    @media ${device.desktopLG} {
      background-position: 100% 20%;
    }
  `,

  Inner: styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    background-image: url(${landing});
    background-size: 110%;
    background-repeat: no-repeat;
    background-position: 80% 20%;
    margin: 0 auto;
    @media ${device.tabletSM} {
      height: 100%;
      background-size: 100%;
    }
    @media ${device.tabletLG} {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-size: 50%;
      background-position: 90% 50%;
    }
    @media ${device.laptop} {
      padding: 0;
      flex-direction: row;
      max-width: 1366px;
      margin: 0 auto;
      align-items: center;
      background-size: 70%;
      background-position: 110% 50%;
    }
  `,
  Text: styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 0 0 0;
    align-items: center;
    @media ${device.tabletSM} {
      padding: 3rem 0 0 0;
    }
    @media ${device.tabletLG} {
      height: 60%;
      align-items: flex-start;
      justify-content: center;
    }
    @media ${device.laptop} {
      padding: 0 0 8rem 0;
      width: 100%;
      height: 60%;
      align-items: flex-start;
      justify-content: center;
    }
  `,
  TitleOne: styled.h1`
    font-size: 2.1rem;
    font-weight: 500;
    color: #002d46;
    height: 50px;
    @media ${device.tabletSM} {
      font-size: 3rem;
      height: 60px;
    }
    @media ${device.tabletLG} {
      font-size: 3rem;
      height: 75px;
    }
    @media ${device.laptop} {
      font-size: 3.2rem;
    }
  `,
  TitleTwo: styled.h1`
    font-size: 2.1rem;
    font-weight: 500;
    color: #002d46;
    @media ${device.tabletSM} {
      font-size: 3rem;
    }
    @media ${device.laptop} {
      font-size: 3.2rem;
    }
  `,
  Subtitle: styled.p`
    margin: 1rem 0 0;
    padding: 0;
    font-size: 1.2rem;
    font-weight: 400;
    color: #424242;
    @media ${device.tabletSM} {
      font-size: 1.5rem;
    }
    @media ${device.tabletLG} {
      font-size: 1.8rem;
      padding: 0;
    }
    @media ${device.laptop} {
      font-size: 1.45rem;
      padding: 0;
    }
  `,
  ImageWrapper: styled.div`
    width: 100%;
    height: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    align-items: center;

    @media ${device.tabletSM} {
      width: 40%;
    }
    @media ${device.tabletLG} {
      height: 100%;
    }
    @media ${device.laptop} {
      //width: 100%;
    }
  `,
};

export const CtaLink = styled(Link)`
  display: flex;
  color: #ffffff;
  background-color: #ec5252;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 0.2rem;
  cursor: pointer;
  font-weight: 500;
  margin: 1rem 0 0;
  width: 180px;
  height: 40px;
  font-size: 0.85rem;
  letter-spacing: 1px;
  &:hover {
    background-color: #000000;
  }
  @media ${device.tabletLG} {
    height: 50px;
    font-size: 1.4rem;
    width: 260px;
  }
`;
