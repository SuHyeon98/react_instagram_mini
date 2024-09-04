import Story from "./Story";
import { StoryNameProps } from "./StroyName";

type StoryBoardProps = {
  data: StoryNameProps[];
};

const StoryBoard = ({ data }: StoryBoardProps) => {
  return (
    <div className="flex items-center gap-2 mt-2 ">
      {data.map((v) => (
        <Story {...v} />
      ))}
    </div>
  );
};

export default StoryBoard;
