import styled from 'styled-components';
import { CardProps } from './types';

export const Card = styled.div<CardProps>`
  animation: ${({ animation }) => animation} 0.5s;
`;

export const Image = styled.img`
  max-width: ${({ theme }) => theme.sizes.at(-6)}px;
  margin: 0 0 ${({ theme }) => theme.spaces[1]}px 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    min-width: ${({ theme }) => theme.sizes.at(-6)}px;
  }
`;

export const Date = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};

  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: -0.015em;

  color: ${({ theme }) => theme.colors.grey};
`;

export const Name = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights[3]};

  font-size: ${({ theme }) => theme.fonts[3]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.spaces[1]}px 0;
  max-width: ${({ theme }) => theme.sizes.at(-6)}px;
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};

  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[1]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
  margin: 0 0 ${({ theme }) => theme.spaces[1]}px 0;
  max-width: ${({ theme }) => theme.sizes.at(-6)}px;
  text-align: justify;
`;
