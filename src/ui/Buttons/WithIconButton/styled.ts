import styled from 'styled-components';

export const WithIcon = styled.button<Pick<{ icon: string }, 'icon'>>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  background: #185cff;
  border-radius: 6px;
  cursor: pointer;

  &::before {
    content: '';
    width: 32px;
    height: 32;
  }
`;
