import styled from "styled-components";
import { device } from "./devices";

export const Faq = {
  Wrapper: styled.section`
    padding: 5rem 0 0;
    position: relative;
    width: 100%;
    background-color: #ffffff;
    @media ${device.tabletSM} {
      padding: 8rem 0 0;
    }
    @media ${device.laptop} {
      padding: 10rem 0 0;
    }
  `,
  Inner: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${device.laptop} {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 3vw;
    }
  `,
  FaqWrapper: styled.div`
    width: 80%;
    margin: 0 auto 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media ${device.laptop} {
      margin: 0 0 0.5rem;
      width: 70%;
    }
  `,

  QuestionWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    @media ${device.laptop} {
      align-items: center;
    }
  `,
  Question: styled.div`
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    color: #424242;
    @media ${device.tabletSM} {
      font-size: 1.1rem;
    }
    @media ${device.tabletLG} {
      font-size: 1.45rem;
    }
  `,
  Answer: styled.div`
    font-size: 0.9rem;
    margin: 0 0 2rem;
    color: #424242;
    @media ${device.tabletSM} {
      font-size: 1.1rem;
    }
    @media ${device.tabletLG} {
      font-size: 1.15rem;
    }
  `,
};

export const FAQHeader = {
  Title: styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 auto 1rem;
    position: relative;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    @media ${device.tabletLG} {
      font-size: 2.5rem;
    }
    @media ${device.laptop} {
      width: 100%;
      max-width: 1366px;
      margin: 0 auto 2rem;
    }
  `,
};
