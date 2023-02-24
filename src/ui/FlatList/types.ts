export interface FlatListProps {
  items: any[];
  renderer: any;
  key?: string | number;
  type: 'hidden' | 'open';
}
