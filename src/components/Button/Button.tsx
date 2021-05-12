import React from 'react';
import { ButtonStyled } from './ButtonStyled';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled: boolean;
  children: string;
}

export const Button: React.FC<ButtonProps> = ({ type, disabled, children }) => {
  return (
    <ButtonStyled type={type} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};
