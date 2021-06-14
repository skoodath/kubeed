import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';
import { device } from './devices';

export const Header = {
  Wrapper: styled.header`
    position: fixed;
    width: 100%;
    height: 70px;
    top: 0;
    z-index: 1;
    background-color: #fcfdff;
    padding: 0 10%;
    @media ${device.laptop}{
      padding: 0;
    }
    
  `,
  Inner: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.laptop}{
      max-width: 1366px;
      margin: 0 auto;
      padding: 0 1rem;
    }
  `
};

export const Brand = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    
  `
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
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
        transform: translateY(-10px);
      }
    }
`
export const Links = styled(Link)`
    display: flex;
    color: #1D51BF;
    justify-content: center;
    border-radius: 3px;
    padding: 0.3rem 0.5rem;
    border: 1px solid #CC9D3B;
    cursor: pointer;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 0.85rem;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    svg{
      visibility: hidden;
      width: 0;
      transform: translateY(-100%);
      fill: #326CE5;
      transition: transform 0.3s ease-in-out, width 0.5s ease-in-out;
    }
    &:hover{
      color: #326CE5;
      svg{
        visibility: visible;
        width: 100%;
        transform: translateY(0);
        color: #326CE5;
        animation: 1.5s ${bounce} cubic-bezier(0.0075, 0.52, 0.0095, 0.6) infinite;
      }
    }
    @media ${device.tabletLG}{
      align-items: center;
      height: 40px;
      width: 150px;
      font-size: 1.2rem;
    }
    
`;
