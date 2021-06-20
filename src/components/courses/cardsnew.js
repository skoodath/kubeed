import elearning from '../../illustrations/elearning.png';
import onboarding from '../../illustrations/onboarding.png';
import onlinelearning from '../../illustrations/online-learning.png';
import { Card } from '../../styles/card.style';

const CourseCardComponentNew = () => {

  return(
    <Card.Wrapper className='cardwrapper'>
        <Card.CardItem className='carditem'>
          <Card.CardTopSection className='cardtopsection'
          >
          <Card.CardImageWrapper>
            <Card.CardLogo src={elearning} alt='kubernetes' className='cardlogo' />
          </Card.CardImageWrapper>
          
            <Card.CardBottomsection>
              <Card.CardCourseTitle>
                Kubernetes Made Easy
              </Card.CardCourseTitle>
              <Card.CardCourseSubTitle>
                Learn Kubernetes From Scratch
              </Card.CardCourseSubTitle>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Card.CourseButton
                href='https://www.udemy.com/course/kubernetes-made-easy/'
                >
                START COURSE
              </Card.CourseButton>
            </Card.CardBottomsection>
          </Card.CardTopSection>
        </Card.CardItem>
        <Card.CardItem className='carditem'>
          <Card.CardTopSection className='cardtopsection'>
            <Card.CardImageWrapper>
              <Card.CardLogo src={onboarding} alt='kubernetes' className='cardlogo' />
            </Card.CardImageWrapper>
            
            <Card.CardBottomsection>
              <Card.CardCourseTitle>
                Ultimate CKA<mark>new</mark>
              </Card.CardCourseTitle>
              <Card.CardCourseSubTitle>
                Certified Kubernetes Administrator
              </Card.CardCourseSubTitle>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Card.CourseButton
                href='https://www.udemy.com/course/ultimate-cka-certified-kubernetes-administrator/'
                >
                START COURSE
              </Card.CourseButton>
            </Card.CardBottomsection>
            
          </Card.CardTopSection>
        </Card.CardItem>
        <Card.CardItem className='carditem'>
          <Card.CardTopSection className='cardtopsection'>
            <Card.CardImageWrapper>
              <Card.CardLogo src={onlinelearning} alt='kubernetes' className='cardlogo' />
            </Card.CardImageWrapper>
          
            <Card.CardBottomsection>
              <Card.CardCourseTitle>
                Ultimate CKAD<mark>new</mark>
              </Card.CardCourseTitle>
              <Card.CardCourseSubTitle>
                Certified Kubernetes Application Developer
              </Card.CardCourseSubTitle>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Card.CourseButton
                href='https://www.udemy.com/course/ultimate-ckad-certified-kubernetes-application-developer/'
                >
                START COURSE
              </Card.CourseButton>
            </Card.CardBottomsection>
            
          </Card.CardTopSection>
        </Card.CardItem>
    </Card.Wrapper>
  )
}

export default CourseCardComponentNew;