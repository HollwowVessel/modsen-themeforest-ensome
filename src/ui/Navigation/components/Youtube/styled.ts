import styled from 'styled-components';

export const YoutubeContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndexes[5]};
  display: flex;
  width: ${({ theme }) => theme.sizes[5]}%;
  height: ${({ theme }) => theme.sizes[5]}%;
  justify-content: center;
  align-items: center;
  background: transparent;
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${({ theme }) => theme.zIndexes[3]};
    opacity: 0.4;
    height: ${({ theme }) => theme.sizes[5]}%;
    background: ${({ theme }) => theme.colors.grey};
  }
  .youtube {
    z-index: ${({ theme }) => theme.zIndexes[5]};
  }
`;
