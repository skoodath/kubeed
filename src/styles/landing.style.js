import styled from 'styled-components';
import { Link } from 'react-scroll';
import { device } from './devices';

export const Landing = {
  Wrapper: styled.section`
    padding: 10vh 0 5vh 0;
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #f9f9f9;
    @media ${device.laptop}{
      max-width: 1366px;
      margin: 0 auto;
      background-color: #ffffff;
    }
  `,
  Inner: styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  `
};

export const ScrollDown = styled(Link)`
    position: absolute;
    left: 50%;
    bottom: 0;
    margin: 0 0 3rem 0;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    cursor: pointer;
    svg{
      font-size: 5rem;
      font-weight: 400;
    }
`;

