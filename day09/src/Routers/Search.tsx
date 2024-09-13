import { useState } from 'react';
import SearchBar from '../Components/Search/SearchBar/SearchBar';
import SearchBoard from '../Components/Search/SearchCategory/SearchBoard';
import SearchImages from '../Components/Search/SearchCategory/SearchImages';

export type Category =
  | 'Tv'
  | 'Idol'
  | 'Music'
  | 'City'
  | 'Game'
  | 'News'
  | 'Travel'
  | 'ALL';

const Search = () => {
  const [category, setCategory] = useState<Category>('ALL');
  const changeCategory = (data: Category) => setCategory((prev) => data);

  return (
    <div className="w-full min-w-full max-w-md">
      <SearchBar />
      <SearchBoard onClick={changeCategory} />
      <SearchImages category={category} />
    </div>
  );
};

export default Search;
