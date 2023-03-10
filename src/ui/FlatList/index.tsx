import { Cards } from './styled';
import { FlatListProps } from './types';

export const FlatList = ({ items, renderer, type }: FlatListProps) => (
  <Cards type={type}>{items.map((item) => renderer(item))}</Cards>
);
