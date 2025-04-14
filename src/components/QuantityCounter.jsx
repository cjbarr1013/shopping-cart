import PropTypes from 'prop-types';
import styles from '../styles/QuantityCounter.module.css';
import cartMinus from '../assets/icons/cart-minus.svg';
import stdMinus from '../assets/icons/minus.svg';
import stdPlus from '../assets/icons/plus.svg';

function StoreCardQuantityCounter({ quantity, handleQuantityChange }) {
  function handleMinusClick() {
    if (quantity > 1) {
      handleQuantityChange(quantity - 1);
    }
  }

  function handlePlusClick() {
    if (quantity < 100) {
      handleQuantityChange(quantity + 1);
    }
  }

  return (
    <QuantityCounter
      minus={stdMinus}
      quantity={quantity}
      handleMinusClick={handleMinusClick}
      handlePlusClick={handlePlusClick}
    ></QuantityCounter>
  );
}

function CartCardQuantityCounter({ quantity, handleQuantityChange }) {
  const minus = quantity > 1 ? stdMinus : cartMinus;

  function handleMinusClick() {
    handleQuantityChange(quantity - 1);
  }

  function handlePlusClick() {
    if (quantity < 100) {
      handleQuantityChange(quantity + 1);
    }
  }

  return (
    <QuantityCounter
      minus={minus}
      quantity={quantity}
      handleMinusClick={handleMinusClick}
      handlePlusClick={handlePlusClick}
    ></QuantityCounter>
  );
}

function QuantityCounter({
  minus,
  quantity,
  handleMinusClick,
  handlePlusClick,
}) {
  return (
    <div className={styles.quantityCounter}>
      <button onClick={handleMinusClick}>
        <img src={minus} alt="minus"></img>
      </button>
      <span>{quantity}</span>
      <button onClick={handlePlusClick}>
        <img src={stdPlus} alt="plus"></img>
      </button>
    </div>
  );
}

StoreCardQuantityCounter.propTypes = {
  quantity: PropTypes.number.isRequired,
  handleQuantityChange: PropTypes.func.isRequired,
};

CartCardQuantityCounter.propTypes = {
  quantity: PropTypes.number.isRequired,
  handleQuantityChange: PropTypes.func.isRequired,
};

QuantityCounter.propTypes = {
  minus: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  handleMinusClick: PropTypes.func.isRequired,
  handlePlusClick: PropTypes.func.isRequired,
};

export { StoreCardQuantityCounter, CartCardQuantityCounter };
