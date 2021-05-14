import styled from 'styled-components';
import {
  fontFamily,
  primaryBlue,
  primaryBlueHover,
  primaryGrey,
} from '../../style/variables';

export const ButtonStyled = styled.button`
  margin: 5px 0;
  font-family: ${fontFamily};
  max-width: 420px;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #ffffff;
  background-color: ${primaryBlue};
  padding: 16px 0;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 5px 10px rgba(6, 91, 234, 0.83);
  transition: all 0.3s linear;
  &:hover {
    background-color: ${primaryBlueHover};
  }
  &:active {
    box-shadow: 0px 2px 2px rgba(6, 91, 234, 0.83);
  }
  &:disabled {
    box-shadow: none;
    background-color: ${primaryGrey};
  }
`;
