import { FeedImageSilcedProps } from "../FeedImages/FeedImageSilced";

type FeedSlideNumberProps = {
  nowPage: number;
  slidesLength: number;
};

const FeedSlideNumber = ({ nowPage, slidesLength }: FeedSlideNumberProps) => {
  return (
    <div
      style={{
        position: "absolute",
        right: "10px",
        top: "8px",
        zIndex: "2",
        fontSize: "12px",
        color: "white",
        backgroundColor: "rgba(18,18,18,0.7)",
        borderRadius: "9999px",
        padding: "6px 8px",
      }}
    >
      {nowPage}/{slidesLength}
    </div>
  );
};

export default FeedSlideNumber;
