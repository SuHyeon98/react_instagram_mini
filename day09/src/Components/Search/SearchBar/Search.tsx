import { IoSearch } from 'react-icons/io5';
import Icon from '../../Common/Icon/Icon';

const Search = () => {
  return (
    <div
      className="flex w-full max-w-md flex-1 gap-2"
      style={{
        backgroundColor: '#eaeaea',
        padding: '11px',
        borderRadius: '10px',
      }}
    >
      <Icon icon={<IoSearch />} />
      <input
        type="text"
        placeholder="Search"
        style={{
          backgroundColor: '#eaeaea',
          border: 'none',
          outline: 'none',
          width: '100%',
        }}
      />
    </div>
  );
};

export default Search;
