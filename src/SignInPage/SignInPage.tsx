import React from 'react';
import { Form } from '../components/Form/Form';
import { Container, FormWrapper, SliderWrapper } from './SignInPageStyled';
import { PageTitle } from '../components/PageTitle/PageTitle';
import { Link } from '../components/Link/Link';

export const SignInPage: React.FC = () => {
  return (
    <Container>
      <SliderWrapper></SliderWrapper>
      <FormWrapper>
        <PageTitle />
        <Form />
        <div>
          <Link to='#'>Contact</Link>
          <Link to='#'>Privacy</Link>
          <Link to='#'>Terms</Link>
        </div>
      </FormWrapper>
    </Container>
  );
};
