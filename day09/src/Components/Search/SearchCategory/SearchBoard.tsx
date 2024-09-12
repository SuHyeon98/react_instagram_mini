import SearchBoardText, { SearchBoardTextProps } from "./SearchBoardText";

export type StoryBoardProps = {
  data: SearchBoardTextProps[];
};

const SearchBoard = ({ data }: StoryBoardProps) => {
  return (
    <div className="flex w-full max-w-md items-center gap-2 overflow-x-scroll">
      {data.map((v) => (
        <SearchBoardText {...v} />
      ))}
    </div>
  );
};

export default SearchBoard;
