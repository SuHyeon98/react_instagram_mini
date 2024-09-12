import { IoIosQrScanner } from "react-icons/io";
import Icon from "../Common/Icon/Icon";
import Search from "./Search";

const SearchBar = () => {
  return (
    <div className="flex w-full max-w-md items-center gap-4 p-2">
      <Search />
      <Icon icon={<IoIosQrScanner />} />
    </div>
  );
};

export default SearchBar;
