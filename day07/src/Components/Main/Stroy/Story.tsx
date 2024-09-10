import StroyImage, { StroyImageProps } from "./StroyImage";
import StoryLive, { StoryLivePorps } from "./StroyLive";
import StoryName, { StoryNameProps } from "./StroyName";

export type StoryProps = StroyImageProps & StoryNameProps & StoryLivePorps;

const Story = ({ src, name, isLive = false }: StoryProps) => {
  return (
    <div className="flex flex-col items-center relative gap-1">
      <StroyImage src={src} />
      <StoryLive isLive={isLive} />
      <StoryName name={name} />
    </div>
  );
};

export default Story;
