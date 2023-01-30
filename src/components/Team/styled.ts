import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 ${({ theme }) => theme.margins[7]}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: ${({ theme }) => theme.sizes.at(-1)}px;
  justify-items: center;

  gap: ${({ theme }) => theme.gaps[2]}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
