import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 0 ${({ theme }) => theme.margins[8]}px 0;
  padding: ${({ theme }) => theme.paddings[4]}px
    ${({ theme }) => theme.paddings[9]}px ${({ theme }) => theme.paddings[7]}px
    ${({ theme }) => theme.paddings[9]}px;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const Links = styled.div`
  display: flex;
  margin: 0 0 ${({ theme }) => theme.margins[7]}px 0;
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

export const Team = styled(Link)`
  border-left: 2px solid;
  padding: 0 0 0 ${({ theme }) => theme.paddings[0]}px;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.white};
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
  color: ${({ theme }) => theme.colors.white};
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
  color: ${({ theme }) => theme.colors.background};
  margin: 0 0 ${({ theme }) => theme.margins[0]}px 0;
`;

export const Morbi = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.background};
`;
