import styles from '../styles/ErrorPage.module.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <div>
        <h1>WHAT ARE YOU DOING HERE!?</h1>
        <p>This page doesn&#39;t exist.</p>
      </div>
      <Link to="/">Go home</Link>
    </div>
  );
};

export default ErrorPage;
