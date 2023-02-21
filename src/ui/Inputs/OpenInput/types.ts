import { ChangeEvent, FocusEventHandler } from 'react';

export interface InputProps {
  error?: boolean;
}

export interface OpenInputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: boolean;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  name?: string;
}
