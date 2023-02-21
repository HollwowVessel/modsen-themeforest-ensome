import styled from 'styled-components';

import listMarker from '@/assets/images/icons/general/listMarker.svg';

import { ActiveProps } from './types';

export const Container = styled.section`
  max-width: ${({ theme }) => theme.sizes.at(-1)}px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto ${({ theme }) => theme.margins[5]}px auto;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const Heading = styled.h3`
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
  font-weight: ${({ theme }) => theme.fontWeights.at(-1)};
  font-size: ${({ theme }) => theme.fonts.at(-3)}px;
  line-height: ${({ theme }) => theme.lineHeights.at(-2)}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.black};
`;

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[2]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.grey};
  margin: 0 0 ${({ theme }) => theme.margins[3]}px 0;
`;

export const Info = styled.div`
  max-width: ${({ theme }) => theme.sizes.at(-3)}px;
`;

export const StickyContainer = styled.div`
  position: sticky;
  top: ${({ theme }) => theme.sizes[5]}px;
`;

export const TabContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: none;
  }
`;

export const Image = styled.img`
  max-width: ${({ theme }) => theme.sizes[5]}%;
`;

export const TabTeleport = styled.a<ActiveProps>`
  display: block;
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.black};
  border-left: 4px solid
    ${({ theme, active }) =>
      active ? theme.colors.primary : theme.colors.helperBlueThree};
  text-decoration: none;
  padding: 0 0 0 ${({ theme }) => theme.paddings[2]}px;
`;

export const DescriptionBlock = styled.div`
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
`;

export const List = styled.ul`
  list-style-image: url(${listMarker});
`;

export const Item = styled.li`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[2]}px;
  line-height: ${({ theme }) => theme.lineHeights[3]}px;

  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Bold = styled.span`
  color: ${({ theme }) => theme.colors.black};
`;
