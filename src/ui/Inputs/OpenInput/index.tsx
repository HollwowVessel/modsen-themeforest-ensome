import { memo } from 'react';

import { Input } from './styled';
import { OpenInputProps } from './types';

export const OpenInput = memo(
  ({ value, onChange, placeholder, error, name, onBlur }: OpenInputProps) => (
    <Input
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      error={error}
      name={name}
      onBlur={onBlur}
    />
  )
);
