import { Navbar, Navs} from '../../styles/header.style';

const NavbarComponent = () => {
  return(
    <Navbar.Wrapper>
      <Navs
        activeClass='active'
        to="about"
        spy={true} 
        smooth={true} 
        offset={-50} 
        duration={500}
        role='button'
        tabIndex='0'
      >
        Instructor 
      </Navs>
      <Navs
        activeClass="active"
        to="faqs"
        spy={true} 
        smooth={true} 
        offset={-50} 
        duration={500}
        role='button'
        tabIndex='0'
      >
        Faqs
      </Navs>
      <Navs
        activeClass='active'
        to="contact"
        spy={true} 
        smooth={true} 
        offset={-50} 
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