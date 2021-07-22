import { CopyRight } from "../../styles/footer.style";

const CopyRightComponent = () => {
  return (
    <CopyRight.Wrapper>
      &copy; {new Date().getFullYear()} KubeEd.com | All rights reserved
    </CopyRight.Wrapper>
  );
};

export default CopyRightComponent;
