import styled from "styled-components";
import { Link } from "react-scroll";
import { device } from "./devices";

export const Landing = {
  Wrapper: styled.section`
    padding: 12vh 0 0;
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
      max-width: 1080px;
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
      width: 290px;
      @media ${device.tabletSM} {
        width: 615px;
      }
      @media ${device.tabletLG} {
        width: 560px;
      }
      @media ${device.laptop} {
        width: 792px;
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
      padding: 0 0 6rem 0;
    }
  `,
  TitleOne: styled.h1`
    font-size: 2.1rem;
    font-weight: 500;
    color: #1a1d1f;
    height: 50px;
    @media ${device.tabletSM} {
      font-size: 3rem;
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
    color: #1a1d1f;
    @media ${device.tabletSM} {
      font-size: 3rem;
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
    color: #1a1d1f;
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
  height: 40px;
  font-size: 0.85rem;
  letter-spacing: 1px;
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
