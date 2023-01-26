import styled from 'styled-components';

export const Heading = styled.h3`
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[6]}px 0;
`;

export const Container = styled.section`
  padding: ${({ theme }) => theme.paddings[7]}px 0;
  margin: 0 0 ${({ theme }) => theme.margins[7]}px 0;
  background: ${({ theme }) => theme.colors.background};
`;
