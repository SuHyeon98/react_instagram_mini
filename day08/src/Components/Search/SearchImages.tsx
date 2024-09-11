import SearchImage, { SearchImageProps } from "./SearchImage";

export type SearchImagesProps = {
  srcData: SearchImageProps[];
};

const SearchImages = ({ srcData }: SearchImagesProps) => {
  return (
    <div
      className="grid w-full "
      style={{
        gridTemplateColumns: "repeat(5, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",
      }}
    >
      {srcData.map((v) => (
        <SearchImage {...v} />
      ))}
    </div>
  );
};

export default SearchImages;
