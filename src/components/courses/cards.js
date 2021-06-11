import { Card } from '../../styles/course.style';
import { FaStar, FaStarHalf} from 'react-icons/fa';
import kubernetes from '../../illustrations/kubernetes-icon-white.png';
import ckad from '../../illustrations/ckad.png';
import gettingstarted from '../../illustrations/started.png';
import cka from '../../illustrations/cka.png';
import easy from '../../illustrations/easy.png';

const CourseCardComponent = () => {
  return(
    <Card.Wrapper>
      <Card.CardCase>
        <Card.CardItem>
          <Card.CardTopSection bgimage={gettingstarted} gradone={'#326CE5ab'}>
          <Card.CardLogo src={kubernetes} alt='kubernetes' />
            <Card.CardBottomsection>
              <Card.CardCourseTitle>
                Kubernetes Made Easy: 
              </Card.CardCourseTitle>
              <Card.CardCourseSubTitle>
                Learn Kubernetes From Scratch
              </Card.CardCourseSubTitle>
              <Card.CourseRatingContainer>
                <Card.CourseRating>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf /> 
                </Card.CourseRating>
                <Card.CourseReviews>(1,857)</Card.CourseReviews>
                <Card.CourseStudents>11,539 Enrolled</Card.CourseStudents>
              </Card.CourseRatingContainer>
              <Card.CourseButton 
                href='https://www.udemy.com/course/kubernetes-made-easy/'
                >
                START COURSE
              </Card.CourseButton>
            </Card.CardBottomsection>
          </Card.CardTopSection>
        </Card.CardItem>
        <Card.CardItem>
          <Card.CardTopSection bgimage={easy} gradone={'#326CE5ab'}>
            <Card.CardLogo src={kubernetes} alt='kubernetes' />
            <Card.CardBottomsection>
              <Card.CardCourseTitle>
                Kubernetes: 
              </Card.CardCourseTitle>
              <Card.CardCourseSubTitle>
                Getting Started (2019)
              </Card.CardCourseSubTitle>
              <Card.CourseRatingContainer>
                <Card.CourseRating>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf /> 
                </Card.CourseRating>
                <Card.CourseReviews>(2,914)</Card.CourseReviews>
                <Card.CourseStudents>43,098 Enrolled</Card.CourseStudents>
              </Card.CourseRatingContainer>
              <Card.CourseButton 
                href='https://www.udemy.com/course/kubernetes-getting-started/'
                >
                START COURSE
              </Card.CourseButton>
            </Card.CardBottomsection>
          </Card.CardTopSection>
        </Card.CardItem>
        <Card.CardItem>
          <Card.CardTopSection bgimage={cka} gradone={'#326CE5ab'}>
            <Card.CardLogo src={kubernetes} alt='kubernetes' />
            <Card.CardBottomsection>
              <Card.CardCourseTitle>
                Ultimate CKA<mark>new</mark>
              </Card.CardCourseTitle>
              <Card.CardCourseSubTitle>
                Certified Kubernetes Administrator
              </Card.CardCourseSubTitle>
              <Card.CourseRatingContainer>
                <Card.CourseRating>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf /> 
                </Card.CourseRating>
                <Card.CourseReviews>(2)</Card.CourseReviews>
                <Card.CourseStudents>16 Enrolled</Card.CourseStudents>
              </Card.CourseRatingContainer>
              <Card.CourseButton 
                href='https://www.udemy.com/course/ultimate-cka-certified-kubernetes-administrator/'
                >
                START COURSE
              </Card.CourseButton>
            </Card.CardBottomsection>
            
          </Card.CardTopSection>
        </Card.CardItem>
        <Card.CardItem>
          <Card.CardTopSection bgimage={ckad} gradone={'#326CE5ab'}>
          <Card.CardLogo src={kubernetes} alt='kubernetes' />
            <Card.CardBottomsection>
              <Card.CardCourseTitle>
                Ultimate CKAD<mark>new</mark>
              </Card.CardCourseTitle>
              <Card.CardCourseSubTitle>
                Certified Kubernetes Application Developer
              </Card.CardCourseSubTitle>
              <Card.CourseRatingContainer>
                <Card.CourseRating>
                  <span>Not Rated</span>
                </Card.CourseRating>
                <Card.CourseReviews>(0)</Card.CourseReviews>
                <Card.CourseStudents>2 Enrolled</Card.CourseStudents>
              </Card.CourseRatingContainer>
              <Card.CourseButton 
                href='https://www.udemy.com/course/ultimate-ckad-certified-kubernetes-application-developer/'
                >
                START COURSE
              </Card.CourseButton>
            </Card.CardBottomsection>
            
          </Card.CardTopSection>
        </Card.CardItem>
      </Card.CardCase>
    </Card.Wrapper>
  )
}

export default CourseCardComponent;