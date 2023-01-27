import { Link } from 'react-router-dom';
import styled from 'styled-components';
import arrow from '@/assets/images/icons/Links/arrowLink.svg';
import hoveredArrow from '@/assets/images/icons/Links/hoveredArrowLink.svg';
import disabledArrow from '@/assets/images/icons/Links/disabledArrowLink.svg';

export const Arrow = styled(Link)`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  padding: 0 ${({ theme }) => theme.paddings[1]}px 0 0;
  position: relative;
  display: flex;
  align-items: center;
  max-width: ${({ theme }) => theme.sizes[4]}px;
  max-height: ${({ theme }) => theme.sizes[0]}px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  transition: 0.5s;

  &::after {
    content: '';
    position: absolute;
    right: ${({ theme }) => theme.rights[0]};
    width: ${({ theme }) => theme.sizes[0]}px;
    height: ${({ theme }) => theme.sizes[0]}px;
    background: url(${arrow});
  }
  &:hover,
  &:active,
  &:focus {
    color: ${({ theme }) => theme.colors.secondary};

    &::after {
      background: url(${hoveredArrow});
    }
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.grey};
    &::after {
      background: url(${disabledArrow});
    }
  }
`;
