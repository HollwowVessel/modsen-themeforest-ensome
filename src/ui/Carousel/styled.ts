import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { slideAnimationOut } from '@/theme/animations';

import { CardProp } from './types';

export const Container = styled.section`
  margin: 0 auto ${({ theme }) => theme.margins[6]}px auto;
  max-width: ${({ theme }) => theme.sizes.at(-1)}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
`;

export const Heading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts.at(-2)}px;
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;

  line-height: ${({ theme }) => theme.lineHeights.at(-2)}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts.at(-5)}px;
  }
`;

export const Cards = styled.div<CardProp>`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.gaps[2]}px;
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
  max-width: ${({ theme }) => theme.sizes[5]}%;
  overflow: ${({ overflow }) => overflow};
  animation: 1s ${slideAnimationOut} forwards;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    justify-content: flex-start;
  }
`;

export const CardsOpen = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
  gap: ${({ theme }) => theme.gaps[2]}px;

  max-width: ${({ theme }) => theme.sizes[5]}%;
  animation: 1.5s ${slideAnimationOut} forwards;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    justify-content: flex-start;
    overflow: hidden;
  }
`;

export const Buttons = styled.div``;

export const ItemLink = styled(Link)`
  text-decoration: none;
`;
