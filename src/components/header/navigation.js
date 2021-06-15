import { BsArrowDown } from 'react-icons/bs';
import { Navbar, Links} from '../../styles/header.style';

const NavbarComponent = () => {
  return(
    <Navbar.Wrapper>
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