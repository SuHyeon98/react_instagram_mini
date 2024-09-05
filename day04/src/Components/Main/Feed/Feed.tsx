import FeedContetns from "./FeedContents/FeedContents";
import FeedImages from "./FeedImages/FeedImages";
import FeedInteraction from "./FeedInteraction/FeedInteraction";
import FeedTop from "./FeedTop/FeedTop";

const Feed = () => {
  return (
    <>
      <FeedTop
        src="man.png"
        name="man"
        city="Tokyo"
        nation="Japan"
        isCeleb={true}
      />
      <FeedImages />
      <FeedInteraction />
      <FeedContetns />
    </>
  );
};

export default Feed;
