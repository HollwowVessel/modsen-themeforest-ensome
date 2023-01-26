import React from 'react';
import { Arrow } from './styled';
import { ArrowLinkProps } from './types';

export const ArrowLink = ({ text, to }: ArrowLinkProps) => (
  <Arrow to={to as string}>{text}</Arrow>
);
