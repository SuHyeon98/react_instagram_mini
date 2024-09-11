export type SearchImageProps = {
  src?: string;
};

const SearchImage = ({ src }: SearchImageProps) => {
  return (
    <div>
      <img src={src}></img>
    </div>
  );
};

export default SearchImage;
