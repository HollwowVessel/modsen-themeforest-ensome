import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { WithIconButton } from '@/ui/Buttons/WithIconButton';
import {
  HamburgerContainer,
  Logo,
  Nav,
  NavMenu,
  StyledHamburger,
} from './styled';
import blueLogo from '@/assets/images/logo_blue.svg';
import playButton from '@/assets/images/icons/buttons/play.svg';
import { useTopScroll } from '@/hooks/useTopScroll';
import { navigationHelper } from '@/utils/navigationHelper';
import { NavBarProps } from './types';

export const NavBar = ({ handleVideo }: NavBarProps) => {
  const [open, setOpen] = useState(true);
  const [openPage, setOpenPage] = useState(false);
  const { pathname } = useLocation();
  useTopScroll();

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  const handlePages = () => {
    setOpenPage((prev) => !prev);
  };

  const Links = navigationHelper(handlePages, openPage, pathname);

  return (
    <Nav>
      <HamburgerContainer>
        <Link to="/">
          <Logo src={blueLogo} loading="lazy" />
        </Link>
        <StyledHamburger onClick={handleMenu} open={open} />
      </HamburgerContainer>
      <NavMenu open={open}>{Links}</NavMenu>
      <WithIconButton
        text="Watch the demo"
        icon={playButton}
        handleClick={handleVideo}
      />
    </Nav>
  );
};
