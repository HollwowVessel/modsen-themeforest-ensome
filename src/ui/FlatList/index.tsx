import React from 'react';

import { Cards } from './styled';
import { FlatListProps } from './types';

export const FlatList = ({ items, renderer, key, type }: FlatListProps) => (
  <Cards type={type}>{items.map((item) => renderer(item))}</Cards>
);
