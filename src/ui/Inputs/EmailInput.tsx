import React, { ChangeEvent } from 'react';
import { Email } from './styled';
import { EmailInputProps } from './types';

export const EmailInput = ({
  placeholder,
  handleChange,
  value,
}: EmailInputProps) => (
  <Email placeholder={placeholder} onChange={handleChange} value={value} />
);
