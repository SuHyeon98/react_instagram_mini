import FeedImageSilced, { FeedImageSilcedProps } from "./FeedImageSilced";

type FeedImagesProps = {
  images: FeedImageSilcedProps[];
};

/**
 * @deprecated Use `FeedSwiperImages` instead.
 */

const FeedImages = ({ images }: FeedImagesProps) => {
  return (
    <div className="flex w-full h-96 snap-x snap-mandatory overflow-x-scroll">
      {images.map((v) => (
        <FeedImageSilced {...v} />
      ))}
    </div>
  );
};

export default FeedImages;
