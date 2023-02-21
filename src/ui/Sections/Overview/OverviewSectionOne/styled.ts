import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: ${({ theme }) => theme.sizes.at(-1)}px;
  margin: 0 auto;
`;

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.gaps[1]}px;
`;

export const Number = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts.at(-1)}px;
  line-height: ${({ theme }) => theme.lineHeights.at(-1)}px;

  text-align: center;
  letter-spacing: -0.025em;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Name = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[3]};

  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[1]}px;

  text-align: center;
  letter-spacing: 0.03em;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Item = styled.li`
  font-family: 'Open Sans';
  font-style: normal;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: ${({ theme }) => theme.sizes.at(-4)};
  padding: 0 ${({ theme }) => theme.paddings[5]}px;
  height: ${({ theme }) => theme.sizes[5]}px;
  border-right: 1px solid ${({ theme }) => theme.colors.helperBlueThree};
  &:last-of-type {
    border-right: none;
  }
`;
