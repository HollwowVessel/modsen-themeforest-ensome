import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 0 ${({ theme }) => theme.spaces.at(-2)}px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Info = styled.div`
  margin: ${({ theme }) => theme.spaces[5]}px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.at(-1)}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spaces[2]}px;
    text-align: center;
  }
`;

export const Heading = styled.h1`
  font-weight: 800;
  font-size: ${({ theme }) => theme.fonts.at(-2)}px;
  line-height: ${({ theme }) => theme.lineHeights.at(-2)}px;
  max-width: ${({ theme }) => theme.sizes.at(-1)}px;
`;

export const Description = styled.p`
  font-family: 'Open Sans';
  font-weight: ${({ theme }) => theme.fontWeights[0]};

  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[1]}px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  max-width: ${({ theme }) => theme.sizes[9]}px;
  color: ${({ theme }) => theme.colors.grey};
  text-align: justify;
`;

export const HeroesContainer = styled.section`
  position: relative;
`;

export const ButtonContainer = styled.section`
  position: absolute;
  top: -${({ theme }) => theme.spaces[5]}px;
  right: 32%;
`;

export const Ensome = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Image = styled.img`
  width: ${({ theme }) => theme.sizes[5]}%;
  height: 100%;
`;
