import { CtaLink } from "../../styles/landing.style";

const CtaComponent = () => {
  return (
    <CtaLink
      to="courses"
      spy={true}
      smooth={true}
      offset={-50}
      duration={100}
      role="button"
    >
      Enroll for $12.99 Today
    </CtaLink>
  );
};

export default CtaComponent;
