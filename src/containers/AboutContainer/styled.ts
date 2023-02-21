import styled from 'styled-components';

export const Heading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts[6]}px;
  line-height: ${({ theme }) => theme.lineHeights[4]}px;
  text-align: center;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[6]}px 0;
`;

export const Container = styled.section`
  padding: ${({ theme }) => theme.paddings[7]}px 0;
  margin: 0 0 ${({ theme }) => theme.margins[7]}px 0;
  background: ${({ theme }) => theme.colors.background};
`;
