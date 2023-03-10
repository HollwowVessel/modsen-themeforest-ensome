import { Link } from 'react-router-dom';
import styled from 'styled-components';

import arrow from '@/assets/images/icons/Links/arrowLink.svg';
import disabledArrow from '@/assets/images/icons/Links/disabledArrowLink.svg';
import hoveredArrow from '@/assets/images/icons/Links/hoveredArrowLink.svg';

export const Arrow = styled(Link)`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  padding: 0 ${({ theme }) => theme.paddings[3]}px 0 0;
  position: relative;
  display: flex;
  align-items: center;
  max-width: ${({ theme }) => theme.sizes[6]}px;
  max-height: ${({ theme }) => theme.sizes[0]}px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  transition: 0.5s;

  &::after {
    content: '';
    position: absolute;
    right: -${({ theme }) => theme.rights[2]}px;
    width: ${({ theme }) => theme.sizes[0]}px;
    height: ${({ theme }) => theme.sizes[0]}px;
    background: url(${arrow});
    background-repeat: no-repeat;
  }
  &:hover,
  &:active,
  &:focus {
    color: ${({ theme }) => theme.colors.secondary};

    &::after {
      background: url(${hoveredArrow});
      background-repeat: no-repeat;
    }
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.grey};
    &::after {
      background: url(${disabledArrow});
      background-repeat: no-repeat;
    }
  }
`;
