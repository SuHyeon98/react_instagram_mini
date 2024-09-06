import Icon from "../../../Common/Icon/Icon";
import { LuBadgeCheck } from "react-icons/lu";

export type FeedProfileNameProps = {
  name?: string;
  isCeleb?: boolean;
};

const FeedProfileName = ({
  name = "Unnamed",
  isCeleb = false,
}: FeedProfileNameProps) => {
  return (
    <div
      className="flex gap-1"
      style={{ fontSize: "10px", fontWeight: "bold" }}
    >
      <span className="text-lg font-bold">{name}</span>
      {isCeleb && (
        <Icon icon={<LuBadgeCheck style={{ color: "#3897F0" }} />}></Icon>
      )}
    </div>
  );
};

export default FeedProfileName;
