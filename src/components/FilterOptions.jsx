import PropTypes from 'prop-types';
import styles from '../styles/FilterOptions.module.css';
import { defaultFilters } from '../data/defaultFilters';

function FilterOptions({
  title = defaultFilters[0].title,
  options = defaultFilters[0].options,
  handleSelect,
}) {
  return options.map((option) => {
    return (
      <div key={option.value} className={styles.option}>
        <input
          type="checkbox"
          id={option.value}
          value={option.value}
          onChange={(e) => handleSelect(e, title)}
        />
        <label htmlFor={option.value}>{option.label}</label>
      </div>
    );
  });
}

FilterOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default FilterOptions;
