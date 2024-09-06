export type StoryNameProps = {
  name?: string;
};

const StoryName = ({ name = "null" }: StoryNameProps) => {
  return <span className="text-xs">{name}</span>;
};

export default StoryName;
