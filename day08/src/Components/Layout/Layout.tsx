import Header, { HeaderProps } from "../Common/Header/Header";
import Content, { ContentProps } from "../Content/Content";
import Navigation from "../Common/Navigation/Navigation";

type LayOutProps = {
  header?: HeaderProps;
  children: ContentProps; // tag를 전달하는 type
};

const LayOut = ({ header, children }: LayOutProps) => {
  return (
    <>
      <Header {...header} />
      <Content {...children} />
      <Navigation />
    </>
  );
};

export default LayOut;
