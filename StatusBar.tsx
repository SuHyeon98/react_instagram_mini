import { FaWifi } from "react-icons/fa";
import { BiSignal4 } from "react-icons/bi";
import { IoBatteryFull } from "react-icons/io5";
import { colors } from "../../../Styles/color";
import { useEffect, useState } from "react";

const StatusBar = () => {
  const [time, setTime] = useState(new Date().toLocaleString().split(" ")[4]);

  useEffect(() => {
    setInterval(() => {
      setTime((prev) => new Date().toLocaleString().split(" ")[4]);
    }, 1000);
  }, []);

  return (
    <div
      style={{
        backgroundColor: colors.background.lightGrey,
        padding: "0px 14px 0px 20px",
        borderTop: colors.border.line,
      }}
      className="w-full max-w-md flex justify-between items-center"
    >
      <div>
        <span>{time}</span>
      </div>
      <span className="flex gap-1">
        <BiSignal4 />
        <FaWifi />
        <IoBatteryFull />
      </span>
    </div>
  );
};

export default StatusBar;
