import styled from 'styled-components';

export const Container = styled.section`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: block;
  }
`;
