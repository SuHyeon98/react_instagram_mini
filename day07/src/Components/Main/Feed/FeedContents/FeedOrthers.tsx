import getMessage from "../../../../util/message";

export type FeedOrthersProps = {
  msg?: string[];
};

const FeedOrthers = ({ msg = [] }: FeedOrthersProps) => {
  const count = msg.length;

  return (
    <div className="gap-1">
      <span>Like by</span>
      <span style={{ fontWeight: "bold", padding: "0px 5px" }}>{msg[0]}</span>
      <span>and {count - 1} orthers</span>
    </div>
  );
};

export default FeedOrthers;
