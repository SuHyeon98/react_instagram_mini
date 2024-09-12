export type StroyImageProps = {
  src?: string;
};

const StroyImage = ({ src = 'no_image.png' }: StroyImageProps) => {
  return (
    <div
      className="rounded-full"
      style={{
        width: '56px',
        height: '56px',
        border: '2px solid #D91A46',
        padding: '2px',
      }}
    >
      <img
        className="w-full h-full object-cover rounded-full"
        src={src}
        alt=""
      />
    </div>
  );
};

export default StroyImage;
