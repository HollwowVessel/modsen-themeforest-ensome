import { ChangeEvent } from 'react';

export interface EmailInputProps {
  placeholder: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}
