import styled from "styled-components";
import { device } from "./devices";

export const Faq = {
  Wrapper: styled.section`
    padding: 10vh 0;
    position: relative;
    width: 100%;
    background-color: #fcfdff;
  `,
  Inner: styled.div`
    width: 100%;
    height: 100%;
    @media ${device.laptop}{
      max-width: 1366px;
      margin: 0 auto;
      padding: 0 3vw;
    }
  `,
  FaqWrapper: styled.div`
    width: 80%;
    margin: 0 auto;
    @media ${device.laptop}{
      margin: 0;
    }
  `,
  Question: styled.div`
    font-weight: 600;
    font-size: 1.3rem;
    margin: 0 auto 1rem;
    @media ${device.tabletLG}{
      font-size: 1.6rem;
    }
  `,
  Answer: styled.div`
    font-weight: 300;
    font-size: 1.1rem;
    margin: 0 auto 1rem;
    @media ${device.tabletLG}{
      font-size: 1.4rem;
    }
  `
}