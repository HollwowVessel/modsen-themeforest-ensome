import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps[2]}px;
  max-width: ${({ theme }) => theme.sizes.at(-1)}px;
  margin: 0 auto ${({ theme }) => theme.margins[7]}px auto;
`;

export const Info = styled.div`
  max-width: ${({ theme }) => theme.sizes.at(-4)}px;
`;

export const Image = styled.img`
  width: ${({ theme }) => theme.sizes[5]}%;
  height: auto;
`;

export const Heading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights[3]};

  font-size: ${({ theme }) => theme.fonts[1]}px;

  line-height: ${({ theme }) => theme.lineHeights[2]}px;

  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[2]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
  margin: 0 0 ${({ theme }) => theme.margins[3]}px 0;
`;

export const Socials = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.gaps[0]}px;
`;

export const Social = styled.li``;

export const SocialLink = styled.a``;

export const Icon = styled.img``;
