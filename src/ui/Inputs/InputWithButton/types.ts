import { ChangeEvent, FocusEventHandler } from 'react';

export interface InputProps {
  error?: boolean;
}

export interface InputWithButtonProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: boolean;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onClick?: () => void;
  buttonText?: string;
  disabled?: boolean;
}
