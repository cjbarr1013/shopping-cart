import styles from '../styles/SortDropdown.module.css';

function SortDropdown({ handleChange }) {
  return (
    <select className={styles.dropdown} onChange={handleChange}>
      <option value="alpha">Alphabetical</option>
      <option value="l2h">Price: Low-High</option>
      <option value="h2l">Price: High-Low</option>
    </select>
  );
}

export default SortDropdown;
