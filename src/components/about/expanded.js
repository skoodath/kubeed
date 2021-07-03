import { About } from '../../styles/about.style';


const AboutTextComponent = ({show}) => {

  return(
         <About.LongTextContainer show={show}>
            <About.LongText>
            I've started “Kubex” with a passion for teaching technology, especially Kubernetes. I've helped thousands of students learn Kubernetes and change their lives by becoming DevOps Engineers/SREs building a solid foundation in Kubernetes. 
            </About.LongText>
            <About.LongText>
            I started my professional career as a Systems Analyst and was promoted as a Systems Engineer and later to a Systems Architect over the past ten years. I hold a Master's degree in Computer Science Engineering. Most importantly, I realized that, my greatest passion is teaching. 
            </About.LongText>
            <About.LongText>
            I spend most of my time researching how to make complex concepts easy to understand. With that thought in mind, I have created various Kubernetes courses with their unique purpose. If you are -
            </About.LongText>
            <About.LongTextList>
              <About.LongTextListItem>
                Just getting Started with Kubernetes (or)
              </About.LongTextListItem>
              <About.LongTextListItem>
                Preparing for Kubernetes CKA/CKAD Certifications (or)
              </About.LongTextListItem>
              <About.LongTextListItem>
                Need to get expertise in Kubernetes
              </About.LongTextListItem>
            </About.LongTextList>
            <About.LongText>
              You can find that course on Kubex.co!
            </About.LongText>
            <About.LongText>
              These courses are exactly the courses I wish I had when I was first getting into Kubernetes back in 2016. All my courses comes with 30-day 100% money back guarantee with no question asked. 
            </About.LongText>
            <About.LongText>
              So see for yourself, enroll in one of my courses (or all of them :D) and join my 50,000+ happy students today.
            </About.LongText>
            <About.LongText>
              See you inside the courses!
            </About.LongText>
          </About.LongTextContainer>
  )
}

export default AboutTextComponent;