import { Card } from '../../styles/course.style';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import easy from '../../illustrations/easy.png';
import started from '../../illustrations/started.png';
import cka from '../../illustrations/cka.png';
import ckad from '../../illustrations/ckad.png';

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
                slidesPerView: 3
              },
              1366: {
                width: 1366,
                slidesPerView: 4
              }
            }}
          >
             <SwiperSlide>
                <Card.CardTopSection
                  height={'50%'}
                >
                  <img src={easy} alt='Kubernetes made easy' />
                  </Card.CardTopSection>
                  <Card.CardBottomsection
                    height={'50%'}
                  >
                    <Card.CardCourseTitle>
                      Kubernetes made easy 
                    </Card.CardCourseTitle>
                    <Card.CardCourseSubTitle>
                      Learn kubernetes from scratch
                    </Card.CardCourseSubTitle>
                    <Card.CourseButton 
                      href='https://www.udemy.com/course/kubernetes-made-easy/'
                      >
                      START COURSE
                      </Card.CourseButton>
                    </Card.CardBottomsection>
                </SwiperSlide>
                <SwiperSlide>
                <Card.CardTopSection
                  height={'50%'}
                >
                  <img src={started} alt='Kubernetes getting started' />
                  </Card.CardTopSection>
                  <Card.CardBottomsection
                    height={'50%'}
                  >
                    <Card.CardCourseTitle>
                      Kubernetes
                    </Card.CardCourseTitle>
                    <Card.CardCourseSubTitle>
                      Getting started (2019)
                    </Card.CardCourseSubTitle>
                    <Card.CourseButton 
                      href='https://www.udemy.com/course/kubernetes-getting-started/'
                      >
                      START COURSE
                      </Card.CourseButton>
                    </Card.CardBottomsection>
                </SwiperSlide>
                <SwiperSlide>
                <Card.CardTopSection
                  height={'50%'}
                >
                  <img src={cka} alt='Kubernetes made easy' />
                  </Card.CardTopSection>
                  <Card.CardBottomsection
                    height={'50%'}
                  >
                    <Card.CardCourseTitle>
                      Ultimate CKA 
                    </Card.CardCourseTitle>
                    <Card.CardCourseSubTitle>
                      Certified Kubernetes Administrator
                    </Card.CardCourseSubTitle>
                    <Card.CourseButton 
                      href='https://www.udemy.com/course/ultimate-cka-certified-kubernetes-administrator/'
                      >
                      START COURSE
                      </Card.CourseButton>
                    </Card.CardBottomsection>
                </SwiperSlide>
                <SwiperSlide>
                <Card.CardTopSection
                  height={'50%'}
                >
                  <img src={ckad} alt='Kubernetes made easy' />
                  </Card.CardTopSection>
                  <Card.CardBottomsection
                    height={'50%'}
                  >
                    <Card.CardCourseTitle>
                      Ultimate CKAD 
                    </Card.CardCourseTitle>
                    <Card.CardCourseSubTitle>
                      Certified Kubernetes Application Developer
                    </Card.CardCourseSubTitle>
                    <Card.CourseButton 
                      href='https://www.udemy.com/course/ultimate-ckad-certified-kubernetes-application-developer/'
                      >
                      START COURSE
                      </Card.CourseButton>
                    </Card.CardBottomsection>
                </SwiperSlide>
                <SwiperSlide>
                <Card.CardTopSection
                  height={'0%'}
                >
                  </Card.CardTopSection>
                  <Card.CardBottomsection
                    height={'100%'}
                  >
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
      {/* <Card.NavContainer>
        <PrevArrow onClick={onClick} className={className} style={{...style}} >Previous</PrevArrow>
        <NextArrow onClick={onClick} className={className}>Next</NextArrow>
      </Card.NavContainer> */}
    </>
    )
  }

export default CourseCardComponent;