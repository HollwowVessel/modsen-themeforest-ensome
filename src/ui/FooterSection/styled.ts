import styled from 'styled-components';

export const Footer = styled.footer`
  background: #002b4e;
  padding: 0 400px;
`;

export const Container = styled.div`
  display: flex;
  gap: 190px;
  border-bottom: 1px solid #607d94;
  padding: 50px 0;
`;

export const Info = styled.div`
  max-width: 285px;
  max-height: 183px;
`;

export const Logo = styled.img`
  width: 141px;
  height: 46px;
  margin: 0 0 20px 0;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #9497a1;
`;

export const SocialContainer = styled.ul`
  display: flex;
  gap: 15px;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Social = styled.li``;

export const Icon = styled.img``;

export const Menus = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 117px;
`;

export const Menu = styled.ul`
  list-style-type: none;
  min-width: 72px;
  margin: 0;
  padding: 0;
`;

export const MenuHeading = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #ffffff;
  margin: 0 0 20px 0;
`;

export const Item = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #9497a1;
  margin: 0 0 12px 0;
`;

export const CopyRight = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
`;

export const Ensome = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #607d94;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 95px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  letter-spacing: -0.015em;
  color: #607d94;
`;

export const Policy = styled.span`
  display: block;
`;

export const Terms = styled.span`
  display: block;
`;
