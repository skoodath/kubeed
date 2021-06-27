import styled from "styled-components";
import { device } from "./devices";
import { GrMail, GrLinkedin, GrYoutube } from "react-icons/gr";
import { SiUdemy } from 'react-icons/si';

export const Contact = {
  Wrapper: styled.section`
  padding: 10vh 0;
  margin: 10vh 0;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  @media ${device.tabletSM}{
    height: 50vh;
  }
`,
Inner: styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media ${device.laptop}{
    padding: 0 3vw;
    max-width: 1366px;
    margin: 0 auto;
  }
`,
}

export const Connect = {
  Wrapper: styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  Inner: styled.div`
    display: flex;
    flex-direction: column;
    @media ${device.tabletSM}{
      flex-direction: row;
      width: 70%;
      a{
        display: inline-block;
        width: 100%;
      }
    }
    
  `,
  Header: styled.h3`
    margin: 0 0 2rem 0;
    font-size: 1.5rem;
    color: #bfbfbf;
  `,
  IconWrapper: styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `,
  IconText: styled.h4`
    color: #bfbfbf;
    margin: 1rem 0 0 0;
  `
}

export const Email = styled(GrMail)`
  fill: #0095ff;
  font-size: 2rem;
  @media ${device.tabletSM}{
    font-size: 4rem;
  }
  
`;

export const Linkedin = styled(GrLinkedin)`
  fill: #0077b5;
  font-size: 2rem;
  @media ${device.tabletSM}{
    font-size: 4rem;
  }
`;

export const Youtube = styled(GrYoutube)`
  fill: #FF0000;
  font-size: 2rem;
  @media ${device.tabletSM}{
    font-size: 4rem;
  }
`;
export const Udemy = styled(SiUdemy)`
  fill: #ea5252;
  font-size: 2rem;
  @media ${device.tabletSM}{
    font-size: 4rem;
  }
`;