import React, { useState } from 'react';
import { validInput } from '../../utils/validation';
import {
  ErrorStyle,
  ForgotPass,
  Container,
  InputWrapper,
  InputStyled,
  LabelStyled,
} from './InputStyled';

interface InputProps {
  name: string;
  type: string;
  label: string;
  check: boolean;
  setCheck: any;
}

export interface Error {
  error: boolean;
  massage?: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  type,
  label,
  check,
  setCheck,
}) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<Error>({ error: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const valid = validInput(value, name);

    if (valid.error) {
      setCheck(false);
    } else setCheck(true);

    setError(valid);
    setValue(e.target.value);
  };

  return (
    <Container>
      <LabelStyled htmlFor={name}>
        {label}
        {error.error && <ErrorStyle>{error.massage}</ErrorStyle>}
      </LabelStyled>
      <InputWrapper>
        <InputStyled
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          error={error}
          check={check}
        />
        {name === 'password' && (
          <ForgotPass href='#'>Forgot your password?</ForgotPass>
        )}
      </InputWrapper>
    </Container>
  );
};
