import { changeLanguage } from 'i18next';
import { langType } from 'interfaces/languageType';
import { MouseEventHandler, SyntheticEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import playButton from '@/assets/images/icons/buttons/play.svg';
import blueLogo from '@/assets/images/logo_blue.svg';
import { pathNames } from '@/constants/routes';
import { useLanguage } from '@/hooks/useLanguage';
import { useTopScroll } from '@/hooks/useTopScroll';
import { WithIconButton } from '@/ui/Buttons/WithIconButton';
import {
  localStorageHelperGet,
  localStorageHelperSet,
} from '@/utils/localStorageHelper';
import { navigationHelper } from '@/utils/navigationHelper';

import {
  HamburgerContainer,
  LanguageBtn,
  Languages,
  Logo,
  Nav,
  NavMenu,
  StyledHamburger,
} from './styled';
import { NavBarProps } from './types';

export const NavBar = ({ handleVideo }: NavBarProps) => {
  const [open, setOpen] = useState(true);

  const [openPage, setOpenPage] = useState(false);

  const [btnLang, setBtnLang] = useState(localStorageHelperGet());

  const handleClick: MouseEventHandler<HTMLButtonElement> = (
    e: SyntheticEvent
  ) => {
    if (e.target) {
      const lang = (e.target as HTMLButtonElement).value as langType;
      setBtnLang(lang);
      changeLanguage(lang);
      localStorageHelperSet(lang);
    }
  };

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
        <Link to={pathNames.home}>
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
      <Languages>
        <LanguageBtn active={btnLang === 'en'} onClick={handleClick} value="en">
          En
        </LanguageBtn>
        <LanguageBtn active={btnLang === 'ru'} onClick={handleClick} value="ru">
          Ru
        </LanguageBtn>
      </Languages>
    </Nav>
  );
};
