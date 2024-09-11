export type SearchBoardTextProps = {
  icon?: React.ReactNode;
  category?: string;
};

const SearchBoardText = ({ category = "null", icon }: SearchBoardTextProps) => {
  return (
    <div
      className="w-full max-w-md font-bold flex gap-1 items-center"
      style={{
        border: "1px solid #eaeaea",
        borderRadius: "6px",
        padding: "11px 8px",
        fontSize: "14px",
      }}
    >
      <span>{icon}</span>
      <span>{category}</span>
    </div>
  );
};

export default SearchBoardText;
