import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter-slice';
import { getFilter } from 'redux/selectors';
import css from './Filter.module.css';

// Компонент фільтрації контактів
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);  

  const onChangeFilter = ({ currentTarget: { value } }) => {
    const newValue = value.toLowerCase();
    dispatch(changeFilter(newValue));
  };
  return (
    <>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeFilter}
        />
      </label>
    </>
  );
};

export default Filter;