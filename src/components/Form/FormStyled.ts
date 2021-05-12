import styled from 'styled-components';
import { textStyleH1, textStyleSmall } from '../../style/variables';

export const FormStyled = styled.form`
  max-width: 420px;
  width: 100%;
`;

export const FormTitle = styled.h1`
  ${textStyleH1}
  padding-bottom: 15px;
`;

export const ToSignUpStyled = styled.p`
  ${textStyleSmall}
  padding-bottom: 60px;
`;
