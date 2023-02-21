import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Links = styled.div`
  display: flex;
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    margin: 0 0 ${({ theme }) => theme.margins[3]}px 0;
  }
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

export const Current = styled(Link)`
  border-left: 2px solid ${({ theme }) => theme.colors.grey};
  padding: 0 ${({ theme }) => theme.paddings[0]}px 0
    ${({ theme }) => theme.paddings[0]}px;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: -0.01em;
  color: ${({ theme, color }) =>
    color === 'black' ? theme.colors.black : theme.colors.white};
  max-height: ${({ theme }) => theme.sizes[0]}px;
`;
