import FeedContetns from "./FeedContents/FeedContents";
import FeedImages from "./FeedImages/FeedImages";
import FeedInteraction from "./FeedInteraction/FeedInteraction";
import FeedSwiperImages from "./FeedSwiperImages/FeedSwiperImages";
import FeedTop from "./FeedTop/FeedTop";

const Feed = () => {
  const img = [
    { src: "tokyo.png" },
    { src: "tokyo1.png" },
    { src: "tokyo2.png" },
  ];
  return (
    <>
      <FeedTop
        src="man.png"
        name="man"
        city="Tokyo"
        nation="Japan"
        isCeleb={true}
      />
      <FeedSwiperImages slides={img} />
      <FeedInteraction />
      <FeedContetns />
    </>
  );
};

export default Feed;
