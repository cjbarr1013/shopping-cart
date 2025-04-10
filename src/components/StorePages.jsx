import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import styles from '../styles/StorePages.module.css';
import Header from './Header';

function StorePages() {
  const [cart, setCart] = useState([]);
  const location = useLocation();
  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const containerClass =
    location.pathname === '/store/shop' ?
      styles.shopContainer
    : styles.cartContainer;

  return (
    <div className={containerClass}>
      <Header subtotal={subtotal}></Header>
      <Outlet />
    </div>
  );
}

export default StorePages;
