import { ChangeEvent, FocusEventHandler } from 'react';

export interface InputProps {
  error?: boolean;
}

export interface CloseInputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  error?: boolean;
  name?: string;
}
