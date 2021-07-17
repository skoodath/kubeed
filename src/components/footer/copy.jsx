import { CopyRight } from "../../styles/footer.style";

const CopyRightComponent = () => {
  return (
    <CopyRight.Wrapper>
      &copy; {new Date().getFullYear()} kubeEd.com | All rights reserved
    </CopyRight.Wrapper>
  );
};

export default CopyRightComponent;
