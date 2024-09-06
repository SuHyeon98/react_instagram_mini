import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import FeedImageSilced, {
  FeedImageSilcedProps,
} from "../FeedImages/FeedImageSilced";
// import Swiper from "swiper";

type FeedSwiperImagesProps = {
  slides: FeedImageSilcedProps[];
};

const FeedSwiperImages = ({ slides }: FeedSwiperImagesProps) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={(x: any) => console.log(x.activeIndex)}
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
  );
};

export default FeedSwiperImages;
