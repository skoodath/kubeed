import styled from 'styled-components';
import { device } from './devices';
import { GrAddCircle, GrSubtractCircle } from 'react-icons/gr';

export const About = {
  Wrapper: styled.section`
  padding: 10rem 0;
  position: relative;
  width: 100%;
  background-color: #ffffff;
  font-family: 'DM Sans', sans-serif;
`,
Inner: styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media ${device.laptop}{
    padding: 0 3vw;
    max-width: 1366px;
    margin: 0 auto;
  }
`,
ImageWrapper: styled.div`
  width: 80%;
  max-width: 400px;
  max-height: 330px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`,
Image: styled.img`
  width: 100%;
`,
ShortText: styled.p`
  width: 80%;
  margin: 0.5rem auto;
  text-align: center;
  @media ${device.tabletSM}{
    font-size: 1.2rem;
    b{
      font-size: 1.2rem;
    }
  }
  @media ${device.tabletLG}{
    font-size: 1.5rem;
    b{
      font-size: 1.5rem;
    }
  }
`,
LongTextContainer: styled.div`
  width: 80%;
  margin: 1rem auto 0;
  display: flex;
  flex-direction: column;
  opacity: ${({show}) => show? 1: 0};
  visibility: ${({show}) => show? 'visible': 'hidden'};
  height: ${({show}) => show? 'auto': 0};
  transition: all 0.7s ease-in-out;
`,
LongText: styled.p`
  margin: 0 0 1.5rem;
  @media ${device.tabletSM}{
    font-size: 1.2rem;
    b{
      font-size: 1.2rem;
    }
  }
  @media ${device.tabletLG}{
    font-size: 1.5rem;
    b{
      font-size: 1.5rem;
    }
  }
`,
LongTextList: styled.ul`
  padding: 0 0 0 1.5rem;
  margin: 0 0 1rem 0;
`,
LongTextListItem: styled.li`
  list-style-type: disc;
  @media ${device.tabletSM}{
    font-size: 1.2rem;
    b{
      font-size: 1.2rem;
    }
  }
  @media ${device.tabletLG}{
    font-size: 1.5rem;
    b{
      font-size: 1.5rem;
    }
  }
`,
PlusButton: styled(GrAddCircle)`
  font-size: 32px;
  color: #bfbfbf;
  margin: 0.5rem auto 0;
  cursor: pointer;
  path{
    stroke: #bfbfbf;
  }
`,
MinusButton: styled(GrSubtractCircle)`
  font-size: 32px;
  color: #bfbfbf;
  margin: 0.5rem auto 0;
  cursor: pointer;
  path{
    stroke: #bfbfbf;
  }
`
}