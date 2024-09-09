import Feed from "../Components/Main/Feed/Feed";
import FeedSwiperImages from "../Components/Main/Feed/FeedSwiperImages/FeedSwiperImages";
import FeedTop from "../Components/Main/Feed/FeedTop/FeedTop";
import StoryBoard from "../Components/Main/Stroy/StoryBoard";

const Main = () => {
  const Man = [
    { src: "man.png", name: "man" },
    { src: "man.png", name: "man", isLive: true },
    { src: "man.png", name: "man" },
    { src: "man.png", name: "man" },
    { src: "man.png", name: "man", isLive: true },
    { src: "man.png", name: "man" },
    { src: "man.png", name: "man" },
  ];
  const Top = [
    {
      src: "man.png",
      name: "man",
      city: "Tokyo",
      nation: "Japan",
      isCeleb: true,
    },
  ];

  return (
    <>
      <StoryBoard data={Man} />
      <Feed />
    </>
  );
};

export default Main;
