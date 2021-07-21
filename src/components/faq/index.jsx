import { Faq } from "../../styles/faq.style";
import HeadingComponent from "../sectionheading/sectionheading";
import FaqsComponent from "./faq";

const FaqComponent = () => {
  return (
    <>
      <Faq.Wrapper name="faq">
        <HeadingComponent text={`FAQs`} />
        <Faq.Inner>
          <FaqsComponent />
        </Faq.Inner>
      </Faq.Wrapper>
    </>
  );
};

export default FaqComponent;
