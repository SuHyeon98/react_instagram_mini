import { Category } from '../../../Routers/Search';
import { searchData } from '../../Constants/SearchImg';
import SearchImage, { SearchImageProps } from './SearchImage';

export type SearchImagesProps = {
  category: Category;
};

const SearchImages = ({ category }: SearchImagesProps) => {
  if (category === 'ALL') {
    return (
      <div
        style={{
          display: 'grid',
          width: '100%',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '3px',
        }}
      >
        {searchData.map((v) => (
          <SearchImage {...v} />
        ))}
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        width: '100%',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '3px',
      }}
    >
      {searchData
        .filter((v) => v.category === category)
        .map((v) => (
          <SearchImage {...v} />
        ))}
    </div>
  );
};

export default SearchImages;
