import { ChangeEvent } from 'react';

export interface InputProps {
  error?: boolean;
}

export interface InputWithButtonProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: boolean;
  onClick?: () => void;
  buttonText?: string;
  disabled?: boolean;
}
