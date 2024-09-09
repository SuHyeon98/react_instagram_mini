import { PiTelegramLogo } from "react-icons/pi";
import { IoBookmark, IoChatbubbleOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { useState } from "react";
import Icon from "../../../Common/Icon/Icon";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const FeedInteraction = () => {
  const [isLike, setisLike] = useState(false);
  const [isBooked, setisBooked] = useState(false);

  return (
    <div className="flex justify-between p-4 ">
      <div className="flex gap-4 ">
        <Icon
          onClick={() => setisLike((prev) => !prev)}
          icon={isLike ? <FaRegHeart /> : <FaHeart style={{ color: "red" }} />}
        />
        <Icon icon={<IoChatbubbleOutline />} />
        <Icon icon={<PiTelegramLogo />} />
      </div>
      <div>
        <Icon
          onClick={() => setisBooked((prev) => !prev)}
          icon={isBooked ? <IoBookmark /> : <CiBookmark />}
        />
      </div>
    </div>
  );
};

export default FeedInteraction;
