import React from 'react';
import { Img, SliderSubTitle, SlideTitle } from './SlideStyled';

interface SlideProps {
  url: string;
  title: string;
  text?: string;
}

export const Slide: React.FC<SlideProps> = ({ url, title, text }) => {
  return (
    <div>
      <Img>
        <img src={url} alt='SOME' />
      </Img>
      <SlideTitle>{title}</SlideTitle>
      <SliderSubTitle>{text}</SliderSubTitle>
    </div>
  );
};
