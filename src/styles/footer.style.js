import styled from "styled-components";
import { device } from "./devices";

export const Footer = {
  Wrapper: styled.section`
    padding: 5vh 0 0 0;
    margin: 0 0 60px 0;
    position: relative;
    width: 100%;
    background-color: #fafafb;
    @media ${device.tabletLG} {
      padding: 1rem 0;
      height: auto;
      margin: 0 0 60px 0;
    }
    @media ${device.laptop} {
      margin: 0;
    }
  `,
  Inner: styled.div`
    width: 100%;
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
    }
    @media ${device.laptop} {
      height: 100%;
      max-width: 1366px;
      margin: 0 auto;
      padding: 0 3vw;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  `,
  LogoWrapper: styled.div`
    width: 150px;
    display: flex;
    justify-content: center;
    @media ${device.tabletSM} {
      width: 200px;
    }
    @media ${device.tabletLG} {
      width: 100%;
    }
    @media ${device.laptop} {
      justify-content: flex-start;
    }
  `,
  Logo: styled.img`
    width: 12%;
  `,
};

export const CopyRight = {
  Wrapper: styled.section`
    width: 80%;
    margin: 1rem auto 1rem;
    display: flex;
    padding: 0;
    color: #bfbfbf;
    justify-content: center;
    @media ${device.tabletLG} {
      font-size: 1.2rem;
    }
    @media ${device.tabletLG} {
      margin: 0;
      justify-content: flex-end;
      width: 100%;
    }
  `,
};
