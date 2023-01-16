import { WithIcon } from './styled';

interface FillProps {
  text: string;
  icon: string;
}

export const Fill = ({ text, icon }: FillProps) => (
  <WithIcon icon={icon}>{text}</WithIcon>
);
