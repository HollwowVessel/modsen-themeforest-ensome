import styled from 'styled-components';

export const AboutDesktopSection = styled.section`
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: none;
  }
`;
export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const ContainerCustomers = styled.section`
  margin: 0 auto ${({ theme }) => theme.spaces[5]}px auto;
  max-width: ${({ theme }) => theme.sizes.at(-1)}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: initial;
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const Heading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts.at(-2)}px;
  line-height: ${({ theme }) => theme.lineHeights.at(-2)}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.spaces[4]}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts[4]}px;
    line-height: ${({ theme }) => theme.lineHeights[3]}px;
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
    text-align: left;
  }
`;

export const Info = styled.div`
  margin: 0 0 ${({ theme }) => theme.spaces[4]}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    flex-direction: column;
    max-width: ${({ theme }) => theme.sizes[5]}%;
    gap: ${({ theme }) => theme.gaps[2]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const InfoDescription = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};

  font-size: ${({ theme }) => theme.fonts[2]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  letter-spacing: 0.03em;
  max-width: ${({ theme }) => theme.sizes.at(-4)}px;

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
