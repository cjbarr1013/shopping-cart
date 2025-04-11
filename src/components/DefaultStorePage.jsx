import styles from '../styles/DefaultStorePage.module.css';
import { Link } from 'react-router-dom';

function DefaultStorePage() {
  return (
    <div className={styles.defaultStorePage}>
      <h2>Nothing to see here.</h2>
      <Link to="/store/shop">Go to Shop</Link>
    </div>
  );
}

export default DefaultStorePage;
