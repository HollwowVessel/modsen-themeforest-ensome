import styled from 'styled-components';

export const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.secondary};

  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    align-items: flex-start;
    padding: 0 0 0 ${({ theme }) => theme.spaces[1]}px;
    align-items: initial;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spaces.at(-1)}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.helperBlueOne};
  padding: ${({ theme }) => theme.spaces[4]}px 0;
  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    gap: 0;
    flex-direction: column;
    border: none;
  }
`;

export const Info = styled.div`
  max-width: ${({ theme }) => theme.sizes[8]}px;
  max-height: 183px;
  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    padding: ${({ theme }) => theme.spaces[3]}px 0 0 0;
    border-top: 1px solid ${({ theme }) => theme.colors.helperBlueOne};
    max-width: ${({ theme }) => theme.sizes[5]}%;
  }
`;

export const Logo = styled.img`
  width: ${({ theme }) => theme.sizes[7]}px;
  height: 46px;
  margin: 0 0 ${({ theme }) => theme.spaces[2]}px 0;
  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    margin: 0 0 ${({ theme }) => theme.spaces[1]}px 0;
  }
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};

  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
  margin: 0 0 ${({ theme }) => theme.spaces[2]}px 0;
  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    display: none;
  }
`;

export const SocialContainer = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spaces[1]}px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    display: none;
  }
`;

export const Social = styled.li``;

export const Icon = styled.img`
  padding: ${({ theme }) => theme.spaces[3]}px 0 0 0;
`;

export const Menus = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spaces.at(-2)}px;
  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    gap: 0;
    flex-direction: column;
    max-width: ${({ theme }) => theme.sizes[5]}%;
    padding: ${({ theme }) => theme.spaces[3]}px
      ${({ theme }) => theme.spaces[1]}px 0 ${({ theme }) => theme.spaces[1]}px;
  }
`;

export const Menu = styled.ul<{ icon: string }>`
  list-style-type: none;
  min-width: ${({ theme }) => theme.sizes[3]}px;
  position: relative;
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    cursor: pointer;

    padding: ${({ theme }) => theme.spaces[1]}px 0;
    max-width: ${({ theme }) => theme.sizes[5]}%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.helperBlueOne};
    &::after {
      content: '';
      position: absolute;
      width: ${({ theme }) => theme.sizes[1]}px;
      height: ${({ theme }) => theme.sizes[1]}px;
      background: url(${({ icon }) => icon});
      background-repeat: no-repeat;
      top: ${({ theme }) => theme.spaces[2]}px;
      right: ${({ theme }) => theme.spaces[1]}px;
    }
  }
`;

export const MenuHeading = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights[3]};

  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 ${({ theme }) => theme.spaces[2]}px 0;
`;

export const Item = styled.li<{ display: string }>`
  font-weight: ${({ theme }) => theme.fontWeights[0]};

  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
  margin: 0 0 ${({ theme }) => theme.spaces[1]}px 0;

  @media (max-width: ${({ theme }) => theme?.breakPoints?.laptop}px) {
    max-width: ${({ theme }) => theme.sizes[5]}%;
    padding: ${({ theme }) => theme.spaces[1]}px 0;

    display: ${({ display }) => display};
  }
`;

export const CopyRight = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: ${({ theme }) => theme.sizes[5]}%;
  padding: ${({ theme }) => theme.spaces[3]}px 0;
`;

export const Ensome = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};

  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.helperBlueOne};
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spaces.at(-3)}px;
  font-weight: ${({ theme }) => theme.fontWeights[0]};

  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;

  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.helperBlueOne};
`;

export const Policy = styled.span`
  display: block;
`;

export const Terms = styled.span`
  display: block;
`;
