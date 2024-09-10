import { imageSize, Size } from "../../../Styles/sizes";

export type ImageProps = {
  src?: string;
  size?: Size;
};

const Image = ({ src = "no_image.png", size = "md" }: ImageProps) => {
  return (
    <div style={imageSize[size]}>
      <img className="w-full h-full object-contain" src={src} alt=""></img>
    </div>
  );
};

export default Image;
