import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes.at(-1)}px;
  margin: 0 auto;
  display: flex;
  gap: ${({ theme }) => theme.gaps[2]}px;
`;
