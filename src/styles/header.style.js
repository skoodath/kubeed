import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Header = {
  Wrapper: styled.header`
    position: fixed;
    width: 100%;
    height: 50px;
    display: flex;
    top: 0;
    z-index: 1;
    background-color: #f9f9f9;
    padding: 0 1rem;
  `,
};

export const Brand = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  `,
  LogoLink: styled.a`
    color: #326CE5;
    font-size: 2rem;
    &:visited{
      color: #326CE5;
    }
  `
}

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
    color: #ffffff;
    background-image: linear-gradient(90deg, #E5AB32C9, #E5AB32) ;
    justify-content: center;
    border-radius: 3px;
    padding: 0.3rem 0.5rem;
    box-shadow: 0 0 1px #7b5d1e, 0 0 2px #ffcf6c inset;
    cursor: pointer;
`;
