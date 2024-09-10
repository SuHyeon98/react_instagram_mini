import Feed, { FeedProps } from "../Components/Main/Feed/Feed";
import FeedSwiperImages from "../Components/Main/Feed/FeedSwiperImages/FeedSwiperImages";
import FeedTop from "../Components/Main/Feed/FeedTop/FeedTop";
import StoryBoard from "../Components/Main/Stroy/StoryBoard";
import { Man } from "../util/man";

const Main = () => {
  const FeedData: FeedProps[] = [];

  return (
    <>
      <StoryBoard data={Man} />
      {FeedData.map((v) => (
        <Feed {...v} />
      ))}
    </>
  );
};

export default Main;
