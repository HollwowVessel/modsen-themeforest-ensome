import React, { ChangeEvent } from 'react';
import { Email } from './styled';

export const EmailInput = ({
  placeholder,
  handleChange,
  value,
}: {
  placeholder: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}) => <Email placeholder={placeholder} onChange={handleChange} value={value} />;
