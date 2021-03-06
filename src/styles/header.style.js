import styled from "styled-components";
import { Link } from "react-scroll";
import { device } from "./devices";

export const Header = {
  Wrapper: styled.header`
    width: 100%;
    height: 8vh;
    max-height: 75px;
    min-height: 50px;
    z-index: 99;
    background-color: #ffffff;
    box-shadow: 2px 1px 2px #eee;
    position: fixed;
    @media ${device.laptop} {
      height: 9vh;
      padding: 0;
      top: 0;
    }
  `,
  Inner: styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 auto;
    @media ${device.laptop} {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 1rem;
    }
  `,
};
export const Brand = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    @media ${device.laptop} {
      justify-content: flex-start;
      width: 70%;
    }
  `,
  ImageSmall: styled.img`
    width: 100%;
    display: flex;
    @media ${device.laptop} {
      display: flex;
    }
  `,
};
export const LogoLink = styled(Link)`
  font-size: 1rem;
  cursor: pointer;
  display: inline-block;
  width: 70px;
  outline: none;
  @media ${device.tabletSM} {
    width: 90px;
  }
  @media ${device.tabletLG} {
    width: 100px;
    margin: 0;
  }
  @media ${device.laptop} {
    margin: 0;
  }
`;

export const Navbar = {
  Wrapper: styled.nav`
    display: none;
    @media ${device.tabletSM} {
      padding: 0 3rem;
    }
    @media ${device.laptop} {
      position: relative;
      display: flex;
      justify-content: flex-end;
      padding: 0;
    }
  `,
  Menu: styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    @media ${device.laptop} {
      justify-content: flex-end;
    }
  `,
};

export const Hamburger = {
  Wrapper: styled.div`
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 25px;
    height: 28px;
    top: 0;
    right: 0;
    cursor: pointer;
    position: relative;
    outline: none;
    @media ${device.laptop} {
      display: none;
    }
  `,
  HamburgerLines: styled.span`
    background-color: #424242;
    width: 100%;
    height: 3px;
    border-radius: 50px;
    opacity: ${({ open }) => (open ? 0 : 1)};
    transition: opacity 0.2s ease-in;
    &:first-child {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
      opacity: 1;
      position: ${({ open }) => (open ? "absolute" : "relative")};
      transition: transform 0.3s ease-in-out;
      transform-origin: ${({ open }) =>
        open ? "center center" : "right center"};
      transform-style: preserve-3d;
    }
    &:last-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
      opacity: 1;
      position: ${({ open }) => (open ? "absolute" : "relative")};
      transition: transform 0.3s ease-in-out;
      transform-origin: ${({ open }) =>
        open ? "center center" : "center right"};
    }
  `,
};
export const Nav = styled(Link)`
  position: relative;
  display: flex;
  color: ${({ color }) => color};
  justify-content: center;
  padding: 0.4rem 0.3rem;
  margin: 0;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: ${({ fontWeight }) => fontWeight};
  border: 1px solid transparent;
  outline-color: transparent;
  &:hover {
    background-color: #ffffff;
    border-radius: 2px;
    color: #387ed1;
    transform-origin: left center;
    transition: background-color 0.3s ease-in-out;
  }
  @media ${device.tabletSM} {
    font-size: 1rem;
    padding: 0.3rem 0.5rem;
  }
  @media ${device.tabletLG} {
    align-items: center;
    margin: 0 1rem 0 0;
    padding: 0.3rem 0.5rem;
  }
  @media ${device.laptop} {
    font-size: 1.05rem;
    margin: 0 4rem 0 0;
    adding: 0.3rem 0.6rem;
    &:last-child {
      margin: 0;
    }
  }
`;

export const NavbarSmall = {
  Wrapper: styled.nav`
    display: flex;
    width: 50%;
    opacity: ${({ open }) => (open ? 1 : 0)};
    transform: ${({ open }) => (open ? `translateX(0%)` : `translateX(100%)`)};
    top: 0;
    right: 0;
    height: 60vh;
    position: fixed;
    z-index: 99;
    background-color: #ffffff;
    box-shadow: 0 50px 100px -20px #00000020, 0 30px 60px -30px #00000010,
      0 -18px 60px -10px #00000010;
    transition-property: transform, opacity;
    transition: 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    @media ${device.tabletSM} {
      width: 30%;
    }
  `,
  MenuSmall: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 4rem 3.5rem;
    align-items: flex-start;
    justify-content: space-around;
    @media ${device.tabletSM} {
      padding: 6rem 5rem;
    }
  `,

  Nav: styled(Link)`
    position: relative;
    display: flex;
    color: ${({ color }) => color};
    justify-content: center;
    align-self: flex-start;
    padding: 0.4rem 0.3rem;
    text-align: right;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: ${({ fontWeight }) => fontWeight};
    border: 1px solid transparent;
    outline-color: transparent;
    &:hover {
      background-color: #ffffff;
      border-radius: 2px;
      color: #387ed1;
      transition: background-color 0.3s ease-in-out;
    }
    @media ${device.tabletSM} {
      padding: 0.3rem 0.5rem;
    }
    @media ${device.tabletLG} {
      align-items: center;
      margin: 0 1rem 0 0;
      padding: 0.3rem 0.5rem;
    }
  `,
};
