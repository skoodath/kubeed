import styled from 'styled-components';
import { Link } from 'react-scroll';
import { device } from './devices';

export const Header = {
  Wrapper: styled.header`
    width: 100%;
    height: 10vh;
    max-height: 75px;
    min-height: 50px;
    z-index: 99;  
    background-color: #ffffff;
    border-bottom: 1px solid #dddddd;
    padding: 0 5%;
    @media ${device.laptop}{
      padding: 0;
      position: fixed;
      top: 0;
    }
    
  `,
  Inner: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    @media ${device.laptop}{
      max-width: 1366px;
      margin: 0 auto;
      padding: 0 1rem;
    }
  `,
}
export const Brand = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${device.laptop}{
      justify-content: flex-start;
      width: 70%;
    }
  `,
  ImageLarge: styled.img`
    width: 100%;
    display: flex;
    @media ${device.laptop}{
      display: flex;
    }
  `,
  ImageSmall: styled.img`
    width: 100%;
    display: flex;
    @media ${device.laptop}{
      display: flex;
    }
`
}
export const LogoLink = styled(Link)`
    font-size: 2rem;
    cursor: pointer;
    display: inline-block;
    width: 120px;
    @media ${device.tabletSM}{
      width: 140px;
    }
    @media ${device.tabletLG}{
      width: 170px;
    }

`;

export const Navbar = {
  Wrapper: styled.nav`
    height: 60px;
    position: fixed;
    left: 0;
    width: 100%;
    bottom: 0;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    z-index: 99;
    @media ${device.tabletSM}{
      padding: 0 1rem;
    }
    @media ${device.laptop}{
      position: relative;
      display: flex;
      width: 100%;
      justify-content: flex-end;
      padding: 0;
    }
  `,
  Menu: styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    @media ${device.laptop}{
      justify-content: flex-end;
    }
  `
}


export const Links = styled(Link)`
    display: flex;
    position: relative;
    color: #ffffff;
    background-color: #0096FF;
    justify-content: center;
    border-radius: 5px;
    padding: 0.3rem 0.5rem;
    cursor: pointer;
    letter-spacing: 1px;
    font-size: 0.85rem;
    font-weight: 600;
    transition: background-color 0.5s ease-in-out;
    width: 25%;
    max-width: 150px;
    border: 2px solid transparent;
    overflow: hidden;
    &:hover{
      background-color: #0096ff90;
      transform-origin: top center;
    }

    @media ${device.tabletSM}{
      font-size: 1.2rem;
      width: 20%;
    }
    @media ${device.tabletLG}{
      align-items: center;
      height: 40px;
      font-size: 1.2rem;
    }
    
`;
export const Nav = styled(Link)`
    position: relative;
    display: flex;
    color: #858585;
    justify-content: center;
    padding: 0.3rem 0.5rem;
    margin: 0 0;
    cursor: pointer;
    letter-spacing: 1px;
    font-size: 0.8rem;
    font-weight: 600;
    &::after{
      content: "";
      position: absolute;
      width: 0;
      height: 100%;
      z-index: 100;
    }
    &.active{
      &::after{
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 100;
      border-bottom: 2px solid #0096FF;
      transform-origin: bottom center;
      transition: width 0.3s ease-in-out;
      }
    }
    &:hover{
      &::after{
      content: "";
      position: absolute;
      width: 100%;
      z-index: 100;
      border-bottom: 2px solid #0096FF;
      transform-origin: bottom center;
      transition: width 0.3s ease-in-out;
      }
    }
    @media ${device.tabletSM}{
      font-size: 1.2rem;
    }
    @media ${device.tabletLG}{
      align-items: center;
      height: 40px;
      font-size: 1.2rem;
      margin: 0 2rem 0 0;
    }
  `;