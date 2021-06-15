import styled from 'styled-components';
import { device } from './devices';

export const SectionHeader = {
  Title: styled.h2`
    font-size: 2.2rem;
    font-weight: 300;
    width: 80%;
    margin: 0 auto 2rem;
    position: relative;
    padding: 0 0 0 20px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    user-select: none;
    &::before{
      position: absolute;
      content: '';
      height: 90%;
      width: 10px;
      left: 0;
      background-color: #326CE5;
    }
    @media ${device.laptop}{
      width: 100%;
      max-width: 1366px;
      margin: 0 auto 4rem;
    }
  `
}