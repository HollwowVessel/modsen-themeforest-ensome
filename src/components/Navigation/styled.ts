import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 40px 24%;
  background: #f1f6fa;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img``;

export const NavMenu = styled.ul`
  display: flex;
  gap: 40px;
  list-style-type: none;
`;

export const MenuItem = styled.li``;

export const MenuLink = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  color: #9497a1;
`;
