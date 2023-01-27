import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.paddings[7]}px 0;
  background: ${({ theme }) => theme.colors.background};
  margin: 0 0 ${({ theme }) => theme.margins[7]}px 0;
`;

export const Heading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts[6]}px;
  line-height: ${({ theme }) => theme.lineHeights[4]}px;
  /* identical to box height, or 130% */

  text-align: center;
  letter-spacing: -0.015em;

  /* Black */

  color: ${({ theme }) => theme.colors.black};

  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
`;

export const Links = styled.div`
  display: flex;
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
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

export const AboutUs = styled(Link)`
  border-left: 2px solid ${({ theme }) => theme.colors.grey};
  padding: 0 0 0 ${({ theme }) => theme.paddings[0]}px;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};
  max-height: ${({ theme }) => theme.sizes[0]}px;
`;
