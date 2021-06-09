import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Landing = {
  Wrapper: styled.section`
    padding: 10vh 0;
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #f9f9f1;
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
    margin: 0;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    cursor: pointer;
    svg{
      font-size: 4rem;
    }
`;

