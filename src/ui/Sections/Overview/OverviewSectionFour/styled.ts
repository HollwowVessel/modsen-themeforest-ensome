import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes[5]}%;
  margin: 0 auto;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.gaps[2]}px;
`;

export const Number = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts.at(-1)}px;
  line-height: ${({ theme }) => theme.lineHeights.at(-1)}px;

  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  padding: 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fonts[4]}px;
    line-height: ${({ theme }) => theme.lineHeights[3]}px;
  }
`;

export const Name = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[3]};

  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[1]}px;

  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.grey};
  margin: 0;
  padding: 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fonts[0]}px;
  }
`;

export const Item = styled.li`
  font-family: 'Open Sans';
  font-style: normal;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  max-width: ${({ theme }) => theme.sizes[8]}px;

  border-right: 1px solid rgba(241, 246, 250, 0.2);
`;
