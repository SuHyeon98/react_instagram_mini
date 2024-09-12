import Feed, { FeedProps } from "../Components/Main/Feed/Feed";
import StoryBoard from "../Components/Main/Stroy/StoryBoard";
import { bts } from "../Components/Constants/bts";
import { feedData } from "../Components/Constants/feedDate";

const Main = () => {
  return (
    <>
      <StoryBoard data={bts} />
      {feedData.map((v) => (
        <Feed {...v} />
      ))}
    </>
  );
};

export default Main;
