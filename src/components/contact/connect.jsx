import { Connect, Email, Linkedin, Youtube } from "../../styles/contact.style";
import HeadingComponent from "../sectionheading/sectionheading";

const ConnectComponent = () => {
  return (
    <Connect.Wrapper>
      <HeadingComponent text={`Let's Connect`} />
      <Connect.Inner>
        <a href="kubeed.com" rel="noreferrer">
          <Connect.IconWrapper>
            <Connect.IconLogoWrapper
              bgcolor={"#01937c"}
              onClick={() =>
                navigator.clipboard.writeText("srinath@kubeed.com")
              }
            >
              <Email title="email" />
            </Connect.IconLogoWrapper>
          </Connect.IconWrapper>
        </a>
        <a
          href="https://www.linkedin.com/in/srinathchalla/"
          target="_blank"
          rel="noreferrer"
        >
          <Connect.IconWrapper>
            <Connect.IconLogoWrapper bgcolor={"#0077b5"}>
              <Linkedin title="linkedin" />
            </Connect.IconLogoWrapper>
          </Connect.IconWrapper>
        </a>
        <a
          href="https://www.youtube.com/user/srinathrchalla1"
          target="_blank"
          rel="noreferrer"
        >
          <Connect.IconWrapper>
            <Connect.IconLogoWrapper bgcolor={"#ff0000"}>
              <Youtube title="youtube" />
            </Connect.IconLogoWrapper>
          </Connect.IconWrapper>
        </a>
      </Connect.Inner>
    </Connect.Wrapper>
  );
};

export default ConnectComponent;
