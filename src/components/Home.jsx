import { useNavigate } from 'react-router';
import styles from '../styles/Home.module.css';
import Button from './Button';

function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>The Store</h1>
        <Button
          text="Shop Now"
          handleClick={() => navigate('/store/shop')}
          type="primary"
        ></Button>
      </div>
    </div>
  );
}

export default Home;
