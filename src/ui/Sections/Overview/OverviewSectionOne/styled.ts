import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
`;

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spaces[1]}px;
`;

export const Number = styled.h4`
  font-weight: 800;
  font-size: ${({ theme }) => theme.fonts.at(-1)}px;
  line-height: ${({ theme }) => theme.lineHeights.at(-1)}px;

  text-align: center;
  letter-spacing: -0.025em;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.white};
`;

export const Name = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[3]};

  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[1]}px;

  text-align: center;
  letter-spacing: -0.015em;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.white};
`;

export const Item = styled.li`
  font-family: 'Open Sans';
  font-style: normal;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: ${({ theme }) => theme.sizes.at(-1)};

  height: 104px;
  border-right: 1px solid rgba(241, 246, 250, 0.2);
`;
