import styled from 'styled-components';
import { primaryBlue } from '../../style/variables';

export const Container = styled.div`
  position: relative;
  padding: 5%;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: ${primaryBlue};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-5%, -5%);
`;

export const ImgBottom = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(5%, 5%);
`;
