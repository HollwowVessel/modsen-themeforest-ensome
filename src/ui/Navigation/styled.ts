import styled from 'styled-components';

import { Link, NavLink } from 'react-router-dom';
import hamburger from '@/assets/images/icons/general/hamburger.svg';
import close from '@/assets/images/icons/general/close.svg';

export const Container = styled.div`
  padding: ${({ theme }) => theme.spaces[3]}px 0;
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
    width: 100%;
    button {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  z-index: 10;
  margin: 0 ${({ theme }) => theme.spaces.at(-1)}px 0 0;
`;

export const NavMenu = styled.ul<{ open: boolean }>`
  list-style-type: none;
  display: flex;
  gap: ${({ theme }) => theme.spaces[3]}px;
  margin: 0 ${({ theme }) => theme.spaces.at(-2)}px 0 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: ${({ open }) => (!open ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: ${({ theme }) => theme.sizes[5]}%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 5;
    justify-content: flex-start;
    align-items: baseline;
    padding: ${({ theme }) => theme.spaces[5]}px 0 0
      ${({ theme }) => theme.spaces[1]}px;
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

export const MenuLink = styled(NavLink)<{ active: boolean }>`
  font-weight: ${({ theme }) => theme.fontWeights[1]};

  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey};

  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;

    top: ${({ theme }) => theme.spaces[1]}px;
    border-bottom: 5px solid
      ${({ theme, active }) => (active ? theme.colors.black : 'none')};
    border-radius: 5px;
  }
`;

export const StyledHamburger = styled.div<{ open: boolean }>`
  width: ${({ theme }) => theme.sizes[1]}px;
  height: ${({ theme }) => theme.sizes[1]}px;
  z-index: 10;
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
    right: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: block;
  }
`;

export const HamburgerContainer = styled.div<{ open: boolean }>`
  z-index: 6;

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
  z-index: 15;
  display: flex;
  width: ${({ theme }) => theme.sizes[5]}%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: transparent;
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    opacity: 0.4;
    height: 100%;
    background: ${({ theme }) => theme.colors.grey};
  }
  div {
    z-index: 15;
  }
`;

export const PagesContainer = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  background: ${({ theme }) => theme.colors.grey};
`;
