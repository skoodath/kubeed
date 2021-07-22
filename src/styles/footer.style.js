import styled from "styled-components";
import { device } from "./devices";

export const Footer = {
  Wrapper: styled.section`
    padding: 2vh 0;
    position: relative;
    width: 100%;
    height: 80px;
    background-color: #1a1d1f;
    display: flex;
    justify-content: center;
    @media ${device.tabletLG} {
      padding: 1rem 0;
      height: 50px;
    }
    @media ${device.laptop} {
      margin: 0;
    }
  `,
  Inner: styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${device.tabletLG} {
      flex-direction: row;
      margin: 0 auto;
      padding: 0 3vw;
      justify-content: space-around;
      align-items: center;
      height: 100%;
    }
    @media ${device.laptop} {
      height: 100%;
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 3vw;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  `,
  LogoWrapper: styled.div`
    width: 150px;
    height: 16px;
    display: flex;
    justify-content: center;
    @media ${device.tabletSM} {
      width: 200px;
    }
    @media ${device.tabletLG} {
      width: 100%;
      justify-content: flex-start;
    }
    @media ${device.laptop} {
      justify-content: flex-start;
    }
  `,
  Logo: styled.img`
    width: 35%;
    @media ${device.tabletLG} {
      width: 11%;
    }
  `,
};

export const CopyRight = {
  Wrapper: styled.section`
    width: 80%;
    height: 17px;
    margin: 1rem auto 0;
    display: flex;
    color: #ffffff;
    justify-content: center;
    font-size: 0.8rem;
    @media ${device.tabletLG} {
      font-size: 1rem;
    }
    @media ${device.tabletLG} {
      margin: 0;
      justify-content: flex-end;
      width: 100%;
    }
  `,
};
