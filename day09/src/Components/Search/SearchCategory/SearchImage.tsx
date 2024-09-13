export type SearchImageProps = {
  src?: string;
};

const SearchImage = ({ src }: SearchImageProps) => {
  return (
    <div style={{ width: '128px', height: '150px' }}>
      <img
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        src={src}
        alt=""
      ></img>
    </div>
  );
};

export default SearchImage;
