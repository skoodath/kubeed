import styled from "styled-components";
import { Link } from "react-scroll";
import { device } from "./devices";
import landing from "./../assets/images/landing.png";

export const Landing = {
  Wrapper: styled.section`
    padding: 0;
    position: relative;
    width: 100%;
    height: 90vh;
    background-color: #ffffff;
    //background-image: linear-gradient(125deg, #d2edff, #ffffff 60%);
    @media ${device.mobileSM} {
      height: 80vh;
    }
    @media ${device.tabletSM} {
      height: 90vh;
    }
    @media ${device.laptop} {
      height: 100vh;
    }
  `,
  BackgroundLayer: styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${landing});
    background-size: 100%;
    background-position: 40% 90%;
    background-repeat: no-repeat;
    @media ${device.tabletLG} {
      background-position: center right;
      background-size: 60%;
    }
  `,

  Inner: styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    @media ${device.tabletSM} {
      height: 100%;
      flex-direction: column;
    }
    @media ${device.tabletLG} {
      flex-direction: row;
    }
    @media ${device.laptop} {
      padding: 0;
      flex-direction: row;
      max-width: 1366px;
      margin: 0 auto;
    }
  `,
  Text: styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    padding: 0;
    justify-content: center;
    @media ${device.tabletLG} {
      height: 95%;
    }
    @media ${device.laptop} {
      padding: 0 0 0 1rem;
      width: 50%;
      height: 100%;
    }
  `,
  TitleOne: styled.h1`
    font-size: 2.2rem;
    font-weight: 600;
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
      font-size: 4rem;
    }
  `,
  TitleTwo: styled.h1`
    font-size: 2.1rem;
    font-weight: 700;
    color: #002d46;
    @media ${device.tabletSM} {
      font-size: 3rem;
    }
  `,
  Subtitle: styled.p`
    margin: 1rem 0 0;
    padding: 0;
    font-size: 1.2rem;
    font-weight: 400;
    @media ${device.tabletSM} {
      font-size: 1.5rem;
    }
    @media ${device.tabletLG} {
      font-size: 1.8rem;
      padding: 0;
    }
    @media ${device.laptop} {
      font-size: 1.8rem;
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
  border-radius: 20px;
  padding: 0.2rem;
  cursor: pointer;
  font-weight: 500;
  margin: 1rem 0 0;
  width: 180px;
  height: 30px;
  font-size: 0.85rem;
  letter-spacing: 1px;
  &:hover {
    background-color: #ec525291;
  }
  @media ${device.tabletLG} {
    height: 40px;
    font-size: 1.1rem;
    width: 220px;
  }
`;
