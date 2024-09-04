import { sizes } from "../../../Styles/sizes";

export type StroyImageProps = {
  src?: string;
};

const StroyImage = ({ src = "no_image.png" }: StroyImageProps) => {
  return (
    <div>
      <div className="rounded-full" style={{ width: "56px", height: "56px" }}>
        <img
          className="w-full h-full object-cover rounded-full"
          src={src}
          alt=""
          style={{
            border: "2px solid #c13584",
            padding: "2px",
          }}
        ></img>
      </div>
    </div>
  );
};

export default StroyImage;
