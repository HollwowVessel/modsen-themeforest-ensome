import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 0 120px 0;
  padding: 0 405px;
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

export const Solutions = styled(Link)`
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

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Name = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: -0.015em;
  color: #185cff;
  margin: 0 0 15px 0;
`;

export const Heading = styled.h1`
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
  letter-spacing: -0.015em;
  color: #292d33;
  margin: 0 0 15px 0;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #9497a1;
  max-width: 540px;
`;
