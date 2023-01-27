import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps[3]}px;
  justify-content: center;
  align-items: flex-start;
`;
