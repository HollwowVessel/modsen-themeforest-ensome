import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 0 240px 0;
  padding: 40px 405px 90px 405px;
  background: #002b4e;
`;

export const Links = styled.div`
  display: flex;
  margin: 0 0 120px 0;
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

export const Team = styled(Link)`
  border-left: 2px solid #9497a1;
  padding: 0 0 0 10px;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #fff;
  max-height: 24px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Heading = styled.h1`
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
  letter-spacing: -0.015em;
  color: #ffffff;
`;

export const Description = styled.div`
  max-width: 540px;
`;

export const Sed = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  color: #f1f6fa;
  margin: 0 0 10px 0;
`;

export const Morbi = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  color: #f1f6fa;
`;
