/* eslint-disable react/no-unknown-property */
import { menuItems } from 'constants/navigation';
import React from 'react';
import { FillBtn } from 'ui/Buttons/FillBtn';

import { Header, Logo, MenuItem, MenuLink, Nav, NavMenu } from './styled';

export const Navigation = () => {
  const a = '';

  return (
    <Header>
      <Nav>
        <Logo src="./blueLogo.svg" />
        <NavMenu>
          {menuItems.map((el, id) => (
            <MenuItem key={id}>
              <MenuLink to="/">{el}</MenuLink>
            </MenuItem>
          ))}
        </NavMenu>
        <FillBtn text="Watch the demo" />
      </Nav>
    </Header>
  );
};
