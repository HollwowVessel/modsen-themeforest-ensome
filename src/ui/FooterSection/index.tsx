import React from 'react';
import { footerMenus, social } from '../../constants/footer';
import logo from '../../assets/images/logo.png';
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
import { getSocial } from '../../utils/getSocial';

export const FooterSection = () => (
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
              <Icon src={getSocial(el)} />
            </Social>
          ))}
        </SocialContainer>
      </Info>
      <Menus>
        {footerMenus.map(({ heading, items }, id) => (
          <Menu key={id}>
            <MenuHeading>{heading}</MenuHeading>
            {items.map((el, id) => (
              <Item key={id}>{el}</Item>
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
