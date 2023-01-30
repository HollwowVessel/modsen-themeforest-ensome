import styled from 'styled-components';
import { InputProps } from './types';

export const Input = styled.input<InputProps>`
  width: ${({ theme }) => theme.sizes[5]}%;
  display: block;
  padding: ${({ theme }) => theme.paddings[2]}px 0
    ${({ theme }) => theme.paddings[2]}px ${({ theme }) => theme.paddings[3]}px;
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: -0.015em;
  color: ${({ theme, error }) =>
    error ? theme.colors.red : theme.colors.black};
  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.grey)};
  outline: none;
  background: none;
  border-radius: 6px;
  &:hover,
  &:focus,
  &:active {
    border: 1px solid
      ${({ theme, error }) => (error ? theme.colors.red : theme.colors.primary)};
  }
  &::placeholder {
    font-weight: ${({ theme }) => theme.fontWeights[2]};
    font-size: ${({ theme }) => theme.fonts[0]}px;
    line-height: ${({ theme }) => theme.lineHeights[0]}px;
    letter-spacing: -0.015em;
    color: ${({ theme }) => theme.colors.grey};
  }
`;
