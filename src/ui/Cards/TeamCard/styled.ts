import styled from 'styled-components';

export const Card = styled.div`
  width: 350px;
  height: 500px;
  position: relative;
  &:nth-of-type(3n + 2) {
    transform: translateY(-120px);
  }
`;
export const Image = styled.img`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndexes[0]};
`;

export const Name = styled.h3`
  margin: ${({ theme }) => theme.margins[9]}px 0 0 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 ${({ theme }) => theme.paddings[3]}px;
`;

export const Profession = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 ${({ theme }) => theme.paddings[3]}px;
`;

export const Socials = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.gaps[0]}px;
  padding: 0 ${({ theme }) => theme.paddings[3]}px;
`;

export const Social = styled.li``;

export const SocialLink = styled.a``;

export const Icon = styled.img``;
