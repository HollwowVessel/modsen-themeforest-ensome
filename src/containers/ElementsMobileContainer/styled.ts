import styled from 'styled-components';

export const Container = styled.section`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: block;
  }
`;

export const ContainerCloser = styled.section``;

export const Heading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.at(-1)};
  font-size: ${({ theme }) => theme.fonts[4]}px;
  line-height: ${({ theme }) => theme.lineHeights[3]}px;
  text-align: center;

  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
  padding: 0 ${({ theme }) => theme.paddings[2]}px;
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[0]};
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  text-align: center;
  letter-spacing: 0.03em;
  margin: ${({ theme }) => theme.margins[2]}px 0
    ${({ theme }) => theme.margins[2]}px 0;
  color: ${({ theme }) => theme.colors.grey};
  padding: 0 ${({ theme }) => theme.paddings[2]}px;
`;

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[0]};
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  text-align: left;
  letter-spacing: 0.03em;
  margin: ${({ theme }) => theme.margins[2]}px 0
    ${({ theme }) => theme.margins[2]}px 0;
  color: ${({ theme }) => theme.colors.grey};
  padding: 0 ${({ theme }) => theme.paddings[2]}px;
`;

export const Image = styled.img`
  width: ${({ theme }) => theme.sizes[5]}%;
`;
