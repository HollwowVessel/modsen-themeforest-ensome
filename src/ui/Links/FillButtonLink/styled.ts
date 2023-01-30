import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Fill = styled.button`
  display: block;
  font-weight: ${({ theme }) => theme.fontWeights[3]};

  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.015em;
  padding: ${({ theme }) => theme.paddings[2]}px
    ${({ theme }) => theme.paddings[5]}px;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 12px 30px rgba(24, 92, 255, 0.18);
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: ${({ theme }) => theme.colors.helperBlueFour};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.grey};
  }

  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    margin: 0 auto;
    width: ${({ theme }) => theme.sizes[5]}%;
  }
`;

export const LinkContainer = styled(Link)`
  text-decoration: none;
  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    margin: 0 auto;
    width: ${({ theme }) => theme.sizes[5]}%;
  }
`;
