import { useContext } from 'react';
import { Link } from 'react-scroll';
import { NavbarSmall } from '../../styles/header.style';
import MyMenucontext from '../context';

const NavsmallComponent = () => {

  const {open, setOpen } = useContext(MyMenucontext);
  return(
    <NavbarSmall.Wrapper menu={open} onClick={() => setOpen(!open)}>
      <Link 
        to="faqs"
        spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500}
        role='button'
        tabIndex='0'
        onClick={() => setOpen(!open)}
      >
        Faq
      </Link>
      <Link 
        to="about"
        spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500}
        role='button'
        tabIndex='0'
        onClick={() => setOpen(!open)}
      >
        Instructor 
      </Link>
      <Link 
        to="contact"
        spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500}
        role='button'
        tabIndex='0'
        onClick={() => setOpen(!open)}
      >
        Contact Us 
      </Link>
      
    </NavbarSmall.Wrapper>
  )
}

export default NavsmallComponent;