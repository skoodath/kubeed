import { Link } from "react-scroll";
import styled, { keyframes } from "styled-components";
import { device } from "./devices";

export const Contact = {
  Wrapper: styled.section`
  padding: 10vh 0;
  position: relative;
  width: 100%;
  background-color: #f5f7fa;
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

export const Form = {
  Wrapper: styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    @media ${device.laptop}{
      width: 100%;
    }
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 615px;
  `,
  InputLabel: styled.label`
  color: #dddddd;
  margin: 0 1rem 0 0;
  width: 43px;
  padding: 0.2rem;
  @media ${device.tabletSM}{
    padding: 0.5rem;
  }
 `,
  FieldWrapper: styled.div`
    display: flex;
    flex-direction: ${({flexd}) => flexd? 'column' : 'row'};
    margin: 0 0 1rem 0;
    padding: ${({padding}) => padding? '0.5rem' : '0'};
    background-color: #ffffff;
    border: ${({border}) => border? '1px solid #dddddd' : 'none'};
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    `,
  
  InputName: styled.input`
    border: none;
    outline: none;
    width: 100%;
    padding: 0.2rem;
    @media ${device.tabletSM}{
      padding: 0.5rem;
    }
  `,
  InputEmail: styled.input`
    border: none;
    outline: none;
  `,
  Message: styled.textarea`
    border: none;
    outline: none;
    width: 100%;
    resize: none;
  `,
  Button: styled.button`
    width: 100%;
    border: none;
    padding: 0.3rem;
    box-shadow: 1px 1px 4px #000000;
  `
}

const bounce = keyframes`
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-15px);
      }
    }
`

export const ScrollUp = styled(Link)`
    position: absolute;
    left: 50%;
    bottom: 0;
    margin: 0 0 0 -35px;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    cursor: pointer;
    animation: 1.5s ${bounce} cubic-bezier(0.0075, 0.52, 0.0095, 0.6) infinite;
    svg{
      font-size: 4rem;
      fill: #E5AB32;
      @media ${device.laptop}{
        font-size: 5rem;
    }
    }
`;