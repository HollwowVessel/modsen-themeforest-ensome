import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Fill = styled.button`
  display: block;
  font-weight: ${({ theme }) => theme.fontWeights[3]};

  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.015em;
  padding: ${({ theme }) => theme.spaces[1]}px
    ${({ theme }) => theme.spaces[4]}px;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 12px 30px rgba(24, 92, 255, 0.18);
  border-radius: 6px;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.helperBlueFour};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.grey};
  }

  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    margin: 0 auto;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    width: ${({ theme }) => theme.sizes[5]}%;
  }
`;

export const LinkContainer = styled(Link)`
  text-decoration: none;
`;