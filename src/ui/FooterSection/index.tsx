import React, { useState } from 'react';
import { footerMenus, social } from '@/constants/footer';
import logo from '@/assets/images/logo.svg';
import upArrow from '@/assets/images/icons/dropdownMenu/footer.svg';
import downArrow from '@/assets/images/icons/dropdownMenu/footerSecond.svg';
import {
  Container,
  CopyRight,
  Description,
  Ensome,
  Footer,
  Icon,
  Info,
  Item,
  Links,
  Logo,
  Menu,
  MenuHeading,
  Menus,
  Policy,
  Social,
  SocialContainer,
  Terms,
} from './styled';

export const FooterSection = () => {
  const [activeMenu, setActiveMenu] = useState(-1);

  const handleMenu = (id: number) => () => {
    if (id === activeMenu) {
      setActiveMenu(-1);
    } else {
      setActiveMenu(id);
    }
  };

  return (
    <Footer>
      <Container>
        <Info>
          <Logo src={logo} alt="logo" />
          <Description>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi.
          </Description>
          <SocialContainer>
            {social.map((el) => (
              <Social>
                <Icon src={el} />
              </Social>
            ))}
          </SocialContainer>
        </Info>
        <Menus>
          {footerMenus.map(({ heading, items }, id) => (
            <Menu
              key={id}
              onClick={handleMenu(id)}
              icon={id === activeMenu ? downArrow : upArrow}
            >
              <MenuHeading>{heading}</MenuHeading>
              {items.map((el, ind) => (
                <Item key={ind} display={activeMenu === id ? 'block' : 'none'}>
                  {el}
                </Item>
              ))}
            </Menu>
          ))}
        </Menus>
      </Container>
      <CopyRight>
        <Ensome>Ensome© 2022 All Rights Reserved</Ensome>
        <Links>
          <Policy>Privacy policy</Policy>
          <Terms>Terms of us</Terms>
        </Links>
      </CopyRight>
    </Footer>
  );
};
