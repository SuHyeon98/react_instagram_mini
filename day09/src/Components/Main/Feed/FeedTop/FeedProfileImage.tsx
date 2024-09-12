export type FeedProfileImageProps = {
  src?: string;
};

const FeedProfileImage = ({ src = "no_image.png" }: FeedProfileImageProps) => {
  return (
    <div className="rounded-full" style={{ width: "32px", height: "32px" }}>
      <img
        className="w-full h-full object-cover rounded-full"
        src={src}
        alt=""
      />
    </div>
  );
};

export default FeedProfileImage;
