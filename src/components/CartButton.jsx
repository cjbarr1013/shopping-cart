import PropTypes from 'prop-types';
import styles from '../styles/CartButton.module.css';
import cartIcon from '../assets/icons/cart-outline.svg';
import { toUSD } from '../utils/utils';
import { useState, useEffect } from 'react';

function CartButton({ subtotal, handleClick }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);

    const timeout = setTimeout(() => setAnimate(false), 1000);

    return () => clearTimeout(timeout);
  }, [subtotal]);

  return (
    <button
      className={`${styles.btn} ${animate ? styles.animate : ''}`}
      onClick={handleClick}
    >
      <img
        className={animate ? styles.animateImg : ''}
        src={cartIcon}
        alt="cart outline"
      ></img>
      <span>{toUSD.format(subtotal)}</span>
    </button>
  );
}

CartButton.propTypes = {
  subtotal: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CartButton;
