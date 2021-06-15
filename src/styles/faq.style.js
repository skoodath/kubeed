import { Link } from "react-scroll";
import styled, { keyframes } from "styled-components";
import { device } from "./devices";

export const Faq = {
  Wrapper: styled.section`
    padding: 10vh 0 15vh 0;
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

const bounce = keyframes`
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-15px);
      }
    }
`

export const ScrollUp = styled(Link)`
    position: absolute;
    left: 50%;
    bottom: 0;
    margin: 0 0 0 -35px;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    cursor: pointer;
    animation: 1.5s ${bounce} cubic-bezier(0.0075, 0.52, 0.0095, 0.6) infinite;
    svg{
      font-size: 4rem;
      fill: #E5AB32;
      @media ${device.laptop}{
        font-size: 5rem;
    }
    }
`;