import styled from 'styled-components';

export const Container = styled.section`
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: none;
  }
`;
