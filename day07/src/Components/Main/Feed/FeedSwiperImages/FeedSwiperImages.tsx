import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import FeedImageSilced, {
  FeedImageSilcedProps,
} from '../FeedImages/FeedImageSilced';
import { useState } from 'react';
import FeedSlideNumber from './FeedSlideNumber';

export type FeedSwiperImagesProps = {
  slides: FeedImageSilcedProps[];
};

const FeedSwiperImages = ({ slides }: FeedSwiperImagesProps) => {
  const [nowPage, setNowPage] = useState<number>(1);

  return (
    <div style={{ position: 'relative' }}>
      <FeedSlideNumber nowPage={nowPage} slidesLength={slides.length} />
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(x: any) => setNowPage((prev) => x.activeIndex + 1)}
        pagination={true}
        modules={[Pagination]}
        className="w-full h-96"
      >
        {slides.map((v) => (
          <SwiperSlide>
            <FeedImageSilced {...v} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedSwiperImages;
