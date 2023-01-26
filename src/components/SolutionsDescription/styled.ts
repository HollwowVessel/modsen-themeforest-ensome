import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin: ${({ theme }) => theme.margins[2]}px 0
    ${({ theme }) => theme.margins[7]}px 0;
  padding: 0 ${({ theme }) => theme.paddings[9]}px;
`;

export const Links = styled.div`
  display: flex;
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
`;

export const Home = styled(Link)`
  padding: 0 ${({ theme }) => theme.paddings[0]}px 0 0;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Solutions = styled(Link)`
  border-left: 2px solid ${({ theme }) => theme.colors.grey};
  padding: 0 0 0 ${({ theme }) => theme.paddings[0]}px;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};
  max-height: 24px;
`;

export const Info = styled.div``;

export const Name = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 ${({ theme }) => theme.margins[1]}px 0;
`;

export const Heading = styled.h1`
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[1]}px 0;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  text-align: center;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
`;
