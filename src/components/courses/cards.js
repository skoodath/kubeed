import { Card } from '../../styles/course.style';
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
            breakpoints={{
              640: {
                width: 640,
                slidesPerView: 1,
                spaceBetween: 30
              },
              768: {
                width: 768,
                slidesPerView: 2
              },
              992: {
                width: 992,
                slidesPerView: 2
              },
              1366: {
                width: 992,
                slidesPerView: 3
              }
            }}
          >
             <SwiperSlide>
                  <Card.CardBottomsection>
                    <Card.CardCourseTitle>
                      Kubernetes made easy 
                    </Card.CardCourseTitle>
                    <Card.CardCourseSubTitle>
                      Learn kubernetes from scratch
                    </Card.CardCourseSubTitle>
                    <Card.CourseButton 
                      href='https://www.udemy.com/course/kubernetes-made-easy/'
                      target='blank'
                      >
                      Start
                      </Card.CourseButton>
                    </Card.CardBottomsection>
                </SwiperSlide>
                <SwiperSlide>
                  <Card.CardBottomsection>
                    <Card.CardCourseTitle>
                      Ultimate CKA 
                    </Card.CardCourseTitle>
                    <Card.CardCourseSubTitle>
                      Certified Kubernetes Administrator
                    </Card.CardCourseSubTitle>
                    <Card.CourseButton 
                      href='https://www.udemy.com/course/ultimate-cka-certified-kubernetes-administrator/'
                      target='blank'
                      >
                      Start
                      </Card.CourseButton>
                    </Card.CardBottomsection>
                </SwiperSlide>
                <SwiperSlide>
                  <Card.CardBottomsection>
                    <Card.CardCourseTitle>
                      Ultimate CKAD 
                    </Card.CardCourseTitle>
                    <Card.CardCourseSubTitle>
                      Certified Kubernetes Application Developer
                    </Card.CardCourseSubTitle>
                    <Card.CourseButton 
                      href='https://www.udemy.com/course/ultimate-ckad-certified-kubernetes-application-developer/'
                      target='blank'
                      >
                      Start
                      </Card.CourseButton>
                    </Card.CardBottomsection>
                </SwiperSlide>
                <SwiperSlide>
                  <Card.CardBottomsection>
                    <Card.CardCourseTitle>
                      New Courses 
                    </Card.CardCourseTitle>
                    <Card.CardCourseSubTitle>
                      Coming Soon!!
                    </Card.CardCourseSubTitle>
                    </Card.CardBottomsection>
                </SwiperSlide>
          </Swiper>
            
      </Card.Wrapper>
    </>
    )
  }

export default CourseCardComponent;