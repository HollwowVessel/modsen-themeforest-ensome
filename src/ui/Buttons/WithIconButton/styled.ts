import styled from 'styled-components';

export const WithIcon = styled.button<Pick<{ icon: string }, 'icon'>>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.paddings[1]}px
    ${({ theme }) => theme.paddings[2]}px;
  gap: ${({ theme }) => theme.gaps[0]}px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  cursor: pointer;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.white};

  &::before {
    content: '';
    width: ${({ theme }) => theme.sizes[0]}px;
    height: ${({ theme }) => theme.sizes[0]}px;
    background: url(${({ icon }) => icon});
  }
`;
