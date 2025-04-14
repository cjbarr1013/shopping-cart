import { useNavigate } from 'react-router';
import styles from '../styles/Home.module.css';
import Button from './Button';

function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          <span>Welcome to</span>
          <span>THE STORE</span>
        </h1>
        <Button
          text="SHOP NOW"
          handleClick={() => navigate('/store/shop')}
          type="primary"
        ></Button>
      </div>
    </div>
  );
}

export default Home;
