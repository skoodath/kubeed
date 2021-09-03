import { Card } from "../../styles/course.style";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import { kwatermark } from "./images";
import { courses } from "../../assets/data/carddata";

SwiperCore.use(Navigation);

const CourseCardComponent = (props) => {
  return (
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
              spaceBetween: 30,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            992: {
              width: 992,
              slidesPerView: 2,
            },
            1366: {
              width: 992,
              slidesPerView: 3,
            },
          }}
        >
          {courses.map((course) => (
            <SwiperSlide key={course.key}>
              <Card.CardSection>
                <Card.CardTopSection bgimage={course.bgimage}>
                  <Card.CardLogo src={kwatermark} alt="KubeEd watermark" />
                  <Card.CourseImage src={course.src} alt={course.alt} />
                </Card.CardTopSection>
                <Card.CardBottom>
                  <Card.CardCourseTitle>
                    {course.coursename}
                  </Card.CardCourseTitle>
                  <Card.CardCourseSubTitle>
                    {course.coursesubtitle}
                  </Card.CardCourseSubTitle>
                  <Card.CourseButton
                    href={course.url}
                    target="blank"
                    title={course.title}
                  >
                    Start
                  </Card.CourseButton>
                </Card.CardBottom>
              </Card.CardSection>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            <Card.CardSection>
              <Card.CardTopSection bgimage={easybg}>
                <Card.CardLogo src={kwatermark} alt="Kubex watermark" />
                <Card.CourseImage
                  src={easy}
                  alt="Course one. Kubernetes made easy"
                />
              </Card.CardTopSection>
              <Card.CardBottom>
                <Card.CardCourseTitle>
                  Kubernetes Made Easy
                </Card.CardCourseTitle>
                <Card.CardCourseSubTitle>
                  Get your Kubernetes Journey Started with Kubernetes Made Easy
                </Card.CardCourseSubTitle>
                <Card.CourseButton
                  href="https://www.udemy.com/course/kubernetes-made-easy/?couponCode=KME-JULAUG21"
                  target="blank"
                  title="Link to Kubernetes made easy"
                >
                  Start
                </Card.CourseButton>
              </Card.CardBottom>
            </Card.CardSection>
          </SwiperSlide>
          <SwiperSlide>
            <Card.CardSection>
              <Card.CardTopSection bgimage={ckabg}>
                <Card.CardLogo src={kwatermark} alt="Kubex watermark" />
                <Card.CourseImage
                  src={cka}
                  alt="Course two. Certified kubernetes administrator"
                />
              </Card.CardTopSection>
              <Card.CardBottom>
                <Card.CardCourseTitle>Ultimate CKA</Card.CardCourseTitle>
                <Card.CardCourseSubTitle>
                  Prepare for CKA Certification with Ultimate CKA and be a
                  Certified Kubernetes Administrator
                </Card.CardCourseSubTitle>
                <Card.CourseButton
                  href="https://www.udemy.com/course/ultimate-cka-certified-kubernetes-administrator/?couponCode=CKA-JULAUG21"
                  target="blank"
                  title="Link to Certified Kubernetes administrator course"
                >
                  Start
                </Card.CourseButton>
              </Card.CardBottom>
            </Card.CardSection>
          </SwiperSlide>
          <SwiperSlide>
            <Card.CardSection>
              <Card.CardTopSection bgimage={ckadbg}>
                <Card.CardLogo src={kwatermark} alt="Kubex watermark" />
                <Card.CourseImage
                  src={ckad}
                  alt="Course three. Certified Kubernetes Application developer"
                />
              </Card.CardTopSection>
              <Card.CardBottom>
                <Card.CardCourseTitle>Ultimate CKAD</Card.CardCourseTitle>
                <Card.CardCourseSubTitle>
                  Prepare for CKAD Certification with Ultimate CKAD and be a
                  Certified Kubernetes Application Developer
                </Card.CardCourseSubTitle>
                <Card.CourseButton
                  href="https://www.udemy.com/course/ultimate-ckad-certified-kubernetes-application-developer/?couponCode=CKAD-JULAUG21"
                  target="blank"
                  title="Link to Certified Kubernetes application developer course"
                >
                  Start
                </Card.CourseButton>
              </Card.CardBottom>
            </Card.CardSection>
          </SwiperSlide> */}
          <SwiperSlide>
            <Card.CardSection>
              <Card.CardCourseTitle>New Courses</Card.CardCourseTitle>
              <Card.CardCourseSubTitle>Coming Soon!!</Card.CardCourseSubTitle>
            </Card.CardSection>
          </SwiperSlide>
        </Swiper>
      </Card.Wrapper>
    </>
  );
};

export default CourseCardComponent;
