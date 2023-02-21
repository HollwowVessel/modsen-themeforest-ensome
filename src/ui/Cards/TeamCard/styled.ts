import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled.div`
  width: ${({ theme }) => theme.sizes.at(-6)}px;

  position: relative;
  &:nth-of-type(3n + 2) {
    transform: translateY(-120px);
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    &:nth-of-type(3n + 2) {
      transform: none;
    }
  }
`;
export const Image = styled.img`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndexes[0]};
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    position: initial;
  }
`;

export const Name = styled.h3`
  margin: ${({ theme }) => theme.margins[9]}px 0 0 0;
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: ${({ theme }) => theme.fonts[2]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 ${({ theme }) => theme.paddings[3]}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    color: ${({ theme }) => theme.colors.black};
    margin: 0;
  }
`;

export const Profession = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[1]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 ${({ theme }) => theme.paddings[3]}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const Socials = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.gaps[0]}px;
  padding: 0 ${({ theme }) => theme.paddings[3]}px;
`;

export const Social = styled.li``;

export const SocialLink = styled.a``;

export const TeamLink = styled(Link)`
  width: ${({ theme }) => theme.sizes.at(-6)}px;
  text-decoration: none;
  position: relative;
  &:nth-of-type(3n + 2) {
    transform: translateY(-120px);
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    &:nth-of-type(3n + 2) {
      transform: none;
    }
  }
`;
