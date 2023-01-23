import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  background: #f1f6fa;
  margin: 0 0 120px 0;
`;

export const Heading = styled.h1`
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
  /* identical to box height, or 130% */

  text-align: center;
  letter-spacing: -0.015em;

  /* Black */

  color: #292d33;

  margin: 0 0 20px 0;
`;

export const Links = styled.div`
  display: flex;
  margin: 0 0 56px 0;
`;

export const Home = styled(Link)`
  padding: 0 10px 0 0;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #9497a1;
`;

export const AboutUs = styled(Link)`
  border-left: 2px solid #9497a1;
  padding: 0 0 0 10px;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #292d33;
  max-height: 24px;
`;
