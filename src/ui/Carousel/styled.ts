import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 0 ${({ theme }) => theme.margins[6]}px 0;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-around;

  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
`;

export const Heading = styled.h3`
  font-weight: 800;
  font-size: ${({ theme }) => theme.fonts.at(-2)}px;
  line-height: ${({ theme }) => theme.lineHeights.at(-2)}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.gaps[2]}px;
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;

  max-width: ${({ theme }) => theme.sizes[5]}%;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    justify-content: flex-start;
  }
`;

export const CardsOpen = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
  gap: ${({ theme }) => theme.gaps[2]}px;

  max-width: ${({ theme }) => theme.sizes[5]}%;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    justify-content: flex-start;
    overflow: hidden;
  }
`;

export const Buttons = styled.div``;

export const ItemLink = styled(Link)`
  text-decoration: none;
`;
