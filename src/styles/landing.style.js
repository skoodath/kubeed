import styled from "styled-components";
import { Link } from "react-scroll";
import { device } from "./devices";

export const Landing = {
  Wrapper: styled.section`
    padding: 10vh 0;
    position: relative;
    width: 100%;
    background-color: #ffffff;
  `,

  Inner: styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    margin: 0 auto;
    padding: 5rem 0 2rem;
    @media ${device.tabletSM} {
      padding: 5rem 0 2rem;
    }
    @media ${device.tabletLG} {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      max-width: 992px;
      padding: 5rem 0 0;
    }
    @media ${device.laptop} {
      margin: 0 auto;
      padding: 5rem 1rem 0;
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
      width: 100%;
      @media ${device.tabletSM} {
        width: 615px;
      }
      @media ${device.tabletLG} {
        width: 512px;
      }
      @media ${device.laptop} {
        width: 750px;
      }
    }
  `,
  Text: styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${device.tabletSM} {
      padding: 0;
    }
    @media ${device.tabletLG} {
      width: 50%;
      align-items: flex-start;
    }
  `,
  TitleOne: styled.h1`
    font-size: 2.1rem;
    font-weight: 500;
    color: #002d46;
    height: 50px;
    @media ${device.tabletSM} {
      font-size: 3.22rem;
      font-weight: 600;
      height: 60px;
    }
    @media ${device.tabletLG} {
      font-weight: 700;
    }
    @media ${device.laptop} {
      font-size: 3.5rem;
    }
  `,
  TitleTwo: styled.h1`
    font-size: 2.1rem;
    font-weight: 600;
    color: #002d46;
    @media ${device.tabletSM} {
      font-size: 3.22rem;
      font-weight: 700;
    }
    @media ${device.tabletLG} {
      font-weight: 800;
    }
    @media ${device.laptop} {
      font-size: 3.5rem;
    }
  `,
  Subtitle: styled.p`
    margin: 1rem 0 0;
    padding: 0;
    font-size: 1.2rem;
    font-weight: 500;
    color: #002d46;
    @media ${device.tabletSM} {
      font-size: 1.5rem;
    }
    @media ${device.tabletLG} {
      font-size: 1.8rem;
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
  height: 40px;
  font-size: 0.85rem;
  letter-spacing: 1px;
  &:hover {
    background-color: #000000;
  }
  @media ${device.tabletLG} {
    height: 45px;
    font-size: 1.2rem;
    width: 250px;
  }
`;
