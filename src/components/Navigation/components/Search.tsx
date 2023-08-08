import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState<string>('');

  const onSearch = useCallback(() => {
    navigate(searchInput === '' ? '/' : `/search?query=${encodeURIComponent(searchInput)}`);
  }, [searchInput]);

  return (
    <div className='search'>
      <div className='search-box'>
        <input
          type='text'
          placeholder='찾으시는 물건을 검색해 주세요.'
          onKeyDown={(e) => {
            e.key === 'Enter' && onSearch();
          }}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button onClick={onSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <img />
      </div>
    </div>
  );
};

export default Search;
