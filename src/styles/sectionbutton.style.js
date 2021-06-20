import styled from 'styled-components';
import { device } from './devices';

export const SectionButton = {
  Wrapper: styled.div`
    font-size: 1.8rem;
    font-weight: 300;
    width: 80%;
    margin: 0 auto 2rem;
    position: relative;
    padding: 0 0 0 20px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    user-select: none;
  
    @media ${device.tabletLG}{
      font-size: 2.2rem;
    }
    @media ${device.laptop}{
      width: 100%;
      max-width: 1366px;
      margin: 0 auto 4rem;
    }
  `,
  Text: styled.p`
    font-weight: bold;
  `
}