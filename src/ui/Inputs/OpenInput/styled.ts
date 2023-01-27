import styled from 'styled-components';
import { InputProps } from './types';

export const Input = styled.input<InputProps>`
  width: ${({ theme }) => theme.sizes[5]}%;
  display: block;
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: -0.015em;
  color: ${({ theme, error }) =>
    error ? theme.colors.red : theme.colors.black};
  border: none;
  border-bottom: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.grey)};
  outline: none;
  background: none;
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
  &::placeholder {
    font-weight: ${({ theme }) => theme.fontWeights[2]};
    font-size: ${({ theme }) => theme.fonts[0]}px;
    line-height: ${({ theme }) => theme.lineHeights[0]}px;
    letter-spacing: -0.015em;
    color: ${({ theme }) => theme.colors.grey};
  }
  &:active,
  &:focus {
    border-bottom: 1px solid
      ${({ theme, error }) => (error ? theme.colors.red : theme.colors.primary)};
  }
`;
