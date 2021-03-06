import { useState } from "react";
import { Connect, Email, Linkedin, Youtube } from "../../styles/contact.style";
import HeadingComponent from "../sectionheading/sectionheading";
import EmailPopComponent from "./emailpop";

const ConnectComponent = () => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    setShow(!show);
  };

  return (
    <Connect.Wrapper>
      <HeadingComponent text={`Let's Connect`} />
      <Connect.Inner>
        <Connect.IconWrapper>
          <Connect.IconLogoWrapper
            bgcolor={"#01937c"}
            bordercolor={"#01937c"}
            onClick={handleClick}
            tabIndex="0"
          >
            <Email title="email" />
          </Connect.IconLogoWrapper>
          <EmailPopComponent show={show} setShow={setShow} />
        </Connect.IconWrapper>
        <a
          href="https://www.linkedin.com/in/srinathchalla/"
          target="_blank"
          rel="noreferrer"
        >
          <Connect.IconWrapper>
            <Connect.IconLogoWrapper
              bgcolor={"#0077b5"}
              bordercolor={"#0077b5"}
            >
              <Linkedin title="linkedin" />
            </Connect.IconLogoWrapper>
          </Connect.IconWrapper>
        </a>
        <a
          href="https://www.youtube.com/user/srinathrchalla1?sub_confirmation=1"
          target="_blank"
          rel="noreferrer"
        >
          <Connect.IconWrapper>
            <Connect.IconLogoWrapper
              bgcolor={"#ff0000"}
              bordercolor={"#ff0000"}
            >
              <Youtube title="youtube" />
            </Connect.IconLogoWrapper>
          </Connect.IconWrapper>
        </a>
      </Connect.Inner>
    </Connect.Wrapper>
  );
};

export default ConnectComponent;
