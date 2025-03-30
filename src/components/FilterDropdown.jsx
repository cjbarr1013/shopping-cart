import styles from '../styles/FilterDropdown.module.css';
import menuUp from '../assets/icons/chevron-up.svg';
import menuDown from '../assets/icons/chevron-down.svg';
import FilterOptions from './FilterOptions';

import { useState } from 'react';

function FilterDropdown({ title, options, handleSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <img src={isOpen ? menuUp : menuDown} alt="menu arrow"></img>
      </button>
      {isOpen && (
        <fieldset className={styles.options}>
          <FilterOptions
            options={options}
            handleSelect={handleSelect}
          ></FilterOptions>
        </fieldset>
      )}
    </div>
  );
}

export default FilterDropdown;
