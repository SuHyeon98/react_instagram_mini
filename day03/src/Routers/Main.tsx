import Story from "../Components/Main/Stroy/Story";
import StoryBoard from "../Components/Main/Stroy/StoryBoard";

const Main = () => {
  const Man = [
    { src: "man.png", name: "man" },
    { src: "man.png", name: "man" },
    { src: "man.png", name: "man" },
    { src: "man.png", name: "man" },
    { src: "man.png", name: "man" },
  ];

  return (
    <>
      <StoryBoard data={Man} />
    </>
  );
};

export default Main;
