import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme }) => theme.paddings[4]}px 0;
  background: ${({ theme }) => theme.colors.background};
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    padding: 0;
  }
`;
