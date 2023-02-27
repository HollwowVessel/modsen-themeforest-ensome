import styled from 'styled-components';

import menuIcon from '@/assets/images/icons/general/menuIcon.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  gap: ${({ theme }) => theme.gaps[4]}px;
  margin: 0 0 ${({ theme }) => theme.margins[7]}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  max-width: ${({ theme }) => theme.sizes[5]}%;
`;

export const Info = styled.div``;

export const Heading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts[5]}px;
  line-height: ${({ theme }) => theme.lineHeights[4]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
`;

export const List = styled.ul``;

export const Item = styled.li`
  position: relative;
  margin: 0 0 ${({ theme }) => theme.margins[3]}px 0;

  &::before {
    content: '';
    width: ${({ theme }) => theme.sizes[0]}px;
    height: ${({ theme }) => theme.sizes[0]}px;
    position: absolute;

    background: url(${menuIcon});
    background-repeat: no-repeat;
    top: ${({ theme }) => theme.tops[0]};
  }
`;

export const ItemName = styled.h4`
  margin: 0 0 ${({ theme }) => theme.margins[1]}px 0;
  padding: 0 0 0 ${({ theme }) => theme.paddings[3]}px;
`;

export const ItemDescription = styled.p`
  max-width: ${({ theme }) => theme.sizes.at(-4)}px;
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[1]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.grey};
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts[0]}px;
  }
`;
