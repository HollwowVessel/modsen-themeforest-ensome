import { Fill, LinkContainer } from './styled';
import { FillButtonProps } from './types';

export const FillButtonLink = ({
  text,
  disabled = false,
  onClick,
  to = '',
}: FillButtonProps) => (
  <LinkContainer to={to}>
    <Fill disabled={disabled} onClick={onClick}>
      {text}
    </Fill>
  </LinkContainer>
);
