import { Faq, FAQHeader } from "../../styles/faq.style";
import FaqsComponent from "./faq";

const FaqComponent = () => {
  return (
    <>
      <Faq.Wrapper name="faq">
        <FAQHeader.Title>FAQs</FAQHeader.Title>
        <Faq.Inner>
          <FaqsComponent />
        </Faq.Inner>
      </Faq.Wrapper>
    </>
  );
};

export default FaqComponent;
