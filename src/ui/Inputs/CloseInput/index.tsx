import { memo } from 'react';
import { Input } from './styled';
import { CloseInputProps } from './types';

export const CloseInput = memo(
  ({ value, onChange, placeholder, error }: CloseInputProps) => (
    <Input
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      error={error}
    />
  )
);
