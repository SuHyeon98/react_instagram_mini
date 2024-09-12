import SearchImage, { SearchImageProps } from "./SearchImage";

export type SearchImagesProps = {
  srcData: SearchImageProps[];
};

const SearchImages = ({ srcData }: SearchImagesProps) => {
  return (
    <div
      className="grid w-full h-full gap-1"
      style={{
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      {srcData.map((v) => (
        <SearchImage {...v} />
      ))}
    </div>
  );
};

export default SearchImages;
