import React from 'react';
import { Form } from '../Form/Form';
import { Container, FormWrapper, SwiperWrapper } from './SignInPageStyled';
import { PageTitle } from '../PageTitle/PageTitle';
import { Link } from '../Link/Link';
import { SwiperContainer } from '../SwiperContainer/SwiperContainer';

export const SignInPage: React.FC = () => {
  return (
    <Container>
      <SwiperWrapper>
        <SwiperContainer />
      </SwiperWrapper>
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
