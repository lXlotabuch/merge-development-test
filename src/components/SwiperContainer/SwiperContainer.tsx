import React from 'react';
import { Swiper } from '../Swiper/Swiper';
import { Container, ImgBottom, ImgTop } from './SwiperContainerStyled';

export const SwiperContainer: React.FC = () => {
  return (
    <Container>
      <ImgTop>
        <img src='./images/VectorTop.png' alt='VECTOR' />
      </ImgTop>
      <ImgBottom>
        <img src='./images/VectorBottom.png' alt='VECTOR' />
      </ImgBottom>
      <div style={{ width: '100%', height: '90%', zIndex: 10 }}>
        <Swiper />
      </div>
    </Container>
  );
};
