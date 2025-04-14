import PropTypes from 'prop-types';
import styles from '../styles/FilterDropdown.module.css';
import menuUp from '../assets/icons/chevron-up.svg';
import menuDown from '../assets/icons/chevron-down.svg';
import FilterOptions from './FilterOptions';

import { useState } from 'react';

function FilterDropdown({ title, options, handleSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  function capitalizeTitle(title) {
    return title
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  return (
    <div className={styles.dropdown}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <span>{capitalizeTitle(title)}</span>
        <img src={isOpen ? menuUp : menuDown} alt="menu arrow"></img>
      </button>
      {isOpen && (
        <fieldset className={styles.options}>
          <FilterOptions
            title={title}
            options={options}
            handleSelect={handleSelect}
          ></FilterOptions>
        </fieldset>
      )}
    </div>
  );
}

FilterDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default FilterDropdown;
