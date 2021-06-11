import { FaArrowDown } from 'react-icons/fa';
import { CtaLink } from '../../styles/landing.style';

const CtaComponent = () => {
  return(
    <CtaLink 
      to="courses"
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={300}
      role='button'
      >
        Courses <FaArrowDown />
      </CtaLink>
  )
}

export default CtaComponent;