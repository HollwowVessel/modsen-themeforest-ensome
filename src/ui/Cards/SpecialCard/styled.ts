import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes.at(-4)}px;
  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  border-radius: 6px;
  padding: ${({ theme }) => theme.paddings[3]}px
    ${({ theme }) => theme.paddings[4]}px;
`;

export const Image = styled.img`
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
`;

export const Heading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: ${({ theme }) => theme.fonts[3]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;

  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[1]}px 0;
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[1]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
`;
