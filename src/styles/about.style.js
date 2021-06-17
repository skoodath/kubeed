import styled from "styled-components";
import { device } from "./devices";

export const About = {
  Wrapper: styled.section`
  padding: 10vh 0;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  @media ${device.mobileSM}{
    height: 100vh;
  }
  @media ${device.tabletSM}{
    height: auto;
  }

  @media ${device.laptop}{
    height: auto;
  }
`,
Inner: styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10vh 0 0 0;
  @media ${device.mobileSM}{
    padding: 5vh 0 0 0;
  }
  @media ${device.tabletLG}{
    padding: 5vh 0 0 0;
  }
  @media ${device.laptop}{
    padding: 0 3vw;
    flex-direction: row;
    max-width: 1366px;
    margin: 0 auto;
  }
`,
}