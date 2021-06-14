import { Card } from '../../styles/course.style';
import kubernetes from '../../illustrations/kubernetes-icon-white.png';
import courses from '../courses/courselist';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use(Navigation);


const CourseCardComponent = (props) => {

  
   return(
    <>
        <Card.Wrapper>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            centeredSlides={true}
            breakpoints={{
              640: {
                width: 640,
                slidesPerView: 1,
                spaceBetween: 30
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
              992: {
                width: 992,
                slidesPerView: 3,
              }
            }}
          >
          {courses.map(course =>
              (
                <SwiperSlide key={course.id} >
                <Card.CardTopSection bgimage={course.image} gradone={'#326CE5ab'}>
                <Card.CardLogo src={kubernetes} alt='kubernetes' />
                  <Card.CardBottomsection>
                    <Card.CardCourseTitle>
                      {course.title} 
                    </Card.CardCourseTitle>
                    <Card.CardCourseSubTitle>
                      {course.subtitle}
                    </Card.CardCourseSubTitle>
                    <Card.CourseButton 
                      href={course.url}
                      >
                      START COURSE
                      </Card.CourseButton>
                    </Card.CardBottomsection>
                  </Card.CardTopSection>
                </SwiperSlide>
              ) 
            )    
          }
          </Swiper>
            
      </Card.Wrapper>
      {/* <Card.NavContainer>
        <PrevArrow onClick={onClick} className={className} style={{...style}} >Previous</PrevArrow>
        <NextArrow onClick={onClick} className={className}>Next</NextArrow>
      </Card.NavContainer> */}
    </>
    )
  }

export default CourseCardComponent;