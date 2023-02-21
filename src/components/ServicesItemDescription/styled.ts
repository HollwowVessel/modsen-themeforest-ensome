import styled from 'styled-components';

import menuIcon from '@/assets/images/icons/general/menuIcon.svg';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes.at(-2)}px;
  margin: 0 auto ${({ theme }) => theme.margins[6]}px auto;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const Description = styled.div`
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
`;

export const Image = styled.img`
  max-width: ${({ theme }) => theme.sizes[5]}%;
`;

export const Heading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts[4]}px;
  line-height: ${({ theme }) => theme.lineHeights[3]}px;

  letter-spacing: 0.03em;

  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts[2]}px;
  }
`;

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[1]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.grey};
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts[0]}px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const Item = styled.li`
  margin: 0 0 ${({ theme }) => theme.margins[0]}px 0;
  position: relative;
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[1]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.black};
  padding: 0 0 0 ${({ theme }) => theme.paddings[3]}px;
  &::before {
    content: '';
    position: absolute;
    top: ${({ theme }) => theme.tops[2]}px;
    left: 0;
    width: ${({ theme }) => theme.sizes[0]}px;
    height: ${({ theme }) => theme.sizes[0]}px;
    background: url(${menuIcon});
    background-repeat: no-repeat;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts[0]}px;
  }
`;

export const SolutionContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps[2]}px;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    flex-direction: column;
  }
`;
