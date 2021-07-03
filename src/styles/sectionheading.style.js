import styled from 'styled-components';
import { device } from './devices';

export const SectionHeader = {

  Title: styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 auto 2rem;
    position: relative;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    @media ${device.tabletLG}{
      font-size: 2.5rem;
    }
    @media ${device.laptop}{
      width: 100%;
      max-width: 1366px;
      margin: 0 auto 4rem;
    }
  `
}