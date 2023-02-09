import { memo } from 'react';
import { Input } from './styled';
import { OpenInputProps } from './types';

export const OpenInput = memo(
  ({ value, onChange, placeholder, error, name }: OpenInputProps) => (
    <Input
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      error={error}
      name={name}
    />
  )
);
