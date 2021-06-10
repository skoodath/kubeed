import styled from 'styled-components';
import { device } from './devices';

export const Footer = {
  Wrapper: styled.section`
    padding: 5vh 0 3vh;
    position: relative;
    width: 100%;
    background-color: #0b1935;
    @media ${device.laptop}{
      padding: 0;
      height: 40vh;
    }
    
  `,
  Inner: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${device.laptop}{
      height: 100%;
      max-width: 1366px;
      margin: 0 auto;
      padding: 0 5%;
      flex-direction: row;
    }
  `,
  FormWrapper: styled.div`
    width: 80%;
    margin: 1rem auto 0;
    @media ${device.laptop}{
      margin: 0;
      justify-content: center;
      align-items: center;
    }
  `,
  FormHeader: styled.h2`
    color: #ffffff;
    margin: 0 auto 1rem;
    font-size: 1.1rem;
    font-weight: 400;
    @media ${device.tabletLG}{
      font-size: 1.5rem;
    }

  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto 1rem;
    position: relative;
    p{
      color: #ff0000;
    }
    @media ${device.laptop}{
      margin: 0;
    }
  `,
  Input: styled.input`
    outline: none;
    border: 1px solid #dddddd;
    padding: 0.3rem 0.4rem;
    width: 80%;
    max-width: 300px;
    margin: 0;
    border-radius: 3px 0 0 3px;
    background-color: #0b1935;
    color: #dddddd;
    @media ${device.tabletLG}{
      padding: 0.5rem 0.4rem;
    }
  `,
  Button: styled.button`
    width: 20%;
    max-width: 100px;
    padding: 0.3rem 0.2rem;
    background-color: #dddddd;
    outline: none;
    border: 1px solid #dddddd;
    color: #0b1935;
    text-transform: uppercase;
    border-radius: 0 3px 3px 0;
    cursor: pointer;
    @media ${device.tabletLG}{
      padding: 0.5rem 0.4rem;
    }
    &:hover{
      background-color: #E5AB32;
      
    }
  `
};

export const Social = {
  Wrapper: styled.section`
    width: 80%;
    margin: 5rem auto 0;
    display: flex;
    padding: 0;
    @media ${device.laptop}{
      margin: 2.5rem 0 0 0;
      justify-content: center;
      align-items: flex-end;
    }
    a{
      text-decoration: none;
      margin: 0 0.2rem;
    }
    svg{
      fill: #ffffff;
      color: #000000;
      font-size: 2rem;
      @media ${device.tabletLG}{
      font-size: 3rem;
    }
    }
    
  `,
  Inner: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `
}

export const CopyRight = {
  Wrapper: styled.section`
    width: 80%;
    margin: 1rem auto 1rem;
    display: flex;
    padding: 0;
    color: #fff;
    @media ${device.tabletLG}{
      font-size: 1.5rem;
    }
    @media ${device.laptop}{
      margin: 2.5rem 0 0 0;
      justify-content: flex-end;
      align-items: flex-end;
    }
  `
}