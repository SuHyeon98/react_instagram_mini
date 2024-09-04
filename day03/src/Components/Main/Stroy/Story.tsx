import StroyImage, { StroyImageProps } from "./StroyImage";
import StoryName, { StoryNameProps } from "./StroyName";

type StoryProps = StroyImageProps & StoryNameProps;

const Story = ({ src, name }: StoryProps) => {
  return (
    <div className="flex flex-col items-center">
      <StroyImage src={src} />
      <StoryName name={name} />
    </div>
  );
};

export default Story;
