import styled from 'styled-components';
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
export const Links = styled(Link)`
    display: flex;
    color: #326CE5;
    justify-content: center;
    border-radius: 3px;
    padding: 0.3rem 0.5rem;
    border: 1px solid #E5AB32;
    cursor: pointer;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 0.85rem;
    font-weight: 600;
    @media ${device.laptop}{
      align-items: center;
      height: 40px;
      width: 150px;
      font-size: 1.2rem;
    }
    
`;
