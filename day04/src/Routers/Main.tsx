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

  return (
    <>
      <StoryBoard data={Man} />
      <FeedTop
        src="man.png"
        name="man"
        city="Tokyo"
        nation="Japan"
        isCeleb={true}
      />
    </>
  );
};

export default Main;
