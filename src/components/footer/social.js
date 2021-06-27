import { Social } from '../../styles/footer.style';
import { FaTwitterSquare } from 'react-icons/fa';


const SocialMediaComponent = () => {
  return(
    <>
    <Social.Wrapper>
      <a href='https://twitter.com/srinathrchalla' target='_blank' rel="noreferrer"><FaTwitterSquare /></a>
    </Social.Wrapper>
    </>
  )
}

export default SocialMediaComponent;