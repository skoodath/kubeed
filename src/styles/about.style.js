import styled from "styled-components";
import { device } from "./devices";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { Link } from "react-scroll";

export const About = {
  Wrapper: styled.section`
    padding: ${({ show }) => (show ? "10vh 0" : "0")};
    position: relative;
    width: 100%;
    height: ${({ show }) => (show ? "auto" : "100vh")};
    background-color: #ffffff;
    @media ${device.tabletSM} {
      padding: 8vh 0 0;
      height: auto;
    }
    @media ${device.tabletLG} {
      padding: 8vh 0 0;
      height: auto;
    }
    @media ${device.laptop} {
      padding: 8vh 0 0;
      height: ${({ show }) => (show ? "auto" : "100vh")};
      max-height: 750px;
    }
  `,
  Inner: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    @media ${device.laptop} {
      max-width: 1200px;
      margin: 0 auto;
    }
  `,
  ImageWrapper: styled.div`
    width: 140px;
    height: 140px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    background-color: #f2f2f2;
    position: relative;
    @media ${device.tabletLG} {
      width: 180px;
      height: 180px;
    }
  `,
  Image: styled.img`
    height: 300px;
    width: auto;
    position: relative;
    top: -32px;
    @media ${device.tabletLG} {
      top: -40px;
      height: 390px;
    }
  `,
  ShortText: styled.p`
    width: 80%;
    margin: 0.5rem auto;
    text-align: center;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    @media ${device.tabletLG} {
      font-size: 2rem;
    }
  `,
  ShortTextName: styled.span`
    font-weight: 600;
    font-size: 1.4rem;
    color: #1a1d1f;
    @media ${device.tabletLG} {
      font-size: 1.5rem;
    }
  `,
  ShortTextRole: styled.span`
    font-size: 1rem;
    color: #666666;
    @media ${device.tabletLG} {
      font-size: 1.1rem;
    }
  `,
  LongTextContainer: styled.div`
    width: 80%;
    margin: 1rem auto 0;
    display: flex;
    flex-direction: column;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    height: ${({ show }) => (show ? "auto" : 0)};
    transition: all 0.2s ease-in-out;
  `,
  LongText: styled.p`
    margin: 0 auto 1rem;
    text-align: left;
    color: #424242;
    @media ${device.tabletSM} {
      width: 50%;
      font-size: 1rem;
    }
    @media ${device.tabletLG} {
      font-size: 1.14rem;
    }
  `,
  ButtonWrap: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    margin: 1rem auto 0;
  `,
  ButtonSpan: styled.span`
    font-size: 1.1rem;
    font-weight: 500;
    color: #424242;
  `,
  ShowButton: styled(IoChevronDown)`
    font-size: 20px;
    fill: #a5a5a5;
    stroke: #a5a5a5;
    cursor: pointer;
  `,
  HideButton: styled(IoChevronUp)`
    font-size: 20px;
    fill: #bfbfbf;
    stroke: #a5a5a5;
    cursor: pointer;
  `,
  Connect: styled(Link)`
    margin: 0 auto;
    cursor: pointer;
    font-size: 1rem;
    color: #ffffff;
    padding: 0.5rem 0.8rem;
    background-color: #387ed1;
    transform-origin: left center;
    border-radius: 3px;
    border: 1px solid transparent;
    transition: background-color 0.3s ease-in-out;
    @media ${device.tabletLG} {
      font-size: 1rem;
    }
    &:hover {
      background-color: #2a5f9f;
    }
  `,
};
