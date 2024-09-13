import SearchBoardText from './SearchBoardText';
import { categoryButtons } from '../../Constants/category';
import { Category } from '../../../Routers/Search';

type StoryBoardProps = {
  onClick: (e: Category) => void;
};

const SearchBoard = ({ onClick }: StoryBoardProps) => {
  return (
    <div className="flex w-full max-w-md items-center gap-2 overflow-x-scroll">
      {categoryButtons.map((v) => (
        <SearchBoardText {...v} onClick={() => onClick(v.category)} />
      ))}
    </div>
  );
};

export default SearchBoard;
