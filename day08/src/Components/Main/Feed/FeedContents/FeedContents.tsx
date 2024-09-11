import FeedDate from "./FeedDate";
import FeedLikeMessage, { FeedLikeMessageProps } from "./FeedLikeMessage";
import FeedText, { FeedTextProps } from "./FeedText";

export type FeedContentsProps = FeedLikeMessageProps & FeedTextProps;

const FeedContents = (props: FeedContentsProps) => {
  return (
    <div className="">
      <FeedLikeMessage {...props} />
      <FeedText {...props} />
      <FeedDate />
    </div>
  );
};

export default FeedContents;
