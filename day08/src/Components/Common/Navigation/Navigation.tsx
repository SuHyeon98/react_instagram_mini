import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { colors } from "../../../Styles/color";
import { sizes } from "../../../Styles/sizes";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <footer className="w-full fixed z-10 bottom-0 flex justify-center items-center">
      <div
        style={{
          backgroundColor: colors.background.lightGrey,
          padding: sizes.padding.sm,
          height: sizes.height.lg,
          borderTop: colors.border.line,
          zIndex: 1,
        }}
        className="w-screen max-w-md flex justify-around items-center"
      >
        <Link to={"/"}>
          <MdHomeFilled />
        </Link>
        <Link to={"/Search"}>
          <IoSearch />
        </Link>
        <Link to={"/Plus"}>
          <CiSquarePlus />
        </Link>
        <Link to={"/Like"}>
          <CiHeart />
        </Link>
        <Link to={"/Mypage"}>
          <FaRegCircle />
        </Link>
      </div>
    </footer>
  );
};

export default Navigation;
