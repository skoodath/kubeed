import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';
import { device } from './devices';

export const Header = {
  Wrapper: styled.header`
    width: 100%;
    height: 60px;
    top: 0;
    z-index: 99;
    background-color: transparent;
    padding: 0 5%;
    @media ${device.laptop}{
      background-color: #020056;
      padding: 0;
      position: fixed;
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
  Hamburger: styled.div`
  width: 10%;
  position: relative;
  margin: 0 0 0 1rem;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  @media ${device.laptop}{
    display: none;
  }
  `,
  HamburgerLines: styled.div`
    position: relative;
    width:30px;
    height: 3.5px;
    background-color: #ffffff;
    margin: 0 0 0.4rem 0;
    border-radius: 20px;
    @media ${device.tabletSM}{
      width: 35px;
    }
  `
};

export const Brand = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${device.tabletSM}{
      width: 70%;
    }
    @media ${device.laptop}{
      width: 100%;
      justify-content: flex-start;
    }
  `,
}
export const LogoLink = styled(Link)`
    color: #326CE5;
    font-size: 2rem;
    cursor: pointer; 
    &:visited{
      color: #326CE5;
    }
`;

export const Navbar = {
  Wrapper: styled.nav`
    height: 50px;
    position: fixed;
    background-color: #020056;
    left: 0;
    width: 100%;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;
    z-index: 99;
    @media ${device.laptop}{
      position: relative;
      display: flex;
      width: 100%;
      justify-content: flex-end;
    }
  `
}
export const NavbarSmall = {
  Wrapper: styled.nav`
    //width: ${({menu}) => menu? '70%': 0 };
    width: 100%;
    //visibility: ${({menu}) => menu? 'visible': 'hidden' };
    height: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    //flex-direction: column;
    position: fixed;
    align-items: center;
    justify-content: space-around;
    background-color: #020056;
    overflow: hidden;
    transition: width 0.3s cubic-bezier(0.755, 0.05, 0.008, 0.06), visibility 0.4s cubic-bezier(0.755, 0.05, 0.855, 0.06);
    a{
      display: flex;
      color: #00D871;
      justify-content: flex-start;
      border-radius: 3px;
      padding: 0.3rem 0.5rem;
      //margin: 0 0 3rem 0;
      cursor: pointer;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: 600;
      transform: ${({appear}) => appear? 'translateY(100%)': 'translateY(0)' };;
      visibility: hidden;
      transition: all 1s 1s ease-in-out;
      visibility: ${({appear}) => appear? 'hidden': 'visible' };
    &:hover{
      color: #67D800;
      }
    @media ${device.tabletSM}{
      font-size: 1.8rem;
    }
    @media ${device.tabletLG}{
      align-items: center;
      height: 40px;
      font-size: 1.2rem;
      }
    }
    @media ${device.laptop}{
      display: none;
    }
  `,
}

const bounce = keyframes`
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-10px);
      }
    }
`
export const Links = styled(Link)`
    display: flex;
    color: #ffffff;
    justify-content: center;
    border-radius: 3px;
    padding: 0.3rem 0.5rem;
    margin: 0;
    border: 1px solid #CC9D3B;
    cursor: pointer;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 0.85rem;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    width: 25%;
    svg{
      visibility: hidden;
      width: 0;
      transform: translateY(-100%);
      fill: #326CE5;
      color: #326CE5;
      transition: transform 0.3s ease-in-out, width 0.5s ease-in-out;
      font-size: 20px;
    }
    &:hover{
      color: #326CE5;
      svg{
        visibility: visible;
        width: 40%;
        transform: translateY(0);
        color: #326CE5;
        animation: 1.5s ${bounce} cubic-bezier(0.0075, 0.52, 0.0095, 0.6) infinite;
      }
    }
    @media ${device.tabletSM}{
      font-size: 1.2rem;
      width: 20%;
    }
    @media ${device.tabletLG}{
      align-items: center;
      height: 40px;
      //width: 150px;
      font-size: 1.2rem;
    }
    
`;
export const Navs = styled(Link)`
    display: flex;
    color: #00D871;
    justify-content: center;
    border-radius: 3px;
    padding: 0.3rem 0.5rem;
    margin: 0 0;
    cursor: pointer;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 0.80rem;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    &:hover{
      color: #67D800;
      svg{
        visibility: visible;
        width: 100%;
        transform: translateY(0);
        color: #326CE5;
        animation: 1.5s ${bounce} cubic-bezier(0.0075, 0.52, 0.0095, 0.6) infinite;
      }
    }
    @media ${device.tabletSM}{
      font-size: 1.2rem;
    }
    @media ${device.tabletLG}{
      align-items: center;
      height: 40px;
      font-size: 1.2rem;
      margin: 0 1rem 0 0;
    }
  `;