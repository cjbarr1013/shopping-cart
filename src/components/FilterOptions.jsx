import styles from '../styles/FilterOptions.module.css';

function FilterOptions({ options, handleSelect }) {
  return options.map((option) => {
    return (
      <div key={option.value} className={styles.option}>
        <input
          type="checkbox"
          id={option.value}
          value={option.value}
          onChange={handleSelect}
        />
        <label htmlFor={option.value}>{option.label}</label>
      </div>
    );
  });
}

export default FilterOptions;
