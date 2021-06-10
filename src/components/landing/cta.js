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
        Courses
      </CtaLink>
  )
}

export default CtaComponent;