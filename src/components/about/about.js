import { About } from '../../styles/about.style';
import srinath from '../../illustrations/srinath.jpg';
import { useState } from 'react';

const AboutComponent = () => {

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  }

  return(
      <About.Wrapper name='about'>
        <About.Inner>
          <About.ImageWrapper>
            <About.Image src={srinath} alt={'Profile of Srinath'} title='know more' />
          </About.ImageWrapper>
          <About.ShortText>
            Hi, I am <b>Srinath Challa</b>. I am the founder and trainer at <b>Kubex</b>.
          </About.ShortText>
          {!show && <About.PlusButton onClick={handleShow} />}
          {show && <About.MinusButton onClick={handleShow} />}
          <About.LongTextContainer show={show}>
            <About.LongText>
            I've started “Kubex” with a passion for teaching Technology, especially Kubernetes. I've helped thousands of students learn Kubernetes and change their lives by becoming a DevOps Engineer/SREs with building a solid foundation in Kubernetes. 
            </About.LongText>
            <About.LongText>
            I've started my professional career as a Systems Analyst, then promoted to a Systems Engineer and to a Systems Architect over the past ten years. I hold a Bachelor's and Master's degree in Computer Science Engineering. Most importantly, I realized that, <b>my greatest passion is teaching</b>. 
            </About.LongText>
            <About.LongText>
            I spend most of my time researching how to <b>make complex concepts easy to understand</b>. With that thought in mind, I have created various Kubernetes courses with their unique purpose. If you are -
            </About.LongText>
            <About.LongTextList>
              <About.LongTextListItem>
                Just getting Started with Kubernetes <br />
                  <span>(or)</span>
              </About.LongTextListItem>
              <About.LongTextListItem>
                Preparing for Kubernetes CKA/CKAD Certifications<br /> 
                <span>(or)</span>
              </About.LongTextListItem>
              <About.LongTextListItem>
                Need to get expertise in Kubernetes
              </About.LongTextListItem>
            </About.LongTextList>
            <About.LongText>
              You can find that course on <b>Kubex.co!</b> 
            </About.LongText>
            <About.LongText>
              These courses are exactly the courses I wish I had when I was first getting into Kubernetes back in 2016. All my courses comes with <b>30-day 100% money back guarantee</b> with no question asked. 
            </About.LongText>
            <About.LongText>
              So see for yourself, enroll in one of my courses (or all of them :D) and join my 50,000+ happy students today.
            </About.LongText>
            <About.LongText>
              <b>See you inside the courses</b>
            </About.LongText>
          </About.LongTextContainer>
        </About.Inner>
      </About.Wrapper>
  )
}

export default AboutComponent;