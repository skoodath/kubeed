import { Faq } from "../../styles/faq.style";

const FaqsComponent = () => {
  return (
    <Faq.FaqWrapper>
      <Faq.QuestionWrapper>
        <Faq.Question>
          What do I need to know before learning Kubernetes?
        </Faq.Question>
      </Faq.QuestionWrapper>
      <Faq.Answer>
        Just a passion for Technology. We got everything covered, from getting
        started to expert courses.
      </Faq.Answer>
      <Faq.QuestionWrapper>
        <Faq.Question>Is Kubernetes tough?</Faq.Question>
      </Faq.QuestionWrapper>
      <Faq.Answer>
        Anything worth doing is not easy, so Kubernetes is not easy, but it is
        not impossible. We've tried to make your learning experience as easy as
        possible. But, it would be best if you put in the time and effort. Deal?
      </Faq.Answer>
      <Faq.QuestionWrapper>
        <Faq.Question>Where are these courses hosted?</Faq.Question>
      </Faq.QuestionWrapper>
      <Faq.Answer>
        Currently all these courses are hosted only on Udemy.com
      </Faq.Answer>
      <Faq.QuestionWrapper>
        <Faq.Question>Does KubeEd have its own learning platform?</Faq.Question>
      </Faq.QuestionWrapper>
      <Faq.Answer>Not yet. May be soon.</Faq.Answer>
      <Faq.QuestionWrapper>
        <Faq.Question style={{ color: "#ff0000" }}>
          What are the prices of these courses?
        </Faq.Question>
      </Faq.QuestionWrapper>
      <Faq.Answer margins>
        Since these courses are hosted on Udemy, so pricing varies based on
        where you are located. However, I tried making it economical and
        consistent by creating a special price for students accessing the above
        courses from this site. It will also help us save the commission fee
        from Udemy.
      </Faq.Answer>
      <Faq.Answer>
        For example, if you are accessing any of the courses using the above
        coupon code link, and if you are located in the U.S, it will be around
        $12.99, and if you are in India, it will be about ₹570.
      </Faq.Answer>
      <Faq.QuestionWrapper>
        <Faq.Question>
          Does these courses come with a money-back guarantee?
        </Faq.Question>
      </Faq.QuestionWrapper>
      <Faq.Answer>
        Yes, 100%. All courses come with 100% Money back guarantee with in 30
        days, no questions asked. Feel free to try it out when in doubt.
      </Faq.Answer>
      <Faq.QuestionWrapper>
        <Faq.Question>How long do I have access to the course?</Faq.Question>
      </Faq.QuestionWrapper>
      <Faq.Answer>
        Lifetime access. Watch it anytime, anywhere, and on any device. You have
        it.
      </Faq.Answer>
      <Faq.QuestionWrapper>
        <Faq.Question>Do you have other questions?</Faq.Question>
      </Faq.QuestionWrapper>
      <Faq.Answer>
        Just send us a message on LinkedIn or an email. Happy Learning!
      </Faq.Answer>
    </Faq.FaqWrapper>
  );
};

export default FaqsComponent;
