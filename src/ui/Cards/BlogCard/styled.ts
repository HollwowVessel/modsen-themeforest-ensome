import styled from 'styled-components';

import { TagProps } from './types';

export const Card = styled.div`
  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  border-radius: 6px;
  a {
    margin: 0 ${({ theme }) => theme.margins[2]}px;
  }
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
  letter-spacing: 0.03em;

  color: ${({ theme }) => theme.colors.grey};
  padding: 0 ${({ theme }) => theme.paddings[3]}px;
`;

export const Name = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights[3]};

  font-size: ${({ theme }) => theme.fonts[3]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.spaces[1]}px 0;
  max-width: ${({ theme }) => theme.sizes.at(-6)}px;
  padding: 0 ${({ theme }) => theme.paddings[3]}px;
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};

  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[1]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.grey};
  margin: 0 0 ${({ theme }) => theme.spaces[1]}px 0;
  max-width: ${({ theme }) => theme.sizes.at(-6)}px;
  text-align: justify;
  padding: 0 ${({ theme }) => theme.paddings[3]}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: none;
  }
`;

export const Tags = styled.div`
  position: relative;
  padding: 0 0 0 ${({ theme }) => theme.paddings[3]}px;
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  /* identical to box height, or 171% */
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
  gap: ${({ theme }) => theme.gaps[0]}px;

  /* Grey */

  color: ${({ theme }) => theme.colors.grey};
`;

export const Tag = styled.button<TagProps>`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  text-align: center;
  letter-spacing: 0.03em;
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.background};
  color: ${({ active, theme }) =>
    active ? theme.colors.background : theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: 6px;
  padding: ${({ theme }) => theme.paddings[0]}px
    ${({ theme }) => theme.paddings[1]}px;
  cursor: pointer;
`;
