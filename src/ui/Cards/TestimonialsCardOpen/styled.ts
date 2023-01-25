import styled from 'styled-components';

export const Card = styled.div`
  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  max-width: 540px;
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[2]}px;
  flex-wrap: wrap;
  padding: 75px 35px 35px 35px;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    min-width: 540px;
  }
`;

export const Info = styled.div``;

export const Image = styled.img`
  position: absolute;
  top: -40px;
  left: 35px;
`;

export const Name = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights[3]};

  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
`;

export const Profession = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[1]};

  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};

  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[1]}px;

  text-align: justify;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
`;