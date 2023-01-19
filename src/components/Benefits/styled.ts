import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.spaces[3]}px;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spaces.at(-2)}px 0;
  justify-content: center;
  align-items: center;
  margin: 0 0 ${({ theme }) => theme.spaces.at(-2)}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  max-width: ${({ theme }) => theme.sizes.at(-1)}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    padding: 0 ${({ theme }) => theme.spaces[1]}px;
  }
`;

export const Heading = styled.h3`
  font-weight: 800;
  font-size: ${({ theme }) => theme.fonts.at(-2)}px;
  line-height: ${({ theme }) => theme.lineHeights.at(-2)}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.spaces[2]}px 0;

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
  max-width: ${({ theme }) => theme.sizes.at(-1)}px;

  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spaces[2]}px;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    flex-wrap: nowrap;
    overflow: auto;
  }
`;
