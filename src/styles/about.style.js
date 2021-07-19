import styled from "styled-components";
import { device } from "./devices";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { Link } from "react-scroll";

export const About = {
  Wrapper: styled.section`
    padding: 5rem 0;
    position: relative;
    width: 100%;
    background-color: #fcfcfc;
    @media ${device.laptop} {
      padding: 10rem 0;
    }
  `,
  Inner: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    @media ${device.laptop} {
      padding: 0 3vw;
      max-width: 1366px;
      margin: 0 auto;
    }
  `,
  ImageWrapper: styled.div`
    width: 200px;
    height: 200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    background-color: #f2f2f2;
    position: relative;
    @media ${device.tabletLG} {
      width: 250px;
      height: 250px;
    }
  `,
  Image: styled.img`
    height: 350px;
    width: auto;
    @media ${device.tabletLG} {
      height: 430px;
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
    font-size: 1.5rem;
    color: #424242;
    @media ${device.tabletLG} {
      font-size: 2rem;
    }
  `,
  ShortTextRole: styled.span`
    font-size: 1.5rem;
    color: #7f7f7f;
    @media ${device.tabletLG} {
      font-size: 2rem;
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
    text-align: center;
    color: #424242;
    @media ${device.tabletSM} {
      width: 70%;
      font-size: 1.2rem;
      b {
        font-size: 1.2rem;
      }
    }
    @media ${device.tabletLG} {
      font-size: 1.5rem;
      b {
        font-size: 1.5rem;
      }
    }
  `,
  LongTextList: styled.ul`
    padding: 0 0 0 1.5rem;
    margin: 0 0 1rem 0;
  `,
  LongTextListItem: styled.li`
    list-style-type: disc;
    @media ${device.tabletSM} {
      font-size: 1.2rem;
      b {
        font-size: 1.2rem;
      }
    }
    @media ${device.tabletLG} {
      font-size: 1.5rem;
      b {
        font-size: 1.5rem;
      }
    }
  `,
  ButtonWrap: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    margin: 2rem auto 0;
  `,
  ButtonSpan: styled.span`
    font-size: 1.5rem;
    font-weight: 500;
  `,
  ShowButton: styled(IoChevronDown)`
    font-size: 30px;
    fill: #a5a5a5;
    stroke: #a5a5a5;
    cursor: pointer;
  `,
  HideButton: styled(IoChevronUp)`
    font-size: 30px;
    fill: #bfbfbf;
    stroke: #a5a5a5;
    cursor: pointer;
  `,
  Connect: styled(Link)`
    margin: 0 auto;
    cursor: pointer;
    font-size: 1rem;
    color: #002d46;
    padding: 0.5rem;
    background-color: #f2f2f2;
    transform-origin: left center;
    border-radius: 3px;
    border: 1px solid transparent;
    @media ${device.tabletLG} {
      font-size: 1.3rem;
    }
    &:hover {
      background-color: #eaeaea;
    }
  `,
};
