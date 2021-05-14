import styled from 'styled-components';
import { textStyleH2, textStyleSmall } from '../../../style/variables';

export const Img = styled.div`
  width: 100%;
  margin-bottom: 50px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SlideTitle = styled.h2`
  ${textStyleH2};
  color: #ffffff;
  text-align: center;
`;

export const SliderSubTitle = styled.p`
  ${textStyleSmall};
  color: #ffffff;
  text-align: center;
`;
