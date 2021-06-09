import { Social } from '../../styles/footer.style';
import { FaFacebookSquare, FaYoutubeSquare, FaLinkedin } from 'react-icons/fa';


const SocialMediaComponent = () => {
  return(
    <>
    <Social.Wrapper>
      <a href='https://www.udemy.com/user/srinathchalla/' target='_blank' rel="noreferrer"><FaFacebookSquare /></a>
      <a href='https://www.youtube.com/user/srinathrchalla1' target='_blank' rel="noreferrer"><FaYoutubeSquare /></a>
      <a href='https://www.linkedin.com/in/srinathchalla/' target='_blank' rel="noreferrer"><FaLinkedin /></a> 
    </Social.Wrapper>
    </>
  )
}

export default SocialMediaComponent;