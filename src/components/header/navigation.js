import { Navbar, Navs} from '../../styles/header.style';

const NavbarComponent = () => {
  return(
    <Navbar.Wrapper>
      <Navs 
        to="faqs"
        spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500}
        role='button'
        tabIndex='0'
      >
        Faqs
      </Navs>
      <Navs 
        to="about"
        spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500}
        role='button'
        tabIndex='0'
      >
        Instructor 
      </Navs>
      <Navs 
        to="contact"
        spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500}
        role='button'
        tabIndex='0'
      >
        Contact Us 
      </Navs>
    </Navbar.Wrapper>
  )
}

export default NavbarComponent;