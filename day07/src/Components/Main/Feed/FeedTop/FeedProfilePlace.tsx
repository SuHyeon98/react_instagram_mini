export type FeedProfilePlaceProps = {
  city?: string;
  nation?: string;
};

const FeedProfilePlace = ({
  city = "city",
  nation = "nation",
}: FeedProfilePlaceProps) => {
  return (
    <div className="flex gap-1" style={{ fontSize: "11px" }}>
      <span>{city},</span>
      <span> {nation}</span>
    </div>
  );
};

export default FeedProfilePlace;
