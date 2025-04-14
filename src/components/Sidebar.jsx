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
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          checked: PropTypes.bool.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default Sidebar;
