import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 0 ${({ theme }) => theme.spaces.at(-2)}px 0;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  gap: 240px;
  margin: 0 0 ${({ theme }) => theme.spaces[4]}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    padding: 0 ${({ theme }) => theme.spaces[1]}px;
  }
`;

export const Heading = styled.h3`
  font-weight: 800;
  font-size: ${({ theme }) => theme.fonts.at(-2)}px;
  line-height: ${({ theme }) => theme.lineHeights.at(-2)}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 120px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts[4]}px;
    line-height: ${({ theme }) => theme.lineHeights[3]}px;
    padding: 0 0 0 ${({ theme }) => theme.spaces[3]}px;
    text-align: left;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spaces[2]}px;
  max-width: ${({ theme }) => theme.sizes[5]}%;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    justify-content: flex-start;
    overflow: hidden;
  }
`;

export const Buttons = styled.div`
  display: flex;
`;
