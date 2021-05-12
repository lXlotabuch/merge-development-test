import styled from 'styled-components';
import {
  primaryBlue,
  primaryBlueHover,
  primaryGreyHover,
  textStyleSmall,
} from '../../style/variables';

interface LinkStyledProps {
  signup?: boolean;
}

export const LinkStyled = styled.a<LinkStyledProps>`
  ${textStyleSmall};
  display: inline-block;
  color: ${props => (props.signup ? primaryBlue : 'rgba(117, 119, 122, 1)')};
  text-decoration: none;
  transition: color 0.3s linear;
  margin-right: 25px;
  &:hover {
    color: ${props => (props.signup ? primaryBlueHover : primaryGreyHover)};
  }
`;
