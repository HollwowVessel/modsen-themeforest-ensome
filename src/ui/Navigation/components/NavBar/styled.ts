import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import hamburger from '@/assets/images/icons/general/hamburger.svg';
import close from '@/assets/images/icons/general/close.svg';

import pagesIcon from '@/assets/images/icons/general/pagesIcon.svg';
import pagesIconUp from '@/assets/images/icons/general/pagesIconUp.svg';
import { MenuItemProps, StyledOpenProps } from './types';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.sizes.at(-1)}px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    justify-content: initial;
    padding: ${({ theme }) => theme.paddings[2]}px;
    align-items: initial;
    width: ${({ theme }) => theme.sizes.at(5)}%;
    button {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  z-index: ${({ theme }) => theme.zIndexes[3]};
`;

export const NavMenu = styled.ul<StyledOpenProps>`
  list-style-type: none;
  display: flex;
  gap: ${({ theme }) => theme.gaps[4]}px;
  margin: 0 ${({ theme }) => theme.spaces.at(-2)}px 0 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    overflow: auto;
    display: ${({ open }) => (!open ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: ${({ theme }) => theme.sizes[5]}%;
    height: ${({ theme }) => theme.sizes[5]}%;
    top: 0;
    left: 0;
    z-index: ${({ theme }) => theme.zIndexes[1]};
    justify-content: flex-start;
    align-items: baseline;
    padding: ${({ theme }) => theme.paddings[6]}px 0 0
      ${({ theme }) => theme.paddings[2]}px;
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const MenuItem = styled.li<MenuItemProps>`
  width: ${({ theme }) => theme.sizes[3]}%;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
    }
  &:nth-child(3) {
    cursor: pointer;
    font-weight: ${({ theme }) => theme.fontWeights[1]};
    font-size: ${({ theme }) => theme.fonts[0]}px;
    line-height: ${({ theme }) => theme.lineHeights[0]}px;
    color: #9497a1;
    cursor: pointer;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: ${({ theme }) => theme.tops[2]}px;
      right: -${({ theme }) => theme.rights.at(-1)}px;
      background: url( ${({ disabled }) =>
        !disabled ? pagesIcon : pagesIconUp});
      background-repeat: no-repeat;
      width: ${({ theme }) => theme.sizes[0]}px;
      height: ${({ theme }) => theme.sizes[0]}px;
      cursor: pointer;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
      
      &::after {
        content: '';
        position: absolute;
        top: ${({ theme }) => theme.tops[1]}px;
        right: 0;
        url( ${({ disabled }) => (!disabled ? pagesIcon : pagesIconUp)});
        background-repeat: no-repeat;
        width: ${({ theme }) => theme.sizes[0]}px;
        height: ${({ theme }) => theme.sizes[0]}px;
        cursor: pointer;
      }
    }
  }
`;

export const MenuLink = styled(NavLink)<StyledOpenProps>`
  font-weight: ${({ theme }) => theme.fontWeights[1]};

  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey};

  position: relative;
  transition: 0.5s;
  &:hover {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fonts[1]}px;
  }

  &::before {
    content: '';
    position: absolute;
    width: ${({ theme }) => theme.sizes.at(5)}%;
    background-repeat: no-repeat;

    top: ${({ theme }) => theme.spaces[1]}px;
    border-bottom: 5px solid
      ${({ theme, open }) => (open ? theme.colors.black : 'none')};
    border-radius: 5px;
  }
`;

export const StyledHamburger = styled.div<StyledOpenProps>`
  width: ${({ theme }) => theme.sizes[1]}px;
  height: ${({ theme }) => theme.sizes[1]}px;
  z-index: ${({ theme }) => theme.zIndexes[3]};
  display: none;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    background: url(${({ open }) => (open ? hamburger : close)});
    background-repeat: no-repeat;
    width: ${({ theme }) => theme.sizes[1]}px;
    height: ${({ theme }) => theme.sizes[1]}px;
    cursor: pointer;
    top: 0;
    right: ${({ theme }) => theme.rights[0]};
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: block;
  }
`;

export const HamburgerContainer = styled.div`
  z-index: ${({ theme }) => theme.zIndexes[2]};
  width: ${({ theme }) => theme.sizes[5]}%;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    top: ${({ theme }) => theme.spaces[2]}px;
    right: 0;
    align-items: center;
    width: ${({ theme }) => theme.sizes[5]}%;
  }
`;

export const PagesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: ${({ theme }) => theme.paddings[1]}px
    ${({ theme }) => theme.paddings[3]}px;
  background: ${({ theme }) => theme.colors.white};
  z-index: ${({ theme }) => theme.zIndexes[4]};

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    position: initial;
  }
`;

export const FillContainer = styled.div`
  position: fixed;
  width: ${({ theme }) => theme.sizes[5]}%;
  height: ${({ theme }) => theme.sizes[5]}%;
  background: none;
  top: 0;
  right: 0;
`;
