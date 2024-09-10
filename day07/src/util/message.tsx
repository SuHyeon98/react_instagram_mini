import FeedLikeBy from "../Components/Main/Feed/FeedContents/FeedLikeBy";
import FeedOrthers from "../Components/Main/Feed/FeedContents/FeedOrthers";

const getMessage = (msg: string[]) => {
  const count = msg.length;
  if (count === 0) return "";
  if (count === 1) return <FeedLikeBy />;
  else return <FeedOrthers msg={msg} />;
};

export default getMessage;
