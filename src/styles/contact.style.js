import styled from "styled-components";
import { device } from "./devices";
import { FaEnvelope, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdContentCopy, MdClose } from "react-icons/md";

export const Contact = {
  Wrapper: styled.section`
    padding: 5vh 0;
    position: relative;
    width: 100%;
    background-color: #fafafb;
    @media ${device.tabletSM} {
      padding: 8vh 0;
    }
    @media ${device.laptop} {
      padding: 10vh 0;
    }
  `,
  Inner: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media ${device.laptop} {
      padding: 0 3vw;
      max-width: 1200px;
      margin: 0 auto;
    }
  `,
};

export const Email = styled(FaEnvelope)`
  fill: #ffffff;
  font-size: 1.6rem;
  cursor: pointer;
  &:hover {
    fill: #01937c;
  }
  @media ${device.tabletSM} {
    font-size: 2.2rem;
  }
`;

export const Linkedin = styled(FaLinkedinIn)`
  fill: #ffffff;
  font-size: 1.6rem;
  @media ${device.tabletSM} {
    font-size: 2.2rem;
  }
`;

export const Youtube = styled(FaYoutube)`
  fill: #ffffff;
  font-size: 1.6rem;
  &:hover {
    fill: #ff0000;
  }
  @media ${device.tabletSM} {
    font-size: 2.2rem;
  }
`;

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
      width: 40%;
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
    position: relative;
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
    cursor: pointer;
    border-color: 1px;
    border-style: solid;
    border-color: transparent;
    &:hover {
      background-color: transparent;
      border-color: ${({ bordercolor }) => bordercolor};
      transition: background-color 0.3s ease-in-out;
      ${Linkedin} {
        fill: #0077b5;
      }
      ${Youtube} {
        fill: #ff0000;
      }
      ${Email} {
        fill: #01937c;
      }
    }
    @media ${device.tabletSM} {
      width: 50px;
      height: 50px;
    }
    @media ${device.tabletLG} {
      width: 55px;
      height: 55px;
    }
  `,
};

export const EmailPop = {
  Wrapper: styled.div`
    width: 200px;
    height: 60px;
    box-shadow: 1px 0 3px #aaaaaa;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    opacity: ${({ show }) => (show ? 1 : 0)};
    transform: ${({ show }) => (show ? "translateY(100%)" : "translateY(0)")};
    transition-property: visibility, opacity, transform;
    transition: 0.3s cubic-bezier(0.95, 0.00061, 0.355, 1);
    border-radius: 4px;
    position: absolute;
    background-color: #f2f2f2;
  `,
  Text: styled.span`
    border: none;
    outline: none;
    background-color: #f2f2f2;
    color: #424242;
    margin: 0 0.5rem 0 0;
  `,
  Copy: styled(MdContentCopy)`
    margin: 0 0.5rem 0 0;
    cursor: pointer;
    font-size: 1.2rem;
  `,
  Close: styled(MdClose)`
    color: #ff0000;
    font-weight: 500;
    cursor: pointer;
    font-size: 1.2rem;
  `,
};
