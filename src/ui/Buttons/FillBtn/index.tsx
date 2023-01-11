import { Fill } from './styled';

interface FillProps {
  text: string;
}

export const FillBtn = ({ text }: FillProps) => <Fill>{text}</Fill>;
