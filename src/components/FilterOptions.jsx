import PropTypes from 'prop-types';
import styles from '../styles/FilterOptions.module.css';

function FilterOptions({ title, options, handleSelect }) {
  return options.map((option) => {
    return (
      <div key={option.value} className={styles.option}>
        <input
          type="checkbox"
          id={option.value}
          value={option.value}
          checked={option.checked}
          onChange={(e) => handleSelect(e, title)}
        />
        <label htmlFor={option.value}>{option.label}</label>
      </div>
    );
  });
}

FilterOptions.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default FilterOptions;
