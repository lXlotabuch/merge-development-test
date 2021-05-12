import styled from 'styled-components';
import {
  errorTextStyle,
  primaryBlue,
  primaryGreen,
  primaryRed,
  textStyleSmall,
} from '../../style/variables';
import { Error } from './Input';
import { LinkStyled } from '../Link/LinkStyled';

interface InputStyleProps {
  error: Error;
  check: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 420px;
  margin-bottom: 30px;
`;

export const LabelStyled = styled.label`
  ${textStyleSmall};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputStyled = styled.input<InputStyleProps>`
  width: 100%;
  ${textStyleSmall};
  line-height: 17px;
  border: 1px solid
    ${props => {
      if (props.error.error && !props.check) {
        return primaryRed;
      }
      if (props.check) {
        return primaryGreen;
      }
      return primaryBlue;
    }};
  border-radius: 8px;
  background: #ffffff;
  padding: 17px 20px;
  &:focus {
    outline-style: none;
  }
`;

export const ErrorStyle = styled.span`
  ${errorTextStyle};
`;

export const ForgotPass = styled(LinkStyled)`
  color: rgba(117, 119, 122, 1);
  position: absolute;
  bottom: 50%;
  right: 0;
  transform: translateY(50%);
  text-decoration: none;
`;
