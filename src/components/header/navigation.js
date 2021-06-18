import { Navbar, Navs, Links} from '../../styles/header.style';
import { BsArrowDown } from 'react-icons/bs';

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
      <Links 
        to="courses"
        spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500}
        role='button'
        tabIndex='0'
      >
        Courses <BsArrowDown />
      </Links>
    </Navbar.Wrapper>
  )
}

export default NavbarComponent;