import { Link } from 'react-scroll';
import styled from 'styled-components';
import { device } from './devices';

export const Review = {
  Wrapper: styled.section`
    padding: 15vh 0;
    position: relative;
    width: 100%;
    height: auto;
    background-color: #fefefe;
    
  `,
  Inner: styled.div`
    width: 100%;
    @media ${device.laptop}{
      max-width: 1366px;
      margin: 0 auto;
    }
`
};

export const Card = {
  Wrapper: styled.section`
    width: 80%;
    margin: 0 auto;
  `,
  CardCase: styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
  `,
  CardItem: styled.li`
    width: 100%;
    height: auto;
    margin: 0 auto 2rem;
    background-color: #f4f4f4;
    border-radius: 5px;
    padding: 1rem;
  `,
  CardTitle: styled.h2`
    font-size: 1.5rem;
  `,
  CardDesc: styled.p`
    font-size: 1.2rem;
  `
}

export const ScrollUp = styled(Link)`
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
      fill: #E5AB32;
      @media ${device.laptop}{
        font-size: 5rem;
    }
    }
`;