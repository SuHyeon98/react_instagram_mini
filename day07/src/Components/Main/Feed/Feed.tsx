import FeedContents, { FeedContentsProps } from './FeedContents/FeedContents';
import FeedInteraction from './FeedInteraction/FeedInteraction';
import FeedSwiperImages, {
  FeedSwiperImagesProps,
} from './FeedSwiperImages/FeedSwiperImages';
import FeedTop, { FeedTopProps } from './FeedTop/FeedTop';

export type FeedProps = {
  FeedTopProps: FeedTopProps;
  FeedSwiperImagesProps: FeedSwiperImagesProps;
  FeedContentsProps: FeedContentsProps;
};

const Feed = ({
  FeedTopProps,
  FeedSwiperImagesProps,
  FeedContentsProps,
}: FeedProps) => {
  return (
    <>
      <FeedTop {...FeedTopProps} />
      <FeedSwiperImages {...FeedSwiperImagesProps} />
      <FeedInteraction />
      <FeedContents {...FeedContentsProps} />
    </>
  );
};

export default Feed;
