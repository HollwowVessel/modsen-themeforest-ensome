import styled from 'styled-components';

export const Card = styled.div`
  max-width: ${({ theme }) => theme.sizes.at(-7)}px;

  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.paddings[3]}px;
  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  border-radius: 6px;
  &:nth-of-type(even) {
    transform: translateY(56px);
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    &:nth-of-type(even) {
      transform: none;
    }
    min-width: ${({ theme }) => theme.sizes.at(-7)}px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const Image = styled.img`
  width: ${({ theme }) => theme.sizes[2]}px;

  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
`;

export const Heading = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights[3]};

  font-size: ${({ theme }) => theme.fonts[2]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  letter-spacing: 0.03em;

  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[0]}px 0;
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};

  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.grey};
`;
