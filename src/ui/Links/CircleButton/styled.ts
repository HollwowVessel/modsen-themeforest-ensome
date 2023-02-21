import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { InnerContainerProps } from './types';

export const OuterContainer = styled.div`
  width: ${({ theme }) => theme.sizes[7]}px;
  height: ${({ theme }) => theme.sizes[7]}px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 100%;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    width: ${({ theme }) => theme.sizes[6]}px;
    height: ${({ theme }) => theme.sizes[6]}px;
  }
`;

export const InnerContainer = styled.div<InnerContainerProps>`
  cursor: pointer;

  background: ${({ theme }) => theme.colors.primary};
  width: ${({ theme }) => theme.sizes[6]}px;
  height: ${({ theme }) => theme.sizes[6]}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  transition: 0.5s;

  &:hover,
  &:hover button:enabled {
    background: ${({ background }) => (background ? '' : '#467dff')};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    width: ${({ theme }) => theme.sizes[5]}px;
    height: ${({ theme }) => theme.sizes[5]}px;
  }
`;

export const Circle = styled.button`
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 100%;
  cursor: pointer;

  width: ${({ theme }) => theme.sizes[5]}px;
  height: ${({ theme }) => theme.sizes[5]}px;
  background: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;

  text-align: center;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    width: ${({ theme }) => theme.sizes[4]}px;
    height: ${({ theme }) => theme.sizes[4]}px;
  }
`;

export const LinkContainer = styled(Link)`
  text-decoration: none;
`;
