import styled from 'styled-components';
import { device } from './devices';

export const SectionHeader = {
  Title: styled.h2`
    font-size: 1.8rem;
    font-weight: 600;
    width: 80%;
    margin: 0 auto 2rem;
    position: relative;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    color: #bfbfbf;
    @media ${device.tabletLG}{
      font-size: 2.5rem;
    }
    @media ${device.laptop}{
      width: 100%;
      max-width: 1366px;
      margin: 0 auto 4rem;
      font-size: 3.5rem;
    }
  `
}