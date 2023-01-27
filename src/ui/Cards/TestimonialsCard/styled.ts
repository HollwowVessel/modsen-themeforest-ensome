import styled, { Keyframes } from 'styled-components';

export const Card = styled.div<{ animation: Keyframes }>`
  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  max-width: ${({ theme }) => theme.sizes[9]}px;

  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps[2]}px;
  flex-wrap: wrap;
  padding: 0 ${({ theme }) => theme.paddings[3]}px
    ${({ theme }) => theme.paddings[3]}px ${({ theme }) => theme.paddings[3]}px;
  transform: translateX(0);
  animation: ${({ animation }) => animation} 0.5s;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    min-width: ${({ theme }) => theme.sizes[9]}px;
  }
`;

export const Info = styled.div``;

export const Image = styled.img``;

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
