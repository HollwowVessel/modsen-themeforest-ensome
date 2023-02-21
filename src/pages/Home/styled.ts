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
  max-width: ${({ theme }) => theme.sizes.at(-1)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.at(5)}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.gaps[2]}px;
    text-align: center;
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const HeroesContainer = styled.section`
  position: relative;
`;

export const ButtonContainer = styled.section`
  position: absolute;
  top: -${({ theme }) => theme.tops[5]}px;
  right: ${({ theme }) => theme.rights[2]}%;
`;

export const Ensome = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Image = styled.img`
  width: ${({ theme }) => theme.sizes[5]}%;
  height: ${({ theme }) => theme.sizes[5]}%;
`;

export const Newest = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Heading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts.at(-1)}px;
  line-height: ${({ theme }) => theme.lineHeights.at(-2)}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.black};
  max-width: ${({ theme }) => theme.sizes.at(-3)}px;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fonts[4]}px;
    line-height: ${({ theme }) => theme.lineHeights[3]}px;

    text-align: left;
  }
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};

  font-size: ${({ theme }) => theme.fonts[2]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  letter-spacing: -0.035em;
  color: ${({ theme }) => theme.colors.grey};
  max-width: ${({ theme }) => theme.sizes.at(-3)}px;

  text-align: justify;
  margin: 0 0 ${({ theme }) => theme.spaces[2]}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fonts[0]}px;
  }
`;

export const Discover = styled.div``;

export const Solutions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps[4]}px;
  background: ${({ theme }) => theme.colors.background};
  align-items: center;
  width: ${({ theme }) => theme.sizes[5]}%;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    button {
      order: 4;
      margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const SolutionsImage = styled.img`
  max-width: ${({ theme }) => theme.sizes[5]}%;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    display: none;
  }
`;

export const SolutionsInfo = styled.div`
  max-width: ${({ theme }) => theme.sizes.at(-4)}px;

  margin: auto 0;
  img {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    display: flex;
    flex-direction: column;
    img {
      display: block;
      order: 2;
      padding: 0;
    }
  }
`;

export const SolutionsHeading = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts.at(-2)}px;
  line-height: ${({ theme }) => theme.lineHeights.at(-2)}px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.spaces[2]}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    order: 1;
    font-size: ${({ theme }) => theme.fonts[4]}px;
    line-height: ${({ theme }) => theme.lineHeights[3]}px;

    text-align: left;
  }
`;

export const SolutionsDescription = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};

  font-size: ${({ theme }) => theme.fonts[2]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  color: ${({ theme }) => theme.colors.grey};
  text-align: justify;
  margin: 0 0 ${({ theme }) => theme.spaces[2]}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    order: 3;
  }
`;
