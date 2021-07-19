import { CtaLink } from "../../styles/landing.style";

const CtaComponent = () => {
  return (
    <CtaLink
      to="courses"
      spy={true}
      smooth={true}
      offset={0}
      duration={300}
      role="button"
    >
      Enroll for $12.99 Today
    </CtaLink>
  );
};

export default CtaComponent;
