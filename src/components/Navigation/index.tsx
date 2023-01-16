/* eslint-disable react/no-unknown-property */
import { menuItems } from 'constants/navigation';
import React from 'react';
import { FillButton } from 'ui/Buttons/FillButton';
import blueLogo from 'assets/images/logo_blue.jpg';

import { Header, Logo, MenuItem, MenuLink, Nav, NavMenu } from './styled';

export const Navigation = () => {
  const a = '';

  return (
    <Header>
      <Nav>
        <Logo src={require("assets/images/logo_blue.jpg")} />
        <NavMenu>
          {menuItems.map((el, id) => (
            <MenuItem key={id}>
              <MenuLink to="/">{el}</MenuLink>
            </MenuItem>
          ))}
        </NavMenu>
        <FillButton text="Watch the demo" />
      </Nav>
    </Header>
  );
};
