import { useEffect, useState } from 'react';
import YouTube, { YouTubeEvent } from 'react-youtube';
import { Link, useLocation } from 'react-router-dom';
import { menuItems } from '@/constants/navigation';
import { FillButton } from '@/ui/Buttons/FillButton';
import blueLogo from '@/assets/images/logo_blue.svg';
import playButton from '@/assets/images/icons/buttons/play.svg';

import {
  Container,
  HamburgerContainer,
  Logo,
  MenuItem,
  MenuLink,
  Nav,
  NavMenu,
  PagesContainer,
  StyledHamburger,
  YoutubeContainer,
} from './styled';

import { WithIconButton } from '@/ui/Buttons/WithIconButton';
import { GreyFill } from '@/components/PricingCard/styled';

export const Navigation = () => {
  const [open, setOpen] = useState(true);
  const { pathname } = useLocation();
  const [showVideo, setVideo] = useState(false);

  const opts = {
    height: '390',
    width: '640',
  };

  const handleMenu = () => {
    document.body.style.overflow = !open ? 'initial' : 'hidden';

    setOpen((prev) => !prev);
  };

  const Links = menuItems.map(({ name, path, components }, id) => {
    if (components.length) {
      return (
        <MenuItem key={id}>
          Pages
          <PagesContainer>
            {components.map((el, id) => (
              <Link to={`/${el}`} key={id}>
                {el}
              </Link>
            ))}
          </PagesContainer>
        </MenuItem>
      );
    }

    return (
      <MenuItem key={id}>
        <MenuLink to={path as string} active={path === pathname}>
          {name}
        </MenuLink>
      </MenuItem>
    );
  });

  return (
    <Container>
      <Nav>
        <HamburgerContainer open={open}>
          <Link to="/">
            <Logo src={blueLogo} />
          </Link>
          <StyledHamburger onClick={handleMenu} open={open} />
        </HamburgerContainer>
        <NavMenu open={open}>{Links}</NavMenu>
        <WithIconButton
          text="Watch the demo"
          icon={playButton}
          handleClick={() => setVideo((prev) => !prev)}
        />
      </Nav>
      {showVideo && (
        <YoutubeContainer onClick={() => setVideo((prev) => !prev)}>
          <GreyFill />
          <YouTube videoId="ppSPsvO19dU" opts={opts} />
        </YoutubeContainer>
      )}
    </Container>
  );
};