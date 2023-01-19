import styled from 'styled-components';

export const Email = styled.input`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 15px 91px 15px 25px;
  gap: 10px;
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
