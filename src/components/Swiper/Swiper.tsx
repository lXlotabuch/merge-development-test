import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import { SwiperStyled } from './SwiperStyled';
import { Slide } from './Slide/Slide';

SwiperCore.use([Pagination]);

export const Swiper: React.FC = () => {
  return (
    <SwiperStyled
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      <SwiperSlide style={{ paddingTop: 40 }}>
        <Slide
          url='./images/slide1.png'
          title='Tokenplace'
          text='Multi-exchange Trading Terminal'
        />
      </SwiperSlide>
      <SwiperSlide style={{ paddingTop: 40 }}>
        <Slide
          url='./images/slide2.png'
          title='Fund Platform'
          text='Hedge funds wealth management'
        />
      </SwiperSlide>
      <SwiperSlide style={{ paddingTop: 40 }}>
        <Slide
          url='./images/slide3.png'
          title='Noviscient'
          text='Management Platform'
        />
      </SwiperSlide>
    </SwiperStyled>
  );
};
