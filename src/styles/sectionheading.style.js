import styled from 'styled-components';

export const SectionHeader = {
  Title: styled.h2`
    font-size: 2.2rem;
    font-weight: 300;
    width: 80%;
    margin: 2rem auto;
    position: relative;
    padding: 0 0 0 5%;
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
  `
}