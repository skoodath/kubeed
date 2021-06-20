import { Links} from '../../styles/header.style';

const CtaComponent = () => {
  return(
    <Links
      to="courses"
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={300}
      role='button'
      >
        Courses
      </Links>
  )
}

export default CtaComponent;