import { ChangeEvent } from 'react';

export interface InputProps {
  error?: boolean;
}

export interface OpenInputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: boolean;
}
