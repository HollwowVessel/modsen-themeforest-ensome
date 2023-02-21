import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ItemProps, MenuProps } from './types';

export const Footer = styled.footer`
  background: ${({ theme }) => theme.colors?.secondary};

  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    align-items: flex-start;
    padding: 0 0 0 ${({ theme }) => theme.paddings[2]}px;
    align-items: initial;
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;

  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.helperBlueOne};
  min-width: ${({ theme }) => theme.sizes.at(-1)}px;
  padding: ${({ theme }) => theme.paddings[5]}px 0;
  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    min-width: auto;

    max-width: ${({ theme }) => theme.sizes.at(5)}%;
    margin: 0;
    gap: 0;
    flex-direction: column;
    border: none;
  }
`;

export const Info = styled.div`
  max-width: ${({ theme }) => theme.sizes[8]}px;
  max-height: ${({ theme }) => theme.sizes[7]}px;
  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    padding: ${({ theme }) => theme.paddings[4]}px 0 0 0;
    border-top: 1px solid ${({ theme }) => theme.colors.helperBlueOne};
    max-width: ${({ theme }) => theme.sizes[5]}%;
  }
`;

export const Logo = styled.img`
  width: ${({ theme }) => theme.sizes[7]}px;
  height: ${({ theme }) => theme.sizes[2]}px;
  margin: 0 0 ${({ theme }) => theme.spaces[2]}px 0;
  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    margin: 0 0 ${({ theme }) => theme.spaces[1]}px 0;
  }
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};

  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.grey};
  margin: 0 0 ${({ theme }) => theme.spaces[2]}px 0;
  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    display: none;
  }
`;

export const SocialContainer = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.gaps[1]}px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    display: none;
  }
`;

export const Social = styled.li`
  @media (max-width: ${({ theme }) => theme?.breakPoints?.tablet}px) {
    width: ${({ theme }) => theme.sizes[0]}px;
    height: ${({ theme }) => theme.sizes[0]}px;
  }
`;

export const Icon = styled.img`
  padding: ${({ theme }) => theme.paddings[4]}px 0 0 0;

  @media (max-width: ${({ theme }) => theme?.breakPoints?.tablet}px) {
    padding: 0;
  }
`;

export const Menus = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gaps[5]}px;
  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    gap: 0;
    flex-direction: column;
    max-width: ${({ theme }) => theme.sizes[5]}%;
    padding: ${({ theme }) => theme.paddings[4]}px
      ${({ theme }) => theme.paddings[2]}px 0
      ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const Menu = styled.ul<MenuProps>`
  list-style-type: none;
  min-width: ${({ theme }) => theme.sizes[3]}px;
  position: relative;
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    cursor: pointer;
    min-width: auto;

    padding: ${({ theme }) => theme.paddings[2]}px 0;
    max-width: ${({ theme }) => theme.sizes[5]}%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.helperBlueOne};
    &::after {
      content: '';
      position: absolute;
      width: ${({ theme }) => theme.sizes[1]}px;
      height: ${({ theme }) => theme.sizes[1]}px;
      background: url(${({ icon }) => icon});
      background-repeat: no-repeat;
      top: ${({ theme }) => theme.tops[3]}px;
      right: ${({ theme }) => theme.paddings[2]}px;
    }
  }
`;

export const MenuHeading = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights[3]};

  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 ${({ theme }) => theme.spaces[2]}px 0;
`;

export const Item = styled.li<ItemProps>`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  max-width: ${({ theme }) => theme.sizes[8]}px;

  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.grey};
  margin: 0 0 ${({ theme }) => theme.spaces[1]}px 0;
  transition: 0.5s;

  &:hover {
    font-size: ${({ theme }) => theme.fonts[1]}px;
  }

  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    max-width: ${({ theme }) => theme.sizes[5]}%;
    padding: ${({ theme }) => theme.paddings[2]}px 0;

    display: ${({ display }) => display};
  }
`;

export const CopyRight = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  min-width: ${({ theme }) => theme.sizes.at(-1)}px;
  padding: ${({ theme }) => theme.paddings[4]}px 0;
  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    min-width: auto;
    margin: 0;
    max-width: ${({ theme }) => theme.sizes[5]}%;
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
    flex-direction: column-reverse;
  }
`;

export const Ensome = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};

  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.helperBlueOne};
  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    padding: ${({ theme }) => theme.paddings[1]}px 0 0 0;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spaces.at(5)}px;
  font-weight: ${({ theme }) => theme.fontWeights[0]};

  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;

  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.helperBlueOne};

  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    padding: 0 0 ${({ theme }) => theme.paddings[1]}px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.helperBlueThree};
  }
`;

export const Policy = styled.span`
  display: block;
`;

export const Terms = styled.span`
  display: block;
`;

export const LinkItem = styled(Link)`
  font-weight: ${({ theme }) => theme.fontWeights[0]};

  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.grey};
  margin: 0 0 ${({ theme }) => theme.spaces[1]}px 0;

  text-decoration: none;

  transition: 0.5s;

  &:hover {
    font-size: ${({ theme }) => theme.fonts[1]}px;
  }

  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    max-width: ${({ theme }) => theme.sizes[5]}%;
    padding: ${({ theme }) => theme.paddings[2]}px 0;
  }
`;

export const CopyRightSocial = styled.ul`
  display: none;
  margin: ${({ theme }) => theme.margins[3]}px 0 0 0;
  font-weight: ${({ theme }) => theme.fontWeights[3]};

  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    display: flex;
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
    align-items: center;
    gap: ${({ theme }) => theme.gaps[1]}px;
    flex-wrap: wrap;
  }
`;
export const Languages = styled.div``;

export const LanguageBtn = styled.button`
  width: ${({ theme }) => theme.sizes[5]}px;
`;
