import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import upArrow from '@/assets/images/icons/dropdownMenu/footer.svg';
import downArrow from '@/assets/images/icons/dropdownMenu/footerSecond.svg';
import logo from '@/assets/images/logo.svg';
import { footerMenus, social } from '@/constants/footer';
import { useLanguage } from '@/hooks/useLanguage';

import {
  Container,
  CopyRight,
  CopyRightSocial,
  Description,
  Ensome,
  Footer,
  Icon,
  Info,
  Item,
  LinkItem,
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
  const { t } = useTranslation();
  const lang = useLanguage();

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
          <Logo src={logo} alt="logo" title="logo" />
          <Description>{t('Ut enim')}</Description>
          <SocialContainer>
            {social.map(({ el, to }) => (
              <Social key={to}>
                <a href={to}>
                  <Icon src={el} alt="social" title="social" />
                </a>
              </Social>
            ))}
          </SocialContainer>
        </Info>
        <Menus>
          {footerMenus[lang].map(({ heading, items }, id) => (
            <Menu
              key={heading}
              onClick={handleMenu(id)}
              icon={id === activeMenu ? downArrow : upArrow}
            >
              <MenuHeading>{heading}</MenuHeading>
              {items.map(({ name, to }) =>
                to ? (
                  <Item key={name} display={activeMenu === id}>
                    <LinkItem to={to}>{name}</LinkItem>
                  </Item>
                ) : (
                  <Item key={name} display={activeMenu === id}>
                    {name}
                  </Item>
                )
              )}
            </Menu>
          ))}
        </Menus>
        <CopyRightSocial>
          {t('Follow us')}
          {social.map(({ el, to }) => (
            <Social key={to}>
              <Link to={to}>
                <Icon src={el} alt="social" title="social" />
              </Link>
            </Social>
          ))}
        </CopyRightSocial>
      </Container>
      <CopyRight>
        <Ensome>Ensome?? 2022 All Rights Reserved</Ensome>
        <Links>
          <Policy> {t('Privacy policy')}</Policy>
          <Terms>{t('Terms of')}</Terms>
        </Links>
      </CopyRight>
    </Footer>
  );
};
