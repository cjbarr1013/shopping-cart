import PropTypes from 'prop-types';
import styles from '../styles/CartButton.module.css';
import cartIcon from '../assets/icons/cart-outline.svg';

function CartButton({ subtotal = 105.67, handleClick }) {
  return (
    <button className={styles.btn} onClick={handleClick}>
      <img src={cartIcon} alt="cart outline"></img>
      <span>${Number(subtotal).toFixed(2)}</span>
    </button>
  );
}

CartButton.propTypes = {
  subtotal: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CartButton;
