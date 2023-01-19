import { WithIcon } from './styled';

interface FillProps {
  text: string;
  icon: string;
  handleClick?: () => void;
}

export const WithIconButton = ({ text, icon, handleClick }: FillProps) => (
  <WithIcon icon={icon} onClick={handleClick}>
    {text}
  </WithIcon>
);
