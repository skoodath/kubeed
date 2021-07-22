import styled from "styled-components";
import { Link } from "react-scroll";
import { device } from "./devices";

export const Landing = {
  Wrapper: styled.section`
    padding: 12vh 0;
    margin: 0 0 5vh 0;
    position: relative;
    width: 100%;
    background-color: #ffffff;
    @media ${device.tabletSM} {
      height: auto;
    }
    @media ${device.tabletLG} {
      padding: 8vh 0 0;
    }
    @media ${device.laptop} {
      padding: 8vh 0 0;
      margin: 0;
      height: 100vh;
      max-height: 850px;
    }
  `,

  Inner: styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    margin: auto;
    padding: 4rem 0 2rem;
    @media ${device.tabletSM} {
      padding: 5rem 0 2rem;
    }
    @media ${device.tabletLG} {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      max-width: 1060px;
      padding: 0;
    }
    @media ${device.laptop} {
      margin: 0 auto;
      padding: 6rem 0 0;
    }
  `,
  BackgroundLayer: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    @media ${device.tabletLG} {
      width: 50%;
    }
    img {
      width: 350px;
      height: 237px;
      @media ${device.tabletSM} {
        width: 615px;
        height: 416px;
      }
      @media ${device.tabletLG} {
        width: 600px;
        height: 406px;
      }
      @media ${device.laptop} {
        width: 800px;
        height: 542px;
      }
    }
  `,
  Text: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0 2rem 0;
    @media ${device.tabletSM} {
      padding: 0;
    }
    @media ${device.tabletLG} {
      width: 50%;
      align-items: flex-start;
      padding: 0 0 1rem 0;
    }
    @media ${device.laptop} {
      padding: 12rem 0 0;
      height: 100%;
    }
  `,
  TitleOne: styled.h1`
    font-size: 2.6rem;
    font-weight: 700;
    color: #1a1d1f;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    line-height: 1.3;
    span {
      font-size: inherit;
      font-weight: 800;
      text-align: center;
      margin: auto;
    }
    @media ${device.tabletSM} {
      font-size: 3rem;
    }
    @media ${device.laptop} {
      font-size: 3.5rem;
      text-align: left;
      padding: 0 1rem 0 0;
      span {
        text-align: inherit;
        margin: 0;
      }
    }
  `,
  TitleTwo: styled.h1`
    font-size: 3rem;
    font-weight: 800;
    height: 40px;
    color: #1a1d1f;
    @media ${device.tabletSM} {
      font-size: 3rem;
      height: 50px;
    }
    @media ${device.laptop} {
      font-size: 3.5rem;
      height: 70px;
    }
  `,
  Subtitle: styled.p`
    padding: 0;
    font-size: 1.5rem;
    font-weight: 500;
    color: #1a1d1f;
    line-height: 1.3;
    @media ${device.tabletSM} {
      font-size: 1.4rem;
    }

    @media ${device.laptop} {
      font-size: 1.45rem;
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
  height: 38px;
  font-size: 0.85rem;
  letter-spacing: 1px;
  outline-color: transparent;
  &:hover {
    background-color: #387ed1;
    transition: background-color 0.3s cubic-bezier(0.955, 0.00003, 0.515, 0.955);
  }
  @media ${device.tabletLG} {
    height: 42px;
    font-size: 1.2rem;
    width: 235px;
  }
`;
