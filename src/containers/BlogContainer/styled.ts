import styled from 'styled-components';

export const Container = styled.section`
  display: flex;

  justify-content: center;
  align-items: flex-start;
  margin: 0 0 ${({ theme }) => theme.margins[7]}px 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    aside {
      display: none;
    }
  }
`;

export const Cards = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(3, minmax(328px, 540px));
  justify-items: center;

  gap: ${({ theme }) => theme.gaps[1]}px;
  max-width: ${({ theme }) => theme.sizes.at(-1)}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
