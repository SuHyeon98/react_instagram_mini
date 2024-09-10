import getMessage from "../../../../util/message";
import FeedProfileImage from "../FeedTop/FeedProfileImage";

export type FeedLikeMessageProps = { msg: { name: string; image: string }[] };

const FeedLikeMessage = ({ msg = [] }: FeedLikeMessageProps) => {
  return (
    <div className="flex items-center gap-2">
      {msg.length > 0 && <FeedProfileImage />}
      <span>{getMessage(msg.map((v) => v.name))}</span>
    </div>
  );
};

export default FeedLikeMessage;
