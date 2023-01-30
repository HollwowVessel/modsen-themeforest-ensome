import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.paddings[8]}px 0;
  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    padding: ${({ theme }) => theme.paddings[8]}px
      ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const Heading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts.at(-2)}px;
  line-height: ${({ theme }) => theme.lineHeights.at(-2)}px;
  text-align: center;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  max-width: ${({ theme }) => theme.sizes.at(-4)}px;
  margin: 0 0 ${({ theme }) => theme.spaces[2]}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fonts.at(-4)}px;
  }
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};

  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[1]}px;

  text-align: center;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
  max-width: ${({ theme }) => theme.sizes.at(-4)}px;
  margin: 0 0 ${({ theme }) => theme.spaces[2]}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fonts[0]}px;
  }
`;
