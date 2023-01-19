import React from 'react';
import { Arrow } from './styled';

export const ArrowLink = ({ text, to }: { text: string; to?: string }) => (
  <Arrow to={to as string}>{text}</Arrow>
);
