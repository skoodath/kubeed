import styled from 'styled-components';
import { device } from './devices';
import { FaPlus, FaMinus } from 'react-icons/fa';

export const Faq = {
  Wrapper: styled.section`
    padding: 10rem 0;
    position: relative;
    width: 100%;
    background-color: #ffffff;
    font-family: 'DM Sans', sans-serif;
    @media ${device.laptop}{
      height: 100vh;
      max-height: 768px;
    }
  `,
  Inner: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${device.laptop}{
      max-width: 1366px;
      margin: 0 auto;
      padding: 0 3vw;
    }
  `,
  FaqWrapper: styled.div`
    width: 80%;
    margin: 0 auto 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media ${device.laptop}{
      margin: 0 0 0.5rem;
    }
  `,

  QuestionWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    @media ${device.laptop}{
    align-items: center;
    }
  `,
  Question: styled.div`
    font-weight: 500;
    font-size: 1.1rem;
    margin: 0 auto rem;
    padding: 0 1rem 0 0;
    width: 85%;
    cursor: pointer;
    @media ${device.tabletSM}{
      font-size: 1.2rem;
    }
    @media ${device.tabletLG}{
      font-size: 1.6rem;
    }
  `,
  Answer: styled.div`
    font-weight: 300;
    font-size: 1rem;
    margin: 0 0 3rem;
    padding: 0 3rem 0 0;
    @media ${device.tabletSM}{
      font-size: 1.1rem;
    }
    @media ${device.tabletLG}{
      font-size: 1.4rem;
    }
  `
}
export const PlusButton = styled(FaPlus)`
  fill: #858585;
  cursor: pointer;
  font-size: 16px;
  width: 16px;
  margin: 0.5rem 0 0 0;
`;
export const MinusButton = styled(FaMinus)`
  fill: #bfbfbf;
  cursor: pointer;
`;