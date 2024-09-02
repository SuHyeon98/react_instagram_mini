import { Link } from "react-router-dom";
import { IoCameraOutline } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { colors } from "../Styles/color";
import { sizes } from "../Styles/sizes";

const Header = () => {
  return (
    <header className="w-full fixed top-0 flex justify-center items-center">
      <div
        style={{
          backgroundColor: colors.background.lightGrey,
          padding: sizes.padding.sm,
          borderTop: colors.border.line,
        }}
        className="w-screen max-w-sm flex justify-between items-center"
      >
        <Link to={""}>
          <IoCameraOutline />
        </Link>
        <span className="flex gap-1 justify-between">
          <Link to={""}>
            <MdOutlineCheckBoxOutlineBlank />
          </Link>
          <Link to={""}>
            <CiLocationArrow1 />
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
