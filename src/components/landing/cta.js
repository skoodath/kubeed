import { CtaLink } from '../../styles/landing.style';

const CtaComponent = () => {

  return(
      <CtaLink
      to="courses"
      spy={true} 
      smooth={true} 
      offset={90} 
      duration={300}
      role='button'
      >
        Hurry! Just $12.99 today
      </CtaLink>
    
  )
}

export default CtaComponent;