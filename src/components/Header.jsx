import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles/Header.module.css';
import CartButton from './CartButton';

function Header({ subtotal = 105.67 }) {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>The Store</h1>
      </Link>
      <CartButton
        subtotal={subtotal}
        handleClick={() => navigate('/store/cart')}
      ></CartButton>
    </header>
  );
}

Header.propTypes = {
  subtotal: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Header;
