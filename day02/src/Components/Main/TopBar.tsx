import { Link } from "react-router-dom";
import { IoCameraOutline } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { colors } from "../../Styles/color";
import { sizes } from "../../Styles/sizes";

const TopBar = () => {
  return (
    <div
      style={{
        backgroundColor: colors.background.lightGrey,
        padding: sizes.padding.smtwo,
        borderBottom: colors.border.line,
      }}
      className="w-full max-w-md flex justify-between items-center"
    >
      <Link to={""}>
        <IoCameraOutline />
      </Link>
      <div style={{ width: sizes.width.md, height: sizes.height.sm }}>
        <img
          className="w-full h-full object-contain"
          src="Logo-Instagram.png"
          alt=""
        ></img>
      </div>
      <span className="flex gap-1">
        <Link to={""}>
          <MdOutlineCheckBoxOutlineBlank />
        </Link>
        <Link to={""}>
          <CiLocationArrow1 />
        </Link>
      </span>
    </div>
  );
};

export default TopBar;
