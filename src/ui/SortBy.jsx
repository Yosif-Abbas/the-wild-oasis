import Proptypes from 'prop-types';
import Select from './Select';
import { useSearchParams } from 'react-router-dom';

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const curSortBy = searchParams.get('sortBy') || '';

  function handleChange(e) {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      onChange={handleChange}
      value={curSortBy}
      type="white"
    />
  );
}

SortBy.propTypes = {
  options: Proptypes.arrayOf(Proptypes.objectOf(Proptypes.string)),
};

export default SortBy;
