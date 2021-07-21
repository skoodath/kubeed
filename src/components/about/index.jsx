import { About } from "../../styles/about.style";
import srinath from "../../assets/images/srinath.png";
import { useState } from "react";
import AboutTextComponent from "./expanded";

const AboutComponent = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <About.Wrapper name="about" show={show}>
        <About.Inner>
          <About.ImageWrapper>
            <About.Image
              src={srinath}
              alt={"Profile of Srinath"}
              title="Profile of Srinath"
            />
          </About.ImageWrapper>
          <About.ShortText>
            <About.ShortTextName>Srinath Challa</About.ShortTextName>
            <About.ShortTextRole>Founder &amp; Trainer</About.ShortTextRole>
          </About.ShortText>
          <About.ButtonWrap>
            <About.ButtonSpan>Bio</About.ButtonSpan>
            {!show && <About.ShowButton onClick={handleShow} />}
            {show && <About.HideButton onClick={handleShow} />}
          </About.ButtonWrap>
          <AboutTextComponent show={show} />
        </About.Inner>
      </About.Wrapper>
    </>
  );
};

export default AboutComponent;
