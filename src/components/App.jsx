import '../styles/App.css';
import StorePages from '../components/StorePages.jsx';
// import Button from './Button';
// import CartButton from './CartButton';
// import {
//   StoreCardQuantityCounter,
//   CartCardQuantityCounter,
// } from './QuantityCounter';
// import SortDropdown from './SortDropdown';
// import FilterDropdown from './FilterDropdown';
// import StoreCard from './StoreCard';
// import CartCard from './CartCard';
// import CartSummary from './CartSummary';
// import Header from './Header';
// import Sidebar from './Sidebar';

function App() {
  const cart = [
    {
      id: 1,
      title: "Men's Jacket",
      price: 39.99,
      quantity: 2,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    },
    {
      id: 2,
      title: 'Old Piece of Meatloaf',
      price: 18.99,
      quantity: 1,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    },
    {
      id: 3,
      title: 'Blood of the Virgin Mary',
      price: 8.99,
      quantity: 3,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    },
  ];

  return (
    <>
      <StorePages></StorePages>
    </>
  );
}

export default App;
