import { FaArrowDown } from 'react-icons/fa';
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
        Courses <FaArrowDown />
      </Links>
    </Navbar.Wrapper>
  )
}

export default NavbarComponent;