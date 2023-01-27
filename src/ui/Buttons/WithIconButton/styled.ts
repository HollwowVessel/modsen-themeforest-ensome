import styled from 'styled-components';
import { WithIconProps } from './types';

export const WithIcon = styled.button<WithIconProps>`
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

  transition: 0.5s;

  &:hover {
    background: ${({ theme }) => theme.colors.helperBlueFour};
  }
  &::before {
    content: '';
    width: ${({ theme }) => theme.sizes[0]}px;
    height: ${({ theme }) => theme.sizes[0]}px;
    background: url(${({ icon }) => icon});
    background-repeat: no-repeat;
  }
`;
