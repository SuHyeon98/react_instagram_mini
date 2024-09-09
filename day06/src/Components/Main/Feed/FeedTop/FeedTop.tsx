import { BsThreeDots } from "react-icons/bs";
import Icon from "../../../Common/Icon/Icon";
import FeedProfileName, { FeedProfileNameProps } from "./FeedProfileName";
import FeedProfilePlace, { FeedProfilePlaceProps } from "./FeedProfilePlace";
import FeedProfileImage, { FeedProfileImageProps } from "./FeedProfileImage";

export type FeedTopProps = FeedProfilePlaceProps &
  FeedProfileNameProps &
  FeedProfileImageProps;

const FeedTop = ({
  src = "no_image.png",
  name,
  city,
  nation,
  isCeleb,
}: FeedTopProps) => {
  return (
    <div className="flex justify-between items-center p-2">
      <div className="flex gap-1 items-center">
        <FeedProfileImage src={src} />
        <div className="flex flex-col">
          <FeedProfileName name={name} isCeleb={isCeleb} />
          <FeedProfilePlace city={city} nation={nation} />
        </div>
      </div>
      <Icon icon={<BsThreeDots />}></Icon>
    </div>
  );
};

export default FeedTop;
