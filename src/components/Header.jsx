import PropTypes from 'prop-types';
import styles from '../styles/Header.module.css';
import CartButton from './CartButton';

function Header({ subtotal = 105.67, handleClick }) {
  return (
    <header className={styles.header}>
      <h1>The Store</h1>
      <CartButton subtotal={subtotal} handleClick={handleClick}></CartButton>
    </header>
  );
}

Header.propTypes = {
  subtotal: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Header;
