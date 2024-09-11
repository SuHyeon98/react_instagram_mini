export type FeedImageSilcedProps = {
  src?: string;
};

const FeedImageSilced = ({ src = "no_image.png" }: FeedImageSilcedProps) => {
  return (
    <div className="w-full h-full">
      <img className="w-full h-full object-cover" src={src} alt="" />
    </div>
  );
};

export default FeedImageSilced;
