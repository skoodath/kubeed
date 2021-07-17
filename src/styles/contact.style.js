import styled from "styled-components";
import { device } from "./devices";
import { FaEnvelope, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export const Contact = {
  Wrapper: styled.section`
    padding: 5rem 0;
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #fcfcfc;
    @media ${device.tabletSM} {
      height: 100vh;
    }
    @media ${device.laptop} {
      height: 100vh;
    }
  `,
  Inner: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media ${device.laptop} {
      padding: 0 3vw;
      max-width: 1366px;
      margin: 0 auto;
    }
  `,
};

export const Connect = {
  Wrapper: styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  Inner: styled.div`
    display: flex;
    @media ${device.tabletSM} {
      flex-direction: row;
      width: 50%;
      a {
        display: inline-block;
        width: 100%;
      }
    }
  `,
  Header: styled.h3`
    margin: 0 0 2rem 0;
    font-size: 1.5rem;
    color: #bfbfbf;
  `,
  IconWrapper: styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `,
  IconText: styled.h4`
    color: #bfbfbf;
    margin: 1rem 0 0 0;
  `,
  IconLogoWrapper: styled.span`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ bgcolor }) => bgcolor};
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: ${({ bgcolor }) => `${bgcolor}ab`};
    }
    @media ${device.tabletLG} {
      width: 50px;
      height: 50px;
    }
  `,
};

export const Email = styled(FaEnvelope)`
  fill: #ffffff;
  font-size: 1.6rem;
  @media ${device.tabletSM} {
    font-size: 2rem;
  }
`;

export const Linkedin = styled(FaLinkedinIn)`
  fill: #ffffff;
  font-size: 1.8rem;
  @media ${device.tabletSM} {
    font-size: 2rem;
  }
`;

export const Youtube = styled(FaYoutube)`
  fill: #ffffff;
  font-size: 1.8rem;
  @media ${device.tabletSM} {
    font-size: 2rem;
  }
`;
