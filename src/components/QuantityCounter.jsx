import styles from '../styles/QuantityCounter.module.css';
import cartMinus from '../assets/icons/cart-minus.svg';
import minus from '../assets/icons/minus.svg';
import plus from '../assets/icons/plus.svg';

function QuantityCounter({ quantity, handleMinusClick, handlePlusClick }) {
  const minusIcon = quantity > 1 ? minus : cartMinus;
  return (
    <div className={styles.quantityCounter}>
      <button onClick={handleMinusClick}>
        <img src={minusIcon} alt="minus"></img>
      </button>
      <span>{quantity}</span>
      <button onClick={handlePlusClick}>
        <img src={plus} alt="plus"></img>
      </button>
    </div>
  );
}

export default QuantityCounter;
