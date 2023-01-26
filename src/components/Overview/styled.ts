import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 0 ${({ theme }) => theme.spaces[5]}px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: initial;
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const Heading = styled.h3`
  font-weight: 800;
  font-size: ${({ theme }) => theme.fonts.at(-2)}px;
  line-height: ${({ theme }) => theme.lineHeights.at(-2)}px;
  text-align: center;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.spaces[4]}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts[4]}px;
    line-height: ${({ theme }) => theme.lineHeights[3]}px;
    padding: 0 ${({ theme }) => theme.spaces[1]}px;
    text-align: left;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: flex-end;

  margin: 0 0 ${({ theme }) => theme.spaces[4]}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    flex-direction: column;
    max-width: ${({ theme }) => theme.sizes[5]}%;
    gap: ${({ theme }) => theme.gaps[2]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    padding: 0 ${({ theme }) => theme.spaces[1]}px;
  }
`;

export const InfoDescription = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};

  font-size: ${({ theme }) => theme.fonts[2]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  letter-spacing: -0.015em;
  max-width: ${({ theme }) => theme.sizes.at(-1)}px;

  text-align: justify;
  color: ${({ theme }) => theme.colors.grey};
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    max-width: ${({ theme }) => theme.sizes[5]}%;
  }
`;

export const Companies = styled.ul`
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    overflow: clip;
    max-width: ${({ theme }) => theme.sizes[5]}%;
  }
`;

export const CompaniesItem = styled.li``;

export const CompaniesImage = styled.img``;
