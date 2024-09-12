export type SearchImageProps = {
  src?: string;
  category?: string;
};

const SearchImage = ({ src, category = "null" }: SearchImageProps) => {
  return (
    <div>
      <img
        className="object-cover"
        style={{ width: "128px", height: "128px" }}
        src={src}
        alt=""
      ></img>
      <span className="hidden">{category}</span>
    </div>
  );
};

export default SearchImage;
