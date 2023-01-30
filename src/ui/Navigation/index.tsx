import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { Link, useLocation } from 'react-router-dom';
import { menuItems } from '@/constants/navigation';
import blueLogo from '@/assets/images/logo_blue.svg';
import playButton from '@/assets/images/icons/buttons/play.svg';

import {
  Container,
  FillContainer,
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
import { youtubeOptions } from '@/api/youtubeApi';
import { ArrowLink } from '@/ui/Links/ArrowLink';

export const Navigation = () => {
  const [open, setOpen] = useState(true);
  const [openPage, setOpenPage] = useState(false);
  const [showVideo, setVideo] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  const handleVideo = () => {
    setVideo((prev) => !prev);
  };

  const handlePages = () => {
    setOpenPage((prev) => !prev);
  };

  const Links = menuItems.map(({ name, path, components }, id) => {
    if (components.length) {
      return (
        <MenuItem
          key={name}
          data-test-id={id}
          onClick={handlePages}
          disabled={openPage}>
          Pages
          {openPage && (
            <>
              <FillContainer />
              <PagesContainer data-text-id="pages">
                {components.map((el) => (
                  <ArrowLink to={`/${el}`} key={el} text={el} />
                ))}
              </PagesContainer>
            </>
          )}
        </MenuItem>
      );
    }

    return (
      <MenuItem key={id} data-test-id={id}>
        <MenuLink to={path as string} open={path === pathname}>
          {name}
        </MenuLink>
      </MenuItem>
    );
  });

  return (
    <Container>
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
      {showVideo && (
        <YoutubeContainer onClick={handleVideo}>
          <GreyFill />
          <YouTube videoId="ppSPsvO19dU" opts={youtubeOptions} />
        </YoutubeContainer>
      )}
    </Container>
  );
};
