import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.gaps[4]}px;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.paddings[8]}px 0;
  justify-content: center;
  align-items: center;
  margin: 0 0 ${({ theme }) => theme.margins[7]}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  max-width: ${({ theme }) => theme.sizes.at(-4)}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    padding: 0 ${({ theme }) => theme.paddings[3]}px;
  }
`;

export const Heading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts.at(-2)}px;
  line-height: ${({ theme }) => theme.lineHeights.at(-2)}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts[4]}px;
    line-height: ${({ theme }) => theme.lineHeights[3]}px;
    text-align: left;
  }
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[2]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Cards = styled.div`
  max-width: ${({ theme }) => theme.sizes.at(-4)}px;

  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.gaps[2]}px;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    flex-wrap: nowrap;
    overflow: auto;
  }
`;
