import { Header } from '../../styles/header.style';
import BrandComponent from './brand';
import NavbarComponent from "./navigation";
//import NavsmallComponent from './navsmall'
import MyMenucontext from '../context';
import { useContext } from 'react';

const HeaderSection = () => {

  const {open, setOpen} = useContext(MyMenucontext);
  
  return(
    <Header.Wrapper>
      <Header.Inner>
        <BrandComponent />
        <NavbarComponent />
        <Header.Hamburger onClick={() => setOpen(!open)}>
          <Header.HamburgerLines></Header.HamburgerLines>
          <Header.HamburgerLines></Header.HamburgerLines>
          <Header.HamburgerLines></Header.HamburgerLines>
        </Header.Hamburger>
      </Header.Inner>
      
    </Header.Wrapper>
  )
}

export default HeaderSection;