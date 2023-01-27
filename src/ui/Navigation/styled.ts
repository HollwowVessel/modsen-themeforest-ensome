import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import hamburger from '@/assets/images/icons/general/hamburger.svg';
import close from '@/assets/images/icons/general/close.svg';
import { StyledOpenProps } from './types';

export const Container = styled.div`
  padding: ${({ theme }) => theme.paddings[4]}px 0;
  background: ${({ theme }) => theme.colors.background};
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    padding: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    justify-content: initial;
    align-items: initial;
    width: ${({ theme }) => theme.sizes.at(5)}px;
    button {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  z-index: ${({ theme }) => theme.zIndexes[3]};
  margin: 0 ${({ theme }) => theme.spaces.at(-1)}px 0 0;
`;

export const NavMenu = styled.ul<StyledOpenProps>`
  list-style-type: none;
  display: flex;
  gap: ${({ theme }) => theme.gaps[4]}px;
  margin: 0 ${({ theme }) => theme.spaces.at(-2)}px 0 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
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

export const MenuItem = styled.li`
  &:nth-child(3) {
    cursor: auto;
    position: relative;
    &:hover {
      div {
        display: block;
        a {
          display: block;
        }
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

export const HamburgerContainer = styled.div<StyledOpenProps>`
  z-index: ${({ theme }) => theme.zIndexes[2]};

  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    top: ${({ theme }) => theme.spaces[2]}px;
    right: ${({ theme }) => theme.spaces[1]}px;

    width: ${({ theme }) => theme.sizes[5]}%;
  }
`;

export const YoutubeContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndexes[5]};
  display: flex;
  width: ${({ theme }) => theme.sizes[5]}%;
  height: ${({ theme }) => theme.sizes[5]}%;
  justify-content: center;
  align-items: center;
  background: transparent;
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${({ theme }) => theme.zIndexes[3]};
    opacity: 0.4;
    height: ${({ theme }) => theme.sizes[5]}%;
    background: ${({ theme }) => theme.colors.grey};
  }
  div {
    z-index: ${({ theme }) => theme.zIndexes[5]};
  }
`;

export const PagesContainer = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  padding: ${({ theme }) => theme.paddings[2]}px;
  background: ${({ theme }) => theme.colors.grey};
`;
