import { Navbar, Nav } from '../../styles/header.style';
import CtaComponent from './cta';

const NavbarComponent = () => {
  return(
    <Navbar.Wrapper>
      <Navbar.Menu>
        <Nav
          activeClass='active'
          to="about"
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500}
          role='button'
          tabIndex='0'
        >
          Instructor
        </Nav>
        <Nav
          activeClass='active'
          to="faq"
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500}
          role='button'
          tabIndex='0'
        >
          Faqs
        </Nav>
        <Nav
          activeClass='active'
          to="connect"
          spy={true} 
          smooth={true} 
          offset={0} 
          duration={500}
          role='button'
          tabIndex='0'
        >
          Connect 
        </Nav>
      </Navbar.Menu>
      
      <CtaComponent />
    </Navbar.Wrapper>
  )
}

export default NavbarComponent;