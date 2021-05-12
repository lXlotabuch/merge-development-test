import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Link } from '../Link/Link';
import { FormStyled, FormTitle, ToSignUpStyled } from './FormStyled';

export const Form: React.FC = () => {
  const [checkEmail, setCheckEmail] = useState<boolean>(false);
  const [checkPassword, setCheckPassword] = useState<boolean>(false);

  const disabled: boolean = !(checkEmail === true && checkPassword === true);

  const handleSubmite = (e: any) => {
    e.preventDefault();
    const elements = [...e.target.elements];
    let values = {};

    elements.forEach(el => {
      if (el.nodeName === 'INPUT') {
        values = {
          ...values,
          [el.name]: el.value,
        };
      }
    });

    console.log(values);
  };

  return (
    <div>
      <FormTitle>Sign in</FormTitle>
      <ToSignUpStyled>
        Don’t have an account?{' '}
        <Link to='#' signup>
          Sign up now
        </Link>
      </ToSignUpStyled>
      <FormStyled onSubmit={handleSubmite}>
        <Input
          name='email'
          type='text'
          label='Email'
          check={checkEmail}
          setCheck={setCheckEmail}
        />
        <Input
          name='password'
          type='password'
          label='Password'
          check={checkPassword}
          setCheck={setCheckPassword}
        />
        <Button type='submit' disabled={disabled}>
          Sign In
        </Button>
      </FormStyled>
    </div>
  );
};
