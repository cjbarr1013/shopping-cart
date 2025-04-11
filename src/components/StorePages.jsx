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

  function handleCartChange(item, loc) {
    const existingItemIndex = cart.findIndex((i) => i.id === item.id);
    const newCart = [...cart];

    if (existingItemIndex === -1) {
      // If item is not in cart, add it
      newCart.push(item);
    } else {
      const existingItem = newCart[existingItemIndex];
      if (item.quantity === 0) {
        // If quantity is 0, remove item from cart
        newCart.splice(existingItemIndex, 1);
      } else {
        // If item is already in cart, update quantity
        // The value of quantity will depend on the location
        const newQuantity =
          loc === 'shop' ?
            existingItem.quantity + item.quantity
          : item.quantity;

        newCart[existingItemIndex] = {
          ...existingItem,
          quantity: newQuantity,
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
