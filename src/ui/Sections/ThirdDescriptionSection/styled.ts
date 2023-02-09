import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 0 ${({ theme }) => theme.margins[8]}px 0;
  background: ${({ theme }) => theme.colors.secondary};
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const Links = styled.div`
  display: flex;
  margin: 0 0 ${({ theme }) => theme.margins[7]}px 0;
`;

export const Home = styled(Link)`
  padding: 0 ${({ theme }) => theme.paddings[0]}px 0 0;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Team = styled(Link)`
  border-left: 2px solid;
  padding: 0 0 0 ${({ theme }) => theme.paddings[0]}px;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.white};
  max-height: ${({ theme }) => theme.sizes[0]}px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    justify-content: center;
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
    flex-direction: column;
  }
`;

export const Heading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts[6]}px;
  line-height: ${({ theme }) => theme.lineHeights[4]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.div`
  max-width: ${({ theme }) => theme.sizes.at(-4)}px;
`;

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.background};
  margin: 0 0 ${({ theme }) => theme.margins[0]}px 0;
`;

export const Section = styled.div`
  max-width: ${({ theme }) => theme.sizes.at(-1)}px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.paddings[4]}px 0
    ${({ theme }) => theme.paddings[7]}px 0;
`;
