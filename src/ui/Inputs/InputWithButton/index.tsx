import { memo } from 'react';
import { Input, Interaction, Send } from './styled';
import { InputWithButtonProps } from './types';

export const InputWithButton = memo(
  ({
    value,
    onChange,
    placeholder,
    error,
    onClick,
    buttonText,
    disabled,
  }: InputWithButtonProps) => (
    <Interaction>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        error={error}
      />
      <Send onClick={onClick} disabled={disabled}>
        {buttonText}
      </Send>
      {error}
    </Interaction>
  )
);
