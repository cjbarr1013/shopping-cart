import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '../styles/StorePages.module.css';
import Header from './Header';

function StorePages() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const location = useLocation();
  const containerClass =
    location.pathname === '/store/shop' ?
      styles.shopContainer
    : styles.cartContainer;

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function handleCartChange(item) {
    const existingItemIndex = cart.findIndex((i) => i.id === item.id);
    const newCart = [...cart];

    if (existingItemIndex === -1) {
      newCart.push(item);
    } else {
      const existingItem = newCart[existingItemIndex];
      if (item.quantity === 0) {
        newCart.splice(existingItemIndex, 1);
      } else {
        newCart[existingItemIndex] = {
          ...existingItem,
          quantity: item.quantity,
        };
      }
    }

    setCart(newCart);
  }

  return (
    <div className={containerClass}>
      <Header subtotal={subtotal}></Header>
      <Outlet context={{ cart, handleCartChange, subtotal }} />
    </div>
  );
}

export default StorePages;
