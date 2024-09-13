import { Category } from '../../../Routers/Search';

export type SearchBoardTextProps = {
  icon?: React.ReactNode;
  category?: Category;
  onClick?: () => void;
};

const SearchBoardText = ({ category, icon, onClick }: SearchBoardTextProps) => {
  return (
    <div
      className="w-full max-w-md font-bold flex gap-1 items-center"
      style={{
        border: '1px solid #eaeaea',
        borderRadius: '6px',
        padding: '11px 8px',
        fontSize: '14px',
        gap: '5px',
      }}
      onClick={onClick}
    >
      <span>{icon}</span>
      <span>{category}</span>
    </div>
  );
};

export default SearchBoardText;
