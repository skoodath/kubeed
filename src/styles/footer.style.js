import styled from 'styled-components';

export const Footer = {
  Wrapper: styled.section`
    padding: 5vh 0 10vh 0;
    position: relative;
    width: 100%;
    height: 60vh;
    background-color: #0b1935;
  `,
  Inner: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  FormWrapper: styled.div`
    width: 100%;
    margin: 4rem 0 0 0;
  `,
  FormHeader: styled.h2`
    width: 80%;
    color: #ffffff;
    margin: 0 auto 1rem;
  `,
  Form: styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto 1rem;
  `,
  Input: styled.input`
    outline: none;
    border: 1px solid #ffffff;
    padding: 0.3rem 0.4rem;
    width: 80%;
    max-width: 250px;
    margin: 0;
    border-radius: 3px 0 0 3px;
    background-color: #0b1935;
    color: #ffffff;
  `,
  Button: styled.button`
    width: 20%;
    max-width: 60px;
    padding: 0.3rem 0.2rem;
    background-color: #ffffff;
    outline: none;
    border: 1px solid #ffffff;
    color: #0b1935;
    text-transform: uppercase;
    border-radius: 0 3px 3px 0;
    &:hover{
      background-color: #E5AB32;
    }
  `
};

export const Social = {
  Wrapper: styled.section`
    width: 80%;
    margin: 8rem auto 0;
    display: flex;
    justify-content: center;
    padding: 0 2rem;
    svg{
      fill: #ffffff;
      color: #000000;
      font-size: 2rem;
      margin: 0 0.2rem;
    }
  `
}

export const CopyRight = {
  Wrapper: styled.section`
    width: 80%;
    margin: 1rem auto 1rem;
    display: flex;
    justify-content: center;
    padding: 0 1rem;
    color: #fff;
  `
}