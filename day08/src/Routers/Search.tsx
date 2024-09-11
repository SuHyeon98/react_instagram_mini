import { category } from "../Components/Constants/category";
import { searchData } from "../Components/Constants/SearchImg";
import SearchBar from "../Components/Search/SearchBar";
import SearchBoard from "../Components/Search/SearchCategory/SearchBoard";
import SearchImages from "../Components/Search/SearchImages";

const Search = () => {
  return (
    <div className="w-full max-w-md">
      <SearchBar />
      <SearchBoard data={category} />
      <SearchImages srcData={searchData} />
    </div>
  );
};

export default Search;
