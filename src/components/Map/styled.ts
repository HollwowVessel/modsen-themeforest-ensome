import styled from 'styled-components';

export const Container = styled.div`
  height: ${({ theme }) => theme.sizes[10]}px;

  .leaflet-container {
    height: ${({ theme }) => theme.sizes[10]}px;
  }
`;
