import styled from 'styled-components';

export const Overview = styled.section`
  padding: ${({ theme }) => theme.paddings[2]}px
    ${({ theme }) => theme.paddings[5]}px;
  background: ${({ theme }) => theme.colors.background};
  margin: 0 0 ${({ theme }) => theme.margins[4]}px 0;
`;

export const Heading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.at(-1)};
  font-size: ${({ theme }) => theme.fonts[4]}px;
  line-height: ${({ theme }) => theme.lineHeights[3]}px;
  text-align: center;

  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[0]};
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  text-align: center;
  letter-spacing: -0.015em;
  margin: ${({ theme }) => theme.margins[2]}px 0
    ${({ theme }) => theme.margins[2]}px 0;
  color: ${({ theme }) => theme.colors.grey};
`;
