import PropTypes from 'prop-types';
import styles from '../styles/Sidebar.module.css';
import FilterDropdown from './FilterDropdown';
import { defaultFilters } from '../data/defaultFilters';

function Sidebar({ filters = defaultFilters, handleSelect }) {
  return (
    <div className={styles.sidebar}>
      {filters.map((filter) => {
        return (
          <FilterDropdown
            key={filter.title}
            title={filter.title}
            options={filter.options}
            handleSelect={handleSelect}
          ></FilterDropdown>
        );
      })}
    </div>
  );
}

Sidebar.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subOptions: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default Sidebar;
