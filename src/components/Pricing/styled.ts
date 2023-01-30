import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto ${({ theme }) => theme.spaces.at(-2)}px auto;
  max-width: ${({ theme }) => theme.sizes.at(-1)}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const Heading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts.at(-2)}px;
  line-height: ${({ theme }) => theme.lineHeights.at(-2)}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.spaces[4]}px 0;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts[4]}px;
    line-height: ${({ theme }) => theme.lineHeights[3]}px;
    padding: 0 ${({ theme }) => theme.paddings[4]}px;
  }
`;

export const Cards = styled.div`
  display: flex;

  gap: ${({ theme }) => theme.gaps[2]}px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    overflow: auto;
    font-size: ${({ theme }) => theme.fonts[4]}px;
    line-height: ${({ theme }) => theme.lineHeights[3]}px;
    padding: 0 ${({ theme }) => theme.paddings[4]}px;
  }
`;
