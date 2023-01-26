import styled from 'styled-components';

export const Email = styled.input`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: ${({ theme }) => theme.paddings[2]}px 91px
    ${({ theme }) => theme.paddings[2]}px ${({ theme }) => theme.paddings[3]}px;
  gap: ${({ theme }) => theme.gaps[0]}px;
  border: 1px solid ${({ theme }) => theme.colors.helperBlueTwo};
  border-radius: 6px;
  width: 100%;
  background: none;
  color: ${({ theme }) => theme.colors.helperBlueTwo};
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  margin: 0 0 ${({ theme }) => theme.spaces[2]}px 0;
`;
