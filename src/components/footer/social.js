import { Social } from '../../styles/footer.style';
import { FaGithubSquare, FaYoutubeSquare, FaLinkedin, FaTwitterSquare, FaMedium } from 'react-icons/fa';


const SocialMediaComponent = () => {
  return(
    <>
    <Social.Wrapper>
      <a href='https://github.com/srchalla' target='_blank' rel="noreferrer"><FaGithubSquare /></a>
      <a href='https://www.youtube.com/user/srinathrchalla1' target='_blank' rel="noreferrer"><FaYoutubeSquare /></a>
      <a href='https://www.linkedin.com/in/srinathchalla/' target='_blank' rel="noreferrer"><FaLinkedin /></a> 
      <a href='https://twitter.com/srinathrchalla' target='_blank' rel="noreferrer"><FaTwitterSquare /></a>
      <a href='https://medium.com/@srinathchalla' target='_blank' rel="noreferrer"><FaMedium /></a>
    </Social.Wrapper>
    </>
  )
}

export default SocialMediaComponent;