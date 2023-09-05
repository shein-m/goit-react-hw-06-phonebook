import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setFilter } from 'redux/filter';
import { useSelector } from 'react-redux';

export default function FilterContacts({ title }) {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  return (
    <>
      <h3>{title}</h3>
      <input
        className="input-field"
        type="text"
        name="filter"
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value))}
      />
    </>
  );
}

FilterContacts.propTypes = {
  title: PropTypes.string.isRequired,
};
