import styles from '../styles/CartButton.module.css';
import cartIcon from '../assets/icons/cart-outline.svg';

function CartButton({ total, handleClick }) {
  return (
    <button className={styles.btn} onClick={handleClick}>
      <img src={cartIcon} alt="cart outline"></img>
      <span>{total}</span>
    </button>
  );
}

export default CartButton;
