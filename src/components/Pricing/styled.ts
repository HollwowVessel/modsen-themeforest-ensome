import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 0 ${({ theme }) => theme.spaces.at(-2)}px 0;
`;

export const Heading = styled.h3`
  font-weight: 800;
  font-size: ${({ theme }) => theme.fonts.at(-2)}px;
  line-height: ${({ theme }) => theme.lineHeights.at(-2)}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.spaces[4]}px
    ${({ theme }) => theme.spaces[1]}%;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts[4]}px;
    line-height: ${({ theme }) => theme.lineHeights[3]}px;
    padding: 0 ${({ theme }) => theme.paddings[4]}px;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.gaps[2]}px;

  overflow: auto;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts[4]}px;
    line-height: ${({ theme }) => theme.lineHeights[3]}px;
    padding: 0 ${({ theme }) => theme.paddings[4]}px;
  }
`;
