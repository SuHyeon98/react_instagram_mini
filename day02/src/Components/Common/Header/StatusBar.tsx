import { FaWifi } from "react-icons/fa";
import { BiSignal4 } from "react-icons/bi";
import { IoBatteryFull } from "react-icons/io5";
import { colors } from "../../../Styles/color";
import { sizes } from "../../../Styles/sizes";

const StatusBar = () => {
  return (
    <div
      style={{
        backgroundColor: colors.background.lightGrey,
        padding: "0px 14px 0px 20px",
        borderTop: colors.border.line,
      }}
      className="w-full max-w-md flex justify-between items-center"
    >
      <span style={{ fontSize: sizes.fontSize.sm }}>9:43PM</span>
      <span className="flex gap-1">
        <BiSignal4 />
        <FaWifi />
        <IoBatteryFull />
      </span>
    </div>
  );
};

export default StatusBar;
