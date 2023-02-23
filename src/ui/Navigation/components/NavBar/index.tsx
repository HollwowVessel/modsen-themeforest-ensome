import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import playButton from '@/assets/images/icons/buttons/play.svg';
import blueLogo from '@/assets/images/logo_blue.svg';
import { useLanguage } from '@/hooks/useLanguage';
import { useTopScroll } from '@/hooks/useTopScroll';
import { WithIconButton } from '@/ui/Buttons/WithIconButton';
import { navigationHelper } from '@/utils/navigationHelper';

import {
  HamburgerContainer,
  Logo,
  Nav,
  NavMenu,
  StyledHamburger,
} from './styled';
import { NavBarProps } from './types';

export const NavBar = ({ handleVideo }: NavBarProps) => {
  const [open, setOpen] = useState(true);
  const [openPage, setOpenPage] = useState(false);
  const lang = useLanguage();
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  const handlePages = () => {
    setOpenPage((prev) => !prev);
  };

  if (!open) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  useTopScroll();
  const Links = navigationHelper(handlePages, openPage, pathname, lang);

  return (
    <Nav>
      <HamburgerContainer>
        <Link to="/">
          <Logo src={blueLogo} alt={blueLogo} title="logo" />
        </Link>
        <StyledHamburger onClick={handleMenu} open={open} />
      </HamburgerContainer>
      <NavMenu open={open}>{Links}</NavMenu>
      <WithIconButton
        text={t('Watch the')}
        icon={playButton}
        handleClick={handleVideo}
      />
    </Nav>
  );
};
