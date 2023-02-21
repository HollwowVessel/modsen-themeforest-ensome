import styled from 'styled-components';

export const Wrapper = styled.div<{ reverse: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps[3]}px;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  margin: 0 0 ${({ theme }) => theme.margins[7]}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: column;
  }
`;

export const Image = styled.img``;

export const Description = styled.div``;

export const Heading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts[6]}px;
  line-height: ${({ theme }) => theme.lineHeights[4]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[3]}px 0;
`;

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[2]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.grey};
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
  max-width: ${({ theme }) => theme.sizes.at(-5)}px;
`;
