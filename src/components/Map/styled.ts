import styled from 'styled-components';

export const Container = styled.div`
  height: ${({ theme }) => theme.sizes[10]}px;

  .leaflet-container {
    height: ${({ theme }) => theme.sizes[10]}px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    height: ${({ theme }) => theme.sizes[8]}px;
    .leaflet-container {
      height: ${({ theme }) => theme.sizes[8]}px;
    }
  }
`;
