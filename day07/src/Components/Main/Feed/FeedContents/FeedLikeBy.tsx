import getMessage from "../../../../util/message";

export type FeedLikeByProps = {
  name?: string;
};

const FeedLikeBy = ({ name = "Unnamed" }: FeedLikeByProps) => {
  return (
    <div>
      <span>Like by</span>
      <span style={{ fontWeight: "bold", padding: "0px 5px" }}>{name}</span>
    </div>
  );
};

export default FeedLikeBy;
